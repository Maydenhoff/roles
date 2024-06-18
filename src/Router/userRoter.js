const {Router} = require("express")
const createUser = require("../controller/user/createUser")
const login = require("../controller/user/login")
const { User } = require("../db");
const { Roles } = require("../db");
const { activateUser } = require("../controller/user/activateUser");
const validateUserMiddleware = require("../middleware/validateUserMiddleware");
const userRoter = Router()

userRoter.post("/create", createUser)
userRoter.post("/login",login)
userRoter.put("/activate/:id", activateUser)

module.exports = userRoter