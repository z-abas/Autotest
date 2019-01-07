import { browser, element, by, By, $, $$, ExpectedConditions, protractor } from 'protractor';
import { LoginLocators } from './Locators/LoginLocators';
import { LoginPageClass } from './Actions/login'
import { ExceptionHistoryLocators } from './Locators/ExceptionHistoryLocators'
import { DashboardLocators } from './Locators/DashboardLocators';
import * as fs from "fs"


const login = new LoginPageClass;
const exceptionHistoryLoc = new ExceptionHistoryLocators;
const loginLoc = new LoginLocators;

const dashboardLoc = new DashboardLocators


describe('test', function () {


    login.loginPage('permission', 'test')


    it('Number Of Rejected Transactions', function () {
        browser.actions().click(dashboardLoc.performanceDate).perform().then(function () {
            dashboardLoc.performanceDate.clear().then(function () {
                dashboardLoc.performanceDate.sendKeys("01012010 - 01012019").then(function () {
                    browser.actions().sendKeys(protractor.Key.ENTER).perform().then(function () {
                        browser.sleep(3000)
                        console.log(dashboardLoc.performanceDate)
                    })
                })
            })

        })


    })


})

