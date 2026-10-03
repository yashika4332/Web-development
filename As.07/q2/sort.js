
const product =[1200,450,3000,750,1500,250];
// original version
console.log(product);
// reversed version
console.log(product.reverse());
// lower to higher
product.sort(function(a,b){return a-b});
console.log(product);
// higher to lower
product.sort(function(a,b){return b-a});
console.log(product);
// random 
let random = product.sort(()=> Math.random() - 0.5);
console.log(random);
