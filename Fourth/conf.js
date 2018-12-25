exports.config={
	seleniumAddress: 'http://localhost:4444/wd/hub',
	
	specs: ['specs.js'],
    framework: 'jasmine2',
  jasmineNodeOpts: {
    showColors: true,
    defaultTimeoutInterval: 30000,
    print: function() {}
  },
    capabilities:{
        'browserName':'chrome',
        'chromeOptions':{
            'args':["start-maximized"]
        },
        

    },

    
	onPrepare: function(){
		var jasmineReporters=require('C:/Users/zabas/Desktop/Protractor/First/node_modules/jasmine-reporters');
		jasmine.getEnv().addReporter(new jasmineReporters.JUnitXmlReporter(null, true, true));
	
	}
};