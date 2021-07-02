const fs=require("fs");
console.log("start")
let f1=fs.readFileSync("./f1.txt", "utf8");
console.log(f1);
console.log("end");
