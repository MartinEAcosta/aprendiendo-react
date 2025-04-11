const { response, request } = require("express");
const Event = require('../models/Event');

const getEventos = async( req , res = response ) => {
    try{
        const events = Event.find().all();

        return res.status(200).json({
            ok: true,
            events: events.obj,
            msg: 'getEventos',
        });
    }
    catch(error){
        return res.status(500).json({
            ok: false,
            msg: 'Hubo un error al obtener los eventos'
        });
    }
}

const crearEvento = async( req = request , res = response ) => {
    try{


        return res.status(201).json({
            ok: true,
            msg: 'El evento a sido creado con éxito'
        });
    }
    catch(error){
        return res.status(400).json({
            ok: false,
            msg: 'Chequee los campos e intente nuevamente'
        });
    }
}

const actualizarEvento = async( req = request , res = response ) => {
    console.log(req.params);
    try{
        
    }
    catch(error){
        return res.status(500).json({
            ok: false,
            msg: 'Hubo un error al actualizar el evento'
        });
    }
}

const eliminarEvento = async( req = request , res = response ) => {
    try{
        console.log(req.params);
        return res.status(200).json({
            ok: true,
            msg: `El evento con id ${req.params.id} ha sido eliminado`
        });
    }
    catch(error){
        return res.status(500).json({
            ok: false,
            msg: 'Hubo un error al eliminar el evento'
        });
    }
}

module.exports = {
    getEventos,
    crearEvento,
    actualizarEvento,
    eliminarEvento,
    
}