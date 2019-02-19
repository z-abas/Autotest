"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const protractor_1 = require("protractor");
class DashboardLocators {
    constructor() {
        // Dashboard page
        this.dashboardUrl = "/#/dashboard";
        this.title = protractor_1.element(protractor_1.by.css("p[class=nav-title]"));
        this.kpiTitle = protractor_1.element.all(protractor_1.by.css("div[class=x_title]"));
        this.tfs = protractor_1.element.all(protractor_1.by.css('app-last-days-statistics[title*="application"]')); // Transaction fee sum
        this.nopv = protractor_1.element.all(protractor_1.by.css('app-last-days-statistics[title="application.dashboard.kpi.nopv"]')); // Number of processed vehicles
        this.nost = protractor_1.element.all(protractor_1.by.css('app-last-days-statistics[title="application.dashboard.kpi.nost"]')); // Number Of Successful Transactions
        this.nort = protractor_1.element.all(protractor_1.by.css('app-last-days-statistics[title="application.dashboard.kpi.nort"]')); // Number Of Rejected Transactions
        this.subTitle = protractor_1.element.all(protractor_1.by.css("span[class=count_top]"));
        this.eventsTable = protractor_1.element.all(protractor_1.by.deepCss("th"));
        this.performanceDate = protractor_1.element(protractor_1.by.css('input[class*="drpInput"]'));
    }
}
exports.DashboardLocators = DashboardLocators;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRGFzaGJvYXJkTG9jYXRvcnMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9UZXN0cy9Mb2NhdG9ycy9EYXNoYm9hcmRMb2NhdG9ycy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLDJDQUFpRjtBQUVqRjtJQWFJO1FBWkEsaUJBQWlCO1FBQ2pCLGlCQUFZLEdBQUcsY0FBYyxDQUFBO1FBQzdCLFVBQUssR0FBRyxvQkFBTyxDQUFDLGVBQUUsQ0FBQyxHQUFHLENBQUMsb0JBQW9CLENBQUMsQ0FBQyxDQUFBO1FBQzdDLGFBQVEsR0FBRyxvQkFBTyxDQUFDLEdBQUcsQ0FBQyxlQUFFLENBQUMsR0FBRyxDQUFDLG9CQUFvQixDQUFDLENBQUMsQ0FBQTtRQUNwRCxRQUFHLEdBQUcsb0JBQU8sQ0FBQyxHQUFHLENBQUMsZUFBRSxDQUFDLEdBQUcsQ0FBQyxnREFBZ0QsQ0FBQyxDQUFDLENBQUEsQ0FBQyxzQkFBc0I7UUFDbEcsU0FBSSxHQUFHLG9CQUFPLENBQUMsR0FBRyxDQUFDLGVBQUUsQ0FBQyxHQUFHLENBQUMsa0VBQWtFLENBQUMsQ0FBQyxDQUFBLENBQUMsK0JBQStCO1FBQzlILFNBQUksR0FBRyxvQkFBTyxDQUFDLEdBQUcsQ0FBQyxlQUFFLENBQUMsR0FBRyxDQUFDLGtFQUFrRSxDQUFDLENBQUMsQ0FBQSxDQUFDLG9DQUFvQztRQUNuSSxTQUFJLEdBQUcsb0JBQU8sQ0FBQyxHQUFHLENBQUMsZUFBRSxDQUFDLEdBQUcsQ0FBQyxrRUFBa0UsQ0FBQyxDQUFDLENBQUEsQ0FBQyxrQ0FBa0M7UUFDakksYUFBUSxHQUFHLG9CQUFPLENBQUMsR0FBRyxDQUFDLGVBQUUsQ0FBQyxHQUFHLENBQUMsdUJBQXVCLENBQUMsQ0FBQyxDQUFBO1FBQ3ZELGdCQUFXLEdBQUcsb0JBQU8sQ0FBQyxHQUFHLENBQUMsZUFBRSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFBO1FBQzNDLG9CQUFlLEdBQUcsb0JBQU8sQ0FBQyxlQUFFLENBQUMsR0FBRyxDQUFDLDBCQUEwQixDQUFDLENBQUMsQ0FBQTtJQUU3QyxDQUFDO0NBRXBCO0FBZkQsOENBZUMifQ==