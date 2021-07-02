const fs=require("fs");
let f1kiPromises=fs.promises.readFile("./f1.txt");
f1kiPromises.then(function(data){
    console.log(data+"");
    let f2KiPromises=fs.promises.readFile("./f2.txt");
    f2KiPromises.then(function(data){
        console.log(data+"");
        let f3kiPromises=fs.promises.readFile("./f3.txt");
        f3kiPromises.then(function(data){
            console.log(data+"");
        })

    })
})
//promises hell
//solution-->chaining