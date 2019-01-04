"use strict";
exports.__esModule = true;
var TSPLocators_1 = require("../Locators/TSPLocators");
//Change Email
var TSPemail = /** @class */ (function () {
    function TSPemail() {
    }
    TSPemail.prototype.tspEmail = function () {
        var locators = new TSPLocators_1.TSPLocators;
        locators.tspEmail.clear();
        locators.tspEmail.sendKeys('test@test.com');
        locators.tspSubmitBtn.click();
    };
    ;
    return TSPemail;
}());
exports.TSPemail = TSPemail;
;
