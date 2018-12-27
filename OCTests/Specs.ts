import {OCLoginPage} from './Login';
import { browser, element } from 'protractor';

var operatorsConsole = 'http:localhost:4200'
var tspname = 

describe('Login to OC', function(){
   
    it('should log in', function(){
        let ocLoginPage = new OCLoginPage();
        ocLoginPage.get(operatorsConsole);
        ocLoginPage.enterCredentials('permission', 'test');

        browser.get(operatorsConsole + '/#/tsp');

        expect()
    })    
})
