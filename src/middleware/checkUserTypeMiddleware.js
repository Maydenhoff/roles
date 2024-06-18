const { User } = require("../db");
const { Roles } = require("../db");
const jwt = require("jsonwebtoken")
require("dotenv").config()

const checkUserType = (requeridRol) => {
  return async (req, res, next) => {
    const accessToken = req.headers["authorization"]
    if(!accessToken) return res.send("Access denied")
    
      try {
        const token= accessToken.split(" ")[1]
      const decoded = jwt.decode(token,process.env.SECRET)
        // console.log(decoded);
        const userId = decoded.id
      // console.log("ACA",req.header);

      const user = await User.findByPk(userId, {
        include: Roles,
      })
      // console.log("acaaa", user);
      if (!user) {
        return res.status(404).json({message: "Usuario no encontrado."})
      }
      // console.log(user.Role.name);
      if(user.Role.name !== requeridRol) {
        return res.status(403).json({message: "Permisos insuficientes"})
      }
      next()
    } catch (error) {
      console.log(error);
    }
  };
};

module.exports = checkUserType;
