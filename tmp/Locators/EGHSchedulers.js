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
        this.hourFrom = protractor_1.element(protractor_1.by.name("hourFrom"));
        this.minutesFrom = protractor_1.element(protractor_1.by.name("minutesFrom"));
        this.hourTo = protractor_1.element(protractor_1.by.name("hourTo"));
        this.minutesTo = protractor_1.element(protractor_1.by.name("minutesTo"));
        this.interval = protractor_1.element(protractor_1.by.name("intervalInMinutes"));
        this.generateTicSwitch = protractor_1.element(protractor_1.by.css("label[for=generateAutoJobForTicFile"));
        this.hour = protractor_1.element(protractor_1.by.name("hour"));
        this.minutes = protractor_1.element(protractor_1.by.name("minutes"));
        this.checkForChanges = protractor_1.element(protractor_1.by.css("label[for=checkForChanges"));
        this.newBtn = protractor_1.element(protractor_1.by.id("send"));
        this.cancelBtn = protractor_1.element(protractor_1.by.buttonText("Cancel"));
        this.startTimeEndTimeError = protractor_1.element.all(protractor_1.by.css("div[class*=alert]"));
        this.clear = protractor_1.element.all(protractor_1.by.css('span[title*="Clear"]'));
        this.eventsTable = protractor_1.element.all(protractor_1.by.deepCss("th"));
        this.performanceDate = protractor_1.element(protractor_1.by.css('input[class*="drpInput"]'));
    }
}
exports.EGHSchedulers = EGHSchedulers;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRUdIU2NoZWR1bGVycy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL1Rlc3RzL0xvY2F0b3JzL0VHSFNjaGVkdWxlcnMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSwyQ0FBaUY7QUFFakY7SUEwQkk7UUF6QkEsNkJBQTZCO1FBQzdCLGlCQUFZLEdBQUcsbUNBQW1DLENBQUE7UUFDbEQsUUFBRyxHQUFHLG9CQUFPLENBQUMsZUFBRSxDQUFDLEtBQUssQ0FBQyxzR0FBc0csQ0FBQyxDQUFDLENBQUE7UUFHL0gsYUFBUSxHQUFHLG9CQUFPLENBQUMsZUFBRSxDQUFDLEtBQUssQ0FBQyw0TEFBNEwsQ0FBQyxDQUFDLENBQUE7UUFDMU4sYUFBUSxHQUFHLG9CQUFPLENBQUMsZUFBRSxDQUFDLEtBQUssQ0FBQyw0TEFBNEwsQ0FBQyxDQUFDLENBQUE7UUFFMU4sYUFBUSxHQUFHLG9CQUFPLENBQUMsZUFBRSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFBO1FBQ3ZDLGdCQUFXLEdBQUcsb0JBQU8sQ0FBQyxlQUFFLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUE7UUFDN0MsV0FBTSxHQUFHLG9CQUFPLENBQUMsZUFBRSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFBO1FBQ25DLGNBQVMsR0FBRyxvQkFBTyxDQUFDLGVBQUUsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQTtRQUN6QyxhQUFRLEdBQUcsb0JBQU8sQ0FBQyxlQUFFLENBQUMsSUFBSSxDQUFDLG1CQUFtQixDQUFDLENBQUMsQ0FBQTtRQUNoRCxzQkFBaUIsR0FBRyxvQkFBTyxDQUFDLGVBQUUsQ0FBQyxHQUFHLENBQUMscUNBQXFDLENBQUMsQ0FBQyxDQUFBO1FBQzFFLFNBQUksR0FBRyxvQkFBTyxDQUFDLGVBQUUsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQTtRQUMvQixZQUFPLEdBQUcsb0JBQU8sQ0FBQyxlQUFFLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUE7UUFDckMsb0JBQWUsR0FBRyxvQkFBTyxDQUFDLGVBQUUsQ0FBQyxHQUFHLENBQUMsMkJBQTJCLENBQUMsQ0FBQyxDQUFBO1FBQzlELFdBQU0sR0FBRyxvQkFBTyxDQUFDLGVBQUUsQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQTtRQUMvQixjQUFTLEdBQUcsb0JBQU8sQ0FBQyxlQUFFLENBQUMsVUFBVSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUE7UUFDNUMsMEJBQXFCLEdBQUcsb0JBQU8sQ0FBQyxHQUFHLENBQUMsZUFBRSxDQUFDLEdBQUcsQ0FBQyxtQkFBbUIsQ0FBQyxDQUFDLENBQUE7UUFDaEUsVUFBSyxHQUFHLG9CQUFPLENBQUMsR0FBRyxDQUFDLGVBQUUsQ0FBQyxHQUFHLENBQUMsc0JBQXNCLENBQUMsQ0FBQyxDQUFBO1FBRW5ELGdCQUFXLEdBQUcsb0JBQU8sQ0FBQyxHQUFHLENBQUMsZUFBRSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFBO1FBQzNDLG9CQUFlLEdBQUcsb0JBQU8sQ0FBQyxlQUFFLENBQUMsR0FBRyxDQUFDLDBCQUEwQixDQUFDLENBQUMsQ0FBQTtJQUU3QyxDQUFDO0NBRXBCO0FBNUJELHNDQTRCQyJ9