const cheerio=require("cheerio");
const request=require("request");
const fs=require("fs");
const link=require("./top10Projects");
let topiclink="https://github.com/topics";
request(topiclink,function cb(error,response,data){
    processData(data);
});

function processData(data){
   let  myDocument=cheerio.load(data);
   let tags=myDocument(".topic-box");
   //console.log(atag.length);
   for(let i=0;i<tags.length;i++){
       let atag="https://github.com"+myDocument(tags[i]).find("a").attr("href");
       //console.log(atag);
       let ptags=myDocument(tags[i]).find("p").text();
       let ptag=ptags.split("\n")[1].trim(" ");
       //console.log(atag+"-->"+ptag);
       let topicFolderPath=`./Topics/${ptag}`;
       fs.mkdirSync(topicFolderPath);
       link(atag);

       
   }

}
