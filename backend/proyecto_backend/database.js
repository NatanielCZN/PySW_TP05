const mongoose = require('mongoose');
const URI = 'mongodb://localhost/proyectodb';

// Comando de conexion a la base de datos
mongoose.connect(URI)
.then(db=>console.log('DB is connected'))
.catch(err=>console.error(err))
module.exports = mongoose;