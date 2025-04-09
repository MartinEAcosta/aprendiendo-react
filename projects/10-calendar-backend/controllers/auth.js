const { response } = require('express');
const bcrypt = require('bcryptjs');
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

        const salt = bcrypt.genSaltSync( );

        usuario.password = bcrypt.hashSync( password , salt );

        await usuario.save();
        
        return res.status(201).json({
            ok: true,
            uid: usuario.id,
            name: usuario.name,
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

const loginUsuario = async( req , res = response ) => {

    const { email , password } = req.body;

    try{

        let usuario = await Usuario.findOne({ email });

        console.log(usuario);
        if ( usuario ){

            const isPasswordLegit = bcrypt.compareSync( password , usuario.password  );

            if( isPasswordLegit ){ 
                return res.status(200).json({
                    ok: true,
                    msg: 'Logeado con exito',
                    uid: usuario.id,
                    name: usuario.name,
                });
            }

        }

        return res.status(400).json({
            ok: false,
            msg: 'Chequea las credenciales e intente nuevamente.'
        });
    }
    catch(error){
        return res.status(500).json({
            ok: false,
            msg: error,
        });
    }
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