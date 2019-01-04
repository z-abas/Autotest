"use strict";
exports.__esModule = true;
var protractor_1 = require("protractor");
var LoginLocators = /** @class */ (function () {
    function LoginLocators() {
        // Login page
        this.usernameField = protractor_1.element(protractor_1.by.id('username'));
        this.passwordField = protractor_1.element(protractor_1.by.id('password'));
        this.loginBtn1 = protractor_1.element(protractor_1.by.buttonText('Login'));
        this.loginBtn = protractor_1.element(protractor_1.by.className('btn btn-default submit'));
        this.url = 'http://localhost:4200';
    }
    return LoginLocators;
}());
exports.LoginLocators = LoginLocators;