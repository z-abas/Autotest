"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const protractor_1 = require("protractor");
const LoginLocators_1 = require("./Locators/LoginLocators");
const tspLocators_1 = require("./Locators/tspLocators");
const login_1 = require("../Tests/Actions/login");
const tspPage_1 = require("../Tests/Pages/tspPage");
const TSPActions_1 = require("../Tests/Actions/TSPActions");
const loginLocators = new LoginLocators_1.LoginLocators;
const tspLocators = new tspLocators_1.TSPLocators;
describe('Login page', function () {
    const login = new login_1.LoginPageClass();
    it('Should log in', function () {
        login.loginPage('permission', 'test');
        expect(protractor_1.browser.getTitle()).toEqual('Dashboard');
    });
    const tsp = new tspPage_1.TspPage();
    it('Should go to TSP', function () {
        tsp.TSP();
        expect(protractor_1.browser.getTitle()).toEqual('Toll Service Providers');
    });
    const tspEmail = new TSPActions_1.TSPemail();
    it('Should change email', function () {
        tspEmail.tspEmail();
    });
    it('Should read changed email', function () {
        tspLocators.tspEmail.getText().then(function (test) {
            let emajl = test;
            console.log('Text je: ', emajl);
            expect(tspLocators.tspEmail.getText()).toBe('test@test.com');
            /*fs.writeFile("./sample.txt", emajl, (err) => {
                if (err) {
                    console.error(err);
                    return;
                };
                console.log("File has been created");
            });*/
        });
    });
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHR0LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vVGVzdHMvdHR0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsMkNBQTZGO0FBQzdGLDREQUF5RDtBQUN6RCx3REFBcUQ7QUFDckQsa0RBQXVEO0FBQ3ZELG9EQUFnRDtBQUNoRCw0REFBc0Q7QUFHdEQsTUFBTSxhQUFhLEdBQUcsSUFBSSw2QkFBYSxDQUFDO0FBQ3hDLE1BQU0sV0FBVyxHQUFHLElBQUkseUJBQVcsQ0FBQztBQUVwQyxRQUFRLENBQUMsWUFBWSxFQUFFO0lBQ25CLE1BQU0sS0FBSyxHQUFHLElBQUksc0JBQWMsRUFBRSxDQUFDO0lBQ25DLEVBQUUsQ0FBQyxlQUFlLEVBQUU7UUFDaEIsS0FBSyxDQUFDLFNBQVMsQ0FBQyxZQUFZLEVBQUUsTUFBTSxDQUFDLENBQUM7UUFDdEMsTUFBTSxDQUFDLG9CQUFPLENBQUMsUUFBUSxFQUFFLENBQUMsQ0FBQyxPQUFPLENBQUMsV0FBVyxDQUFDLENBQUE7SUFDbkQsQ0FBQyxDQUFDLENBQUE7SUFDRixNQUFNLEdBQUcsR0FBRyxJQUFJLGlCQUFPLEVBQUUsQ0FBQztJQUMxQixFQUFFLENBQUMsa0JBQWtCLEVBQUU7UUFDbkIsR0FBRyxDQUFDLEdBQUcsRUFBRSxDQUFDO1FBQ1YsTUFBTSxDQUFDLG9CQUFPLENBQUMsUUFBUSxFQUFFLENBQUMsQ0FBQyxPQUFPLENBQUMsd0JBQXdCLENBQUMsQ0FBQTtJQUNoRSxDQUFDLENBQUMsQ0FBQTtJQUNGLE1BQU0sUUFBUSxHQUFHLElBQUkscUJBQVEsRUFBRSxDQUFDO0lBRWhDLEVBQUUsQ0FBQyxxQkFBcUIsRUFBRTtRQUV0QixRQUFRLENBQUMsUUFBUSxFQUFFLENBQUM7SUFFeEIsQ0FBQyxDQUFDLENBQUM7SUFFSCxFQUFFLENBQUMsMkJBQTJCLEVBQUU7UUFDcEIsV0FBVyxDQUFDLFFBQVEsQ0FBQyxPQUFPLEVBQUUsQ0FBQyxJQUFJLENBQUMsVUFBVSxJQUFJO1lBQ2xELElBQUksS0FBSyxHQUFHLElBQUksQ0FBQztZQUNqQixPQUFPLENBQUMsR0FBRyxDQUFDLFdBQVcsRUFBRSxLQUFLLENBQUMsQ0FBQztZQUVoQyxNQUFNLENBQUMsV0FBVyxDQUFDLFFBQVEsQ0FBQyxPQUFPLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxlQUFlLENBQUMsQ0FBQztZQUc3RDs7Ozs7O2lCQU1LO1FBQ1QsQ0FBQyxDQUFDLENBQUM7SUFDUCxDQUFDLENBQUMsQ0FBQztBQU1YLENBQUMsQ0FBQyxDQUFBIn0=