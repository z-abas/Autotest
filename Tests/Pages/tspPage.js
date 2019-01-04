"use strict";
exports.__esModule = true;
var protractor_1 = require("protractor");
var TSPLocators_1 = require("../Locators/TSPLocators");
var LoginLocators_1 = require("../Locators/LoginLocators");
var TspPage = /** @class */ (function () {
    function TspPage() {
    }
    TspPage.prototype.TSP = function () {
        var tspLocators = new TSPLocators_1.TSPLocators();
        var loginLocators = new LoginLocators_1.LoginLocators();
        protractor_1.browser.get(loginLocators.url + '/#/tsp');
    };
    return TspPage;
}());
exports.TspPage = TspPage;
