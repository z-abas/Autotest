"use strict";
exports.__esModule = true;
var protractor_1 = require("protractor");
var Locators_1 = require("./Locators");
var TspPage = /** @class */ (function () {
    function TspPage() {
    }
    TspPage.prototype.TSP = function () {
        var locators = new Locators_1.Locators();
        protractor_1.browser.get(locators.url + '/#/tsp');
    };
    return TspPage;
}());
exports.TspPage = TspPage;
