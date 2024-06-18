const { User } = require("../../db");
const { Roles } = require("../../db");

const updateRol = async (req, res) => {
  try {
    const { rol } = req.body;
    const { id } = req.params;

    const user = await User.findByPk(id, {
      include: Roles,
    });
    const newRoles = await Roles.findOne({ where: { name: rol } });
    user.rolesId = newRoles.id;
    await user.save();
    console.log(user.Role.name);
    return res.send(user);
  } catch (error) {
    console.log(error);
  }
};

module.exports = updateRol;
