import Router from 'express';

const routes = Router();

routes.get('/api/v1/orders', (req, res, next)=>{
    res.status(200).json({
        message: 'Orders were fetched'
    });
});

routes.post('/api/v1/orders', (req, res, next) => {
    const order = {
        productId: req.body.productId,
        quantity: req.body.quantity,

    };
    
    res.status(201).json({
        message: 'Order was created',
        order: order
    });
});

routes.get('/api/v1/orders/:orderId', (req, res, next) => {
    res.status(200).json({
        message: 'Order was created',
        orderId: req.params.orderId
    });
});

routes.delete('/api/v1/orders/:orderId', (req, res, next) => {
    res.status(200).json({
        message: 'Order deleted'
    });
});

export default routes;