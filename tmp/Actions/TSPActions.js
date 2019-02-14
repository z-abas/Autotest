"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const TSPLocators_1 = require("../Locators/TSPLocators");
//Change Email
class TSPemail {
    tspEmail() {
        const locators = new TSPLocators_1.TSPLocators;
        locators.tspEmail.clear();
        locators.tspEmail.sendKeys('test@test.com');
        locators.tspSubmitBtn.click();
    }
    ;
    constructor() { }
}
exports.TSPemail = TSPemail;
;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiVFNQQWN0aW9ucy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL1Rlc3RzL0FjdGlvbnMvVFNQQWN0aW9ucy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUNBLHlEQUFvRDtBQUdwRCxjQUFjO0FBQ2Q7SUFDSSxRQUFRO1FBQ0osTUFBTSxRQUFRLEdBQUcsSUFBSSx5QkFBVyxDQUFDO1FBQ2pDLFFBQVEsQ0FBQyxRQUFRLENBQUMsS0FBSyxFQUFFLENBQUE7UUFDekIsUUFBUSxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsZUFBZSxDQUFDLENBQUM7UUFDNUMsUUFBUSxDQUFDLFlBQVksQ0FBQyxLQUFLLEVBQUUsQ0FBQTtJQUNqQyxDQUFDO0lBQUEsQ0FBQztJQUNGLGdCQUFjLENBQUM7Q0FDbEI7QUFSRCw0QkFRQztBQUFBLENBQUMifQ==