const express = require('express')
const router = express.Router()
const Product = require('../models/Product')

// Getting all
router.get('/', async (req,res) => {
    try{
        const products = await Product.find()
        res.json(products)
    } catch (err) {
        res.status(500).json({ message: err.message })
    }
})

// Getting One
router.get('/:id', getProduct , (req,res) => {
    res.json(res.product)
})

// Creating One
router.post('/', async (req,res) => {
    const product = new Product({
        name: req.body.name,
        brandName: req.body.brandName,
        description: req.body.description,
        price: req.body.price,
        discount: req.body.discount,
        mainCategory: req.body.mainCategory,
        category: req.body.category,
    })

    try{
        const newProduct = await product.save()
        res.status(201).json(newProduct)
    } catch (err) {
        res.status(400).json({ message: err.message })
    }
})
// Updating One
router.patch('/:id', getProduct , async (req,res) => {
    if (req.body.name != null) {
        res.product.name = req.body.name
    }
    if (req.body.brandName != null) {
        res.product.brandName = req.body.brandName
    }
    if (req.body.description != null) {
        res.product.description = req.body.description
    }
    if (req.body.price != null) {
        res.product.price = req.body.price
    }
    if (req.body.discount != null) {
        res.product.discount = req.body.discount
    }
    if (req.body.mainCategory != null) {
        res.product.mainCategory = req.body.mainCategory
    }
    if (req.body.category != null) {
        res.product.category = req.body.category
    }
    try {
        const updatedProduct = await res.product.save()
        res.status(200).json(updatedProduct)
    } catch (err) {
        res.status(400).json({ message: err.message })
    }
})

// Deleting One
router.delete('/:id', getProduct , async (req,res) => {
    try{
        await res.product.remove()
        res.status(200).json({message: 'Deleted Product'})
    } catch (err) {
        res.status(500).json({message : err.message})
    }
})

async function getProduct (req, res, next) {
    let product
    try {
        product = await Product.findById(req.params.id)
        if ( product == null ) {
            return res.status(404).json({ message: 'Cannot find Product' })
        }
    } catch (err) {
        return res.status(500).json({ message : err.message})
    }

    res.product = product
    next()
}


module.exports = router