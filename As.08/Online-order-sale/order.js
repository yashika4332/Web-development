const order = [1200,450, 3000, 750, 1500, 250, 4200, 900];
// original 
console.log(order);
// first order > 2000
let first = order.find(order=> order>2000);
console.log(first);
// all order > 1000
let all = order.filter(order=> order>1000);
console.log(all);
// total of all combine
let total =  order.reduce((sum,order)=>sum+order,0);
console.log(total);