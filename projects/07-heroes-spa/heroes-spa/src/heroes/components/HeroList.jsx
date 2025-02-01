import { getHeroesByPublisher } from "../helpers"
import PropTypes from 'prop-types';

export const HeroList = ( { publisher } ) => {
  
    const heroes = getHeroesByPublisher( publisher );

    return (
        <>
            <ul>
                {
                    heroes.map( heroe => 
                        <li key={ heroe.id }>
                            {heroe.superhero}
                        </li>
                     )
                }
            </ul>
        </>
    )
}

HeroList.propTypes = {
    publisher : PropTypes.string,
}
