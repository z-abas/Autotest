"use strict";
exports.__esModule = true;
var protractor_1 = require("protractor");
var DashboardLocators = /** @class */ (function () {
    function DashboardLocators() {
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
    return DashboardLocators;
}());
exports.DashboardLocators = DashboardLocators;
