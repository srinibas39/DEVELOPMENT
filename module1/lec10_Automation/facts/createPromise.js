const fs=require("fs");
//let pendingPromise=fs.promises.readFile("./f1.txt");
//new helps to create new promise object in the heap memory.
function promisifiedRead(filepath){
    return new Promise(function (scb,fcb){
        //logic
        fs.readFile(filepath,function(error,data){
            if(error){
                fcb(error);
            }
            else{
                scb("testing success callback");
            }
        })
    })

}

let pendingPromise=promisifiedRead("./f1.txt");
pendingPromise.then(function(data){
   console.log(data);
})
pendingPromise.catch(function(error){
    console.log(error);
})
