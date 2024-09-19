import PropTypes from 'prop-types';

export const FirstApp = ( { title = "No hay titulo", subTitle = "No hay subtitulo" , name = "Martin" } ) => {


    return (
        <>
            <h1 data-testid="test-title">{ title }</h1>
            <p>{ subTitle }</p>
            <p>{ subTitle }</p>

            {/* <code> { JSON.stringify( newMessage ) } </code> */}
            <h3>{ name }</h3>
            {/* <p>Soy un subtitulo.</p> */}
        </>
    );
};

FirstApp.propTypes = {
    title: PropTypes.string.isRequired,
    subTitle: PropTypes.string,
    name: PropTypes.string,
}