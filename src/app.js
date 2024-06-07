const express = require("express")
const morgan = require("morgan")
const {router} = require("./Router/Routes")


const app = express()

// app.get("/",(req,res)=> {
//     res.status(201).send("Hola")
// })
app.use(express.json())
app.use(morgan("dev"))
app.use(router)

module.exports = app