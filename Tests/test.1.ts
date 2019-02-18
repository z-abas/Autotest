import { browser, element, by, By, $, $$, ExpectedConditions, protractor } from 'protractor';
import { LoginLocators } from './Locators/LoginLocators';
import { LoginPageClass } from './Actions/login'
import { ExceptionHistoryLocators } from './Locators/ExceptionHistoryLocators'
import { DashboardLocators } from './Locators/DashboardLocators';
import * as fs from "fs"
import { EGHSchedulers } from './Locators/EGHSchedulers';


const login = new LoginPageClass;
const exceptionHistoryLoc = new ExceptionHistoryLocators;
const loginLoc = new LoginLocators;

const dashboardLoc = new DashboardLocators
const eghschedLoc = new EGHSchedulers


describe('test', function () {


    login.loginPage('super_user', 'superuser')
    browser.sleep(1500);



    it('validation test', function(){
        browser.get("http://188.130.168.34:8062/#/administration/easyGoScheduler")
        eghschedLoc.job.click().then(function(){
            eghschedLoc.job.sendKeys("Download").then(function(){
                browser.actions().sendKeys(protractor.Key.ENTER).perform().then(function(){
                  eghschedLoc.fileType.sendKeys("TIF").then(function(){
                    eghschedLoc.sequence.sendKeys("First").then(function(){
                        browser.actions().sendKeys(protractor.Key.TAB).perform().then(function(){
                            browser.actions().sendKeys("15").perform().then(function(){
                                browser.sleep(5000)
                            })
                        })
                        })

                    })

                })
            })
            browser.sleep(5000)
        })

        
    })
})

