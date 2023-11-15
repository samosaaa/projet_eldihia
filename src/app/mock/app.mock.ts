import {Server} from 'miragejs';
import {productModels, users,reviews} from './data';
import {ProductModel} from "../models/product";

export default (): void => {

    new Server({
        seeds(server) {
            server.db.loadData({productModels, users,reviews});
        },

        routes() {
            this.namespace = 'api';
            // Route pour obtenir la liste des produits
            this.get('/products', (schema => schema.db['productModels']));

            // Route pour obtenir un produit par son ID
            this.get('/products/:id', (schema, request) => {
                const productId = request.params['id'];
                const test: ProductModel = schema.db['productModels'].findBy({id: productId});
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


            this.post('/admin/products', (schema, request) => {
                const attrs = JSON.parse(request.requestBody);
                const product = schema.create('product', attrs);
                return product;
            });

            this.put('/admin/products/:id', (schema, request) => {
                const productId = request.params['id'];
                const attrs = JSON.parse(request.requestBody);
                const product = schema.db['productModels'].findBy({id: productId});
                if (product) {
                    product.update(attrs);
                    return product;
                } else {
                    return {error: 'Product not found'};
                }
            });

            this.delete('/admin/products/:id', (schema, request) => {
                const productId = request.params['id'];
                const product = schema.db['productModels'].findBy({id: productId});
                if (product) {
                    product.destroy();
                    return null; // Renvoyer une réponse sans contenu
                } else {
                    return {error: 'Product not found'};
                }
            });

            // Ajoutez une route pour l'incrémentation du stock
            this.put('/products/increment/:id', (schema, request) => {
                const productId = request.params['id'];
                const product = schema.db['productModels'].findBy({id: productId});

                if (product) {
                    product.stock += 1;
                    return product;
                } else {
                    return {error: 'Product not found'};
                }
            });


            // Ajoutez une route pour la décrémentation du stock
            this.put('/products/decrement/:id', (schema, request) => {
                const productId = request.params['id'];
                const product = schema.db['productModels'].findBy({id: productId});

                if (product && product.stock > 0) {
                    product.stock -= 1;
                    return product;
                } else {
                    return {error: 'Product not found or stock is already at zero'};
                }
            });

            //Route pour commentaires
            this.get('/reviews',schema=>schema.db['reviews'])
            this.get('/reviews/:id',(schema,request)=>{
                const productId:string = request.params['id'];
                const productFind: ProductModel = schema.db['productModels'].findBy({id: productId});
                return schema.db['reviews'].where({productId:productFind.id})
            });

            this.get('/reviews/user/:firstName',(schema,request)=>{
                const userFind:string = request.params['firstName'];
                return schema.db['reviews'].where({user:userFind})
            });

            this.post('/reviews',(schema,request)=>{
                const review:string = JSON.parse(request.requestBody);
                return schema.db['reviews'].insert(review);
            });

            this.put('/reviews/:idReviews',(schema,request)=>{
                const reviewId:string = request.params['id'];
                const newReview = JSON.parse(request.requestBody);
                const reviewFind = schema.db['reviews'].findBy({id: reviewId});
                if (reviewFind) {
                    // Mettez à jour les propriétés de l'avis avec les nouvelles valeurs
                    reviewFind.update(newReview);
                    return reviewFind;
                } else {
                    return { error: 'Review not found' };
                }

            });

        }
    })
}

