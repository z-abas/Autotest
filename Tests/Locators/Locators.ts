import {browser, element, by, By, $, $$, ExpectedConditions} from 'protractor';

export class Locators {
// Login page
    usernameField = element(by.id('username'));
    passwordField = element(by.id('password'));
    loginBtn1 = element(by.buttonText('Login'));
    loginBtn = element(by.className('btn btn-default submit'))
    url = 'http://localhost:4200';

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
