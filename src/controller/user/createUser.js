const { User } = require("../../db");
const { Type } = require("../../db");

const createUser = async (req, res) => {
  try {
    console.log(req.body);
    const { email, password, typeName } = req.body;
    if (!(email, password, typeName)) {
      return res.status(404).json({ message: "Faltan datos." });
    }
    const findUser = await User.findOne({ where: { email } });
    if (findUser) {
      return res
        .status(404)
        .json({ message: "Ya existe un usuario registrado con este email." });
    }

    const type = await Type.findOrCreate({ where: { name: typeName } });

    const newUser = await User.create({
      email,
      password,
      typeId: type[0].dataValues.id,
    });

    // res.status(201).send("Usuario creado con exito.");
    return res.status(201).send(newUser);
  } catch (error) {
    console.log(error);
  }
};

module.exports = createUser;
