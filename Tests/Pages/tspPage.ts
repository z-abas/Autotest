import { browser, element, by, By, $, $$, ExpectedConditions, protractor } from 'protractor';
import { TSPLocators } from '../Locators/TSPLocators';
import { LoginLocators } from '../Locators/LoginLocators'

export class TspPage {
    TSP() {
        const tspLocators = new TSPLocators();
        const loginLocators = new LoginLocators();
        browser.get(loginLocators.url + '/#/tsp')
    }
    constructor() { }
}
