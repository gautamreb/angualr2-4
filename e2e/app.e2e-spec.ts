import { TamboraAg2Page } from './app.po';

describe('tambora-ag2 App', () => {
  let page: TamboraAg2Page;

  beforeEach(() => {
    page = new TamboraAg2Page();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
