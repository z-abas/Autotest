import {OCLoginPage} from './Login';
import { browser, element } from 'protractor';


describe('Login to OC', function(){
   
    it('should log in', function(){
        let ocLoginPage = new OCLoginPage();
        ocLoginPage.get();
        ocLoginPage.enterCredentials('permission', 'test');

        
    })    
})
