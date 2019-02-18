"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const protractor_1 = require("protractor");
const LoginLocators_1 = require("./Locators/LoginLocators");
const login_1 = require("./Actions/login");
const ExceptionHistoryLocators_1 = require("./Locators/ExceptionHistoryLocators");
const DashboardLocators_1 = require("./Locators/DashboardLocators");
const EGHSchedulers_1 = require("./Locators/EGHSchedulers");
const login = new login_1.LoginPageClass;
const exceptionHistoryLoc = new ExceptionHistoryLocators_1.ExceptionHistoryLocators;
const loginLoc = new LoginLocators_1.LoginLocators;
const dashboardLoc = new DashboardLocators_1.DashboardLocators;
const eghschedLoc = new EGHSchedulers_1.EGHSchedulers;
describe('test', function () {
    login.loginPage('super_user', 'superuser');
    protractor_1.browser.sleep(1500);
    it('validation test', function () {
        protractor_1.browser.get("http://188.130.168.34:8062/#/administration/easyGoScheduler");
        eghschedLoc.job.click().then(function () {
            eghschedLoc.job.sendKeys("Download").then(function () {
                protractor_1.browser.actions().sendKeys(protractor_1.protractor.Key.ENTER).perform().then(function () {
                    eghschedLoc.fileType.sendKeys("TIF").then(function () {
                        eghschedLoc.sequence.sendKeys("First").then(function () {
                            protractor_1.browser.actions().sendKeys(protractor_1.protractor.Key.TAB).perform().then(function () {
                                protractor_1.browser.actions().sendKeys("15").perform().then(function () {
                                    protractor_1.browser.sleep(5000);
                                });
                            });
                        });
                    });
                });
            });
            protractor_1.browser.sleep(5000);
        });
    });
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGVzdC4xLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vVGVzdHMvdGVzdC4xLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsMkNBQTZGO0FBQzdGLDREQUF5RDtBQUN6RCwyQ0FBZ0Q7QUFDaEQsa0ZBQThFO0FBQzlFLG9FQUFpRTtBQUVqRSw0REFBeUQ7QUFHekQsTUFBTSxLQUFLLEdBQUcsSUFBSSxzQkFBYyxDQUFDO0FBQ2pDLE1BQU0sbUJBQW1CLEdBQUcsSUFBSSxtREFBd0IsQ0FBQztBQUN6RCxNQUFNLFFBQVEsR0FBRyxJQUFJLDZCQUFhLENBQUM7QUFFbkMsTUFBTSxZQUFZLEdBQUcsSUFBSSxxQ0FBaUIsQ0FBQTtBQUMxQyxNQUFNLFdBQVcsR0FBRyxJQUFJLDZCQUFhLENBQUE7QUFHckMsUUFBUSxDQUFDLE1BQU0sRUFBRTtJQUdiLEtBQUssQ0FBQyxTQUFTLENBQUMsWUFBWSxFQUFFLFdBQVcsQ0FBQyxDQUFBO0lBQzFDLG9CQUFPLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDO0lBSXBCLEVBQUUsQ0FBQyxpQkFBaUIsRUFBRTtRQUNsQixvQkFBTyxDQUFDLEdBQUcsQ0FBQyw2REFBNkQsQ0FBQyxDQUFBO1FBQzFFLFdBQVcsQ0FBQyxHQUFHLENBQUMsS0FBSyxFQUFFLENBQUMsSUFBSSxDQUFDO1lBQ3pCLFdBQVcsQ0FBQyxHQUFHLENBQUMsUUFBUSxDQUFDLFVBQVUsQ0FBQyxDQUFDLElBQUksQ0FBQztnQkFDdEMsb0JBQU8sQ0FBQyxPQUFPLEVBQUUsQ0FBQyxRQUFRLENBQUMsdUJBQVUsQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLENBQUMsT0FBTyxFQUFFLENBQUMsSUFBSSxDQUFDO29CQUM5RCxXQUFXLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsQ0FBQyxJQUFJLENBQUM7d0JBQ3hDLFdBQVcsQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQyxDQUFDLElBQUksQ0FBQzs0QkFDeEMsb0JBQU8sQ0FBQyxPQUFPLEVBQUUsQ0FBQyxRQUFRLENBQUMsdUJBQVUsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUMsT0FBTyxFQUFFLENBQUMsSUFBSSxDQUFDO2dDQUMxRCxvQkFBTyxDQUFDLE9BQU8sRUFBRSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsQ0FBQyxPQUFPLEVBQUUsQ0FBQyxJQUFJLENBQUM7b0NBQzVDLG9CQUFPLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFBO2dDQUN2QixDQUFDLENBQUMsQ0FBQTs0QkFDTixDQUFDLENBQUMsQ0FBQTt3QkFDRixDQUFDLENBQUMsQ0FBQTtvQkFFTixDQUFDLENBQUMsQ0FBQTtnQkFFTixDQUFDLENBQUMsQ0FBQTtZQUNOLENBQUMsQ0FBQyxDQUFBO1lBQ0Ysb0JBQU8sQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUE7UUFDdkIsQ0FBQyxDQUFDLENBQUE7SUFHTixDQUFDLENBQUMsQ0FBQTtBQUNOLENBQUMsQ0FBQyxDQUFBIn0=