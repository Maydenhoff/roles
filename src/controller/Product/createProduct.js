const { Product } = require("../../db");

const createProduct = async(req, res) => {
    const {name, price} = req.body
    const product = await Product.create({name, price})
    res.status(201).json(product)
}

module.exports = createProduct