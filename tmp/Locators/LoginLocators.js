"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const protractor_1 = require("protractor");
class LoginLocators {
    constructor() {
        // Login page
        this.usernameField = protractor_1.element(protractor_1.by.id('username'));
        this.passwordField = protractor_1.element(protractor_1.by.id('password'));
        this.loginBtn1 = protractor_1.element(protractor_1.by.buttonText('Login'));
        this.loginBtn = protractor_1.element(protractor_1.by.className('btn btn-default submit'));
        this.urlLocal = 'http://localhost:4200';
        this.urlStaging = 'http://188.130.168.34:8062';
    }
}
exports.LoginLocators = LoginLocators;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiTG9naW5Mb2NhdG9ycy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL1Rlc3RzL0xvY2F0b3JzL0xvZ2luTG9jYXRvcnMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSwyQ0FBK0U7QUFFL0U7SUFRSTtRQVBKLGFBQWE7UUFDVCxrQkFBYSxHQUFHLG9CQUFPLENBQUMsZUFBRSxDQUFDLEVBQUUsQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDO1FBQzNDLGtCQUFhLEdBQUcsb0JBQU8sQ0FBQyxlQUFFLENBQUMsRUFBRSxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUM7UUFDM0MsY0FBUyxHQUFHLG9CQUFPLENBQUMsZUFBRSxDQUFDLFVBQVUsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDO1FBQzVDLGFBQVEsR0FBRyxvQkFBTyxDQUFDLGVBQUUsQ0FBQyxTQUFTLENBQUMsd0JBQXdCLENBQUMsQ0FBQyxDQUFBO1FBQzFELGFBQVEsR0FBRyx1QkFBdUIsQ0FBQztRQUNuQyxlQUFVLEdBQUcsNEJBQTRCLENBQUE7SUFDM0IsQ0FBQztDQUVsQjtBQVZELHNDQVVDIn0=