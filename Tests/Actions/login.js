"use strict";
exports.__esModule = true;
var protractor_1 = require("protractor");
var LoginLocators_1 = require("../Locators/LoginLocators");
var LoginPageClass = /** @class */ (function () {
    function LoginPageClass() {
    }
    LoginPageClass.prototype.loginPage = function (username, password) {
        var locators = new LoginLocators_1.LoginLocators();
        protractor_1.browser.get(locators.urlStaging);
        locators.usernameField.sendKeys(username);
        locators.passwordField.sendKeys(password);
        protractor_1.browser.actions().sendKeys(protractor_1.protractor.Key.ENTER).perform();
        protractor_1.browser.sleep(1000);
    };
    ;
    return LoginPageClass;
}());
exports.LoginPageClass = LoginPageClass;
