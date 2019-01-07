"use strict";
exports.__esModule = true;
var protractor_1 = require("protractor");
var LoginLocators_1 = require("./Locators/LoginLocators");
var login_1 = require("./Actions/login");
var ExceptionHistoryLocators_1 = require("./Locators/ExceptionHistoryLocators");
var DashboardLocators_1 = require("./Locators/DashboardLocators");
var login = new login_1.LoginPageClass;
var exceptionHistoryLoc = new ExceptionHistoryLocators_1.ExceptionHistoryLocators;
var loginLoc = new LoginLocators_1.LoginLocators;
var dashboardLoc = new DashboardLocators_1.DashboardLocators;
describe('test', function () {
    login.loginPage('permission', 'test');
    it('Number Of Rejected Transactions', function () {
        protractor_1.browser.actions().click(dashboardLoc.performanceDate).perform().then(function () {
            dashboardLoc.performanceDate.clear().then(function () {
                dashboardLoc.performanceDate.sendKeys("01012010 - 01012019").then(function () {
                    protractor_1.browser.actions().sendKeys(protractor_1.protractor.Key.ENTER).perform().then(function () {
                        protractor_1.browser.sleep(3000);
                        console.log(dashboardLoc.performanceDate);
                    });
                });
            });
        });
    });
});
