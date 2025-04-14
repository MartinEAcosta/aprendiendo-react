const { response, request } = require("express");
const Event = require('../models/Event');

const getEventos = async( req , res = response ) => {
    try{
        const events = await Event.find()
                                        .populate('user','name');

        return res.status(200).json({
            ok: true,
            events,
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

    const { title , notes , start , end , user } = req.body;

    try{

        if( title && start && end ) {

            const event = new Event( req.body );

            // console.log(event);

            await event.save();

            return res.status(201).json({
                ok: true,
                msg: 'El evento a sido creado con éxito',
                event,
            });
        }


    }
    catch(error){
        return res.status(400).json({
            ok: false,
            msg: 'Chequee los campos e intente nuevamente.'
        });
    }
}

const actualizarEvento = async( req = request , res = response ) => {

    const { id } = req.params;

    const { title , notes , start , end ,user  } = req.body;

    try{
        
        let event = await Event.findOneAndUpdate(   
                                                    { _id: id  }, 
                                                    { 'title' : title , 'notes' : notes , 'start' : start , 'end' : end , 'user' : user } , 
                                                    { new: true }
                                                );

        if( event ){
            return res.status(200).json({
                ok:true,
                msg: `El evento con id: ${ id } ha sido actualizado con éxito.`,
                event
            });
        }
    }
    catch(error){
        console.log(error);
        return res.status(500).json({
            ok: false,
            msg: 'Hubo un error al actualizar el evento'
        });
    }
}

const eliminarEvento = async( req = request , res = response ) => {

    const { id } = req.params;

    try{

        let event = await Event.findOne({ _id: id });

        if( event ){

            await Event.deleteOne({ _id : id });

            return res.status(202).json({
                ok: true,
                msg: `El evento con id ${ id } fue eliminado.`,
                event,
            });
        }
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