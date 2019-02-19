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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRGFzaGJvYXJkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vVGVzdHMxL1Rlc3QgRXhlY3MvRGFzaGJvYXJkLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsMkNBQTZGO0FBRTdGLDRDQUFpRDtBQUNqRCxxRUFBaUU7QUFDakUseUJBQXdCO0FBRXhCLE1BQU0sS0FBSyxHQUFHLElBQUksc0JBQWMsQ0FBQztBQUNqQyxNQUFNLFlBQVksR0FBRyxJQUFJLHFDQUFpQixDQUFDO0FBRTNDLFFBQVEsQ0FBQyx5QkFBeUIsRUFBRTtJQUVoQyxLQUFLLENBQUMsU0FBUyxDQUFDLFlBQVksRUFBRSxNQUFNLENBQUMsQ0FBQTtJQUNyQywrREFBK0Q7SUFFL0QsRUFBRSxDQUFDLHFCQUFxQixFQUFFO1FBQ3RCLFlBQVksQ0FBQyxRQUFRLENBQUMsT0FBTyxFQUFFLENBQUMsSUFBSSxDQUFDLFVBQVUsS0FBSztZQUNoRCxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLCtFQUErRSxDQUFDLENBQUE7UUFDMUcsQ0FBQyxDQUFDLENBQUE7SUFDTixDQUFDLENBQUMsQ0FBQTtJQUdGLEVBQUUsQ0FBQyxZQUFZLEVBQUU7UUFFYixZQUFZLENBQUMsUUFBUSxDQUFDLE9BQU8sRUFBRSxDQUFDLElBQUksQ0FBQyxVQUFVLEtBQUs7WUFFaEQsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxzQkFBc0IsQ0FBQyxDQUFBO1lBQzdDLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsOEJBQThCLENBQUMsQ0FBQTtZQUNyRCxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLG1DQUFtQyxDQUFDLENBQUE7WUFDMUQsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFD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