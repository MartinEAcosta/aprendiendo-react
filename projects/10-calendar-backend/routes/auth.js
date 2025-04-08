/*

    Rutas de Usuarios / Auth
    host + /api/auth

*/

const { Router } = require('express');
const { check } = require('express-validator');
const { validarCampos } = require('../middlewares/validar-campos');
const { crearUsuario , loginUsuario , renovarToken } = require('../controllers/auth');

const router = Router();


router.post(
    '/new' ,
    [ //middleware : funcion que se ejecuta previamente
        check('name', 'El nombre es obligatorio').not().isEmpty(),
        check('email', 'El email es obligatorio').isEmail(),
        check('password', 'El password debe contener al menos 6 caracteres').isLength({ min : 6 }),
        validarCampos
    ] , 
    crearUsuario 
);

router.post(
    '/' , 
    [
        check('email', 'El email es obligatorio').isEmail(),
        check('password', 'El password debe contener al menos 6 caracteres').isLength({ min : 6 }),
        validarCampos
    ] ,
    loginUsuario 
);

router.get(
    '/renew' , 
    renovarToken 
);

// Exportación en Node.
module.exports = router;