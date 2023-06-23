const Transaccion = require('../models/transaccion');
const transaccionCtrl = {}

/**
 * Recupera TODAS los Transacciones (GET) 
 * 
 * @param {*} req 
 * @param {*} res 
 */
transaccionCtrl.getTransacciones = async (req, res) => {
    var transacciones = await Transaccion.find();

    res.json(transacciones);
}

transaccionCtrl.getTransaccion = async (req, res) => {
    var transaccion = await Transaccion.findById(req.params._id);

    res.json(transaccion);
}

/**
 * Da de alta una Transaccion (POST)
 * 
 * @param {*} req 
 * @param {*} res 
 */
transaccionCtrl.createTransaccion = async (req, res) => {
    var transaccion = new Transaccion(req.body);
    
    try {
        await transaccion.save();

        res.json({
            'status': '1',
            'msg': 'Transaccion registrada.'
        })
    } catch (error) {
        res.status(400).json({
            'status': '0',
            'msg': 'Error al intentar registrar una Transaccion.'
        })
    }
}

/**
 * Recupera Transacciones de un Cliente (GET)
 * 
 * @param {*} req 
 * @param {*} res 
 */
transaccionCtrl.getTransaccionesDeCliente = async (req, res) => {
    var transacciones = await Transaccion.find({emailCliente: req.params.emailCliente});

    res.json(transacciones);
}

/**
 * Recupera TODAS las Transacciones de acuerdo a sus divisas(origen/destino) (GET)
 * 
 * @param {*} req 
 * @param {*} res 
 */
transaccionCtrl.getTransaccionesOrigenDestino = async (req, res) => {
    var transacciones = await Transaccion.find({monedaOrigen: req.params.monedaOrigen, monedaDestino: req.params.monedaDestino});

    res.json(transacciones);
}

module.exports = transaccionCtrl;
