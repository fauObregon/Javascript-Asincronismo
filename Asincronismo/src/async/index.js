/** declaramos una promesa */
const doSomethingAsync = () => {
    return new Promise((resolve, reject) => {
        (true)
            ? setTimeout(() => { resolve('Do Something Async')}, 3000)
            : reject( new Error('Test Error'))
    });
}

/** permite espera a que la promesa de su resultado para
 * poder continuar con el resto de on implementacion */
const doSomething = async () => {
    const something = await doSomethingAsync();
    console.log('hola')
    console.log(something);
}

console.log('Before');
doSomething();
console.log('After');

const anotherFunction = async () => {
    try {
        const something = await doSomethingAsync();
        console.log(something);
    } catch (error) {
        console.error(error);
    }
};

console.log('Before 1');
anotherFunction();
console.log('After 2');