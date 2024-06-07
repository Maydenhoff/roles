const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define(
    "Product",
    {
      id: {
        type: DataTypes.UUID,
        allowNull: false,
        primaryKey: true,
        defaultValue: DataTypes.UUIDV4,
      },
      name: {
        type:DataTypes.STRING,
        // allowNull: false,
    },
    price: {
        type: DataTypes.INTEGER,
        // allowNull: false
    }
    },
    { timestamps: false }
  );
};
