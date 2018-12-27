import { browser, element, by, By, $, $$, ExpectedConditions, protractor } from 'protractor';
import { Locators } from './Locators';

export class LoginPageClass {
    loginPage() {
        const locators = new Locators();
        browser.get(locators.url);
        locators.usernameField.sendKeys('permission');
        locators.passwordField.sendKeys('test');
        browser.actions().sendKeys(protractor.Key.ENTER).perform();

        

    };
    constructor(){}
}

