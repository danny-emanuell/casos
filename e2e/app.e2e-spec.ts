import { CasesPage } from './app.po';

describe('cases App', () => {
  let page: CasesPage;

  beforeEach(() => {
    page = new CasesPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
