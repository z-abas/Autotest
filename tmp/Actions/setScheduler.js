"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const protractor_1 = require("protractor");
const EGHSchedulers_1 = require("../Locators/EGHSchedulers");
const eghschedLoc = new EGHSchedulers_1.EGHSchedulers;
//Change Email
class setScheduler {
    schedulerDL(job, fileType, TimeSeq, hourFrom, minutesFrom, hourTo, minutesTo, interval) {
        eghschedLoc.job.click().then(function () {
            eghschedLoc.job.sendKeys(job).then(function () {
                protractor_1.browser.actions().sendKeys(protractor_1.protractor.Key.ENTER).perform().then(function () {
                    protractor_1.browser.actions().sendKeys(protractor_1.protractor.Key.TAB).perform().then(function () {
                        protractor_1.browser.actions().sendKeys(fileType).perform().then(function () {
                            protractor_1.browser.actions().sendKeys(protractor_1.protractor.Key.ENTER).perform().then(function () {
                                protractor_1.browser.actions().sendKeys(protractor_1.protractor.Key.TAB).perform().then(function () {
                                    protractor_1.browser.actions().sendKeys(TimeSeq).perform().then(function () {
                                        protractor_1.browser.actions().sendKeys(protractor_1.protractor.Key.ENTER).perform();
                                    });
                                });
                            });
                        });
                    });
                });
            });
        });
        eghschedLoc.hourFrom.sendKeys(hourFrom);
        eghschedLoc.minutesFrom.sendKeys(minutesFrom);
        eghschedLoc.hourTo.sendKeys(hourTo);
        eghschedLoc.minutesTo.sendKeys(minutesTo);
        eghschedLoc.interval.sendKeys(interval);
    }
    schedulerCLS() {
        eghschedLoc.clear.click().then(function () {
            eghschedLoc.hourFrom.clear().then(function () {
                eghschedLoc.minutesFrom.clear().then(function () {
                    eghschedLoc.hourTo.clear().then(function () {
                        eghschedLoc.minutesTo.clear();
                    });
                });
            });
        });
    }
    schedulerUL(job, fileType, TimeSeq, hour, minutes) {
        eghschedLoc.job.click().then(function () {
            eghschedLoc.job.sendKeys(job).then(function () {
                protractor_1.browser.actions().sendKeys(protractor_1.protractor.Key.ENTER).perform().then(function () {
                    protractor_1.browser.actions().sendKeys(protractor_1.protractor.Key.TAB).perform().then(function () {
                        protractor_1.browser.actions().sendKeys(fileType).perform().then(function () {
                            protractor_1.browser.actions().sendKeys(protractor_1.protractor.Key.ENTER).perform().then(function () {
                                protractor_1.browser.actions().sendKeys(protractor_1.protractor.Key.TAB).perform().then(function () {
                                    protractor_1.browser.actions().sendKeys(TimeSeq).perform().then(function () {
                                        protractor_1.browser.actions().sendKeys(protractor_1.protractor.Key.ENTER).perform();
                                    });
                                });
                            });
                        });
                    });
                });
            });
        });
        eghschedLoc.hour.sendKeys(hour);
        eghschedLoc.hour.sendKeys(minutes);
    }
    constructor() { }
}
exports.setScheduler = setScheduler;
;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2V0U2NoZWR1bGVyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vVGVzdHMvQWN0aW9ucy9zZXRTY2hlZHVsZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSwyQ0FBNkY7QUFDN0YsNkRBQTBEO0FBRTFELE1BQU0sV0FBVyxHQUFHLElBQUksNkJBQWEsQ0FBQTtBQUVyQyxjQUFjO0FBQ2Q7SUFDSSxXQUFXLENBQUMsR0FBRyxFQUFFLFFBQVEsRUFBRSxPQUFPLEVBQUUsUUFBUSxFQUFFLFdBQVcsRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLFFBQVE7UUFDbEYsV0FBVyxDQUFDLEdBQUcsQ0FBQyxLQUFLLEVBQUUsQ0FBQyxJQUFJLENBQUM7WUFDekIsV0FBVyxDQUFDLEdBQUcsQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDO2dCQUMvQixvQkFBTyxDQUFDLE9BQU8sRUFBRSxDQUFDLFFBQVEsQ0FBQyx1QkFBVSxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FBQyxPQUFPLEVBQUUsQ0FBQyxJQUFJLENBQUM7b0JBQzVELG9CQUFPLENBQUMsT0FBTyxFQUFFLENBQUMsUUFBUSxDQUFDLHVCQUFVLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDLE9BQU8sRUFBRSxDQUFDLElBQUksQ0FBQzt3QkFDMUQsb0JBQU8sQ0FBQyxPQUFPLEVBQUUsQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLENBQUMsT0FBTyxFQUFFLENBQUMsSUFBSSxDQUFDOzRCQUNoRCxvQkFBTyxDQUFDLE9BQU8sRUFBRSxDQUFDLFFBQVEsQ0FBQyx1QkFBVSxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FBQyxPQUFPLEVBQUUsQ0FBQyxJQUFJLENBQUM7Z0NBQzVELG9CQUFPLENBQUMsT0FBTyxFQUFFLENBQUMsUUFBUSxDQUFDLHVCQUFVLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDLE9BQU8sRUFBRSxDQUFDLElB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