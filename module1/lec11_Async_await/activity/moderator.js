const id = "pamico3332@nic58.com";
const pw = "12345678";
const puppeteer = require("puppeteer");


async function login(){
    let browser = await puppeteer.launch({
        headless: false,
        defaultViewport: null,
        args: ["--start-maximized"]
      });
    let pages = await browser.pages();
    let tab = pages[0];
    await tab.goto("https://www.hackerrank.com/auth/login");
    await tab.type("#input-1", id);
    await tab.type("#input-2", pw);
    await tab.click( ".ui-btn.ui-btn-large.ui-btn-primary.auth-button.ui-btn-styled");
    await tab.waitForSelector('div[data-analytics="NavBarProfileDropDown"]' , {visible:true});
    await tab.waitForTimeout(2000);
    let element = await tab.$('div[data-analytics="NavBarProfileDropDown"]');
    await element.click();
    await tab.waitForSelector('a[data-analytics="NavBarProfileDropDownAdministration"]' , {visible:true});
    await tab.click('a[data-analytics="NavBarProfileDropDownAdministration"]');
    await tab.waitForSelector('.nav-tabs.nav.admin-tabbed-nav li' , {visible:true});
    let bothLis = await tab.$$('.nav-tabs.nav.admin-tabbed-nav li');
    let manageChallengeLi = bothLis[1];
    await manageChallengeLi.click();
    await addModerators(browser,tab);
   

};
login();

async function addModerators(browser,tab){
    await tab.waitForSelector(".backbone.block-center",{visible:true});
    let atags=await tab.$$(".backbone.block-center");//query.selectorall()
    let questionLink=[];
    for(let i=0;i<atags.length;i++){
        let href=await tab.evaluate(function(element){return element.getAttribute("href");},atags[i]);
        let eachQlink="https://www.hackerrank.com"+href;
        questionLink.push(eachQlink);  
    }
    console.log(questionLink);
    for(let j=0;j<questionLink.length;j++){
        let qLink=questionLink[j]
        let newTab=await browser.newPage();
        await addModeratorsForEachQlink(newTab,qLink);
    } 
    let allLis=await tab.$$(".pagination li");
    let nextBtn=allLis[allLis.length-2];
    let isDisabled=await tab.evaluate(function(element){return element.classList.contains("disabled");},nextBtn);
    if(isDisabled){
        return;
    }
    else{

        await nextBtn.click();
        await tab.waitForTimeout(5000);
        await addModerators(browser,tab);

    }
    


}
async function addModeratorsForEachQlink(newTab,qLink){
    await newTab.goto(qLink);
    await newTab.waitForTimeout(5000);
    await newTab.click('li[data-tab="moderators"]');
    await newTab.waitForSelector("#moderator",{visible:true});
    await newTab.click("#moderator");
    await newTab.type("#moderator","srinibas");
    await newTab.click(".btn.moderator-save")
    await newTab.click(".save-challenge.btn.btn-green");
    await newTab.close();
}