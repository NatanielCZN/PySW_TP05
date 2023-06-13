const mongoose = require('mongoose');
const { Schema } = mongoose;

const ProductoSchema = new Schema({
    nombre: { type: String, require: true },
    descripcion: { type: String, require: true },
    imagen: { type: String, require: true },
    precio: { type: Number, require: true },
    stock: { type: Number, require: true },
    destacado: { type: Boolean, require: true }
})

module.exports = mongoose.models.Producto || mongoose.model('Producto', ProductoSchema);
