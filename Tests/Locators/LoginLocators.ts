import {browser, element, by, By, $, $$, ExpectedConditions} from 'protractor';

export class LoginLocators {
// Login page
    usernameField = element(by.id('username'));
    passwordField = element(by.id('password'));
    loginBtn1 = element(by.buttonText('Login'));
    loginBtn = element(by.className('btn btn-default submit'))
    url = 'http://localhost:4200';

    constructor(){}

}
