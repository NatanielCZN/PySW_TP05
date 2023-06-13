const mongoose = require('mongoose');
const { Schema } = mongoose;

const EspectadorSchema = new Schema({
    apellido: { type: String, require: true },
    nombre: { type: String, require: true },
    dni: { type: String, require: true },
    email: { type: String, require: true },
})

module.exports = mongoose.models.Espectador || mongoose.model('Espectador', EspectadorSchema);
