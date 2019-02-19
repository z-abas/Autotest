"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const protractor_1 = require("protractor");
class TSPLocators {
    constructor() {
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
}
exports.TSPLocators = TSPLocators;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHNwTG9jYXRvcnMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9UZXN0cy9Mb2NhdG9ycy90c3BMb2NhdG9ycy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLDJDQUErRTtBQUUvRTtJQW1CSTtRQWpCSiwyQkFBMkI7UUFDdkIsYUFBUSxHQUFHLG9CQUFPLENBQUMsZUFBRSxDQUFDLEVBQUUsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFBO1FBQ2xDLFlBQU8sR0FBRyxvQkFBTyxDQUFDLGVBQUUsQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQTtRQUNoQyxlQUFVLEdBQUcsb0JBQU8sQ0FBQyxlQUFFLENBQUMsRUFBRSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUE7UUFDdEMsa0JBQWEsR0FBRyxvQkFBTyxDQUFDLGVBQUUsQ0FBQyxFQUFFLENBQUMsWUFBWSxDQUFDLENBQUMsQ0FBQTtRQUM1QyxtQkFBYyxHQUFHLG9CQUFPLENBQUMsZUFBRSxDQUFDLEVBQUUsQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDO1FBQy9DLGtCQUFhLEdBQUcsb0JBQU8sQ0FBQyxlQUFFLENBQUMsRUFBRSxDQUFDLFlBQVksQ0FBQyxDQUFDLENBQUM7UUFDN0MsZUFBVSxHQUFHLG9CQUFPLENBQUMsZUFBRSxDQUFDLEVBQUUsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDO1FBQ3ZDLHVCQUFrQixHQUFHLG9CQUFPLENBQUMsZUFBRSxDQUFDLEVBQUUsQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDLENBQUM7UUFDdkQscUJBQWdCLEdBQUcsb0JBQU8sQ0FBQyxlQUFFLENBQUMsRUFBRSxDQUFDLGVBQWUsQ0FBQyxDQUFDLENBQUM7UUFDbkQsaUJBQVksR0FBRyxvQkFBTyxDQUFDLGVBQUUsQ0FBQyxFQUFFLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQztRQUMzQyxnQkFBVyxHQUFHLG9CQUFPLENBQUMsZUFBRSxDQUFDLEVBQUUsQ0FBQyxvQkFBb0IsQ0FBQyxDQUFDLENBQUM7UUFDbkQsaUJBQVksR0FBRyxvQkFBTyxDQUFDLGVBQUUsQ0FBQyxFQUFFLENBQUMsbUJBQW1CLENBQUMsQ0FBQyxDQUFDO1FBQ25ELGlCQUFZLEdBQUcsb0JBQU8sQ0FBQyxlQUFFLENBQUMsRUFBRSxDQUFDLG1CQUFtQixDQUFDLENBQUMsQ0FBQztRQUNuRCxpQkFBWSxHQUFHLG9CQUFPLENBQUMsZUFBRSxDQUFDLE9BQU8sQ0FBQyxxREFBcUQsQ0FBQyxDQUFDLENBQUM7UUFDMUYsaUJBQVksR0FBRyxvQkFBTyxDQUFDLGVBQUUsQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQztJQUV4QixDQUFDO0NBRWxCO0FBckJELGtDQXFCQyJ9