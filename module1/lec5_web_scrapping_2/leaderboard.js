const request=require("request");
const cheerio=require("cheerio");
matchlink="https://www.espncricinfo.com/series/ipl-2020-21-1210595/delhi-capitals-vs-mumbai-indians-final-1237181/full-scorecard"
leaderboardPage(matchlink);
function leaderboardPage(matchlink){
    request(matchlink,function cb(error,response,data){
        processData(data)
    })
}
function processData(data){
    let myDocument=cheerio.load(data);
    let bothInnings=myDocument(".card.content-block.match-scorecard-table .Collapsible");
    //console.log(bothInnings.length);
    for(let i=0;i<bothInnings.length;i++){
        oneInnings=myDocument(bothInnings[i]);
        let teamName=oneInnings.find("h5").text().split("INNINGS")[0].trim(" ");
        //console.log(teamName);
        let alltrs=oneInnings.find(".table.batsman tbody tr")
        for(let j=0;j<alltrs.length;i++){
           let allTrs=myDocument(alltrs[j]).find("td").text();
           console.log(allTrs.length);
        }
    }

}
