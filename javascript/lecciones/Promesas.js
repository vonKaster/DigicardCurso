let myPromise = new Promise((resolved, rejected) => {

    let expression = true;

    if(expression){
        resolved("Se resolvió correctamente")
    } else {
        rejected("Se produjo un error")
    }

}); 

myPromise.then(value => console.log(value),  error => console.log(error));

let promise = new Promise((resolved) => {
    setTimeout(()=> resolved('Saludos con "Promise" y "setTimeout'), 3000);
})

// promise.then(value => console.log(value));

//async = la funcion si o si retorna una promesa

async function myFuctionWithPromise(){
    return 'Saludos con "Promise" y "setTimeout';
}

// myFuctionWithPromise().then(value => console.log(value));

// async con Await

async function myFunctionWithPromiseAndAwait(){
    let myPromise = new Promise(resolved => {
        resolved("Promesa con await");
    });
    console.log(await myPromise);
}

myFunctionWithPromiseAndAwait();

async function myFunctionPromiseAwaitTimeout(){

   let myPromise = new Promise(resolved => {
        setTimeout(()=> resolved("Promesa con await, async y timeout"), 5000);
   }) 

   console.log (await myPromise);
};

myFunctionPromiseAwaitTimeout();