// simple promise 
function order(){
    return new Promise((resolve) => {
        console.log("The order is received");

        setTimeout(()=>{
            resolve();
        },1000);
    });
}

function startprepOrder(){
    return new Promise((resolve)=>{
        console.log("started Preparing the order");

        setTimeout(()=>{
            resolve();
        },1000);
    });

}

function endprepOrder(){
    return new Promise((resolve)=>{
        console.log("Finished Preparing the order");

        setTimeout(()=>{
            resolve();
        },1000);
    });

}

function startpackOrder(){
    return new Promise((resolve)=>{
        console.log("Started Packing the order");

        setTimeout(()=>{
            resolve();
        },1000);
    });
}

function endpackOrder(){
    return new Promise((resolve)=>{
        console.log("Finished Packing the order");

        setTimeout(()=>{
            resolve();
        },1000);
    });
}

function notify(){
    return new Promise((resolve)=>{
        console.log("Your order is ready to deliver");

        setTimeout(()=>{
            resolve();
        },1000);
    });

}
// nested promise
order()
.then(()=>startprepOrder())
.then(()=>endprepOrder())
.then(()=>startpackOrder())
.then(()=>endpackOrder())
.then(()=>notify());

// using async and await with promise chainng
async function processOrder() {
    await order();
    await startprepOrder();
    await endprepOrder();
    await startpackOrder();
    await endpackOrder();
    await notify();
}

processOrder();