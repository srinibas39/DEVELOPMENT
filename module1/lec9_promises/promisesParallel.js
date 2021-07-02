const fs=require("fs");
let f1KiPromise= fs.promises.readFile("./f1.txt");
f1KiPromise.then(function(data){
    console.log(data+"");
})
let f2kiPromise=fs.promises.readFile("./f2.txt");
f2kiPromise.then(function(data){
    console.log(data+"");
})
let f3KiPromise=fs.promises.readFile("./f3.txt");
f3KiPromise.then(function(data){
    console.log(data+"");
})
