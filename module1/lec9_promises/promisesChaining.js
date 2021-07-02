//promises cloning helps us  to avoid promises hell
//promises
//intial state is pending
//Either pending can either be resolved or rejected
//scb can be attached to pending promises using then function.
//fcb can be attached to pending promises using catch function.
//then and catch can only be called on pending promises.
//then and catch ? sync? : Async?-->Async
//then and catch also has a pending promise.
const fs=require("fs");
let f1kaPromise=fs.promises.readFile("./f1.txt","utf8");
console.log("f1kaPromise",f1kaPromise);
f1kaPromise.then(function(data){
    console.log(data+"");
    console.log("f1kaPromise",f1kaPromise);
    //return data;
})
//console.log("thenkapromise",thenkaPromise);
.then(function(data){
    console.log(data);
    console.log("I ran after first scb");
})