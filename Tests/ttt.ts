import { browser, element, by, By, $, $$, ExpectedConditions, protractor } from 'protractor';
import { LoginLocators } from './Locators/LoginLocators';
import { TSPLocators } from './Locators/tspLocators';
import { LoginPageClass } from '../Tests/Actions/login'
import { TspPage } from '../Tests/Pages/tspPage'
import { TSPemail } from '../Tests/Actions/TSPActions'
import * as fs from "fs"

const loginLocators = new LoginLocators;
const tspLocators = new TSPLocators;

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

    });

    it('Should read changed email', function(){
                tspLocators.tspEmail.getText().then(function (test) {
                let emajl = test;
                console.log('Text je: ', emajl);

                expect(tspLocators.tspEmail.getText()).toBe('test@test.com');


                /*fs.writeFile("./sample.txt", emajl, (err) => {
                    if (err) {
                        console.error(err);
                        return;
                    };
                    console.log("File has been created");
                });*/
            });
        });




    
})

