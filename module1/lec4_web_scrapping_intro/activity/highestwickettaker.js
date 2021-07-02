let matchlink="https://www.espncricinfo.com/series/ipl-2020-21-1210595/delhi-capitals-vs-mumbai-indians-final-1237181/full-scorecard"
const fs=require("fs");
const request=require("request");
const cheerio=require("cheerio");
request(matchlink,cb);
function cb(error,response,data){
    //fs.writeFileSync("./match.html",data);
    highestWicket(data);
}
//const match=fs.readFileSync("./match.html","utf8");
function highestWicket(data){
    
    let myDocument=cheerio.load(data);
    //console.log(myDocument(".status-text").text());
    let BowlingTables=myDocument(".table.bowler");
    //console.log(BowlingTables);
    //fs.writeFileSync("./BowlerTables.html",BowlingTables+"");
    //{
    //"0":[bowling table1]
    //"1":[bowling table2]
//}

let highestWicketTaker;
let highestWicketTaken;
let economy;
for(let i=0;i<BowlingTables.length;i++){
    let BowlingTable=myDocument(BowlingTables[i]);
    let allTableRows=BowlingTable.find("tbody tr");
    for(let j=0;j<allTableRows.length;j++){
        let allTds=myDocument(allTableRows[j]).find("td");
        if(i==0 && j==0){
            highestWicketTaker=myDocument(allTds[0]).find("a").text();
            highestWicketTaken=myDocument(allTds[4]).text();
            economy=myDocument(allTds[5]).text();
        }
        else{
            let currentWicketTaken=myDocument(allTds[4]).text();
            let currentEconomy=myDocument(allTds[5]).text();
            if(currentWicketTaken>highestWicketTaken ||(currentWicketTaken==highestWicketTaken && currentEconomy<economy)){
                highestWicketTaker=myDocument(allTds[0]).find("a").text();
                highestWicketTaken=myDocument(allTds[4]).text();
                economy=currentEconomy;
            }
        }
    }
}
console.log("Highest wicket taker name : ",highestWicketTaker);
console.log("wickets taken : ",highestWicketTaken);
console.log("economy : ",economy);

}





