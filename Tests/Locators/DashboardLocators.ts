import { browser, element, by, By, $, $$, ExpectedConditions } from 'protractor';

export class DashboardLocators {
    // Dashboard page
    dashboardUrl = "/#/dashboard"
    title = element(by.css("p[class=nav-title]"))
    kpiTitle = element.all(by.css("div[class=x_title]"))
    tfs = element.all(by.css('app-last-days-statistics[title*="application"]')) // Transaction fee sum
    nopv = element.all(by.css('app-last-days-statistics[title="application.dashboard.kpi.nopv"]')) // Number of processed vehicles
    nost = element.all(by.css('app-last-days-statistics[title="application.dashboard.kpi.nost"]')) // Number Of Successful Transactions
    nort = element.all(by.css('app-last-days-statistics[title="application.dashboard.kpi.nort"]')) // Number Of Rejected Transactions
    subTitle = element.all(by.css("span[class=count_top]"))
    eventsTable = element.all(by.deepCss("th"))
    performanceDate = element(by.css('input[class*="drpInput"]'))

    constructor() { }

}
