"use strict";
exports.__esModule = true;
var protractor_1 = require("protractor");
var Locators_1 = require("./Locators");
//Change Email
var TSPemail = /** @class */ (function () {
    function TSPemail() {
    }
    TSPemail.prototype.tspEmail = function () {
        var locators = new Locators_1.Locators;
        locators.tspEmail.clear();
        protractor_1.browser.sleep(2000);
        locators.tspEmail.sendKeys('test@test.com');
        locators.tspSubmitBtn.click();
    };
    ;
    return TSPemail;
}());
exports.TSPemail = TSPemail;
;
