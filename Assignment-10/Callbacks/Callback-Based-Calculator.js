//calculate numbers
function calculate(a,b,callback){
    console.log("Variables Recieved");
    callback(a,b);
}
function Add(a,b){
    const sum = a+b;
    console.log(sum);
}
calculate(5,5,Add);

// calculate bill
function calculateBill(p1,p2,p3,callback){
    console.log("Prices Recieved");
    callback(p1,p2,p3);
}
function addPrices(p1,p2,p3){
   const Add1 = p1+p2+p3;
    console.log("Total Bill :"+Add1);
}
calculateBill(200,300,500,addPrices);

//withdraw money
function withdrawMoney(amount,callback){
    setTimeout(()=>{
    console.log("Amounts Recieved");
    callback(amount);
    },2000);
}
function balance(amount){
    const totalBalance = 10000;
   let  withdraw = totalBalance-amount;
   
        console.log("Remaining Amount:"+withdraw);

}
withdrawMoney(5000,balance);