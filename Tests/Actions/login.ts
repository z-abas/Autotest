import { browser, element, by, By, $, $$, ExpectedConditions, protractor } from 'protractor';
import { LoginLocators } from '../Locators/LoginLocators';

export class LoginPageClass {
    loginPage(username, password) {
        const locators = new LoginLocators();
        browser.get(locators.urlStaging);
        locators.usernameField.sendKeys(username);
        locators.passwordField.sendKeys(password);
        browser.actions().sendKeys(protractor.Key.ENTER).perform();
        browser.sleep(1000);

        

    };
    constructor(){}
}

