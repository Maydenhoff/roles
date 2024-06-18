const { User } = require("../../db");
const { Roles } = require("../../db");
const {sendEmailActivate} = require("../../config/mailer.js")
const createUser = async (req, res) => {
  try {
    const { email, password, rolName } = req.body;
    if (!(email, password, rolName)) {
      return res.status(404).json({ message: "Faltan datos." });
    }
    const findUser = await User.findOne({ where: { email } });
    if (findUser) {
      return res
        .status(404)
        .json({ message: "Ya existe un usuario registrado con este email." });
    }

    const rol = await Roles.findOrCreate({ where: { name: rolName } });

    const newUser = await User.create({
      email,
      password,
      rolesId: rol[0].dataValues.id,
    });
    sendEmailActivate(email)

    return res.status(201).send(newUser);
  } catch (error) {
    console.log(error);
  }
};

module.exports = createUser;
