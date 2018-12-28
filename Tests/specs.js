import {browser, element, by, By, $, $$, ExpectedConditions} from 'protractor';

describe('Protractor DEMO App', function(){
    var firstNumber = element(by.model('first'));
    var secondNumber = element(by.model('second'));
    var goButton = element(by.id('gobutton'));
    var result = element(by.binding('latest'));

    beforeEach(function(){
        browser.get('http://juliemr.github.io/protractor-demo/');
    });

    it('Should have a title', function(){
        expect(browser.getTitle()).toEqual('Super Calculator');
    })

    it('Should add 1 and 2', function(){
        firstNumber.sendKeys(1);
        secondNumber.sendKeys(2);
        goButton.click();
        expect(result.getText()).toEqual('3');
    })

    it('Should add 4 and 6', function(){
        firstNumber.sendKeys(4);
        secondNumber.sendKeys(6);
        goButton.click();
        expect(result.getText()).toEqual('10');
    })

    it('Should read the value of input', function(){
        firstNumber.sendKeys(8);
        expect(firstNumber.getAttribute('value')).toEqual('8');
    });

});