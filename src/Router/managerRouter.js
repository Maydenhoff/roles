const {Router} = require("express")
const updateRol = require("../controller/user/updateRol")
const authMiddleware = require("../middleware/authMiddleware")
const checkUserType = require("../middleware/checkUserTypeMiddleware")
const validateUserMiddleware = require("../middleware/validateUserMiddleware")

const managerRouter = Router()

managerRouter.put("/updateRol/:id", validateUserMiddleware,authMiddleware, checkUserType("Manager"), updateRol)



module.exports = managerRouter