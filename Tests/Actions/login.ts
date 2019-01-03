import { browser, element, by, By, $, $$, ExpectedConditions, protractor } from 'protractor';
import { LoginLocators } from '../Locators/LoginLocators';

export class LoginPageClass {
    loginPage() {
        const locators = new LoginLocators();
        browser.get(locators.url);
        locators.usernameField.sendKeys('permission');
        locators.passwordField.sendKeys('test');
        browser.actions().sendKeys(protractor.Key.ENTER).perform();

        

    };
    constructor(){}
}

