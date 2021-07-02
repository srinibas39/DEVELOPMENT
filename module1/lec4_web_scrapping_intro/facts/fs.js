const cheerio = require("cheerio");
const fs=require("fs");
let html=fs.readFileSync("./index.html","utf8");
//console.log(html);
let myDocument=cheerio.load(html);
//console.log(myDocument("h1").text());
let secondPara=myDocument("p")["1"];
//console.log(myDocument(secondPara).text());
//console.log(myDocument("ul p").text());
//console.log(myDocument("a").text());
//console.log(myDocument("ul a").text())
//console.log(myDocument("ul>a").text());
//console.log(myDocument(".inside.main").text());
//console.log(myDocument("#main-heading").text());
//class can have duplicates IDs dont have duplicates

