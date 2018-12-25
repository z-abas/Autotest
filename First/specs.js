describe('Protractor Demo App', function(){
	it('Should have a name - Super Calculator', function(){
		browser.get('http://juliemr.github.io/protractor-demo/');
		
		expect(browser.getTitle()).toEqual('Super Calculator')
	});
});