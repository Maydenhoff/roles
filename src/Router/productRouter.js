const {Router} = require("express")
const createProduct = require("../controller/Product/createProduct")
const checkUserType = require("../middleware/checkUserTypeMiddleware")
const authMiddleware = require("../middleware/authMiddleware")
const updateProduct = require("../controller/Product/updateProduct")
const validateUserMiddleware = require("../middleware/validateUserMiddleware")

const productRouter = Router()

productRouter.post("/admin/create",validateUserMiddleware,authMiddleware, checkUserType("Admin"), createProduct)
productRouter.put("/admin/update/:id", updateProduct)

module.exports = productRouter