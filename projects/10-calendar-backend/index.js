const express = require('express');
require('dotenv').config();

// Crear servidor de express
const app = express();

// Escuchar peticiones

// Directorio publico
app.use( express.static( 'public' ) );


// Rutas
// Asocio el Path que se usara con la localización interna.
app.use('/api/auth' ,  require('./routes/auth') ) ;

app.listen( process.env.PORT , () => {
    console.log(`Servidor corriendo en puerto ${ process.env.PORT }`);
})