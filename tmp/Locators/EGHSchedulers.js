"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const protractor_1 = require("protractor");
class EGHSchedulers {
    constructor() {
        // EasyGo Hub Schedulers page
        this.dashboardUrl = "/#/administration/easyGoScheduler";
        this.job = protractor_1.element(protractor_1.by.xpath("//div[@class='col-md-6 col-sm-6 col-xs-12']//ng-select[@name='selectedFileJob']//input[@type='text']"));
        this.fileType = protractor_1.element(protractor_1.by.xpath("/html[1]/body[1]/div[1]/app-root[1]/app-shell[1]/div[1]/div[1]/div[2]/easygoscheduler[1]/div[1]/div[2]/div[2]/div[1]/div[1]/div[2]/form[1]/div[2]/div[1]/ng-select[1]/div[1]/div[1]/div[3]"));
        this.sequence = protractor_1.element(protractor_1.by.xpath("/html[1]/body[1]/div[1]/app-root[1]/app-shell[1]/div[1]/div[1]/div[2]/easygoscheduler[1]/div[1]/div[2]/div[2]/div[1]/div[1]/div[2]/form[1]/div[2]/div[1]/ng-select[1]/div[1]/div[1]/div[3]"));
        this.eventsTable = protractor_1.element.all(protractor_1.by.deepCss("th"));
        this.performanceDate = protractor_1.element(protractor_1.by.css('input[class*="drpInput"]'));
    }
}
exports.EGHSchedulers = EGHSchedulers;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRUdIU2NoZWR1bGVycy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL1Rlc3RzL0xvY2F0b3JzL0VHSFNjaGVkdWxlcnMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSwyQ0FBaUY7QUFFakY7SUFZSTtRQVhBLDZCQUE2QjtRQUM3QixpQkFBWSxHQUFHLG1DQUFtQyxDQUFBO1FBQ2xELFFBQUcsR0FBRyxvQkFBTyxDQUFDLGVBQUUsQ0FBQyxLQUFLLENBQUMsc0dBQXNHLENBQUMsQ0FBQyxDQUFBO1FBQy9ILGFBQVEsR0FBRyxvQkFBTyxDQUFDLGVBQUUsQ0FBQyxLQUFLLENBQUMsNExBQTRMLENBQUMsQ0FBQyxDQUFBO1FBQzFOLGFBQVEsR0FBRyxvQkFBTyxDQUFDLGVBQUUsQ0FBQyxLQUFLLENBQUMsNExBQTRMLENBQUMsQ0FBQyxDQUFBO1FBSTFOLGdCQUFXLEdBQUcsb0JBQU8sQ0FBQyxHQUFHLENBQUMsZUFBRSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFBO1FBQzNDLG9CQUFlLEdBQUcsb0JBQU8sQ0FBQyxlQUFFLENBQUMsR0FBRyxDQUFDLDBCQUEwQixDQUFDLENBQUMsQ0FBQTtJQUU3QyxDQUFDO0NBRXBCO0FBZEQsc0NBY0MifQ==