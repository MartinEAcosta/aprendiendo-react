/*

    Rutas de Usuarios / Auth
    host + /api/auth

*/

const { Router } = require('express');

const router = Router();

const { crearUsuario , loginUsuario , renovarToken } = require('../controllers/auth')

router.post('/new' , crearUsuario );


router.post('/' , loginUsuario );

router.get('/renew' , renovarToken );

// Exportación en Node.
module.exports = router;