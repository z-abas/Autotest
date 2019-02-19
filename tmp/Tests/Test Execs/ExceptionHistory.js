"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const protractor_1 = require("protractor");
const LoginLocators_1 = require("../Locators/LoginLocators");
const login_1 = require("../Actions/login");
const ExceptionHistoryLocators_1 = require("../Locators/ExceptionHistoryLocators");
const login = new login_1.LoginPageClass;
const exceptionHistoryLoc = new ExceptionHistoryLocators_1.ExceptionHistoryLocators;
const loginLoc = new LoginLocators_1.LoginLocators;
describe('Exception history elements test', function () {
    login.loginPage('permission', 'test');
    protractor_1.browser.sleep(2000);
    protractor_1.browser.get(loginLoc.urlStaging + '/#/analytics/exceptionsHistory');
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRXhjZXB0aW9uSGlzdG9yeS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL1Rlc3RzL1Rlc3QgRXhlY3MvRXhjZXB0aW9uSGlzdG9yeS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLDJDQUFpRjtBQUNqRiw2REFBMEQ7QUFDMUQsNENBQWlEO0FBQ2pELG1GQUErRTtBQUUvRSxNQUFNLEtBQUssR0FBRyxJQUFJLHNCQUFjLENBQUM7QUFDakMsTUFBTSxtQkFBbUIsR0FBRyxJQUFJLG1EQUF3QixDQUFDO0FBQ3pELE1BQU0sUUFBUSxHQUFHLElBQUksNkJBQWEsQ0FBQztBQUduQyxRQUFRLENBQUMsaUNBQWlDLEVBQUU7SUFFeEMsS0FBSyxDQUFDLFNBQVMsQ0FBQyxZQUFZLEVBQUUsTUFBTSxDQUFDLENBQUE7SUFDckMsb0JBQU8sQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDcEIsb0JBQU8sQ0FBQyxHQUFHLENBQUMsUUFBUSxDQUFDLFVBQVUsR0FBRyxnQ0FBZ0MsQ0FBQyxDQUFDO0lBRXBFLEVBQUUsQ0FBQyw0QkFBNEIsRUFBRTtRQUU3QixtQkFBbUIsQ0FBQyxTQUFTLENBQUMsT0FBTyxFQUFFLENBQUMsSUFBSSxDQUFDLFVBQVUsS0FBSztZQUN4RCxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDO1lBQ25DLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLENBQUM7UUFDMUMsQ0FBQyxDQUFDLENBQUE7SUFFTixDQUFDLENBQUMsQ0FBQTtJQUVGLEVBQUUsQ0FBQyxxQkFBcUIsRUFBRTtRQUV0QixtQkFBbUIsQ0FBQyxhQUFhLENBQUMsT0FBTyxFQUFFLENBQUMsSUFBSSxDQUFDLFVBQVUsT0FBTztZQUM5RCxNQUFNLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLGtCQUFrQixDQUFDLENBQUE7WUFDM0MsTUFBTSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyx3QkFBd0IsQ0FBQyxDQUFBO1lBQ2pELE1BQU0sQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsZUFBZSxDQUFDLENBQUE7UUFDNUMsQ0FBQyxDQUFDLENBQUE7UUFFRixNQUFNLENBQUMsbUJBQW1CLENBQUMsU0FBUyxDQUFDLFNBQVMsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBRWpFLENBQUMsQ0FBQyxDQUFBO0lBR0YsRUFBRSxDQUFDLHNCQUFzQixFQUFFO1FBQ3ZCLE1BQU0sQ0FBQyxtQkFBbUIsQ0FBQyxRQUFRLENBQUMsU0FBUyxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUE7UUFDM0QsTUFBTSxDQUFDLG1CQUFtQixDQUFDLE1BQU0sQ0FBQyxTQUFTLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQTtRQUN6RCxtQkFBbUIsQ0FBQyxRQUFRLENBQUMsWUFBWSxDQUFDLGFBQWEsQ0FBQyxDQUFDLElBQUksQ0FBQyxVQUFTLFFBQVE7WUFDM0UsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQTtRQUN2QyxDQUFDLENBQUMsQ0FBQTtRQUNGLG1CQUFtQixDQUFDLE1BQU0sQ0FBQyxZQUFZLENBQUMsYUFBYSxDQUFDLENBQUMsSUFBSSxDQUFDLFVBQVMsTUFBTTtZQUN2RSxNQUFNLENBQUMsTUFBTSxDQUFDLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFBO1FBQ3JDLENBQUMsQ0FBQyxDQUFBO0lBQ04sQ0FBQyxDQUFDLENBQUE7SUFFRixFQUFFLENBQUMsdUJBQXVCLEVBQUU7UUFDeEIsTUFBTSxDQUFDLG1CQUFtQixDQUFDLFlBQVksQ0FBQyxTQUFTLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQTtJQUNuRSxDQUFDLENBQUMsQ0FBQTtJQUNGLEVBQUUsQ0FBQyx3QkFBd0IsRUFBRTtRQUN6QixNQUFNLENBQUMsbUJBQW1CLENBQUMsWUFBWSxDQUFDLFNBQVMsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFBO0lBQ3BFLENBQUMsQ0FBQyxDQUFBO0lBQ0YsRUFBRSxDQUFDLHNCQUFzQixFQUFFO1FBQ3ZCLE1BQU0sQ0FBQyxtQkFBbUIsQ0FBQyxXQUFXLENBQUMsU0FBUyxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUE7SUFDbEUsQ0FBQyxDQUFDLENBQUE7QUFJTixDQUFDLENBQUMsQ0FBQSJ9