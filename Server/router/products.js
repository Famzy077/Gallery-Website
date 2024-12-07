const express = require('express');
const router = express.Router()
const Product = require('../schema/product')

router.post('/product', async(req, res)  => {
    const products = await Product.findOneById();
    res.status(200).json(products);
})