const {Router} = require("express")
const createProduct = require("../controller/Product/createProduct")
const checkUserType = require("../middleware/checkUserType ")

const productRouter = Router()

productRouter.post("/admin/create", checkUserType("Admin"), createProduct)

module.exports = productRouter