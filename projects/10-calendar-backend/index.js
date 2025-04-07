const express = require('express');
require('dotenv').config();

// Crear servidor de express
const app = express();

// Escuchar peticiones

// Directorio publico
app.use( express.static( 'public' ) );


// Rutas
// app.get('/' , ( req , res ) => {

//     res.json({
//         ok: true,

//     });
// });

app.listen( process.env.PORT , () => {
    console.log(`Servidor corriendo en puerto ${ process.env.PORT }`);
})