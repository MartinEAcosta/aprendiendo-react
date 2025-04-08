/*

    Rutas de Usuarios / Auth
    host + /api/auth

*/

const { Router } = require('express');
const { check } = require('express-validator');

const router = Router();

const { crearUsuario , loginUsuario , renovarToken } = require('../controllers/auth');

router.post(
    '/new' ,
    [ //middleware : funcion que se ejecuta previamente
        check('name', 'El nombre es obligatorio').not().isEmpty(),
        check('email', 'El email es obligatorio').isEmail(),
        check('password', 'El password debe contener al menos 6 caracteres').isLength({ min : 6 }),
        

    ] , 
    crearUsuario 
);

router.post(
    '/' , 
    [
        check('email', 'El email es obligatorio').isEmail(),
        check('password', 'El password debe contener al menos 6 caracteres').isLength({ min : 6 }),
    ] ,
    loginUsuario 
);

router.get(
    '/renew' , 
    renovarToken 
);

// Exportación en Node.
module.exports = router;