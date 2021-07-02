const fs=require("fs");
let f1=fs.readFileSync("f1.txt","utf8");
let f2=fs.readFileSync("f2.txt","utf8");
//console.log(f1);
//console.log(f2);
f=f1+"\n"+f2;
//console.log(f);
// -s flag-->removes empty lines
function applySflag(f1){
    let emptyIncluded=false;
    let removedspaces=[];
    let split_data=f1.split("\r\n");
    //console.log(split_data);
    for(i=0;i<split_data.length;i++){
        if(split_data[i]=="" && emptyIncluded==false){
            removedspaces.push(split_data[i]);
            emptyIncluded=true;
        }
        else if(split_data[i]!=""){
            removedspaces.push(split_data[i]);
            
            if(i<split_data.length-2) emptyIncluded=false;
             
        }
        
    }
    let removedspacesString=removedspaces.join("\r\n");
    console.log(removedspacesString);
}   
applySflag(f1);




