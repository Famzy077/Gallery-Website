const mongoose = require('mongoose')
const {Schema} = mongoose;

const productSchema = new Schema({
    id: {
        typeof: Number
    },
    product_1: {
        typeof: String
    },
    product_2: {
        typeof: String
    },
    price_1: {
        typeof: Number
    },
    price_2: {
        typeof: Number
    }
})

module.exports = mongoose.model('Product', productSchema)