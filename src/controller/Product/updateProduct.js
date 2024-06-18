const { Product } = require("../../db");

const updateProduct = async(req, res) => {
    const { id } = req.params
    const {price, name} = req.body
    if (!(price || name)) return res.status(201).json({message:"Falta información."}) 
    const updateProduct = await Product.update(
        req.body, {where:{id:id}}
    )
    return res.status(201).json({message:"El producto fue modificado con exito."})
    
}

module.exports = updateProduct