//let-->block xcoped
//const-->block scoped
//var-->functional scope

/*var a=10;
console.log(a);
if(true){
    var a=50;
    console.log("print this if block");
    console.log(a);
}
console.log(a);
function fun(){
    console.log(a);
    var a=20;
    console.log(a);
}
fun();
console.log(a);*/



let a=10;
console.log(a);
if(true){
    let a=50;
    console.log("print this if block");
    console.log(a);
}
console.log(a);
function fun(){
    //console.log(a);
    let a=20;
    console.log(a);
}
fun();
console.log(a);