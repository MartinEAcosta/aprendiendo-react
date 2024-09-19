import { useState } from 'react';
import PropTypes from 'prop-types';

// Recibe la prop desestructurada, que caso de venir 
// No definida se mostrara 0.
export const CounterApp = ( {value = 0} ) => {

    const [ counter, setCounter ] = useState( value );
    
    const handleAdd = () =>{
        // setCounter(counter + 1)
        
        setCounter( counter + 1 );
    } 

    const handleSubstract = () => {
        setCounter( counter - 1 );
    }

    const handleReset = () => {
        setCounter( value );
    }

    return (
        <>
            <h1>CounterApp</h1>
            {/* Forma de representar las variables */}
            <h2> { counter } </h2>
            <button onClick={ handleAdd }>
                +1
            </button>
            <button onClick={ handleSubstract }>
                -1
            </button>
            <button aria-label='btn-reset' onClick={ handleReset }>
                Reset
            </button>
        </>
    );
};
//propTypes key sensitive
CounterApp.propTypes = {
    value: PropTypes.number,
};
