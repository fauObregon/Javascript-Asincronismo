/** DECLARAMOS la importacion EL COMPONENTE QUE NOS PERMITIRA HACER PETICIONES HTTP */
let XMLHttpRequest = require('xmlhttprequest').XMLHttpRequest;
let API = 'https://rickandmortyapi.com/api/character/';

function fetchData(url_api, callback){
    let xhttp = new XMLHttpRequest();
    /**
     * lOS PARAMETROS SON:
     * 1) VERBO HTTP
     * 2) URL
     * 3) BANDERA APARA HABILITAR EL ASINCRONISMO
     */
    xhttp.open('GET', url_api, true);
    xhttp.onreadystatechange = function (event) {
        /**
         * LOS DIFERENTES ESTADO PUEDEN SER EN RESUMEN
         * 0 = DONSE SE A INICIALIZADO, ES DECIR AUN NO SE LLAMA A OPEN
         * 1 = DONDE ESTA CARGANCO, AUN ESTA HACIENDO EL PROCESO DEL LLAMADO
         * 2 = DODNE YA SE HA CARGADO
         * 3 = SI HAY ALGUNA DESCARGA O ALGUNA INFORMACION
         * 4 = SE HA COMPLETADO TODO
         * DOCUMENTACION https://www.w3schools.com/xml/ajax_xmlhttprequest_response.asp
         */
        if(xhttp.readyState === 4){
            if (xhttp.status === 200) {
                callback(null, JSON.parse(xhttp.responseText));
            }else{
                const error = new Error('Error ' + url_api);
                return callback(error, null);
            }
        }
    }
    xhttp.send();
}

// USAMOS NUESTRA IMPLEMENTACION
fetchData(API, function (error1, data1) {
    if(error1) return console.error(error1);
    fetchData(API + data1.results[0].id, function (error2, data2) {
        if(error2) return console.error(error2);
        fetchData(data2.origin.url, function (error3, data3) {
            if(error3) return console.error(error3);
            console.log(data1.info.count);
            console.log(data2.name);
            console.log(data3.dimension);
        });
    });
});
