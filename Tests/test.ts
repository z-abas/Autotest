import { browser, element, by, By, $, $$, ExpectedConditions } from 'protractor';
import { LoginLocators } from './Locators/LoginLocators';
import { LoginPageClass } from './Actions/login'
import { ExceptionHistoryLocators } from './Locators/ExceptionHistoryLocators'

const login = new LoginPageClass;
const exceptionHistoryLoc = new ExceptionHistoryLocators;
const loginLoc = new LoginLocators;


describe('test', function () {

    login.loginPage('permission', 'test')
    browser.sleep(3000);
    browser.get(loginLoc.urlStaging + '/#/analytics/exceptionsHistory').then(function{
        browser.sleep(3000);
    });

   


    it('Date picker presence', function(){

        exceptionHistoryLoc.dateFrom.getAttribute("placeholder").then(function(test){
            console.log(test);
        })
        
    })

   
})

