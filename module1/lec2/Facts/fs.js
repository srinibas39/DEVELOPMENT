const fs=require("fs");
console.log(fs);
let fsdata=fs.readFileSync("./f1.txt","utf-8");
console.log(fsdata);
fs.writeFileSync("./index.txt","Hello World!!!")
fs.writeFileSync("../Activity/Demo.js","this is my javascript file")