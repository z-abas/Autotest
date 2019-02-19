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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHNwUGFnZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL1Rlc3RzL1BhZ2VzL3RzcFBhZ2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSwyQ0FBNkY7QUFDN0YseURBQXNEO0FBQ3RELDZEQUF5RDtBQUV6RDtJQUNJLEdBQUc7UUFDQyxNQUFNLFdBQVcsR0FBRyxJQUFJLHlCQUFXLEVBQUUsQ0FBQztRQUN0QyxNQUFNLGFBQWEsR0FBRyxJQUFJLDZCQUFhLEVBQUUsQ0FBQztRQUMxQyxvQkFBTyxDQUFDLEdBQUcsQ0FBQyxhQUFhLENBQUMsVUFBVSxHQUFHLFFBQVEsQ0FBQyxDQUFBO0lBQ3BELENBQUM7SUFDRCxnQkFBZ0IsQ0FBQztDQUNwQjtBQVBELDBCQU9DIn0=