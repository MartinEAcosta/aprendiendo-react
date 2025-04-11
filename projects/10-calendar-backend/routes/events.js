/*

    Rutas de Eventos 
    host + /api/events

*/

const { Router } = require("express");
const { getEventos, crearEvento , actualizarEvento , eliminarEvento } = require("../controllers/events");
const { validarJWT } = require("../middlewares/validar-jwt");

const router = Router();

// Utiliza el middleware para todas las rutas

router.use( validarJWT );

router.get( '/' , getEventos );

router.post( '/' , crearEvento );

router.put( '/:id' , actualizarEvento );

router.delete( '/:id' , eliminarEvento );


module.exports = router;