import PropTypes from 'prop-types';
import { HeroList } from '../components';

export const PublisherPage = ( { publisher } ) => {

    return (
        <>
            <h1> { publisher } </h1>
            <hr />

            <HeroList publisher={ publisher } />
        </>
    )
}

PublisherPage.propTypes = {
    publisher : PropTypes.string,
}

