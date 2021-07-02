const fs=require("fs");
let Files=["../f1.txt","../f2.txt","../f3.txt"];
//chaining with the help of loop
let f1Promise=fs.promises.readFile(Files[0]);
for(let i=1;i<Files.length;i++){
    f1Promise=f1Promise.then(function(data){
        console.log(data+"");
        let nextFilePromise=fs.promises.readFile(Files[i]);
        return nextFilePromise;
    })

}
f1Promise.then(function(data){
    console.log(data+"")
})

