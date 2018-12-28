"use strict";
exports.__esModule = true;
var protractor_1 = require("protractor");
var Locators_1 = require("./Locators");
var login_1 = require("./login");
var tspPage_1 = require("./tspPage");
var TSPActions_1 = require("./TSPActions");
var fs = require("fs");
var locators = new Locators_1.Locators;
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
        protractor_1.browser.sleep(2000);
        var test = ('Text is: ' + locators.tspEmail.getText());
        protractor_1.browser.sleep(2000);
        console.log('Text je: ', test);
        fs.writeFile("./sample.txt", test, function (err) {
            if (err) {
                console.error(err);
                return;
            }
            ;
            console.log("File has been created");
        });
        protractor_1.browser.sleep(120000);
        expect(locators.tspEmail.getText()).toEqual('test@test.com');
    });
});
