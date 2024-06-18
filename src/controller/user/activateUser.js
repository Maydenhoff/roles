const { User } = require("../../db");

const activateUser = async (req, res) => {
  const { id } = req.params;
  const userFind = User.findByPk(id);
  if (!userFind) {
    return res.status(404).json({ message: "No se encontro el usuario." });
  }
  if (userFind.isValidation === true) {
    return res.status(404).json({ message: "El usuario ya esta habilitado." });
  }
  const userValidation = await User.update(
    {
      isValidation: true,
    },
    { where: { id: id } }
  );
  return res.status(200).json({ message: "Usuario validado con éxito." });
};

module.exports = { activateUser };
