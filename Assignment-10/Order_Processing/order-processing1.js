// order processing using nested callback
function order(callback) {
    console.log("The order is Recieved ");
    callback();
}
function orderPrep() {
    setTimeout(() => {
        console.log("Preparing Order Started");
        setTimeout(() => {
            console.log("Preparing Order finished");
            setTimeout(() => {
                console.log("Started Packing The Order");
                setTimeout(() => {
                    console.log("finished Packing The Order");
                    setTimeout(() => {
                        console.log("Your Order is ready for delievry");

                    }, 1000);
                }, 1000);
            }, 1000);
        }, 1000);
    }, 1000);

}
order(orderPrep);
