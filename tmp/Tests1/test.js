"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const protractor_1 = require("protractor");
const LoginLocators_1 = require("./Locators/LoginLocators");
const login_1 = require("./Actions/login");
const ExceptionHistoryLocators_1 = require("./Locators/ExceptionHistoryLocators");
const DashboardLocators_1 = require("./Locators/DashboardLocators");
const fs = require("fs");
const login = new login_1.LoginPageClass;
const exceptionHistoryLoc = new ExceptionHistoryLocators_1.ExceptionHistoryLocators;
const loginLoc = new LoginLocators_1.LoginLocators;
const dashboardLoc = new DashboardLocators_1.DashboardLocators;
describe('test', function () {
    login.loginPage('permission', 'test');
    protractor_1.browser.sleep(1500);
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
            fs.writeFile("./Dates.txt", "This is just a test", (err) => {
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
    it('Number Of Rejected Transactions', function () {
        protractor_1.browser.actions().click(dashboardLoc.performanceDate).perform().then(function () {
            dashboardLoc.performanceDate.clear().then(function () {
                dashboardLoc.performanceDate.sendKeys("01012010 - 01012020").then(function () {
                    protractor_1.browser.actions().sendKeys(protractor_1.protractor.Key.ENTER).perform().then(function () {
                        protractor_1.browser.sleep(1500).then(function () {
                            protractor_1.browser.get(loginLoc.urlStaging + '/#/analytics/exceptionsHistory');
                        });
                        //console.log(dashboardLoc.performanceDate)
                    });
                });
            });
        });
    });
    it('Search box labels presence', function () {
        exceptionHistoryLoc.searchBox.getText().then(function (label) {
            expect(label[0]).toBe('Search by');
            expect(label[1]).toBe('Search value');
        });
    });
    it('Search box presence', function () {
        exceptionHistoryLoc.searchOptions.getText().then(function (options) {
            expect(options[0]).toBe('Equipment Obu Id');
            expect(options[1]).toBe('Primary Account Number');
            expect(options[2]).toBe('License Plate');
        });
        expect(exceptionHistoryLoc.searchBox.isPresent()).toBe(true);
    });
    it('Date picker presence', function () {
        expect(exceptionHistoryLoc.dateFrom.isPresent()).toBe(true);
        expect(exceptionHistoryLoc.dateTo.isPresent()).toBe(true);
        exceptionHistoryLoc.dateFrom.getAttribute("placeholder").then(function (datefrom) {
            expect(datefrom).toBe("dd-mm-yyyy");
        });
        exceptionHistoryLoc.dateTo.getAttribute("placeholder").then(function (dateto) {
            expect(dateto).toBe("dd-mm-yyyy");
        });
    });
    it('Search button present', function () {
        expect(exceptionHistoryLoc.searchButton.isPresent()).toBe(true);
    });
    it('Search button disabled', function () {
        expect(exceptionHistoryLoc.searchButton.isEnabled()).toBe(false);
    });
    it('Chart Button present', function () {
        expect(exceptionHistoryLoc.chartButton.isPresent()).toBe(true);
    });
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGVzdC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL1Rlc3RzMS90ZXN0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsMkNBQTZGO0FBQzdGLDREQUF5RDtBQUN6RCwyQ0FBZ0Q7QUFDaEQsa0ZBQThFO0FBQzlFLG9FQUFpRTtBQUNqRSx5QkFBd0I7QUFHeEIsTUFBTSxLQUFLLEdBQUcsSUFBSSxzQkFBYyxDQUFDO0FBQ2pDLE1BQU0sbUJBQW1CLEdBQUcsSUFBSSxtREFBd0IsQ0FBQztBQUN6RCxNQUFNLFFBQVEsR0FBRyxJQUFJLDZCQUFhLENBQUM7QUFFbkMsTUFBTSxZQUFZLEdBQUcsSUFBSSxxQ0FBaUIsQ0FBQTtBQUcxQyxRQUFRLENBQUMsTUFBTSxFQUFFO0lBR2IsS0FBSyxDQUFDLFNBQVMsQ0FBQyxZQUFZLEVBQUUsTUFBTSxDQUFDLENBQUE7SUFDckMsb0JBQU8sQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUM7SUFJcEIsRUFBRSxDQUFDLHFCQUFxQixFQUFFO1FBQ3RCLFlBQVksQ0FBQyxRQUFRLENBQUMsT0FBTyxFQUFFLENBQUMsSUFBSSxDQUFDLFVBQVUsS0FBSztZQUNoRCxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLCtFQUErRSxDQUFDLENBQUE7UUFDMUcsQ0FBQyxDQUFDLENBQUE7SUFDTixDQUFDLENBQUMsQ0FBQTtJQUdGLEVBQUUsQ0FBQyxZQUFZLEVBQUU7UUFFYixZQUFZLENBQUMsUUFBUSxDQUFDLE9BQU8sRUFBRSxDQUFDLElBQUksQ0FBQyxVQUFVLEtBQUs7WUFFaEQsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxzQkFBc0IsQ0FBQyxDQUFBO1lBQzdDLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsOEJBQThCLENBQUMsQ0FBQTtZQUNyRCxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLG1DQUFtQyxDQUFDLENBQUE7WUFDMUQsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxpQ0FBaUMsQ0FBQyxDQUFBO1FBQzVELENBQUMsQ0FBQyxDQUFBO0lBQ04sQ0FBQyxDQUFDLENBQUE7SUFFRixFQUFFLENBQUMsdUJBQXVCLEVBQUMsR0FBRyxFQUFFO1FBQzVCLFlBQVksQ0FBQyxRQUFRLENBQUMsT0FBTyxFQUFFLENBQUMsSUFBSSxDQUFDLENBQUMsTUFBTSxFQUFFLEVBQUU7WUFDNUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxDQUFBO1FBQzdDLENBQUMsQ0FBQyxDQUFBO0lBQ04sQ0FBQyxDQUFDLENBQUE7SUFFRixFQUFFLENBQUMsb0NBQW9DLEVBQUMsR0FBRyxFQUFFO1FBQ3pDLFlBQVksQ0FBQyxRQUFRLENBQUMsT0FBTyxFQUFFLENBQUMsSUFBSSxDQUFDLENBQUMsV0FBVyxFQUFFLEVBQUU7WUFDakQsTUFBTSxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxvQ0FBb0MsQ0FBQyxDQUFBO1FBQ3JFLENBQUMsQ0FBQyxDQUFBO0lBQ04sQ0FBQyxDQUFDLENBQUE7SUFFRixFQUFFLENBQUMsOEJBQThCLEVBQUU7UUFDL0IsWUFBWSxDQUFDLFFBQVEsQ0FBQyxPQUFPLEVBQUUsQ0FBQyxJQUFJLENBQUMsVUFBVSxXQUFXO1lBQ3RELE1BQU0sQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsOEJBQThCLENBQUMsQ0FBQTtRQUMvRCxDQUFDLENBQUMsQ0FBQTtJQUNOLENBQUMsQ0FBQyxDQUFBO0lBRUYsRUFBRSxDQUFDLDBCQUEwQixFQUFFO1FBQzNCLFlBQVksQ0FBQyxRQUFRLENBQUMsT0FBTyxFQUFFLENBQUMsSUFBSSxDQUFDLFVBQVUsS0FBSztZQUNoRCxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLGlCQUFpQixDQUFDLENBQUE7WUFDeEMsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFBO1FBQzNDLENBQUMsQ0FBQyxDQUFBO0lBQ04sQ0FBQyxDQUFDLENBQUE7SUFFRixFQUFFLENBQUMseUJBQXlCLEVBQUU7UUFDMUIsWUFBWSxDQUFDLFFBQVEsQ0FBQyxPQUFPLEVBQUUsQ0FBQyxJQUFJLENBQUMsVUFBUyxHQUFHO1lBQzdDLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsMkJBQTJCLENBQUMsQ0FBQTtRQUNwRCxDQUFDLENBQUMsQ0FBQTtJQUNOLENBQUMsQ0FBQyxDQUFBO0lBRUYsRUFBRSxDQUFDLHlCQUF5QixFQUFFO1FBQzFCLFlBQVksQ0FBQyxRQUFRLENBQUMsT0FBTyxFQUFFLENBQUMsSUFBSSxDQUFDLFVBQVMsR0FBRztZQUM3QyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLGlDQUFpQyxDQUFDLENBQUE7UUFDMUQsQ0FBQyxDQUFDLENBQUE7SUFDTixDQUFDLENBQUMsQ0FBQTtJQUVGLEVBQUUsQ0FBQyx5QkFBeUIsRUFBRTtRQUMxQixZQUFZLENBQUMsUUFBUSxDQUFDLE9BQU8sRUFBRSxDQUFDLElBQUksQ0FBQyxVQUFTLEdBQUc7WUFDN0MsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyx1QkFBdUIsQ0FBQyxDQUFBO1FBQ2hELENBQUMsQ0FBQyxDQUFBO0lBQ04sQ0FBQyxDQUFDLENBQUE7SUFFRixFQUFFLENBQUMseUJBQXlCLEVBQUU7UUFDMUIsWUFBWSxDQUFDLFFBQVEsQ0FBQyxPQUFPLEVBQUUsQ0FBQyxJQUFJLENBQUMsVUFBUyxHQUFHO1lBQzdDLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsdUJBQXVCLENBQUMsQ0FBQTtRQUNoRCxDQUFDLENBQUMsQ0FBQTtJQUNOLENBQUMsQ0FBQyxDQUFBO0lBRUYsRUFBRSxDQUFDLFdBQVcsRUFBRTtRQUNaLFlBQVksQ0FBQyxHQUFHLENBQUMsT0FBTyxFQUFFLENBQUMsSUFBSSxDQUFDLFVBQVUsS0FBSztZQUMzQyxJQUFJLEdBQUcsR0FBRyxLQUFLLEdBQUcsSUFBSSxDQUFBO1lBQ3RCLE9BQU8sQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUE7WUFFaEIsRUFBRSxDQUFDLFNBQVMsQ0FBQyxhQUFhLEVBQUUscUJBQXFCLEVBQUUsQ0FBQyxHQUFHLEVBQUUsRUFBRTtnQkFDdkQsSUFBSSxHQUFHLEVBQUU7b0JBQ0wsT0FBTyxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQztvQkFDbkIsT0FBTztpQkFDVjtnQkFBQSxDQUFDO2dCQUNGLE9BQU8sQ0FBQyxHQUFHLENBQUMsdUJBQXVCLENBQUMsQ0FBQztZQUN6QyxDQUFDLENBQUMsQ0FBQTtRQUNOLENBQUMsQ0FBQyxDQUFBO0lBRU4sQ0FBQyxDQUFDLENBQUE7SUFFRixFQUFFLENBQUMsaUNBQWlDLEVBQUU7UUFDbEMsWUFBWSxDQUFDLFdBQVcsQ0FBQyxPQUFPLEVBQUUsQ0FBQyxJQUFJLENBQUMsVUFBUyxLQUFLO1lBQ2xELE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUE7WUFDbEMsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQTtZQUNuQyxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxDQUFBO1lBQ3BDLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLENBQUE7UUFDekMsQ0FBQyxDQUFDLENBQUE7SUFFTixDQUFDLENBQUMsQ0FBQTtJQUdGLEVBQUUsQ0FBQyxpQ0FBaUMsRUFBRTtRQUNsQyxvQkFBTyxDQUFDLE9BQU8sRUFBRSxDQUFDLEtBQUssQ0FBQyxZQUFZLENBQUMsZUFBZSxDQUFDLENBQUMsT0FBTyxFQUFFLENBQUMsSUFBSSxDQUFDO1lBQ2pFLFlBQVksQ0FBQyxlQUFlLENBQUMsS0FBSyxFQUFFLENBQUMsSUFBSSxDQUFDO2dCQUN0QyxZQUFZLENBQUMsZUFBZSxDQUFDLFFBQVEsQ0FBQyxxQkFBcUIsQ0FBQyxDQUFDLElBQUksQ0FBQztvQkFDOUQsb0JBQU8sQ0FBQyxPQUFPLEVBQUUsQ0FBQyxRQUFRLENBQUMsdUJBQVUsQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLENBQUMsT0FBTyxFQUFFLENBQUMsSUFBSSxDQUFDO3dCQUM1RCxvQkFBTyxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQyxJQUFJLENBQUM7NEJBQ3JCLG9CQUFPLENBQUMsR0FBRyxDQUFDLFFBQVEsQ0FBQyxVQUFVLEdBQUcsZ0NBQWdDLENBQUMsQ0FBQzt3QkFDeEUsQ0FBQyxDQUFDLENBQUE7d0JBQ0YsMkNBQTJDO29CQUMvQyxDQUFDLENBQUMsQ0FBQTtnQkFDTixDQUFDLENBQUMsQ0FBQTtZQUNOLENBQUMsQ0FBQyxDQUFBO1FBRU4sQ0FBQyxDQUFDLENBQUE7SUFHTixDQUFDLENBQUMsQ0FBQTtJQUVGLEVBQUUsQ0FBQyw0QkFBNEIsRUFBRTtRQUU3QixtQkFBbUIsQ0FBQyxTQUFTLENBQUMsT0FBTyxFQUFFLENBQUMsSUFBSSxDQUFDLFVBQVUsS0FBSztZQUN4RCxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDO1lBQ25DLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLENBQUM7UUFDMUMsQ0FBQyxDQUFDLENBQUE7SUFFTixDQUFDLENBQUMsQ0FBQTtJQUVGLEVBQUUsQ0FBQyxxQkFBcUIsRUFBRTtRQUV0QixtQkFBbUIsQ0FBQyxhQUFhLENBQUMsT0FBTyxFQUFFLENBQUMsSUFBSSxDQUFDLFVBQVUsT0FBTztZQUM5RCxNQUFNLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLGtCQUFrQixDQUFDLENBQUE7WUFDM0MsTUFBTSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyx3QkFBd0IsQ0FBQyxDQUFBO1lBQ2pELE1BQU0sQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsZUFBZSxDQUFDLENBQUE7UUFDNUMsQ0FBQyxDQUFDLENBQUE7UUFFRixNQUFNLENBQUMsbUJBQW1CLENBQUMsU0FBUyxDQUFDLFNBQVMsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBRWpFLENBQUMsQ0FBQyxDQUFBO0lBR0YsRUFBRSxDQUFDLHNCQUFzQixFQUFFO1FBQ3ZCLE1BQU0sQ0FBQyxtQkFBbUIsQ0FBQyxRQUFRLENBQUMsU0FBUyxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUE7UUFDM0QsTUFBTSxDQUFDLG1CQUFtQixDQUFDLE1BQU0sQ0FBQyxTQUFTLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQTtRQUN6RCxtQkFBbUIsQ0FBQyxRQUFRLENBQUMsWUFBWSxDQUFDLGFBQWEsQ0FBQyxDQUFDLElBQUksQ0FBQyxVQUFTLFFBQVE7WUFDM0UsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQTtRQUN2QyxDQUFDLENBQUMsQ0FBQTtRQUNGLG1CQUFtQixDQUFDLE1BQU0sQ0FBQyxZQUFZLENBQUMsYUFBYSxDQUFDLENBQUMsSUFBSSxDQUFDLFVBQVMsTUFBTTtZQUN2RSxNQUFNLENBQUMsTUFBTSxDQUFDLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFBO1FBQ3JDLENBQUMsQ0FBQyxDQUFBO0lBQ04sQ0FBQyxDQUFDLENBQUE7SUFFRixFQUFFLENBQUMsdUJBQXVCLEVBQUU7UUFDeEIsTUFBTSxDQUFDLG1CQUFtQixDQUFDLFlBQVksQ0FBQyxTQUFTLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQTtJQUNuRSxDQUFDLENBQUMsQ0FBQTtJQUNGLEVBQUUsQ0FBQyx3QkFBd0IsRUFBRTtRQUN6QixNQUFNLENBQUMsbUJBQW1CLENBQUMsWUFBWSxDQUFDLFNBQVMsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFBO0lBQ3BFLENBQUMsQ0FBQyxDQUFBO0lBQ0YsRUFBRSxDQUFDLHNCQUFzQixFQUFFO1FBQ3ZCLE1BQU0sQ0FBQyxtQkFBbUIsQ0FBQyxXQUFXLENBQUMsU0FBUyxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUE7SUFDbEUsQ0FBQyxDQUFDLENBQUE7QUFLTixDQUFDLENBQUMsQ0FBQSJ9