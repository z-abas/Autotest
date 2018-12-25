describe('Protractor DEMO app', function(){
    var firstNumber=element(by.model('first'));
        secondNumber=element(by.model('second'));
        goButton=element(by.id('gobutton'));
        result=element(by.binding('latest'));
        history=element.all(by.repeater('result in memory'));

        function add(a, b){
            firstNumber.sendKeys(a);
            secondNumber.sendKeys(b);
            goButton.click();
        }

        beforeEach(function(){
            browser.get('http://juliemr.github.io/protractor-demo/');
        })

        it('Should have a history',function(){
            add(1,3)
            add(5,2)
            expect(history.count()).toEqual(2);
            add(6,6);
            expect(history.count()).toEqual(3);

        })



})