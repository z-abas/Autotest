"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const protractor_1 = require("protractor");
const login_1 = require("../Actions/login");
const DashboardLocators_1 = require("../Locators/DashboardLocators");
const fs = require("fs");
const login = new login_1.LoginPageClass;
const dashboardLoc = new DashboardLocators_1.DashboardLocators;
describe('Dashboard elements test', function () {
    login.loginPage('permission', 'test');
    //browser.get(loginLoc.urlStaging + dashboardLoc.dashboardUrl);
    it('Days statistic text', function () {
        dashboardLoc.kpiTitle.getText().then(function (title) {
            expect(title[0]).toBe("Last 7 day(s) statistic(s)\n(Statistics from minimum 1 day to maximum 7 days)");
        });
    });
    it('KPI Titles', function () {
        dashboardLoc.kpiTitle.getText().then(function (title) {
            expect(title[1]).toBe("Transactions Fee Sum");
            expect(title[2]).toBe("Number Of Processed Vehicles");
            expect(title[3]).toBe("Number Of Successful Transactions");
            expect(title[4]).toBe("Number Of Rejected Transactions");
        });
    });
    it('Upcoming events title', () => {
        dashboardLoc.kpiTitle.getText().then((events) => {
            expect(events[5]).toBe("Upcoming events");
        });
    });
    it('Transactions and Files Performance', () => {
        dashboardLoc.kpiTitle.getText().then((performance) => {
            expect(performance[6]).toBe("Transactions and Files Performance");
        });
    });
    it('OBE Transactions Performance', function () {
        dashboardLoc.kpiTitle.getText().then(function (performance) {
            expect(performance[7]).toBe("OBE Transactions Performance");
        });
    });
    it('Processed/Rejected Files', function () {
        dashboardLoc.kpiTitle.getText().then(function (files) {
            expect(files[8]).toBe("Processed Files");
            expect(files[9]).toBe("Rejected Files");
        });
    });
    it('Subtitle 1st KPI Widget', function () {
        dashboardLoc.subTitle.getText().then(function (kpi) {
            expect(kpi[0]).toBe("Today\'s Transactions Fee");
        });
    });
    it('Subtitle 2nd KPI Widget', function () {
        dashboardLoc.subTitle.getText().then(function (kpi) {
            expect(kpi[1]).toBe("Number Of Unique Vehicles Today");
        });
    });
    it('Subtitle 3rd KPI Widget', function () {
        dashboardLoc.subTitle.getText().then(function (kpi) {
            expect(kpi[2]).toBe("Today\'s Transactions");
        });
    });
    it('Subtitle 4th KPI Widget', function () {
        dashboardLoc.subTitle.getText().then(function (kpi) {
            expect(kpi[3]).toBe("Today\'s Transactions");
        });
    });
    it('Dates log', function () {
        dashboardLoc.tfs.getText().then(function (trans) {
            let str = trans + "\n";
            console.log(str);
            fs.writeFile("./Dates.txt", str, (err) => {
                if (err) {
                    console.error(err);
                    return;
                }
                ;
                console.log("File has been created");
            });
        });
    });
    it('Number Of Rejected Transactions', function () {
        dashboardLoc.eventsTable.getText().then(function (table) {
            expect(table[0]).toBe('File Type');
            expect(table[1]).toBe('Event Type');
            expect(table[2]).toBe('Event start');
            expect(table[3]).toBe('Event Status');
        });
    });
    it('Change date on files performance', function () {
        protractor_1.browser.actions().click(dashboardLoc.performanceDate).perform().then(function () {
            dashboardLoc.performanceDate.clear().then(function () {
                dashboardLoc.performanceDate.sendKeys("01012010 - 01012019").then(function () {
                    protractor_1.browser.actions().sendKeys(protractor_1.protractor.Key.ENTER).perform().then(function () {
                        protractor_1.browser.sleep(3000);
                        expect(dashboardLoc.performanceDate.getText()).toBe("01.01.2010 - 01.01.2019");
                    });
                });
            });
        });
    });
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRGFzaGJvYXJkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vVGVzdHMvVGVzdCBFeGVjcy9EYXNoYm9hcmQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSwyQ0FBNkY7QUFFN0YsNENBQWlEO0FBQ2pELHFFQUFpRTtBQUNqRSx5QkFBd0I7QUFFeEIsTUFBTSxLQUFLLEdBQUcsSUFBSSxzQkFBYyxDQUFDO0FBQ2pDLE1BQU0sWUFBWSxHQUFHLElBQUkscUNBQWlCLENBQUM7QUFFM0MsUUFBUSxDQUFDLHlCQUF5QixFQUFFO0lBRWhDLEtBQUssQ0FBQyxTQUFTLENBQUMsWUFBWSxFQUFFLE1BQU0sQ0FBQyxDQUFBO0lBQ3JDLCtEQUErRDtJQUUvRCxFQUFFLENBQUMscUJBQXFCLEVBQUU7UUFDdEIsWUFBWSxDQUFDLFFBQVEsQ0FBQyxPQUFPLEVBQUUsQ0FBQyxJQUFJLENBQUMsVUFBVSxLQUFLO1lBQ2hELE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsK0VBQStFLENBQUMsQ0FBQTtRQUMxRyxDQUFDLENBQUMsQ0FBQTtJQUNOLENBQUMsQ0FBQyxDQUFBO0lBR0YsRUFBRSxDQUFDLFlBQVksRUFBRTtRQUViLFlBQVksQ0FBQyxRQUFRLENBQUMsT0FBTyxFQUFFLENBQUMsSUFBSSxDQUFDLFVBQVUsS0FBSztZQUVoRCxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLHNCQUFzQixDQUFDLENBQUE7WUFDN0MsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyw4QkFBOEIsQ0FBQyxDQUFBO1lBQ3JELE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsbUNBQW1DLENBQUMsQ0FBQTtZQUMxRCxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMs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