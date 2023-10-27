// app.mock.ts
import {Server} from 'miragejs';
import {productModels,userModels} from './data'; // Importez les données depuis data.ts

export default () => {

    new Server({
        seeds(server) {
            server.db.loadData({productModels,userModels});
        },

    routes() {
      this.namespace = 'api';
      // Route pour obtenir la liste des produits
        this.get('/products', (schema => schema.db['productModels']));
      // Route pour obtenir la liste des utilisateurs
      this.get('/users', (schema => schema.db['userModels']));

      // Route pour obtenir un produit par son ID
      this.get('/products/:id', (schema, request) => {
        const productId = request.params['id'];
        return schema.find('product', productId);
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
          // Gérer le cas où le produit est introuvable en renvoyant une réponse d'erreur
          return {error: 'Product not found'};
        }
      });
    },
  });
}

