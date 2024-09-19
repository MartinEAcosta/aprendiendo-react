import { getHeroeById, getHeroesByOwner } from "../../src/base-pruebas/08-imp-exp";


describe('Pruebas en 08-imp-exp', () => {

    test(' getHeroeById debe de retornar un héroe por ID ', () => {
      
        const id = 1;
        const heroe = getHeroeById( id );
        
        console.log(heroe);

        expect( heroe ).toEqual({id: 1, name: 'Batman', owner: 'DC'});

    });
    
    test(' getHeroeById debe de retornar undefined si no existe el ID', () => {
      
        const id = 100;
        const heroe = getHeroeById( id );
        
        console.log(heroe);

        expect( heroe ).toBeFalsy();

    });


    // Tarea:
    // Debe de retornar un arreglo con los héroes de DC
    // Length === 3
    // toEqual al arreglo filtrado

    //debe de retornar un arreglo con los héroes de marvel
    // Length === 2

    test('getHeroesByOwner debe de retornar true si el heroe pertenece y son === a la cantidad', () => {
      
        const owner = 'DC';
        const heroes = getHeroesByOwner( owner );

        // expect( heroes ).toEqual( heroes.filter((heroe) => heroe.owner == owner));

        heroes.forEach((heroe) => expect( heroe.owner ).toEqual( owner ));

        let cont = 0;



        heroes.forEach((heroe) =>{ 
            if (heroe.owner === owner) {
                cont++;
            }
        });

        expect(heroes.length).toEqual(cont);
                       
    });

    test('getHeroesByOwner debe de retornar true si el heroe pertenece y son === a la cantidad', () => {
      
        const owner = 'Marvel';
        const heroes = getHeroesByOwner( owner );

        heroes.forEach((heroe) => expect( heroe.owner ).toEqual( owner ));

        let cont = 0;

        heroes.forEach((heroe) =>{ 
            if (heroe.owner === owner) {
                cont++;
            }
        });

        expect(heroes.length).toEqual(cont);
                       
    });

});