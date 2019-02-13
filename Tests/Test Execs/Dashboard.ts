import { browser, element, by, By, $, $$, ExpectedConditions, protractor } from 'protractor';
import { LoginLocators } from '../Locators/LoginLocators';
import { LoginPageClass } from '../Actions/login'
import { DashboardLocators } from '../Locators/DashboardLocators'
import * as fs from "fs"

const login = new LoginPageClass;
const dashboardLoc = new DashboardLocators;

describe('Dashboard elements test', function () {

    login.loginPage('permission', 'test')
    //browser.get(loginLoc.urlStaging + dashboardLoc.dashboardUrl);

    it('Days statistic text', function () {
        dashboardLoc.kpiTitle.getText().then(function (title) {
            expect(title[0]).toBe("Last 7 day(s) statistic(s)\n(Statistics from minimum 1 day to maximum 7 days)")
        })
    })


    it('KPI Titles', function () {

        dashboardLoc.kpiTitle.getText().then(function (title) {

            expect(title[1]).toBe("Transactions Fee Sum")
            expect(title[2]).toBe("Number Of Processed Vehicles")
            expect(title[3]).toBe("Number Of Successful Transactions")
            expect(title[4]).toBe("Number Of Rejected Transactions")
        })
    })

    it('Upcoming events title',() => {
        dashboardLoc.kpiTitle.getText().then((events) => {
            expect(events[5]).toBe("Upcoming events")
        })
    })

    it('Transactions and Files Performance',() => {
        dashboardLoc.kpiTitle.getText().then((performance) => {
            expect(performance[6]).toBe("Transactions and Files Performance")
        })
    })

    it('OBE Transactions Performance', function () {
        dashboardLoc.kpiTitle.getText().then(function (performance) {
            expect(performance[7]).toBe("OBE Transactions Performance")
        })
    })

    it('Processed/Rejected Files', function () {
        dashboardLoc.kpiTitle.getText().then(function (files) {
            expect(files[8]).toBe("Processed Files")
            expect(files[9]).toBe("Rejected Files")
        })
    })

    it('Subtitle 1st KPI Widget', function(){
        dashboardLoc.subTitle.getText().then(function(kpi){
            expect(kpi[0]).toBe("Today\'s Transactions Fee")
        })
    })

    it('Subtitle 2nd KPI Widget', function(){
        dashboardLoc.subTitle.getText().then(function(kpi){
            expect(kpi[1]).toBe("Number Of Unique Vehicles Today")
        })
    })

    it('Subtitle 3rd KPI Widget', function(){
        dashboardLoc.subTitle.getText().then(function(kpi){
            expect(kpi[2]).toBe("Today\'s Transactions")
        })
    })

    it('Subtitle 4th KPI Widget', function(){
        dashboardLoc.subTitle.getText().then(function(kpi){
            expect(kpi[3]).toBe("Today\'s Transactions")
        })
    })

    it('Dates log', function () {
        dashboardLoc.tfs.getText().then(function (trans) {
            let str = trans + "\n"
            console.log(str)
            
            fs.writeFile("./Dates.txt", str, (err) => {
                if (err) {
                    console.error(err);
                    return;
                };
                console.log("File has been created");
            })
        })

    })

    it('Number Of Rejected Transactions', function () {
        dashboardLoc.eventsTable.getText().then(function(table){
            expect(table[0]).toBe('File Type')
            expect(table[1]).toBe('Event Type')
            expect(table[2]).toBe('Event start')
            expect(table[3]).toBe('Event Status')
        })
           
    })

    it('Change date on files performance', function(){
        browser.actions().click(dashboardLoc.performanceDate).perform().then(function () {
            dashboardLoc.performanceDate.clear().then(function () {
                dashboardLoc.performanceDate.sendKeys("01012010 - 01012019").then(function () {
                    browser.actions().sendKeys(protractor.Key.ENTER).perform().then(function () {
                        browser.sleep(3000)
                        expect(dashboardLoc.performanceDate.getText()).toBe("01.01.2010 - 01.01.2019")
                    })
                })
            })

        })
    
    
    })

})