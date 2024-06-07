const {Router} = require("express")
const userRoter = require("./userRoter")
const productRouter = require("./productRouter")

const router = Router()

router.use("/user", userRoter)
router.use("/product", productRouter)

module.exports = {router}