"use strict";
exports.__esModule = true;
var protractor_1 = require("protractor");
var locators = require("./Locators");
var TSP = function () {
    this.tsp = function () {
        protractor_1.browser.get(locators.url + '/#/tsp');
    };
};
module.exports = TSP;
