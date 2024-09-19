import { render } from "@testing-library/react";
import { FirstApp } from "../src/FirstApp";

describe('Pruebas en <FirstApp />', () => {

    // test('debe de hacer match con el snapshot' , () => {

    //     const title = "Ejemplo";
    //     const { container } = render( <FirstApp title={ title } /> );
        
    //     expect( container ).toMatchSnapshot();


    // });

    test('debe de mostrar el titulo en un h1' , () => {

        const title = "Ejemplo";
        const { container, getByText, getByTestId } = render( <FirstApp title={ title } /> );
    
        expect( getByText(title) ).toBeTruthy();

        expect( getByTestId('test-title').innerHTML ).toContain( title );

        // No recomendado
        // const h1 = container.querySelector('h1');
        // expect( h1.innerHTML ).toBe( title );

    });

    test('debe de mostrar el subtitulo enviado por props', () => {

        const title = "Ejemplo";
        const subtitle = "Soy el subtitulo enviado por props"
        const { getByText } = render(
            <FirstApp 
                title={ title } 
                subTitle={ subtitle }
            /> 
        );
    
        expect( getAllText(subtitle) ).toBeTruthy();

    });
})