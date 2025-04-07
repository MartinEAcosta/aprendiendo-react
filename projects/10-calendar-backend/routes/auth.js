/*

    Rutas de Usuarios / Auth
    host + /api/auth

*/

const { Router } = require('express');

const router = Router();

router.get('/', ( req , res ) => {

    res.json({
        ok:true
    })
});

// Exportación en Node.
module.exports = router;