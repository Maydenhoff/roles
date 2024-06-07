const { User } = require("../db");
const { Type } = require("../db");

const checkUserType = (requeridType) => {
  return async (req, res, next) => {
    try {
      const { userId } = req.body;
      const user = await User.findByPk(userId, {
        include: Type,
      })
      if (!user) {
        res.status(404).json({message: "Usuario no encontrado."})
      }
      if(user.Type.dataValues.name !== requeridType) {
        res.status(403).json({message: "Permisos insuficientes"})
      }
      next()
    } catch (error) {
      console.log(error);
    }
  };
};

module.exports = checkUserType;
