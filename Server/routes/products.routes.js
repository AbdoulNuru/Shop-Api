import Router from 'express';
import productController from '../controllers/productsController';
import auth from '../middleware/auth';

const routes = Router();

routes.get('/', (req, res)=>{
    res.send({
        message: "Welcome to Shop-Api"
    })
});
//routes.get('/api/v1/products', auth, productController.getAllProducts);

///routes.post('/api/v1/products', auth, productController.createNewProduct);

//routes.post('/api/v1/auth/login', userController.userLogin);                            

//routes.get('/api/v1/products/:id', auth, productController.getProductById);

//routes.patch('/api/v1/products/:id', productController.updateProduct);

//routes.delete('/api/v1/products/:id', productController.deleteProduct);

export default routes;
