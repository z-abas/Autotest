import {browser, element, by} from 'protractor';

export class OCLoginPage{
    usernameField = element(by.id('username'));
    passwordField = element(by.id('password'));
    loginBtn = element(by.buttonText('Login'));
    

    get(operatorsConsole){
        browser.get(operatorsConsole)
    }

    enterCredentials(username: string, password: string){
        this.usernameField.sendKeys(username);
        this.passwordField.sendKeys(password);
    }

  
}

