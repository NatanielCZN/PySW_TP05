const Espectador = require('../models/espectador');
const espectadorCtrl = {}

/**
 * Recupera TODOS los Espectadores (GET) 
 * 
 * @param {*} req 
 * @param {*} res 
 */
espectadorCtrl.getEspectadores = async (req, res) => {
    var espectadores = await Espectador.find();

    res.json(espectadores);
}

/**
 * Recupera UN Espectador, de acuerdo a su ID (GET)
 * 
 * @param {*} req 
 * @param {*} res 
 */
espectadorCtrl.getEspectadorPorID = async (req, res) => {
    var espectador = await Espectador.find({_id: req.params._id});

    res.json(espectador);
}


/**
 * Da de alta una Espectador (POST)
 * 
 * @param {*} req 
 * @param {*} res 
 */
espectadorCtrl.createEspectador = async (req, res) => {
    var espectador = new Espectador(req.body);
    
    try {
        await espectador.save();

        res.json({
            'status': '1',
            'msg': 'Espectador registrado.'
        })
    } catch (error) {
        res.status(400).json({
            'status': '0',
            'msg': 'Error al intentar registrar un Espectador.'
        })
    }
}

module.exports = espectadorCtrl;
