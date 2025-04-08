const { response } = require('express');

const crearUsuario = ( req , res = response ) => {

    res.json({
        ok: true,
        msg: 'registro',
    });
};

const loginUsuario = ( req , res = response ) => {

    res.json({
        ok: true,
        msg: 'login',
    });
}

const renovarToken = ( req , res  = response ) => {

    res.json({
        ok: true,
        msg: 'reload token',
    })
}

module.exports = {
    crearUsuario,
    loginUsuario,
    renovarToken,


}