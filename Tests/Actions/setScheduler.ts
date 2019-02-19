import { browser, element, by, By, $, $$, ExpectedConditions, protractor } from 'protractor';
import { EGHSchedulers } from '../Locators/EGHSchedulers';

const eghschedLoc = new EGHSchedulers

//Change Email
export class setScheduler {
    schedulerDL(job, fileType, TimeSeq, hourFrom, minutesFrom, hourTo, minutesTo, interval) {
        eghschedLoc.job.click().then(function () {
            eghschedLoc.job.sendKeys(job).then(function () {
                browser.actions().sendKeys(protractor.Key.ENTER).perform().then(function () {
                    browser.actions().sendKeys(protractor.Key.TAB).perform().then(function () {
                        browser.actions().sendKeys(fileType).perform().then(function () {
                            browser.actions().sendKeys(protractor.Key.ENTER).perform().then(function () {
                                browser.actions().sendKeys(protractor.Key.TAB).perform().then(function () {
                                    browser.actions().sendKeys(TimeSeq).perform().then(function () {
                                        browser.actions().sendKeys(protractor.Key.ENTER).perform()
                                    })
                                })
                            })

                        })

                    })

                })
            })
        })
        eghschedLoc.hourFrom.sendKeys(hourFrom)
        eghschedLoc.minutesFrom.sendKeys(minutesFrom)
        eghschedLoc.hourTo.sendKeys(hourTo)
        eghschedLoc.minutesTo.sendKeys(minutesTo)
        eghschedLoc.interval.sendKeys(interval)
    }

    schedulerCLS(){
        eghschedLoc.clear.click().then(function(){
            eghschedLoc.hourFrom.clear().then(function(){
                eghschedLoc.minutesFrom.clear().then(function(){
                    eghschedLoc.hourTo.clear().then(function(){
                        eghschedLoc.minutesTo.clear()

                    })

                })

            })

        })
        
    }

    schedulerUL(job, fileType, TimeSeq, hour, minutes){
        eghschedLoc.job.click().then(function () {
            eghschedLoc.job.sendKeys(job).then(function () {
                browser.actions().sendKeys(protractor.Key.ENTER).perform().then(function () {
                    browser.actions().sendKeys(protractor.Key.TAB).perform().then(function () {
                        browser.actions().sendKeys(fileType).perform().then(function () {
                            browser.actions().sendKeys(protractor.Key.ENTER).perform().then(function () {
                                browser.actions().sendKeys(protractor.Key.TAB).perform().then(function () {
                                    browser.actions().sendKeys(TimeSeq).perform().then(function () {
                                        browser.actions().sendKeys(protractor.Key.ENTER).perform()
                                    })
                                })
                            })

                        })

                    })

                })
            })
        })
        eghschedLoc.hour.sendKeys(hour)
        eghschedLoc.hour.sendKeys(minutes)

    }

    constructor() { }
};