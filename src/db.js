// require("dotenv").config();
const { Sequelize } = require("sequelize");

const fs = require('fs');
const path = require('path');
// const {
//   DATA_BASE_URL
// } = process.env;
const sequelize = new Sequelize(`postgresql://postgres:postgres@localhost:5433/red`, {
  // const sequelize = new Sequelize(`postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/drivers`, {
  logging: false, 
  native: false, 
});
const basename = path.basename(__filename);

const modelDefiners = [];

fs.readdirSync(path.join(__dirname, '/models'))
  .filter((file) => (file.indexOf('.') !== 0) && (file !== basename) && (file.slice(-3) === '.js'))
  .forEach((file) => {
    modelDefiners.push(require(path.join(__dirname, '/models', file)));
  });


modelDefiners.forEach(model => model(sequelize));

let entries = Object.entries(sequelize.models);
let capsEntries = entries.map((entry) => [entry[0][0].toUpperCase() + entry[0].slice(1), entry[1]]);
sequelize.models = Object.fromEntries(capsEntries);

const { User, Type, Product } = sequelize.models;

Type.hasMany(User, { foreignKey: 'typeId',  sourceKey: 'id' });
User.belongsTo(Type, { foreignKey: 'typeId', targetKey: 'id' });

// User.hasMany(Posts, { as: 'posts', foreignKey: 'userId' });
// Posts.belongsTo(User, { as: 'user', foreignKey: 'userId' });

// Aca vendrian las relaciones
// Product.hasMany(Reviews);

// Driver.belongsToMany(Team, {through: "driver_team"})
// Team.belongsToMany(Driver, {through: "driver_team"})

module.exports = {
  ...sequelize.models, // para poder importar los modelos así: const { Product, User } = require('./db.js');
  conn: sequelize,     // para importart la conexión { conn } = require('./db.js');
};