let matchlink="https://www.espncricinfo.com/series/ipl-2020-21-1210595/delhi-capitals-vs-mumbai-indians-final-1237181/full-scorecard"
const request=require("request");
const fs=require("fs");
const cheerio=require("cheerio");
request(matchlink,cb);
function cb(error,response,data){
    highestsixes(data);
}
function highestsixes(data){
    myDocument=cheerio.load(data);
    let batsmanTables=myDocument(".table.batsman");
    //fs.writeFileSync("./BatsmanTables.html",batsmanTables+"");
    let batsmanName;
    let highestSixes;
    let highestStrikeRate;
    for(let i=0;i<batsmanTables.length;i++){
        batsmanTable=myDocument(batsmanTables[i]);
        let allTableRows=batsmanTable.find("tbody tr");
        for(let j=0;j<allTableRows.length;j++){
            let allTds=myDocument(allTableRows[j]).find("td");
           if(allTds.length>1){
            if(i==0 && j==0){
                batsmanName=myDocument(allTds[0]).find("a").text();
                highestSixes=myDocument(allTds[6]).text();
                highestStrikeRate=myDocument(allTds[7]).text();
            }
            else{
                let currentSixes=myDocument(allTds[6]).text();
                let currentstrikerate=myDocument(allTds[7]).text();
                if(currentSixes>highestSixes||(currentSixes==highestSixes && currentstrikerate > highestStrikeRate)){
                    batsmanName=myDocument(allTds[0]).find("a").text();
                    highestSixes=currentSixes
                    highestStrikeRate=currentstrikerate;
                }
            }
        }
    }

} 
    console.log("Batsman with highest sixes: ", batsmanName);
    console.log("No of sixes: ",highestSixes);
    console.log("strikerate: ",highestStrikeRate);

            


}