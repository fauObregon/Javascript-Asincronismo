/** DECLARAMOS la importacion EL COMPONENTE QUE NOS PERMITIRA HACER PETICIONES HTTP */
let XMLHttpRequest = require('xmlhttprequest').XMLHttpRequest;

/**
 * AJUSTAMOS LA IMPLEMENTACION CREADAD INICIALMENTE CON CALLBACK, HACIA
 *  EL STANDAR DE ECMASCRIPT 6 Y MEDIANTE EL USO DE PROMESAS
 * @param {*} url_api
 * @param {*} callback
 * @returns
 */
const fetchData = (url_api, callback) => {
    return new Promise((resolve, reject) => {
        const xhttp = new XMLHttpRequest();
        xhttp.open('GET', url_api, true);
        xhttp.onreadystatechange = (() => {
            if(xhttp.readyState === 4){
                (xhttp.status === 200)
                    ? resolve(JSON.parse(xhttp.responseText))
                    : reject(new Error('Error ' + url_api));
            }
        });
        xhttp.send();
    });
}

/**
 * exportamos la funcion
 */
module.exports = fetchData;