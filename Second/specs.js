describe('Protractor Demo APP', function(){
    it('Should add one and two', function(){
        browser.get('http://juliemr.github.io/protractor-demo/')
    var firstBox = element(by.model('first'));
    var secondBox = element(by.model('second'));
    var goButton = element(by.id('gobutton'));
    var result = element(by.binding('latest'))    

    firstBox.sendKeys(3);
    secondBox.sendKeys(2);
    goButton.click();

    expect(result.getText()).toEqual('5')
    });
});