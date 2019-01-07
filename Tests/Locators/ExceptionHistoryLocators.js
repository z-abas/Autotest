"use strict";
exports.__esModule = true;
var protractor_1 = require("protractor");
var ExceptionHistoryLocators = /** @class */ (function () {
    function ExceptionHistoryLocators() {
        // Exeption History page
        this.searchBox = protractor_1.element.all(protractor_1.by.css("label[for=pan]"));
        this.searchOptions = protractor_1.element.all(protractor_1.by.tagName("option"));
        this.title = protractor_1.element(protractor_1.by.css("div[class='x-title']"));
        this.searchBy = protractor_1.element(protractor_1.by.css("div[class*=col"));
        this.optionsBox = protractor_1.element(protractor_1.by.css("div[class=form-group]"));
        this.exHistUrl = ('/#/analytics/exceptionsHistory');
        this.dateFrom = protractor_1.element(protractor_1.by.id("dateFrom"));
        this.dateTo = protractor_1.element(protractor_1.by.id("dateTo"));
        this.searchButton = protractor_1.element(protractor_1.by.buttonText("Search"));
        this.chartButton = protractor_1.element(protractor_1.by.buttonText("Display As Chart"));
        // Table
        this.tableHeader = protractor_1.element.all(protractor_1.by);
    }
    return ExceptionHistoryLocators;
}());
exports.ExceptionHistoryLocators = ExceptionHistoryLocators;
