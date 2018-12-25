"use strict";
exports.__esModule = true;
exports.config = {
    framework: 'jasmine2',
    capabilities: {
        browserName: 'chrome'
    },
    specs: ['specs.js'],
    seleniumAddress: 'http://localhost:4444/wd/hub'
};
