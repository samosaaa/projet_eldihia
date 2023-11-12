// app.mock.ts
import {Server} from 'miragejs';
import {productModels, userData, users} from './data';
import {UserModel} from "../models/user"; // Importez les données depuis data.ts

export default () => {

    new Server({
        seeds(server) {
            server.db.loadData({productModels,users});
        },

    routes() {
      this.namespace = 'api';
      this.get('/products', (schema => schema.db['productModels']));
      this.get('/users', (schema => schema.db['users']));

      this.get('/products/:id', (schema, request) => {
        const productId = request.params['id'];
        return schema.find('product', productId);
      });

      this.post('/products', (schema, request) => {
        const attrs = JSON.parse(request.requestBody);
        return schema.create('product', attrs);
      });

      this.put('/products/:id', (schema, request) => {
        const productId = request.params['id'];
        const attrs = JSON.parse(request.requestBody);
        const product = schema.find('product', productId);
        if (product) {
          product.update(attrs);
          return product;
        } else {
          return {error: 'Product not found'};
        }
      });

      this.delete('/products/:id', (schema, request) => {
        const productId = request.params['id'];
        const product = schema.find('product', productId);

        if (product) {
          product.destroy();
          return null;
        } else {
          return {error: 'Product not found'};
        }
      });


      // USER CRUD \\

      this.post('/register', (schema, request) => {
        const user : UserModel = JSON.parse(request.requestBody);
        console.log(user);
        console.log(userData);
        schema.db['users'].insert(user);
        schema.db['userData'].insert(user);
        return user;
      });

      this.post('/login', (schema, request) => {
        const credentials = JSON.parse(request.requestBody);
        const users = schema.db['userModel'].where({ mail: credentials.mail, mdp: credentials.mdp });
        if (users.length === 1) {
          return { success: true, message: 'Authentification réussie' };
        } else {
          return { success: false, message: 'Authentification échouée' };
        }
      });
    },
  });
}

