import { browser, element, by } from 'protractor';

export class CandidateRepoPage {
  navigateTo() {
    return browser.get('/');
  }

  getHeaderText() {
    return element(by.css('app-header')).getText();
  }

  getFooterText() {
    return element(by.css('app-footer')).getText();
  }

  getDashboardHeaderText() {
    return element(by.css('app-dash h1')).getText();
  }

  getSearchElement() {
    return element(by.css('app-search'));
  }

  getSearchButton() {
    return element(by.buttonText('Search'));
  }

  getSearchElementTextElement() {
    return element(by.css('app-search input'));
  }
  
  getSearchLists() {
    return element.all(by.css('app-search li'));
  }
}
