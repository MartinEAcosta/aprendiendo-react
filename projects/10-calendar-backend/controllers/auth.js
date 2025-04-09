const { response } = require('express');
const Usuario = require('../models/Usuario')


const crearUsuario = async( req , res = response ) => {

    const { email , password } = req.body;

    try{
        let usuario = await Usuario.findOne( { email } );
        
        if( usuario ) {
            return res.status(400).json({
                ok: false,
                msg: 'El email asociado ya se encuentra registrado.'
                
            });
        }

        usuario = new Usuario( req.body );

        await usuario.save();
        

        return res.status(201).json({
            ok: true,
            msg: 'registro',
        });
    }
    catch(error){
        console.log(error);
        res.status(500).json({
            ok:false,
            msg: 'Hubo un error en la creación del Usuario.'
        })
        throw new Error('Hubo un error en la creación del Usuario.');
    }
};

const loginUsuario = ( req , res = response ) => {

    const { email , password } = req.body;



    res.json({
        ok: true,
        msg: 'login',
        email,
        password,
    });
};

const renovarToken = ( req , res  = response ) => {


    res.json({
        ok: true,
        msg: 'reload token',
    })
};

module.exports = {
    crearUsuario,
    loginUsuario,
    renovarToken,


};