exports.config = {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGVzdGNvbmYuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9UZXN0cy90ZXN0Y29uZi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLENBQUMsTUFBTSxHQUFDO0lBQ2QsZUFBZSxFQUFFLDhCQUE4QjtJQUcvQyxLQUFLLEVBQUUsQ0FBQyxXQUFXLENBQUM7SUFDcEIsWUFBWSxFQUFFO1FBQ2IsV0FBVyxFQUFFLFFBQVE7UUFDckIsYUFBYSxFQUFFO1lBQ2QsSUFBSSxFQUFFO2dCQUNMLG1CQUFtQjthQUNuQjtTQUNEO0tBQ0Q7SUFDRDs7Ozs7T0FLRztDQUNILENBQUMifQ==