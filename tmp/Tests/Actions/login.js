"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const protractor_1 = require("protractor");
const LoginLocators_1 = require("../Locators/LoginLocators");
class LoginPageClass {
    loginPage(username, password) {
        const locators = new LoginLocators_1.LoginLocators();
        protractor_1.browser.get(locators.urlStaging);
        locators.usernameField.sendKeys(username);
        locators.passwordField.sendKeys(password);
        protractor_1.browser.actions().sendKeys(protractor_1.protractor.Key.ENTER).perform();
        protractor_1.browser.sleep(1000);
    }
    ;
    constructor() { }
}
exports.LoginPageClass = LoginPageClass;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9naW4uanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9UZXN0cy9BY3Rpb25zL2xvZ2luLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsMkNBQTZGO0FBQzdGLDZEQUEwRDtBQUUxRDtJQUNJLFNBQVMsQ0FBQyxRQUFRLEVBQUUsUUFBUTtRQUN4QixNQUFNLFFBQVEsR0FBRyxJQUFJLDZCQUFhLEVBQUUsQ0FBQztRQUNyQyxvQkFBTyxDQUFDLEdBQUcsQ0FBQyxRQUFRLENBQUMsVUFBVSxDQUFDLENBQUM7UUFDakMsUUFBUSxDQUFDLGFBQWEsQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLENBQUM7UUFDMUMsUUFBUSxDQUFDLGFBQWEsQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLENBQUM7UUFDMUMsb0JBQU8sQ0FBQyxPQUFPLEVBQUUsQ0FBQyxRQUFRLENBQUMsdUJBQVUsQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLENBQUMsT0FBTyxFQUFFLENBQUM7UUFDM0Qsb0JBQU8sQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUM7SUFJeEIsQ0FBQztJQUFBLENBQUM7SUFDRixnQkFBYyxDQUFDO0NBQ2xCO0FBYkQsd0NBYUMifQ==