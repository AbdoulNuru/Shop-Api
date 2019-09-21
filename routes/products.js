import Router from 'express';
import productController from '../controllers/productsController';
import userController from '../controllers/userController';
import validation from '../middleware/userValidation';

const routes = Router();

routes.get('/api/v1/products', productController.getAllProducts);

routes.post('/api/v1/products', productController.createNewProduct);

routes.post('/api/v1/auth',
            validation.checkFirstName, validation.checkLastName, 
            validation.checkEmail, validation.checkGender, 
            validation.checkJobRole, validation.checkDepart, 
            userController.userSignUp);

routes.get('/api/v1/products/:id', productController.getProductById);

routes.patch('/api/v1/products/:id', productController.updateProduct);

routes.delete('/api/v1/products/:id', productController.deleteProduct);

export default routes;
