"use strict";
exports.__esModule = true;
var protractor_1 = require("protractor");
var OCLoginPage = /** @class */ (function () {
    function OCLoginPage() {
        this.usernameField = protractor_1.element(protractor_1.by.id('username'));
        this.passwordField = protractor_1.element(protractor_1.by.id('password'));
        this.loginBtn = protractor_1.element(protractor_1.by.buttonText('Login'));
    }
    OCLoginPage.prototype.get = function () {
        protractor_1.browser.get('http://localhost:4200');
    };
    OCLoginPage.prototype.enterCredentials = function (username, password) {
        this.usernameField.sendKeys(username);
        this.passwordField.sendKeys(password);
    };
    return OCLoginPage;
}());
exports.OCLoginPage = OCLoginPage;
