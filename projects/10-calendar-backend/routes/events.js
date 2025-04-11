const { Router } = require("express");
const { getEventos, crearEvento , actualizarEvento , eliminarEvento } = require("../controllers/events");

const router = Router();

router.get( '/' , getEventos );

router.post( '/' , crearEvento );

router.put( '/:id' , actualizarEvento );

router.delete( '/:id' , eliminarEvento );


module.exports = router;