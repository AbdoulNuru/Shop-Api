

class productController {
    /*static createNewProduct(req, res) {
        const today = new Date();
        const prod = {
            id: products.length + 1,
            name: req.body.name,
            price: req.body.price,
            date: today.getDate()+'-'+(today.getMonth()+1)+'-'+today.getFullYear()
        };

        if(prod.name && prod.price){
            products.push(prod);

            res.status(201).json({
                success: true,
                message: 'Product created successfully',
                Product: prod,
                request: {
                    method: 'Get',
                    url: 'http://localhost:3000/api/v1/student/' + prod.id
                }
            });
        }else{
            res.status(401).json({
                success: false,
                message: 'Invalid order creation'
            });
        }
    }

    static getAllProducts(req, res){
        res.status(200).json({
            success: true,
            message: 'All products retrieved successfully',
            products
        });
    }

    static updateProduct(req, res){
        const prodId = parseInt(req.params.id, 10);
        const updatedProd = req.body;

        for (let product of products){
            if(product.id === prodId){
                if(updatedProd.name != null || undefined)
                    product.name = updatedProd.name;

                if(updatedProd.price != null || undefined)
                     product.price = updatedProd.price;
                
                return res.status(200).json({
                    success: true,
                    message: 'Product updated successfully',
                    product
                });
            }
        }

        res.status(404).json({
            success: false,
            message: 'Invalid product Id'
        });
    }

    static getProductById(req, res){
        const productId = parseInt(req.params.id, 10);
        const item = products.find(_item => _item.id === productId);

        if (item) {
            res.status(200).json({
                success: true,
                message: 'Product retrieved succesfully',
                item
            });
        } else {
            res.status(404).json({
                message: `item ${productId} doesn't exist`,
                success: false
            });
        }  
    }

    static deleteProduct(req, res){
        const productId = parseInt(req.params.id, 10);
        for (let product of products){
            if (product.id === productId){
                console.log(product);
                products.splice(products.indexOf(product), 1);
                return res.status(200).json({
                    success: true,
                    message: 'Product deleted successfully'
                });
            }
        }

        res.status(404).json({
            success: false,
            message: 'Invalid product Id'
        });
    }*/
}

export default productController;