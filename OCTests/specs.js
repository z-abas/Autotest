"use strict";
exports.__esModule = true;
var Login_1 = require("./Login");
var protractor_1 = require("protractor");
describe('Login to OC', function () {
    it('should log in', function () {
        var ocLoginPage = new Login_1.OCLoginPage();
        ocLoginPage.get();
        ocLoginPage.enterCredentials('permission', 'test');
        protractor_1.browser.wait(function () {
            2000;
        });
    });
});
