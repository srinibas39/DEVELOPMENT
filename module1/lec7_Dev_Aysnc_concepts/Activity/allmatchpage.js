const request=require("request");
const cheerio=require("cheerio");
const getmatchdetails=require("./batsmaninfo");
function getallmatches(allmatchlink){
    request(allmatchlink,function(error,response,data){
        processdata(data);
    })
}
function processdata(data){
    let myDocument=cheerio.load(data);
    let allAtags=myDocument('a[data-hover="Scorecard"]');
    console.log(allAtags.length);
    for(let i=0;i<allAtags.length;i++){
        //{0:"",""......58}
        let allmatcheslink="https://www.espncricinfo.com"+myDocument(allAtags[i]).attr("href");
        //console.log(allmatcheslink);
        getmatchdetails(allmatcheslink);
    }
}
module.exports=getallmatches;