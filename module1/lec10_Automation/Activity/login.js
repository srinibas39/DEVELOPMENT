const puppeteer = require("puppeteer");
//puppeteer has promisified functions
let tab;
let idx;
let globalCode;
let Id = "kahecow998@pigicorn.com"
let password = "12345678";
let browserOpenPromise = puppeteer.launch({ headless: false, defaultViewport: null, args: ["--start-maximized"] })
//console.log(browserOpenPromise);
browserOpenPromise.then(function (browser) {
    console.log("browser is opened");
    return browser.pages();
})
    .then(function (pages) {
        console.log(pages);
        tab = pages[0];
        return tab.goto("https://www.hackerrank.com/auth/login");
    })
    .then(function () {
        return tab.type("#input-1", Id);
    })
    .then(function () {
        return tab.type("#input-2", password);
    })
    .then(function () {
        return tab.click(".ui-btn.ui-btn-large.ui-btn-primary.auth-button.ui-btn-styled");
    })
    .then(function () {
        return waitAndClick("#base-card-1-link");

    })
    .then(function () {
        return waitAndClick('a[data-attr1="warmup"]');
    })
    .then(function () {
        return tab.waitForSelector(".js-track-click.challenge-list-item", { visible: true });
    })
    .then(function () {
        return tab.$$(".js-track-click.challenge-list-item");
    })
    //[pendingatags,pendingatags,pendingatags,pendingatags]
    .then(function (atags) {
        //console.log(ArrayOfatags.length);
        let hrefList = [];
        for (let i = 0; i < atags.length; i++) {
            let atag = atags[i];
            let hrefPromise = tab.evaluate(function (element) { return element.getAttribute("href"); }, atag);
            hrefList.push(hrefPromise);
        }
        console.log(hrefList);
        //[promise,promsie,promise,promise]-->[promise]
        return Promise.all(hrefList);


    })
    .then(function (hrefList) {
        console.log(hrefList);
        let oneSolvedQPromise = solveQuestion(hrefList[0]);
        for(let i=1;i<hrefList.length;i++){
          oneSolvedQPromise= oneSolvedQPromise.then(function(){
              let nextQpromise=solveQuestion(hrefList[i])
               return nextQpromise;
          })
            
        }
        return  oneSolvedQPromise;
    })
    .then(function () {
        console.log("All question solved");
    })
    .catch(function (error) {
        console.log(error);
    })
function getCode() {
    return new Promise(function (scb, fcb) {
        let waitPromise = tab.waitForSelector(".hackdown-content h3", { visible: true });
        waitPromise.then(function () {
            return tab.$$(".hackdown-content h3");
        })
            //[promise<pending>,promise<pending>,promise<pending>]
            .then(function (codelangList) {
                //[C++withtag,javawithtag,pythonwithtag]
                let codelangs = [];
                for (let i = 0; i < codelangList.length; i++) {
                    let codelangPromises = tab.evaluate(function (element) { return element.textContent }, codelangList[i]);
                    codelangs.push(codelangPromises);

                }
                let combinePromises = Promise.all(codelangs);
                return combinePromises;

            })
            .then(function (allcodeNames) {
                //[C++,Java.Python]
                console.log(allcodeNames);
                for (let i = 0; i < allcodeNames.length; i++) {
                    if (allcodeNames[i] == "C++") {
                        idx = i;
                        break;
                    }
                }
                return tab.$$(".hackdown-content .highlight");//document.querySelectorall()
            })
            .then(function (allcodeDiv) {
                //console.log(idx);
                let javaCode = allcodeDiv[idx];
                return tab.evaluate(function (element) { return element.textContent; }, javaCode);
            })
            .then(function (code) {
                globalCode = code;
                scb(globalCode);
            })
            .catch(function (error) {
                fcb(error);
            })


    })

}
function pasteCode() {
    return new Promise(function (scb, fcb) {
        let waitandclickPromise = waitAndClick(".checkbox-input");
        waitandclickPromise.then(function () {
            console.log("checkbox is clicked");
            return tab.waitForTimeout(2000);
        })
            .then(function () {
                return tab.type(".custominput",globalCode);
            })
            .then(function () {
                return tab.keyboard.down("Control");
            })
            .then(function () {
                return tab.keyboard.press("A");
            })
            .then(function () {
                return tab.keyboard.press("X");
            })
            .then(function () {
                return tab.click('.monaco-scrollable-element.editor-scrollable.vs');
            })
            .then(function(){
                return tab.keyboard.press("A");
            })
            .then(function () {
                return tab.keyboard.press("V");
            })
            .then(function () {
                return tab.keyboard.up("Control");
            })

            .then(function () {
                scb();
            })
            .catch(function(error){
                console.log(error);
            })
            

    })
}
function handleLockdown(){
    return new Promise(function(scb,fcb){
       let  waitProms=tab.waitForSelector(".ui-btn.ui-btn-normal.ui-btn-primary.ui-btn-styled",{visible:true,setTimeout:5000});
        waitProms.then(function(){
            return tab.$(".ui-btn.ui-btn-normal.ui-btn-primary.ui-btn-styled");//quesySelector
        })
        .then(function(lockdownbutton){
            return tab.evaluate(function(element){return element.click(); },lockdownbutton);
        })
        .then(function(){
            console.log("lock button Found");
            scb();
        })
        .catch(function(){
            console.log("Lock button not Found");
            scb();
        })
        
    })
}
function solveQuestion(QuestionLink) {
    return new Promise(function (scb, fcb) {
        let gotoPromise = tab.goto("https://hackerrank.com" + QuestionLink);
        gotoPromise.then(function () {
            return waitAndClick('div[data-attr2="Editorial"]');

        })  
            .then(function(){
                return handleLockdown();
            })

            .then(function () {
                return getCode();
            })
            .then(function () {
                return tab.click('div[data-attr2="Problem"]');
            })
            .then(function () {
                //console.log(code);
                return pasteCode();
            })
            .then(function () {
                return tab.click(".ui-btn.ui-btn-normal.ui-btn-primary");//Submit button
            })
            .then(function () {
                scb();
            })
            .then(function(){
                console.log("Done");
            })
            .catch(function (error) {
                console.log(error);
            })

    })


}

function waitAndClick(selector) {
    return new Promise(function (scb, fcb) {
        //logic
        let waitPromise = tab.waitForSelector(selector, { visible: true });
        waitPromise.then(function () {
            return tab.click(selector);
        })
            .then(function () {
                scb();
            })
            .catch(function () {
                fcb();
            })
    })
}

/*.then(function(){
    //return tab.waitForSelector("#base-card-1-link",{visible:true});
})
.then(function(){
    return tab.click("#base-card-1-link");
})
.then(function(){
    return tab.waitForSelector('a[data-attr1="warmup"]',{visible:true});
})
.then(function(){
    return tab.click('a[data-attr1="warmup"]');
})
.then(function(){
    console.log("warm up challenges clicked");
})*/
