"use strict";
exports.__esModule = true;
var protractor_1 = require("protractor");
var LoginLocators_1 = require("./Locators/LoginLocators");
var login_1 = require("./Actions/login");
var ExceptionHistoryLocators_1 = require("./Locators/ExceptionHistoryLocators");
var login = new login_1.LoginPageClass;
var exceptionHistoryLoc = new ExceptionHistoryLocators_1.ExceptionHistoryLocators;
var loginLoc = new LoginLocators_1.LoginLocators;
describe('test', function () {
    login.loginPage('permission', 'test');
    protractor_1.browser.sleep(3000);
    protractor_1.browser.get(loginLoc.urlStaging + '/#/analytics/exceptionsHistory').then(function () {
        protractor_1.browser.sleep(3000);
    });
    it('Date picker presence', function () {
        exceptionHistoryLoc.dateFrom.getAttribute("placeholder").then(function (test) {
            console.log(test);
        });
    });
});
