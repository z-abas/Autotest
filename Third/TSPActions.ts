import {browser, element, by, By, $, $$, ExpectedConditions, protractor} from 'protractor';
import {Locators} from './Locators';


//Change Email
export class TSPemail {
    tspEmail () {
        const locators = new Locators;
        locators.tspEmail.clear()
        browser.sleep(2000)
        locators.tspEmail.sendKeys('test@test.com');
        locators.tspSubmitBtn.click()
    };
    constructor(){}
};
