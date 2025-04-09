const express = require('express');
require('dotenv').config();
const { dbConnection } = require('./database/config')

// Crear servidor de express
const app = express();

// Base de datos
dbConnection();

// Escuchar peticiones

// Directorio publico
app.use( express.static( 'public' ) );

// Lectura y parseo del body
app.use( express.json() );

// Rutas
// Asocio el Path que se usara con la localización interna.
app.use('/api/auth' ,  require('./routes/auth') ) ;

app.listen( process.env.PORT , () => {
    console.log(`Servidor corriendo en puerto ${ process.env.PORT }`);
})