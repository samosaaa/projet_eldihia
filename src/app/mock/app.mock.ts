// app.mock.ts
import {Server} from 'miragejs';
import {productModels, userData, users} from './data';
import {ProductModel} from "../models/product";
import {UserModel} from "../models/user";

export default () => {

  new Server({
    seeds(server) {
      server.db.loadData({productModels, users});
    },

    routes() {
      this.namespace = 'api';
      // Route pour obtenir la liste des produits
      this.get('/products', (schema => schema.db['productModels']));

      // Route pour obtenir un produit par son ID
      this.get('/products/:id', (schema, request) => {
        console.log("test");
        const productId = request.params['id'];
        console.log("tsetsets" + productId);
        console.log("fsfsrsr", schema.db['productModels'].findBy({id: '6'}).id);
        console.log("je suis dans le mock" + schema.db['productModels'].findBy({id: '6'}));
        const test: ProductModel = schema.db['productModels'].findBy({id: productId});
        console.log(test);
        return test;
      });

      // Route pour créer un nouveau produit (si nécessaire)
      this.post('/products', (schema, request) => {
        const attrs = JSON.parse(request.requestBody);
        return schema.create('product', attrs);
      });

      // Route pour mettre à jour un produit (si nécessaire)
      this.put('/products/:id', (schema, request) => {
        const productId = request.params['id'];
        const attrs = JSON.parse(request.requestBody);
        const product = schema.find('product', productId);
        if (product) {
          product.update(attrs);
          return product;
        } else {
          // Gérer le cas où le produit est introuvable
          return {error: 'Product not found'};
        }
      });

      // Route pour supprimer un produit (si nécessaire)
      this.delete('/products/:id', (schema, request) => {
        const productId = request.params['id'];
        const product = schema.find('product', productId);

        if (product) {
          product.destroy();
          return null; // Renvoyer une réponse sans contenu
        } else {
          return {error: 'Product not found'};
        }
      });


      // USERS CRUD \\

      // Route pour obtenir la liste des utilisateurs
      this.get('/users', (schema => schema.db['users']));


      this.post('/register', (schema, request) => {
        try {
          const newUser = JSON.parse(request.requestBody);

          // Vérifiez si l'utilisateur existe déjà
          const existingUser = users.find(user => user.mail === newUser.mail);

          if (existingUser) {
            alert('Cet utilisateur existe déjà. Veuillez choisir une autre adresse e-mail.' );
            return false;
          }

          if (!newUser.firstName || !newUser.lastName || !newUser.mail || !newUser.mdp || !newUser.role) {
            alert('Les données de l\'utilisateur sont incomplètes.');
          }else{
            schema.db['users'].insert(newUser);
            users.push(newUser);
            console.log('Inscription réussie :', newUser);

            return newUser;
          }

        } catch (error) {
          alert('Erreur lors de l\'inscription :');
        }
      });

      this.post('/login', (schema, request) => {
        const credentials = JSON.parse(request.requestBody);
        const users = schema.db['userModel'].where({mail: credentials.mail, mdp: credentials.mdp});
        if (users.length === 1) {
          return {success: true, message: 'Authentification réussie'};
        } else {
          return {success: false, message: 'Authentification échouée'};
        }
      });

    }
  })
}

