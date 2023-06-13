const Producto = require('../models/producto');
const productoCtrl = {}

/**
 * Recupera TODOS los Productos (GET) 
 * 
 * @param {*} req 
 * @param {*} res 
 */
productoCtrl.getProductos = async (req, res) => {
    var productos = await Producto.find(); // Todos los productos de la BDD. El "await" funciona como el "suscribe" del fronend, de forma asincrona

    res.json(productos);
}

/**
 * Da de alta un Producto (POST)
 * 
 * @param {*} req 
 * @param {*} res 
 */
productoCtrl.createProducto = async (req, res) => {
    var producto = new Producto(req.body);
    
    try {
        await producto.save();

        res.status(200).json({  // El "status(200)" se coloca de forma implicita si no se coloca
            'status': '1',
            'msg': 'Producto guardado.'
        })
    } catch (error) {
        res.status(400).json({
            'status': '0',
            'msg': 'Error al intentar crear un Producto.'
        })
    }
}

/**
 * Modifica un Producto (PUT)
 * 
 * @param {*} req 
 * @param {*} res 
 */
productoCtrl.editProducto = async (req, res) => {
    const producto = new Producto(req.body);

    try {
        await Producto.updateOne({ _id: req.body._id }, producto);

        res.json({
            'status': '1',
            'msg': 'Producto updated'
        })
    } catch (error) {
        res.status(400).json({
            'status': '0',
            'msg': 'Error al intentar modificar un Producto'
        })
    }
}

/**
 * Elimina un Producto (DELETE)
 * 
 * @param {*} req 
 * @param {*} res 
 */
productoCtrl.deleteProducto = async (req, res) => {
    try {
        await Producto.deleteOne({ _id: req.params.id });
        
        res.json({
            status: '1',
            msg: 'Agente removed'
        })
    } catch (error) {
        res.status(400).json({
            'status': '0',
            'msg': 'Error al intentar eliminar un Producto'
        })
    }
}

/**
 * Recupera los Productos DESTACADOS (GET)
 * 
 * @param {*} req 
 * @param {*} res 
 */
productoCtrl.getProductosDestacados = async (req, res) => {
    var productos = await Producto.find({ destacado: true });

    res.json(productos);
}

module.exports = productoCtrl;
