const mongoose = require('mongoose');
const espectador = require('./espectador');
const { Schema } = mongoose;

const TicketSchema = new Schema({
    precioTicket: { type: Number, require: true },
    categoriaEspectador: { type: String, require: true },
    fechaCompra: { type: String, require: true },
    espectador: { type: Schema.Types.ObjectId, ref: espectador, require: true },
})

module.exports = mongoose.models.Ticket || mongoose.model('Ticket', TicketSchema);