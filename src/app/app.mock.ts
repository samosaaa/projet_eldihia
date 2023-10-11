// app.mock.ts
import { Server, Model } from 'miragejs';

export function makeServer() {
  let server = new Server({
    models: {
      product: Model,
      favorite: Model,
    },
    routes() {
      this.namespace = 'api';

      this.get('/products', (schema) => {
        return schema.all('product');
      });

      this.get('/favorites', (schema) => {
        return schema.all('favorite');
      });

      this.post('/favorites', (schema, request) => {
        let attrs = JSON.parse(request.requestBody);
        let favorite = schema.create('favorite', attrs);

        return favorite;
      });
    },
    seeds(server) {
      // @ts-ignore
      server.create('product', { name: 'Robe 1', price: 50 });
      // @ts-ignore
      server.create('product', { name: 'Robe 2', price: 65 });
      // Ajoutez d'autres produits si nécessaire
    },
  });

  return server;
}
