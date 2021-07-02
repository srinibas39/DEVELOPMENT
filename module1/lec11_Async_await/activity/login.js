const puppeteer = require("puppeteer");
const challenges = require("./challenges");
let Id = "kahecow998@pigicorn.com"
let password = "12345678";
(async function () {
  let browser = await puppeteer.launch({ headless: false, defaultViewport: null, args: ["--start-maximized"] })
  let pages = await browser.pages();
  let tab = pages[0];
  await tab.goto("https://www.hackerrank.com/auth/login");
  await tab.type("#input-1", Id);
  await tab.type("#input-2", password);
  await tab.click(".ui-btn.ui-btn-large.ui-btn-primary.auth-button.ui-btn-styled");
  await tab.waitForSelector(".dropdown-handle.nav_link.toggle-wrap", { visible: true });
  await tab.click(".dropdown-handle.nav_link.toggle-wrap");
  await tab.waitForSelector('a[data-analytics="NavBarProfileDropDownAdministration"]', { visible: true });
  await tab.click('a[data-analytics="NavBarProfileDropDownAdministration"]');
  await tab.waitForSelector(".btn.btn-green.backbone.pull-right", { visible: true });
  await tab.waitForSelector('.nav-tabs.nav.admin-tabbed-nav a[href="/administration/challenges"]', { visible: true });
  await tab.click('.nav-tabs.nav.admin-tabbed-nav a[href="/administration/challenges"]');
  let createChallButton = await tab.$(".btn.btn-green.backbone.pull-right");
  let href = await tab.evaluate(function (element) { return element.getAttribute("href") }, createChallButton);
  let createChallengeLink = "https://www.hackerrank.com" + href;
  console.log(createChallengeLink);
  
  

  for(let i=0;i<challenges.length;i++){
   await addChallenge(browser,createChallengeLink,challenges[i]);
  }

 
  
  
  

  

  }) ();
  async function addChallenge(browser,createChallengeLink,challenge){
    let newtab=await browser.newPage();
     await newtab.goto(createChallengeLink);
   // let challenge = challenges[0];
    let challengeName=challenge["Challenge Name"];
    let Description=challenge["Description"];
    let ProblemStatement=challenge["Problem Statement"];
    let InputFormat=challenge["Input Format"];
    let Constraints=challenge["Constraints"];
    let OutputFormat=challenge["Output Format"];
    let Tags=challenge["Tags"];

  await newtab.waitForTimeout(2000);//give some time for the webpage to load
  await newtab.type("#name",challengeName);
  await newtab.type("#preview",Description);
  await newtab.type("#problem_statement-container .CodeMirror  textarea",ProblemStatement);
  await newtab.type("#input_format-container .CodeMirror  textarea",InputFormat);
  await newtab.type("#constraints-container .CodeMirror  textarea",Constraints);
  await newtab.type("#output_format-container .CodeMirror  textarea",OutputFormat);
  await newtab.type("#tags_tag",Tags);
  await newtab.keyboard.press("Enter");
  await newtab.click(".save-challenge.btn.btn-green");
  await newtab.waitForTimeout(3000);
  await newtab.close()

  
  

  }
  //async functions gives promisified functions