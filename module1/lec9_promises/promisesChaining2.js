//how to avoid promises hell
//concept of bypass
const fs=require("fs");
let f1KaPromise=fs.promises.readFile("./f1.txt");
f1KaPromise.then(function(f1Kidata){
    console.log(f1Kidata+"");
    let f2KaPromise=fs.promises.readFile("./f2.txt");
    return f2KaPromise;
})
.then(function(f2Kidata){
    console.log(f2Kidata+"");
    let f3KaPromise=fs.promises.readFile("./f3.txt");
    return f3KaPromise;
})
.then(function(f3kidata){
    console.log(f3kidata+"");
})

