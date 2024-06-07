const {Router} = require("express")
const createUser = require("../controller/user/createUser")

const userRoter = Router()

userRoter.post("/create", createUser)

module.exports = userRoter