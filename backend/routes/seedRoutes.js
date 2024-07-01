import express from 'express';
import Product from '../models/productModel.js';
import data from '../data.js'
import User from '../models/userModel.js';

const seedRouter = express.Router();

seedRouter.get('/', async (req,res) => {
    await Product.deleteMany({});
    const createProducts = await Product.insertMany(data.products);
    
    await User.deleteMany({});
    const createdUsers = await User.insertMany(data.users);
    res.send({ createProducts, createdUsers });
}); 

export default seedRouter;

