exports.config={
	seleniumAddress: 'http://localhost:4444/wd/hub',
	specs: ['specs.js'],
	framework: 'jasmine2',
	onPrepare: function(){
		var jasmineReporters=require('C:/Users/zabas/Desktop/Protractor/First/node_modules/jasmine-reporters');
		jasmine.getEnv().addReporter(new jasmineReporters.JUnitXmlReporter(null, true, true));
	
	}
};