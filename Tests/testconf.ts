exports.config={
	seleniumAddress: 'http://localhost:4444/wd/hub',
	
		
	specs: ['test.1.js'],
	capabilities: {
		browserName: 'chrome',
		chromeOptions: {
			args: [
				'--start-maximized'
			]
		}
	}
	/*framework: 'jasmine2',
	onPrepare: function(){
		var jasmineReporters=require('C:/Users/zabas/Desktop/Protractor/node_modules/jasmine');
		jasmine.getEnv().addReporter(new jasmineReporters.JUnitXmlReporter(null, true, true));
	
	}*/
};