import { browser, element, by, By, $, $$, ExpectedConditions, protractor } from 'protractor';
import { LoginLocators } from './Locators/LoginLocators';
import { LoginPageClass } from './Actions/login'
import { ExceptionHistoryLocators } from './Locators/ExceptionHistoryLocators'
import { DashboardLocators } from './Locators/DashboardLocators';
import * as fs from "fs"
import { EGHSchedulers } from './Locators/EGHSchedulers';
import { setScheduler } from './Actions/setScheduler';
import { clearLine } from 'readline';


const login = new LoginPageClass;
const setSched = new setScheduler;
const exceptionHistoryLoc = new ExceptionHistoryLocators;
const loginLoc = new LoginLocators;

const dashboardLoc = new DashboardLocators
const eghschedLoc = new EGHSchedulers


describe('test', function () {


    login.loginPage('super_user', 'superuser')
    browser.sleep(1500).then(function () {
        browser.get("http://188.130.168.34:8062/#/administration/easyGoScheduler")
    })

    it('new btn disabled', function () {
        expect(eghschedLoc.newBtn.isEnabled()).toBe(false)
    })
    it('new btn disabled', function () {
        setSched.schedulerDL('Download', 'tif', 'first', '15', '15', '14', '15', '1')
        expect(eghschedLoc.newBtn.isEnabled()).toBe(false).then(function () {
            eghschedLoc.startTimeEndTimeError.getText().then(function (error) {
                expect(error[8]).toBe('End time cannot be before start time')
            })
        })

        browser.sleep(2000)
    })

    it('validations on set new dl job', function () {
        setSched.schedulerCLS()
        
            eghschedLoc.startTimeEndTimeError.getText().then(function (error) {
                console.log(error)
                // expect(error[0]).toBe('This field is required')
                // expect(error[1]).toBe('This field is required')
                // expect(error[2]).toBe('This field is required')
                // expect(error[3]).toBe('This field is required')
                // expect(error[4]).toBe('This field is required')
                // expect(error[5]).toBe('This field is required')
                // expect(error[6]).toBe('This field is required')
                // expect(error[7]).toBe('This field is required')
                // expect(error[8]).toBe('End time cannot be before start time')
            
        })
       
    })





    it('validation test', function () {
        browser.get("http://188.130.168.34:8062/#/administration/easyGoScheduler")

        setSched.schedulerDL('Download', 'tif', 'first', '15', '15', '16', '15', '1')
        expect(eghschedLoc.generateTicSwitch.isSelected()).toBe(false)
        eghschedLoc.generateTicSwitch.click()
        browser.sleep(2000)
    })

    // it ('create multiple scheduler jobs', function(){
    //     setSched.schedulerUL('')

    // })
})

