"use strict";
exports.__esModule = true;
var protractor_1 = require("protractor");
var LoginLocators_1 = require("./Locators/LoginLocators");
var tspLocators_1 = require("./Locators/tspLocators");
var login_1 = require("../Tests/Actions/login");
var tspPage_1 = require("../Tests/Pages/tspPage");
var TSPActions_1 = require("../Tests/Actions/TSPActions");
var loginLocators = new LoginLocators_1.LoginLocators;
var tspLocators = new tspLocators_1.TSPLocators;
describe('Login page', function () {
    var login = new login_1.LoginPageClass();
    it('Should log in', function () {
        login.loginPage();
        expect(protractor_1.browser.getTitle()).toEqual('Dashboard');
    });
    var tsp = new tspPage_1.TspPage();
    it('Should go to TSP', function () {
        tsp.TSP();
        expect(protractor_1.browser.getTitle()).toEqual('Toll Service Providers');
    });
    var tspEmail = new TSPActions_1.TSPemail();
    it('Should change email', function () {
        tspEmail.tspEmail();
    });
    it('Should read changed email', function () {
        tspLocators.tspEmail.getText().then(function (test) {
            var emajl = test;
            console.log('Text je: ', emajl);
            expect(tspLocators.tspEmail.getText()).toBe('test@test.com');
            /*fs.writeFile("./sample.txt", emajl, (err) => {
                if (err) {
                    console.error(err);
                    return;
                };
                console.log("File has been created");
            });*/
        });
    });
});
