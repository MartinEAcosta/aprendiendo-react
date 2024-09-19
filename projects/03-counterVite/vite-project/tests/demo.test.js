
describe('Pruebas en <DemoComponent />', () => {


    test('Esta prueba no debe de fallar' , () => {
        
        // Inicialización
        const message1 = 'Hola Mundo';

        // Estimulo
        const message2 = message1.trim(); //.trim quita los espacios adelante y al final.

        // Observar el resultado esperado

        expect( message1 ).toBe( message2 );
    });
});
