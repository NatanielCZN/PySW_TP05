// Defino controlador para el manejo de CRUD
const productoCtrl = require('./../controllers/producto.controller');

// Creamos el manejador de rutas
const express = require('express');
const router = express.Router();

// Definimos las rutas para la gestion de producto
router.get('/', productoCtrl.getProductos);
router.post('/', productoCtrl.createProducto);
router.put('/:id', productoCtrl.editProducto);
router.delete('/:id', productoCtrl.deleteProducto);
router.get('/destacados', productoCtrl.getProductosDestacados);

// Exportamos el modulo de rutas
module.exports = router;