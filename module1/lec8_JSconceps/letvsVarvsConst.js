//let is blocked scoped
//const is also blocked scoped
//console.log(a);
//let a;
//console.log(a);
//a=10;
//console.log(a);
console.log(b);
var b;
console.log(b)
b=20;
console.log(b);
//hoisting-process of accessing the variable before intializaition.

console.log(a);
let a="steve"
console.log(a);
//is hoisting possible in let and const ?
// Yes ,It happens but intializtion happens in a special zone which is known as temporal dead zone where variable
//cannot be accessed.