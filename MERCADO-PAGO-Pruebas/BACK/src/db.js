// require("dotenv").config();
// const { Sequelize } = require("sequelize");
// const fs = require("fs");
// const path = require("path");
// const { DB_USER, DB_PASSWORD, DB_HOST,DB_PORT,DB_NAME,DB_URL } = process.env;

// let sequelize =
//   process.env.NODE_ENV === "production"
//     ? new Sequelize({
//         database: DB_NAME,
//         dialect: "postgres",
//         host: DB_HOST,
//         port: DB_PORT,
//         username: DB_USER,
//         password: DB_PASSWORD,
//         pool: {
//           max: 3,
//           min: 1,
//           idle: 10000,
//         },
//         dialectOptions: {
//           ssl: {
//             require: true,
//             // Ref.: https://github.com/brianc/node-postgres/issues/2009
//             rejectUnauthorized: false,
//           },
//           keepAlive: true,
//         },
//         ssl: true,
//       })
//     : new Sequelize(DB_URL, { logging: false, native: false });


// // const sequelize = new Sequelize(
// //   `postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/${DB_NAME}`,
// //   {
// //     logging: false, // set to console.log to see the raw SQL queries
// //     native: false, // lets Sequelize know we can use pg-native for ~30% more speed
// //   }
// // );
// const basename = path.basename(__filename);

// const modelDefiners = [];

// // Leemos todos los archivos de la carpeta Models, los requerimos y agregamos al arreglo modelDefiners
// fs.readdirSync(path.join(__dirname, "/models"))
//   .filter(
//     (file) =>
//       file.indexOf(".") !== 0 && file !== basename && file.slice(-3) === ".js"
//   )
//   .forEach((file) => {
//     modelDefiners.push(require(path.join(__dirname, "/models", file)));
//   });

// // Injectamos la conexion (sequelize) a todos los modelos
// modelDefiners.forEach((model) => model(sequelize));
// // Capitalizamos los nombres de los modelos ie: product => Product
// let entries = Object.entries(sequelize.models);
// let capsEntries = entries.map((entry) => [
//   entry[0][0].toUpperCase() + entry[0].slice(1),
//   entry[1],
// ]);
// sequelize.models = Object.fromEntries(capsEntries);

// // En sequelize.models están todos los modelos importados como propiedades
// // Para relacionarlos hacemos un destructuring
// const {  carroCompra, Categoria, Ordencompra, Usuario,  Producto, Fotoprod  } = sequelize.models; 

// // Aca vendrian las relaciones


// carroCompra.belongsTo(Usuario); // Un carrito de compras pertenece a un usuario
// Usuario.hasOne(carroCompra); // Un usuario puede tener un carrito de compras

// carroCompra.belongsToMany(Producto, { through: 'prod_carro' }); // Un carrito de compras puede tener múltiples productos
// Producto.belongsToMany(carroCompra, { through: 'prod_carro' }); // Un producto puede estar presente en varios carritos de compras


// Ordencompra.belongsTo(Usuario); // Una orden de compra pertenece a un usuario
// Usuario.hasMany(Ordencompra); // Un usuario puede realizar múltiples órdenes de compra

// Ordencompra.belongsToMany(Producto, { through: 'prodxoc' }); // Una orden de compra puede contener varios productos
// Producto.belongsToMany(Ordencompra, { through: 'prodxoc' }); // Un producto puede estar presente en varias órdenes de compra





// // Model.belongsToMany(otherModel, { through: 'activities_countries' });

// module.exports = {
//   ...sequelize.models, // para poder importar los modelos así: const { Product, User } = require('./db.js');
//   conn: sequelize, // para importart la conexión { conn } = require('./db.js');
// };

require("dotenv").config();
const { Sequelize } = require("sequelize");
const fs = require("fs");
const path = require("path");
const { DB_USER, DB_PASSWORD, DB_HOST, DB_PORT, DB_NAME, DB_URL } = process.env;

let sequelize = new Sequelize(DB_URL, {
  logging: false,
  native: false,
});

const basename = path.basename(__filename);
const modelDefiners = [];

fs.readdirSync(path.join(__dirname, "models"))
  .filter(
    (file) =>
      file.indexOf(".") !== 0 && file !== basename && file.slice(-3) === ".js"
  )
  .forEach((file) => {
    const model = require(path.join(__dirname, "models", file));
    modelDefiners.push(model);
  });

modelDefiners.forEach((model) => model(sequelize));

let entries = Object.entries(sequelize.models);
let capsEntries = entries.map((entry) => [
  entry[0][0].toUpperCase() + entry[0].slice(1),
  entry[1],
]);
sequelize.models = Object.fromEntries(capsEntries);

const { CarroCompra, Categoria, OrdenCompra, Usuario, Producto, FotoProd } =
  sequelize.models;

// Aquí debes asegurarte de que los nombres de los modelos coincidan exactamente con los nombres de los modelos definidos en los archivos correspondientes.

CarroCompra.belongsTo(Usuario); // Un carrito de compras pertenece a un usuario
Usuario.hasOne(CarroCompra); // Un usuario puede tener un carrito de compras

CarroCompra.belongsToMany(Producto, { through: "prod_carro" }); // Un carrito de compras puede tener múltiples productos
Producto.belongsToMany(CarroCompra, { through: "prod_carro" }); // Un producto puede estar presente en varios carritos de compras

OrdenCompra.belongsTo(Usuario); // Una orden de compra pertenece a un usuario
Usuario.hasMany(OrdenCompra); // Un usuario puede realizar múltiples órdenes de compra

OrdenCompra.belongsToMany(Producto, { through: "prodxoc" }); // Una orden de compra puede contener varios productos
Producto.belongsToMany(OrdenCompra, { through: "prodxoc" }); // Un producto puede estar presente en varias órdenes de compra

module.exports = {
  ...sequelize.models,
  conn: sequelize,
};
