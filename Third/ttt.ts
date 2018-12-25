import { timeout } from "q";

import {browser, element, by, By, $, $$, ExpectedConditions} from 'protractor';

describe('OC test', function(){
    it('Should read the value', function(){
        browser.get('http://localhost:4200')
        let usernameField = element(by.id('username'));
        let passwordField = element(by.id('password'));
        let loginBtn = element(by.buttonText('Login'));

        usernameField.sendKeys('permission');
        passwordField.sendKeys('test');
        loginBtn.click();

        browser.get('http://localhost:4200/#/tsp');
        timeout(2000, 'ms');
        //expect(browser.getTitle()).toEqual('Toll Service Providers')

    });

});