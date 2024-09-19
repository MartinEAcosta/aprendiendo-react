const getUsuarioActivo = (nombre) => ({
    udi: 'I-342',
    username: nombre,
});

console.log(getUsuarioActivo("snick learning react"));

const useState = (nombre) => {
    return [ nombre, ()=>{(console.log('Hola mundo'))}];
}

const [nombre, setNombre] = useState('Snick');

const heroes = [
    {
        id: 1,
        name: 'Batman',
        owner: 'DC'
    },
    {
        id: 2,
        name: 'Spiderman',
        owner: 'Marvel'
    },
    {
        id: 3,
        name: 'Superman',
        owner: 'DC'
    },
    {
        id: 4,
        name: 'Flash',
        owner: 'DC'
    },
    {
        id: 5,
        name: 'Wolverine',
        owner: 'Marvel'
    },
];

const getHeroeById = (id) => ( heroes.find((heroe) => heroe.id === id));

console.log(getHeroeById(3));

const getHeroesByOwner = (owner => heroes.filter((heroe) => heroe.owner === 'DC'));

console.log(getHeroesByOwner('DC'));
 