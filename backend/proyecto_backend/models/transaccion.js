const mongoose = require('mongoose');
const { Schema } = mongoose;

const TransaccionSchema = new Schema({
    monedaOrigen: { type: String, require: true },
    cantidadOrigen: { type: Number, require: true },
    monedaDestino: { type: String, require: true },
    cantidadDestino: { type: Number, require: true },
    emailCliente: { type: String, require: true },
    tasaConversion: { type: Number, require: true }
})

module.exports = mongoose.models.Transaccion || mongoose.model('Transaccion', TransaccionSchema);
