const fs=require("fs");
let Files=["../f1.txt","../f2.txt","../f3.txt"];
for(let i=0;i<Files.length;i++){
    let pendingPromises=fs.promises.readFile(Files[i]);
    pendingPromises.then(function(data){
        console.log(data+"");
    })
}
