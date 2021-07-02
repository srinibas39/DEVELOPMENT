const request=require("request");
const cheerio=require("cheerio");
const fs=require("fs");
const { create } = require("domain");
//matchlink="https://www.espncricinfo.com/series/ipl-2020-21-1210595/royal-challengers-bangalore-vs-sunrisers-hyderabad-eliminator-1237178/full-scorecard";
function getmatchdetails(matchlink){
    request(matchlink,function cb(error,response,data){
        processdata(data);
    })
}
function processdata(data){
     let myDocument=cheerio.load(data);
     let bothInnings=myDocument(".card.content-block.match-scorecard-table .Collapsible");
     //console.log(bothInnings.length);
     for(let i=0;i<bothInnings.length;i++){
         let innings=myDocument(bothInnings[i])
         let teamName=innings.find("h5").text();
         teamName=teamName.split("INNINGS")[0].trim();
         //console.log(teamName);
         let tr=innings.find(".table.batsman tbody tr")
         for(let j=0;j<tr.length-1;j++){
            let td=myDocument(tr[j]).find("td");
            if(td.length>1){ 
                let Batsman=myDocument(td[0]).text().trim();
                let runs=myDocument(td[2]).text().trim();
                let balls=myDocument(td[3]).text().trim();
                let fours=myDocument(td[5]).text().trim();
                let sixes=myDocument(td[6]).text().trim();
                let runrate=myDocument(td[7]).text().trim();
                //console.log(`Batsman: ${Batsman} Runs:${runs} Balls:${balls} Fours:${fours} Sixes:${sixes} runrate:${runrate}`);
                processDetails(teamName,Batsman,runs,balls,fours,sixes,runrate)

            }
      
           
         }
         //console.log("#####################################################")
     }
     //console.log("-------------------------------------------------------------------------")
}   
module.exports=getmatchdetails;
function checkTeamFolder(teamName){
   let teamFolderPath=`./IPL/${teamName}`;
   return fs.existsSync(teamFolderPath);
}
function createTeamFolder(teamName){
     let teamFolderPath=`./IPL/${teamName}`;
     fs.mkdirSync(teamFolderPath);
}
function checkBatsmanFile(teamName,Batsman){
      let BatsmanFilePath=`./IPL/${teamName}/${Batsman}.json`;
      return fs.existsSync(BatsmanFilePath);
}  
function createBatsmanFile(teamName,Batsman,runs,balls,fours,sixes,runrate){
    let BatsmanFilePath=`./IPL/${teamName}/${Batsman}.json`;
    let batsmaninfo=[];
    let innings={
        Runs:runs,
        Balls:balls,
        Fours:fours,
        Sixes:sixes,
        Runrate:runrate
    };
    batsmaninfo.push(innings);
    fs.writeFileSync(BatsmanFilePath,JSON.stringify(batsmaninfo));

}
function updateBatsmanFile(teamName,Batsman,runs,balls,fours,sixes,runrate){
    let BatsmanFilePath=`./IPL/${teamName}/${Batsman}.json`;
    let batsmanFile=JSON.parse(fs.readFileSync(BatsmanFilePath));
    let batsmaninfo=[];
    let innings={
        Runs:runs,
        Balls:balls,
        Fours:fours,
        Sixes:sixes,
        Runrate:runrate
    };
    batsmanFile.push(innings);
    fs.writeFileSync(BatsmanFilePath,JSON.stringify(batsmanFile));

}

function processDetails(teamName,Batsman,runs,balls,fours,sixes,runrate){
    let isTeamFolder=checkTeamFolder(teamName);
    if(isTeamFolder){
        let isBatsmanFile=checkBatsmanFile(teamName,Batsman);
        if(isBatsmanFile){
            updateBatsmanFile(teamName,Batsman,runs,balls,fours,sixes,runrate);
        }
        else{
            createBatsmanFile(teamName,Batsman,runs,balls,fours,sixes,runrate);
        }

    }
    else{
        createTeamFolder(teamName);
        createBatsmanFile(teamName,Batsman,runs,balls,fours,sixes,runrate);
    }
    
}
