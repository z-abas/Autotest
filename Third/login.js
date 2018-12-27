"use strict";
exports.__esModule = true;
var protractor_1 = require("protractor");
var Locators_1 = require("./Locators");
var LoginPageClass = /** @class */ (function () {
    function LoginPageClass() {
    }
    LoginPageClass.prototype.loginPage = function () {
        var locators = new Locators_1.Locators();
        protractor_1.browser.get(locators.url);
        locators.usernameField.sendKeys('permission');
        locators.passwordField.sendKeys('test');
        protractor_1.browser.actions().sendKeys(protractor_1.protractor.Key.ENTER).perform();
    };
    ;
    return LoginPageClass;
}());
exports.LoginPageClass = LoginPageClass;
