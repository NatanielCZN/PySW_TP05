// Defino controlador para el manejo de CRUD
const transaccionCtrl = require('./../controllers/transaccion.controller');

// Creamos el manejador de rutas
const express = require('express');
const router = express.Router();

// Definimos las rutas para la gestion de producto
router.get('/', transaccionCtrl.getTransacciones);
router.post('/', transaccionCtrl.createTransaccion);
router.get('/:emailCliente', transaccionCtrl.getTransaccionesDeCliente);
router.get('/monedaOrigen/:monedaOrigen/monedaDestino/:monedaDestino', transaccionCtrl.getTransaccionesOrigenDestino);

// Exportamos el modulo de rutas
module.exports = router;