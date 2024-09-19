import React from 'react';
//Herramienta utilizada para renderizar, al ser web. ReactDom
import ReactDOM from 'react-dom/client';

// import { HelloWorldApp } from './HelloWorldApp';
// import { FirstApp } from './FirstApp';
//import App from './HelloWorldApp';

import './styles.css';
import { CounterApp } from './CounterApp';


//Forma de renderizar el componente
ReactDOM.createRoot( document.getElementById('root') ).render(
    <React.StrictMode>
        {/* <FirstApp title="Soy un titulito"/> */}
        {/* <HelloWorldApp /> */}
        {/* Envio el valor numerico al componente funcional */}
        <CounterApp value={3} />
    </React.StrictMode>
);




