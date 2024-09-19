// Tarea adicional:

import { usContext } from "../../src/base-pruebas/06-deses-obj";

describe('Prueba en 06-deses-obj' , () => {

    test('Debe de retornar un objeto' , () => {

        const test = ({clave,edad}) => {
            return {
                nombreClave: clave,
                anios: edad,
                latlng: {
                    lat: 14.1232,
                    lng: -12.3232
                }
            }
        }
        
        const retorno = test({clave:'clave', edad: 25});
        const {nombreClave,anios} = retorno;
        console.log(retorno);
        
        expect( retorno ).toEqual({
            nombreClave: nombreClave,
            anios: anios,
            latlng: {
                lat: 14.1232,
                lng: -12.3232
            }
        })

    });

        

});