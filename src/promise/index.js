/** DECLARAMOS UNA PROMESA */
const somethingWillHappen = () => {
    return new Promise((resolve, reject) => {
        if (true) {
            resolve('Hey!');
        } else {
            reject('Whooops!');
        }
    });
};

somethingWillHappen()
.then(response => console.log(response))
.catch(err => console.error(err));

/** EJEMPLO 2 */
const somethingWillHappen2 = () => {
    return new Promise((resolve, reject) =>{
        if (true) {
            setTimeout(() => {
                resolve('True')
            }, 2000);
        } else {
            const error = new Error('Whooops!');
            reject(error);
        }
    });
};

somethingWillHappen2()
.then(response => console.log(response))
.catch(response => console.log(response));


/** COMO CORRER VARIA PROMESAS AL MISMO TIEMPO O ENCADENADAS */
Promise.all([somethingWillHappen(), somethingWillHappen2()])
.then(response =>{
    console.log('Array of results ', response);
})
.catch(err =>{
    console.log(err);
});