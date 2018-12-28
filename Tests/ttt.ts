import { browser, element, by, By, $, $$, ExpectedConditions, protractor } from 'protractor';
import { Locators } from './Locators';
import { LoginPageClass } from './login'
import { TspPage } from './tspPage'
import { TSPemail } from './TSPActions'
import * as fs from "fs"

const locators = new Locators;

describe('Login page', function () {
    const login = new LoginPageClass();
    it('Should log in', function () {
        login.loginPage();
        expect(browser.getTitle()).toEqual('Dashboard')
    })
    const tsp = new TspPage();
    it('Should go to TSP', function () {
        tsp.TSP();
        expect(browser.getTitle()).toEqual('Toll Service Providers')
    })
    const tspEmail = new TSPemail();
    it('Should change email', function () {
        tspEmail.tspEmail();
        browser.sleep(2000)
        let test = ('Text is: ' + locators.tspEmail.getText());
        browser.sleep(2000);

        console.log('Text je: ', test);

        fs.writeFile("./sample.txt", test, (err) => {
            if (err) {
                console.error(err);
                return;
            };
            console.log("File has been created");
        });
        browser.sleep(120000);


        expect(locators.tspEmail.getText()).toEqual('test@test.com')

    })
})

