const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define(
    "Roles",
    {
      id: {
        type: DataTypes.UUID,
        allowNull: false,
        primaryKey: true,
        defaultValue: DataTypes.UUIDV4,
      },
      name: {
        type:DataTypes.ENUM("Admin", "User", "Manager"),
        allowNull: false,
    },
    },
    { timestamps: false }
  );
};
