//sync
//Async
//promisified function
const fs=require("fs");
let pendingpromise=fs.promises.readFile("./f1.txt","utf8");
console.log(pendingpromise);
//promoise ke object ke pass do function-->then(success),catch(failure)
pendingpromise.then(function(data){
    console.log("success call back")
    console.log(pendingpromise);
    console.log(data+"");
})
pendingpromise.catch(function(error){
    console.log("failure call back");
    console.log(error);
})
