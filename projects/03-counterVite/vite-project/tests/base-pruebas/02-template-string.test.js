import { getSaludo } from "../../src/base-pruebas/02-template-string";

describe('Prueba 02-template-string' , () => {
    test('getSaludo debe de retornar "Hola Martin"', () => {

        const nombre = 'Martin';
        const saludo = getSaludo( nombre );
        
        expect(saludo).toBe(`Hola ${ nombre }`);
        
    });
    
});