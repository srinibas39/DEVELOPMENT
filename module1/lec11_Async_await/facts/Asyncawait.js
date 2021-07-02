//aync-->It can used before a function name.
//await-->It can only be used inside a Async function.
//IIFE--.Immediately Invoked function expression.
//(function(){

//})();
//Above is an example of IIFE function.
const fs=require("fs");
console.log("start");
async function fun(){
    console.log("Hi I am inside fun")
   //let f1data= await fs.promises.readFile("./f1.txt");
   //let f2data=await fs.promises.readFile("./f2.txt");
   //console.log(f1data+"");
  // console.log(f2data+"");
  let f1Promise=fs.promises.readFile("./f1.txt","utf8");
  let f2Promise= fs.promises.readFile("./f2.txt","utf8");
  let bothdata=await Promise.all([f1Promise,f2Promise]);
  console.log(bothdata);

}
fun();
console.log("end");
//while(true){

//}