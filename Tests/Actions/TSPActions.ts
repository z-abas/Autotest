import {browser, element, by, By, $, $$, ExpectedConditions, protractor} from 'protractor';
import {TSPLocators} from '../Locators/TSPLocators';


//Change Email
export class TSPemail {
    tspEmail () {
        const locators = new TSPLocators;
        locators.tspEmail.clear()
        locators.tspEmail.sendKeys('test@test.com');
        locators.tspSubmitBtn.click()
    };
    constructor(){}
};
