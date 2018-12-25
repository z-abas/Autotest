import { timeout } from "q";

// import {browser, element, by, By, $, $$, ExpectedConditions} from 'protractor';

describe('OC test', function(){
    it('Should read the value', function(){
        browser.get('http://localhost:4200')
        var usernameField = element(by.id('username'));
            passwordField = element(by.id('password'));
            loginBtn = element(by.buttonText('Login');

        usernameField.sendKeys('permission');
        passwordField.sendKeys('test');
        loginBtn.click();

        browser.get('http://localhost:4200/#/tsp');
        timeout(2000);
        //expect(browser.getTitle()).toEqual('Toll Service Providers')

    });

});