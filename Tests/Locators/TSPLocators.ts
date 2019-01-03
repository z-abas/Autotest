import {browser, element, by, By, $, $$, ExpectedConditions} from 'protractor';

export class TSPLocators {

//Toll Service Provide page
    tspEmail = element(by.id('email'))
    tspName = element(by.id('name'))
    tspAddress = element(by.id('address'))
    tspPostalCode = element(by.id('postalCode'))
    tspCountryCode = element(by.id('countryCode'));
    tspProviderId = element(by.id('providerId'));
    tspWebsite = element(by.id('website'));
    tspCustomerContact = element(by.id('customerContact'));
    tspCustomerPhone = element(by.id('customerPhone'));
    tspBinNumber = element(by.id('binNumber'));
    tspBinNoExt = element(by.id('binNumberExtension'));
    tspLengthBin = element(by.id('lengthOfBinNumber'));
    tspLengthPan = element(by.id('lengthOfPanNumber'));
    tspCancelBtn = element(by.binding('application.general.button.cancel | translate:param'));
    tspSubmitBtn = element(by.id('send'));

    constructor(){}

}
