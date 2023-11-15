import {Server} from 'miragejs';
import {productModels, users, reviews} from './data';
import {ProductModel} from "../models/product";

export default (): void => {

    new Server({
        seeds(server) {
            server.db.loadData({productModels, users, reviews});
        },

        routes() {
            this.namespace = 'api';
            // Product CRUD \\
            // Route pour obtenir la liste des produits
            this.get('/products', (schema => schema.db['productModels']));

            // Route pour obtenir un produit par son ID
            this.get('/products/:id', (schema, request) => {
                const productId = request.params['id'];
                const test: ProductModel = schema.db['productModels'].findBy({id: productId});
                return test;
            });


            // USERS CRUD \\

            // Route pour obtenir la liste des utilisateurs
            this.get('/users', (schema => schema.db['users']));


            this.post('/register', (schema, request) => {
                try {
                    const newUser = JSON.parse(request.requestBody);

                    // Pour vérifier si l'utilisateur existe déjà
                    const existingUser = users.find(user => user.mail === newUser.mail);

                    if (existingUser) {
                        alert('Cet utilisateur existe déjà. Veuillez choisir une autre adresse e-mail.');
                        return false;
                    }

                    if (!newUser.firstName || !newUser.lastName || !newUser.mail || !newUser.mdp || !newUser.role) {
                        alert('Les données de l\'utilisateur sont incomplètes.');
                    } else {
                        schema.db['users'].insert(newUser);
                        users.push(newUser);

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

            //Route pour récupérer commentaires
            this.get('/reviews', schema => schema.db['reviews'])
        }
    })
}

