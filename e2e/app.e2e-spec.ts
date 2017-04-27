import { CandidateRepoPage } from './app.po';
import { protractor, ElementFinder, browser } from 'protractor';

describe('In App', () => {
  let page: CandidateRepoPage;
  let searchEl : ElementFinder;
  let searchInputEl : ElementFinder;
  beforeEach(() => {
    page = new CandidateRepoPage();
    searchEl = page.getSearchElement();
    searchInputEl = page.getSearchElementTextElement();
  });

  describe('When page loads(or refreshes), ', () => {
    beforeEach(() => {
      page.navigateTo();
    });

    it('should display header saying Robo Inc.', () => {
      expect(page.getHeaderText()).toEqual('Robo Inc.');
    });

    it('should display footer saying Prepared for Robo Hiring Project , by Shakti Prasad Patro', () => {
      expect(page.getFooterText()).toEqual('Prepared for Robo Hiring Project , by Shakti Prasad Patro');
    });

    it('should display dashboard with header Robo Assistant Project', () => {
      expect(page.getDashboardHeaderText()).toEqual('Robo Assistant Project');
    });

    it('should display search bar with no text', () => {
      expect(searchEl).toBeDefined();
      expect(searchInputEl.getText()).toBe("");
      expect(searchInputEl.getAttribute("placeholder")).toBe("Search for Robo Assistants");
    });


    describe('When searched with no text, ', () => {
      beforeEach(() => {
        browser.waitForAngular();
        page.getSearchButton().click();
      });

      it('should display all robos as a list', () => {
        browser.waitForAngular();
        page.getSearchLists().count().then((num) => {
          expect(num).toBe(100);
        });
      });
    });
  });

  
});
