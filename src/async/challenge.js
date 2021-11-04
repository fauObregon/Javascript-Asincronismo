const fetchData = require('../utils/fetchData');
const API = 'https://rickandmortyapi.com/api/character/';

/**
 * DEFINMOS LA FUNCION MEDIANTE EL USO DE ASYNC Y AWAIT PARA QUE ESPERA A QUE FETCH DATA REPONDA
 *  LA INFO Y CONTINUAR CON EL SIGUIENTE LLAMADO DENTRO DE LA IMPLEMENTACION
 * @param {*} url_api
 */
const anotherFunction = async (url_api) => {
    try {
        const data = await fetchData(url_api);
        const character = await fetchData(`${API}${data.results[0].id}`);
        const origin = await fetchData(character.origin.url);

        console.log(data.info.count);
        console.log(character.name);
        console.log(origin.dimension);
    } catch (error) {
        console.error(error);
    }
}

console.log('Before');
anotherFunction(API);
console.log('After');