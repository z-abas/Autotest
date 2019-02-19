"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const protractor_1 = require("protractor");
const TSPLocators_1 = require("../Locators/TSPLocators");
const LoginLocators_1 = require("../Locators/LoginLocators");
class TspPage {
    TSP() {
        const tspLocators = new TSPLocators_1.TSPLocators();
        const loginLocators = new LoginLocators_1.LoginLocators();
        protractor_1.browser.get(loginLocators.urlStaging + '/#/tsp');
    }
    constructor() { }
}
exports.TspPage = TspPage;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHNwUGFnZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL1Rlc3RzMS9QYWdlcy90c3BQYWdlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsMkNBQTZGO0FBQzdGLHlEQUFzRDtBQUN0RCw2REFBeUQ7QUFFekQ7SUFDSSxHQUFHO1FBQ0MsTUFBTSxXQUFXLEdBQUcsSUFBSSx5QkFBVyxFQUFFLENBQUM7UUFDdEMsTUFBTSxhQUFhLEdBQUcsSUFBSSw2QkFBYSxFQUFFLENBQUM7UUFDMUMsb0JBQU8sQ0FBQyxHQUFHLENBQUMsYUFBYSxDQUFDLFVBQVUsR0FBRyxRQUFRLENBQUMsQ0FBQTtJQUNwRCxDQUFDO0lBQ0QsZ0JBQWdCLENBQUM7Q0FDcEI7QUFQRCwwQkFPQyJ9