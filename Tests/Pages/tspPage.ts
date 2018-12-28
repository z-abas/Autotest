import { browser, element, by, By, $, $$, ExpectedConditions, protractor } from 'protractor';
import { Locators } from './Locators';

export class TspPage {
    TSP() {
        const locators = new Locators();
        browser.get(locators.url + '/#/tsp')
    }
    constructor() { }
}
