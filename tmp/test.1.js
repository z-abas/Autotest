"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const protractor_1 = require("protractor");
const LoginLocators_1 = require("./Locators/LoginLocators");
const login_1 = require("./Actions/login");
const ExceptionHistoryLocators_1 = require("./Locators/ExceptionHistoryLocators");
const DashboardLocators_1 = require("./Locators/DashboardLocators");
const EGHSchedulers_1 = require("./Locators/EGHSchedulers");
const setScheduler_1 = require("./Actions/setScheduler");
const login = new login_1.LoginPageClass;
const setSched = new setScheduler_1.setScheduler;
const exceptionHistoryLoc = new ExceptionHistoryLocators_1.ExceptionHistoryLocators;
const loginLoc = new LoginLocators_1.LoginLocators;
const dashboardLoc = new DashboardLocators_1.DashboardLocators;
const eghschedLoc = new EGHSchedulers_1.EGHSchedulers;
describe('test', function () {
    login.loginPage('super_user', 'superuser');
    protractor_1.browser.sleep(1500).then(function () {
        protractor_1.browser.get("http://188.130.168.34:8062/#/administration/easyGoScheduler");
    });
    it('new btn disabled', function () {
        expect(eghschedLoc.newBtn.isEnabled()).toBe(false);
    });
    it('new btn disabled', function () {
        setSched.schedulerDL('Download', 'tif', 'first', '15', '15', '14', '15', '1');
        expect(eghschedLoc.newBtn.isEnabled()).toBe(false).then(function () {
            eghschedLoc.startTimeEndTimeError.getText().then(function (error) {
                expect(error[8]).toBe('End time cannot be before start time');
            });
        });
        protractor_1.browser.sleep(2000);
    });
    it('validations on set new dl job', function () {
        setSched.schedulerCLS();
        eghschedLoc.startTimeEndTimeError.getText().then(function (error) {
            console.log(error);
            // expect(error[0]).toBe('This field is required')
            // expect(error[1]).toBe('This field is required')
            // expect(error[2]).toBe('This field is required')
            // expect(error[3]).toBe('This field is required')
            // expect(error[4]).toBe('This field is required')
            // expect(error[5]).toBe('This field is required')
            // expect(error[6]).toBe('This field is required')
            // expect(error[7]).toBe('This field is required')
            // expect(error[8]).toBe('End time cannot be before start time')
        });
    });
    it('validation test', function () {
        protractor_1.browser.get("http://188.130.168.34:8062/#/administration/easyGoScheduler");
        setSched.schedulerDL('Download', 'tif', 'first', '15', '15', '16', '15', '1');
        expect(eghschedLoc.generateTicSwitch.isSelected()).toBe(false);
        eghschedLoc.generateTicSwitch.click();
        protractor_1.browser.sleep(2000);
    });
    // it ('create multiple scheduler jobs', function(){
    //     setSched.schedulerUL('')
    // })
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGVzdC4xLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vVGVzdHMvdGVzdC4xLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsMkNBQTZGO0FBQzdGLDREQUF5RDtBQUN6RCwyQ0FBZ0Q7QUFDaEQsa0ZBQThFO0FBQzlFLG9FQUFpRTtBQUVqRSw0REFBeUQ7QUFDekQseURBQXNEO0FBSXRELE1BQU0sS0FBSyxHQUFHLElBQUksc0JBQWMsQ0FBQztBQUNqQyxNQUFNLFFBQVEsR0FBRyxJQUFJLDJCQUFZLENBQUM7QUFDbEMsTUFBTSxtQkFBbUIsR0FBRyxJQUFJLG1EQUF3QixDQUFDO0FBQ3pELE1BQU0sUUFBUSxHQUFHLElBQUksNkJBQWEsQ0FBQztBQUVuQyxNQUFNLFlBQVksR0FBRyxJQUFJLHFDQUFpQixDQUFBO0FBQzFDLE1BQU0sV0FBVyxHQUFHLElBQUksNkJBQWEsQ0FBQTtBQUdyQyxRQUFRLENBQUMsTUFBTSxFQUFFO0lBR2IsS0FBSyxDQUFDLFNBQVMsQ0FBQyxZQUFZLEVBQUUsV0FBVyxDQUFDLENBQUE7SUFDMUMsb0JBQU8sQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUMsSUFBSSxDQUFDO1FBQ3JCLG9CQUFPLENBQUMsR0FBRyxDQUFDLDZEQUE2RCxDQUFDLENBQUE7SUFDOUUsQ0FBQyxDQUFDLENBQUE7SUFFRixFQUFFLENBQUMsa0JBQWtCLEVBQUU7UUFDbkIsTUFBTSxDQUFDLFdBQVcsQ0FBQyxNQUFNLENBQUMsU0FBUyxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUE7SUFDdEQsQ0FBQyxDQUFDLENBQUE7SUFDRixFQUFFLENBQUMsa0JBQWtCLEVBQUU7UUFDbkIsUUFBUSxDQUFDLFdBQVcsQ0FBQyxVQUFVLEVBQUUsS0FBSyxFQUFFLE9BQU8sRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsR0FBRyxDQUFDLENBQUE7UUFDN0UsTUFBTSxDQUFDLFdBQVcsQ0FBQyxNQUFNLENBQUMsU0FBUyxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsSUFBSSxDQUFDO1lBQ3BELFdBQVcsQ0FBQyxxQkFBcUIsQ0FBQyxPQUFPLEVBQUUsQ0FBQyxJQUFJLENBQUMsVUFBVSxLQUFLO2dCQUM1RCxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLHNDQUFzQyxDQUFDLENBQUE7WUFDakUsQ0FBQyxDQUFDLENBQUE7UUFDTixDQUFDLENBQUMsQ0FBQTtRQUVGLG9CQUFPLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFBO0lBQ3ZCLENBQUMsQ0FBQyxDQUFBO0lBRUYsRUFBRSxDQUFDLCtCQUErQixFQUFFO1FBQ2hDLFFBQVEsQ0FBQyxZQUFZLEVBQUUsQ0FBQTtRQUVuQixXQUFXLENBQUMscUJBQXFCLENBQUMsT0FBTyxFQUFFLENBQUMsSUFBSSxDQUFDLFVBQVUsS0FBSztZQUM1RCxPQUFPLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFBO1lBQ2xCLGtEQUFrRDtZQUNsRCxrREFBa0Q7WUFDbEQsa0RBQWtEO1lBQ2xELGtEQUFrRDtZQUNsRCxrREFBa0Q7WUFDbEQsa0RBQWtEO1lBQ2xELGtEQUFrRDtZQUNsRCxrREFBa0Q7WUFDbEQsZ0VBQWdFO1FBRXhFLENBQUMsQ0FBQyxDQUFBO0lBRU4sQ0FBQyxDQUFDLENBQUE7SUFNRixFQUFFLENBQUMsaUJBQWlCLEVBQUU7UUFDbEIsb0JBQU8sQ0FBQyxHQUFHLENBQUMsNkRBQTZELENBQUMsQ0FBQTtRQUUxRSxRQUFRLENBQUMsV0FBVyxDQUFDLFVBQVUsRUFBRSxLQUFLLEVBQUUsT0FBTyxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxHQUFHLENBQUMsQ0FBQTtRQUM3RSxNQUFNLENBQUMsV0FBVyxDQUFDLGlCQUFpQixDQUFDLFVBQVUsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFBO1FBQzlELFdBQVcsQ0FBQyxpQkFBaUIsQ0FBQyxLQUFLLEVBQUUsQ0FBQTtRQUNyQyxvQkFBTyxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQTtJQUN2QixDQUFDLENBQUMsQ0FBQTtJQUVGLG9EQUFvRDtJQUNwRCwrQkFBK0I7SUFFL0IsS0FBSztBQUNULENBQUMsQ0FBQyxDQUFBIn0=