const { Router } = require('express');

const { crearProducto, obtenerProductos,obtenerProductoPorId,actualizarProducto,eliminarProducto }  = require('../controllers/productController.js');
const { obtenerCarritoCompra,agregarProductoCarrito,eliminarProductoCarrito } = require('../controllers/carritoController.js');
const { obtenerCategorias, crearCategoria, obtenerCategoriaPorId, actualizarCategoria, eliminarCategoria } = require('../controllers/categoriaController.js');
//const autenticacionMiddleware = require('../middlewares/authToken.js');
const { createPaymentPreference, handlePaymentNotification, receiveWebhook } = require("../controllers/payamentController2.js")
const router = Router();

// Rutas de productos
 // Rutas relacionadas a productos
router.get('/producto', obtenerProductos);
router.post('/productoCrear', /*autenticacionMiddleware,*/ crearProducto);
router.get('/producto/:id', obtenerProductoPorId);
router.put('/producto/:id', /*autenticacionMiddleware,*/ actualizarProducto);
router.delete('/producto/:id', /*autenticacionMiddleware,*/ eliminarProducto);

// Rutas relacionadas al carrito de compra
router.get('/usuarios/:idUsuario/carrito', /*autenticacionMiddleware,*/ obtenerCarritoCompra);
router.post('/usuarios/:idUsuario/carritoCrear', /*autenticacionMiddleware,*/ agregarProductoCarrito); 
router.delete('/usuarios/:idUsuario/carrito/:idProducto', /*autenticacionMiddleware,*/ eliminarProductoCarrito);

// Rutas relacionadas a categorías
router.get('/categorias', obtenerCategorias);
router.post('/categoriasCrear', /*autenticacionMiddleware,*/ crearCategoria);
router.get('/categorias/:id', obtenerCategoriaPorId);
router.put('/categorias/:id', /*autenticacionMiddleware,*/ actualizarCategoria);
router.delete('/categorias/:id', /*autenticacionMiddleware,*/ eliminarCategoria);

// Rutas pagos 
router.post("/create-order", createPaymentPreference);
router.post('/payment-notification', handlePaymentNotification);
router.post("/webhook", receiveWebhook);
router.get("/success", (req, res) => res.send("Success"));
router.get("/pending", (req, res) => res.send("Pending"));
router.get("/failure", (req, res) => res.send("Failure"));

// Rutas de usuarios
//router.use(usuarioRoutes);
// Rutas del carrito de compra

module.exports = router;