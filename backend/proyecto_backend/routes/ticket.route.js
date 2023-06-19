// Defino controlador para el manejo de CRUD
const ticketCtrl = require('./../controllers/ticket.controller');

// Creamos el manejador de rutas
const express = require('express');
const router = express.Router();

// Definimos las rutas para la gestion de producto
router.get('/', ticketCtrl.getTickets);
router.get('/:_id', ticketCtrl.getTicket);
router.post('/', ticketCtrl.crearTicket);
router.delete('/:id', ticketCtrl.deleteTicket);
router.put('/:id', ticketCtrl.editTicket);
router.get('/categoria/:categoriaEspectador', ticketCtrl.getTicketsCategoria);

// Exportamos el modulo de rutas
module.exports = router;