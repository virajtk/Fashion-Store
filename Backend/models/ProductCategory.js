const mongoose = require('mongoose')

const productCategorySchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        unique: true
    },
    description: {
        type: String,
    }
})

module.exports = mongoose.model('ProductCategory', productCategorySchema)