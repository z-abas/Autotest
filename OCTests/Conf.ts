import {Config} from 'protractor';

export let config: Config = {
  framework: 'jasmine2',
  capabilities: {
    browserName: 'chrome'
  },
  specs: [ 'specs.js' ],
  seleniumAddress: 'http://localhost:4444/wd/hub'
};