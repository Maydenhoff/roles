const {User} = require("../../db")
const jwt = require("jsonwebtoken")
require("dotenv").config()

const login = async(req, res) => {
    const {email, password} = req.body
    const findUser = await User.findOne({where:{email}})
    if(!findUser) return res.status(404).json({message:"No existe n usuario con ese email."})
    console.log(findUser);
    if (findUser.dataValues.password !== password ) return res.status(404).json({message: "La contraseña es incorrecta."})
    const accessToken = jwt.sign({id: findUser.dataValues.id}, process.env.SECRET, {expiresIn: "60m"})
    console.log(accessToken);
    res.header("authorization", accessToken).json({
        message: "Usuario autenticado",
        token: accessToken
    })
    // const accessToken = generateAccessToken(findUser,dataValues.id)
        // return res.stat
}

module.exports = login