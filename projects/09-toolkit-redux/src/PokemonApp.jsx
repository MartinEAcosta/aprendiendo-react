import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getPokemons } from './store/slices/pokemon';

export const PokemonApp = () => {

    const { page , pokemons , isLoading} = useSelector( ( state ) => state.pokemons )
    const dispatch = useDispatch();

    useEffect(() => {
      dispatch( getPokemons() );
    }, []);
    

    return (
        <>
            <h1>PokemonApp</h1>
            <hr />

            {isLoading 
                &&
            <span>Is Loading, please wait.</span>
            }


            <ul>
                {
                    pokemons.map( ( pokemon ) => {
                        return (
                            <>
                                <div key={pokemon.name}>
                                    <h2>{pokemon.name}</h2>
                                </div>
                            </>
                        );
                    })
                }
            </ul>

            <button 
                onClick={ () => dispatch( getPokemons(page) ) }
                >
                Next
            </button>
        </>


    )
}
