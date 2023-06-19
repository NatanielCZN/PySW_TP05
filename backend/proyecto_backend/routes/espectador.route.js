// Defino controlador para el manejo de CRUD
const espectadorCtrl = require('./../controllers/espectador.controller');

// Creamos el manejador de rutas
const express = require('express');
const router = express.Router();

// Definimos las rutas para la gestion de producto
router.get('/', espectadorCtrl.getEspectadores);
router.get('/:_id', espectadorCtrl.getEspectadorPorID);
router.post('/', espectadorCtrl.createEspectador);

// Exportamos el modulo de rutas
module.exports = router;