/*

    Rutas de Eventos 
    host + /api/events

*/

const { Router } = require("express");
const { check } = require("express-validator");

const { getEventos, crearEvento , actualizarEvento , eliminarEvento } = require("../controllers/events");
const { validarJWT } = require("../middlewares/validar-jwt");
const { validarCampos } = require("../middlewares/validar-campos");
const { isDate } = require("../helpers/isDate");

const router = Router();

// Utiliza el middleware para todas las rutas

router.use( validarJWT );

router.get( '/' , getEventos );

router.post( '/' ,
    [
        check( 'title' , 'El titulo es obligatorio.'  ).not().isEmpty(),
        check( 'title' , 'El titulo es obligatorio.'  ).not().isEmpty(),
        check( 'start' , 'Fecha de incio es obligatoria' ).custom( isDate ) ,
        validarCampos,        

    ] ,
    crearEvento );

router.put( '/:id' , actualizarEvento );

router.delete( '/:id' , eliminarEvento );


module.exports = router;