const {Router} = require("express")
const userRoter = require("./userRoter")
const productRouter = require("./productRouter")
const managerRouter = require("./managerRouter")

const router = Router()

router.use("/user", userRoter)
router.use("/product", productRouter)
router.use("/manager", managerRouter)

module.exports = {router}