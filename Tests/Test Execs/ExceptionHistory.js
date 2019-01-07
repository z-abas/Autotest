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
    protractor_1.browser.get(loginLoc.urlStaging + '/#/analytics/exceptionsHistory');
    it('Search box labels presence', function () {
        exceptionHistoryLoc.searchBox.getText().then(function (label) {
            expect(label[0]).toBe('Search by');
            expect(label[1]).toBe('Search value');
        });
    });
    it('Search box presence', function () {
        exceptionHistoryLoc.searchOptions.getText().then(function (options) {
            expect(options[0]).toBe('Equipment Obu Id');
            expect(options[1]).toBe('Primary Account Number');
            expect(options[2]).toBe('License Plate');
        });
        expect(exceptionHistoryLoc.searchBox.isPresent()).toBe(true);
    });
    it('Date picker presence', function () {
        expect(exceptionHistoryLoc.dateFrom.isPresent()).toBe(true);
        expect(exceptionHistoryLoc.dateTo.isPresent()).toBe(true);
        exceptionHistoryLoc.dateFrom.getAttribute("placeholder").then(function (datefrom) {
            expect(datefrom).toBe("dd-mm-yyyy");
        });
        exceptionHistoryLoc.dateTo.getAttribute("placeholder").then(function (dateto) {
            expect(dateto).toBe("dd-mm-yyyy");
        });
    });
    it('Search button present', function () {
        expect(exceptionHistoryLoc.searchButton.isPresent()).toBe(true);
    });
    it('Search button disabled', function () {
        expect(exceptionHistoryLoc.searchButton.isEnabled()).toBe(false);
    });
    it('Chart Button present', function () {
        expect(exceptionHistoryLoc.chartButton.isPresent()).toBe(true);
    });
});
