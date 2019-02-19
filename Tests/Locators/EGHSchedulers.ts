import { browser, element, by, By, $, $$, ExpectedConditions } from 'protractor';

export class EGHSchedulers {
    // EasyGo Hub Schedulers page
    dashboardUrl = "/#/administration/easyGoScheduler"
    job = element(by.xpath("//div[@class='col-md-6 col-sm-6 col-xs-12']//ng-select[@name='selectedFileJob']//input[@type='text']"))
    
    
    fileType = element(by.xpath("/html[1]/body[1]/div[1]/app-root[1]/app-shell[1]/div[1]/div[1]/div[2]/easygoscheduler[1]/div[1]/div[2]/div[2]/div[1]/div[1]/div[2]/form[1]/div[2]/div[1]/ng-select[1]/div[1]/div[1]/div[3]"))
    sequence = element(by.xpath("/html[1]/body[1]/div[1]/app-root[1]/app-shell[1]/div[1]/div[1]/div[2]/easygoscheduler[1]/div[1]/div[2]/div[2]/div[1]/div[1]/div[2]/form[1]/div[2]/div[1]/ng-select[1]/div[1]/div[1]/div[3]"))

    hourFrom = element(by.name("hourFrom"))
    minutesFrom = element(by.name("minutesFrom"))
    hourTo = element(by.name("hourTo"))
    minutesTo = element(by.name("minutesTo"))
    interval = element(by.name("intervalInMinutes"))
    generateTicSwitch = element(by.css("label[for=generateAutoJobForTicFile"))
    hour = element(by.name("hour"))
    minutes = element(by.name("minutes"))
    checkForChanges = element(by.css("label[for=checkForChanges"))
    newBtn = element(by.id("send"))
    cancelBtn = element(by.buttonText("Cancel"))
    startTimeEndTimeError = element.all(by.css("div[class*=alert]"))
    clear = element.all(by.css('span[title*="Clear"]'))
    
    eventsTable = element.all(by.deepCss("th"))
    performanceDate = element(by.css('input[class*="drpInput"]'))

    constructor() { }

}
