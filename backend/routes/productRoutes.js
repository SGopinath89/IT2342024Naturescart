import express from 'express';
import Product from '../models/productModel.js';
import expressAsyncHandler from 'express-async-handler';

const productRouter = express.Router();

/* productRouter.get('/',async (req,res)=>{
    const products = await Product.find();
    res.send(products);
}); */

productRouter.get('/', async (req, res) => {
    try {
      const products = await Product.find();
      console.log('Fetched products:', products); 
      res.send(products);
    } catch (error) {
      console.error('Error fetching products:', error); 
      res.status(500).send({ message: 'Error in fetching products' });
    }
});

productRouter.get(
    '/categories',
    expressAsyncHandler(async(req,res) => {
        const categories = await Product.find().distinct('category');
        res.send(categories);
    })
);  

productRouter.get('/slug/:slug', async (req,res) =>{
    const product = await Product.findOne({ slug: req.params.slug });
    if (product) {
        res.send(product);
    } else{
        res.status(404). send({message: 'Product not found '});
    }
});

productRouter.get('/:id', async (req,res) =>{
    const product = await Product.findById(req.params.id);
    if (product) {
        res.send(product);
    } else {
        res.status(404).send({message : 'Product Not found'});
    }
});

export default productRouter;