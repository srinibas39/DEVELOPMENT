const cheerio=require("cheerio");
const request=require("request");
const fs=require("fs");

function topiclink(atag){
    request(atag,function cb(error,response,data){
        processDetails(data);
    })
}
function processDetails(data){
    let myDocument=cheerio.load(data);
    let h1tags=myDocument(".f3.color-text-secondary");
    //console.log(h1.length);
    let topicName=myDocument(".col-sm-10.d-flex h1").text();
    //console.log(topicName.text());
    
    for(let i=0;i<10;i++){
       
        let h1tag=h1tags[i];
        let atags=myDocument(h1tag).find("a");
       // console.log(atag);
       let projectLink="https://github.com"+myDocument(atags[1]).attr("href");
       let projectName=myDocument(atags[1]).text();
      //console.log(atag);
      if(i==0){
          let projectFile=[];
          projectFile.push(projectLink,projectName);
          fs.writeFileSync(`./Topics/${topicName}/projects.json`,JSON.stringify(projectFile.json));
      }
      else{
          let projectFile=JSON.parse(fs.readFileSync(`./Topics/${topicName}/projects.json`));
           projectFile.push(projectLink,projectName);
          fs.writeFileSync(`./Topics/${topicName}/projects.json`,JSON.stringify(projectFile.json));
      } 
    }
   
    
}
module.exports=topiclink;