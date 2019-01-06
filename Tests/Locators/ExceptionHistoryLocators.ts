import { browser, element, by, By, $, $$, ExpectedConditions } from 'protractor';

export class ExceptionHistoryLocators {
    // Exeption History page
    searchBox = element.all(by.css("label[for=pan]"))
    searchOptions = element.all(by.tagName("option"))
    title = element(by.css("div[class='x-title']"));
    searchBy = element(by.css("div[class*=col"));
    optionsBox = element(by.css("div[class=form-group]"))
    exHistUrl = ('/#/analytics/exceptionsHistory')
    dateFrom = element(by.id("dateFrom"))
    dateTo = element(by.id("dateTo"))
    searchButton = element(by.buttonText("Search"))
    chartButton = element(by.buttonText("Display As Chart"))
    constructor() { }

}
