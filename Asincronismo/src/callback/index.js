//DEFINIMOS  UNA FUNCION
function sum(num1, num2){
    return num1 + num2;
}

/* DEFINIMOS OTRA FUNCION LA CUAL VA A RECIBIR COO PARAMETRO OTRA FUNCION QUE SERA NUESTRO CALLBACK,
POR ESTANDAR SE LAS NOMBRA DENTRO DEL LOS PARAMETRO CON EL EL TERMINO "callback" 
*/
function calc (num1, num2, callback){
    return callback(num1,num2);
}
/** LLAMAMOS A NUESTRA FUNCION Y LE PASAMOS LOS PARAMETROS ASI COMO TAMBIEN LA FUNCION  QUE SERA NUESTRO CALLBACK */
console.log(calc(2, 2, sum));

/**
 * OTRO EJEMPLO
 * @param {*} callback 
 */
function date(callback){
    console.log(new Date);
    setTimeout(function () {
        let date = new Date;
        callback(date);
    },3000)
}

function printDate(dateNow) {
    console.log(dateNow);
}

date(printDate);


