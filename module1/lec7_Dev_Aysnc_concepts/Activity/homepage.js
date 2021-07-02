const request=require("request");
const cheerio=require("cheerio");
const getallmatches=require("./allmatchpage");
let HomepageLink="https://www.espncricinfo.com/series/ipl-2020-21-1210595";
request(HomepageLink,cb);
function cb(error,response,data){
    processData(data);
}
let allmatchlink;
function processData(data){
    let myDocument=cheerio.load(data);
    //allmatchlink=myDocument(".widget-items.cta-link a").attr("href");
    let atag=myDocument(".widget-items.cta-link a")
    allmatchlink="https://www.espncricinfo.com"+atag["0"].attribs.href
    //console.log(allmatchlink);
    getallmatches(allmatchlink);
}
