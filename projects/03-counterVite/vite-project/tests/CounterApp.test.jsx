import { fireEvent, render, screen } from "@testing-library/react";
import { CounterApp } from "../src/CounterApp";

describe('Pruebas en <CounterApp />', () => {

    const inicial = 100;

    test('debe de hacer match con el snapshot' , () => {

        const { container } = render( <CounterApp /> );
        expect( container ).toMatchSnapshot();

    });

    test('debe de mostrar el valor inicial de 100', () => {

        

        render( <CounterApp value={ inicial }/> );
        expect( screen.getByText( inicial ) ).toBeTruthy();


    });

    test('debe de incrementar con el botón +1', () => {

        render( <CounterApp value={ inicial } />);
        fireEvent.click( screen.getByText('+1') );
        screen.debug();
        expect( screen.getByText( inicial + 1 ) ).toBeTruthy();
    });

    test('debe de incrementar con el botón -1', () => {

        render( <CounterApp value={ inicial } />);
        fireEvent.click( screen.getByText('-1') );
        screen.debug();
        expect( screen.getByText( inicial - 1 ) ).toBeTruthy();
    });

    test('debe de resetear al valor inicial' , () => {

        render( <CounterApp value={ inicial } /> );
        fireEvent.click( screen.getByText('+1') );
        fireEvent.click( screen.getByText('+1') );
        fireEvent.click( screen.getByText('+1') );

        fireEvent.click( screen.getByRole('button' , { name: 'btn-reset' }) );
        screen.debug();

        expect( screen.getByText( inicial ) ).toBeTruthy();


    })
})