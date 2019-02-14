"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const protractor_1 = require("protractor");
class ExceptionHistoryLocators {
    constructor() {
        // Exeption History page
        this.searchBox = protractor_1.element.all(protractor_1.by.css("label[for=pan]"));
        this.searchOptions = protractor_1.element.all(protractor_1.by.tagName("option"));
        this.title = protractor_1.element(protractor_1.by.css("div[class='x-title']"));
        this.searchBy = protractor_1.element(protractor_1.by.css("div[class*=col"));
        this.optionsBox = protractor_1.element(protractor_1.by.css("div[class=form-group]"));
        this.exHistUrl = ('/#/analytics/exceptionsHistory');
        this.dateFrom = protractor_1.element(protractor_1.by.id("dateFrom"));
        this.dateTo = protractor_1.element(protractor_1.by.id("dateTo"));
        this.searchButton = protractor_1.element(protractor_1.by.buttonText("Search"));
        this.chartButton = protractor_1.element(protractor_1.by.buttonText("Display As Chart"));
        // Table
        this.tableHeader = protractor_1.element.all(protractor_1.by);
    }
}
exports.ExceptionHistoryLocators = ExceptionHistoryLocators;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRXhjZXB0aW9uSGlzdG9yeUxvY2F0b3JzLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vVGVzdHMvTG9jYXRvcnMvRXhjZXB0aW9uSGlzdG9yeUxvY2F0b3JzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsMkNBQWlGO0FBRWpGO0lBa0JJO1FBakJBLHdCQUF3QjtRQUN4QixjQUFTLEdBQUcsb0JBQU8sQ0FBQyxHQUFHLENBQUMsZUFBRSxDQUFDLEdBQUcsQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDLENBQUE7UUFDakQsa0JBQWEsR0FBRyxvQkFBTyxDQUFDLEdBQUcsQ0FBQyxlQUFFLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUE7UUFDakQsVUFBSyxHQUFHLG9CQUFPLENBQUMsZUFBRSxDQUFDLEdBQUcsQ0FBQyxzQkFBc0IsQ0FBQyxDQUFDLENBQUM7UUFDaEQsYUFBUSxHQUFHLG9CQUFPLENBQUMsZUFBRSxDQUFDLEdBQUcsQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDLENBQUM7UUFDN0MsZUFBVSxHQUFHLG9CQUFPLENBQUMsZUFBRSxDQUFDLEdBQUcsQ0FBQyx1QkFBdUIsQ0FBQyxDQUFDLENBQUE7UUFDckQsY0FBUyxHQUFHLENBQUMsZ0NBQWdDLENBQUMsQ0FBQTtRQUM5QyxhQUFRLEdBQUcsb0JBQU8sQ0FBQyxlQUFFLENBQUMsRUFBRSxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUE7UUFDckMsV0FBTSxHQUFHLG9CQUFPLENBQUMsZUFBRSxDQUFDLEVBQUUsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFBO1FBQ2pDLGlCQUFZLEdBQUcsb0JBQU8sQ0FBQyxlQUFFLENBQUMsVUFBVSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUE7UUFDL0MsZ0JBQVcsR0FBRyxvQkFBTyxDQUFDLGVBQUUsQ0FBQyxVQUFVLENBQUMsa0JBQWtCLENBQUMsQ0FBQyxDQUFBO1FBQ3hELFFBQVE7UUFDUixnQkFBVyxHQUFHLG9CQUFPLENBQUMsR0FBRyxDQUFDLGVBQUUsQ0FBQyxDQUFBO0lBS2IsQ0FBQztDQUVwQjtBQXBCRCw0REFvQkMifQ==