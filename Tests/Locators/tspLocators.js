"use strict";
exports.__esModule = true;
var protractor_1 = require("protractor");
var TSPLocators = /** @class */ (function () {
    function TSPLocators() {
        //Toll Service Provide page
        this.tspEmail = protractor_1.element(protractor_1.by.id('email'));
        this.tspName = protractor_1.element(protractor_1.by.id('name'));
        this.tspAddress = protractor_1.element(protractor_1.by.id('address'));
        this.tspPostalCode = protractor_1.element(protractor_1.by.id('postalCode'));
        this.tspCountryCode = protractor_1.element(protractor_1.by.id('countryCode'));
        this.tspProviderId = protractor_1.element(protractor_1.by.id('providerId'));
        this.tspWebsite = protractor_1.element(protractor_1.by.id('website'));
        this.tspCustomerContact = protractor_1.element(protractor_1.by.id('customerContact'));
        this.tspCustomerPhone = protractor_1.element(protractor_1.by.id('customerPhone'));
        this.tspBinNumber = protractor_1.element(protractor_1.by.id('binNumber'));
        this.tspBinNoExt = protractor_1.element(protractor_1.by.id('binNumberExtension'));
        this.tspLengthBin = protractor_1.element(protractor_1.by.id('lengthOfBinNumber'));
        this.tspLengthPan = protractor_1.element(protractor_1.by.id('lengthOfPanNumber'));
        this.tspCancelBtn = protractor_1.element(protractor_1.by.binding('application.general.button.cancel | translate:param'));
        this.tspSubmitBtn = protractor_1.element(protractor_1.by.id('send'));
    }
    return TSPLocators;
}());
exports.TSPLocators = TSPLocators;
