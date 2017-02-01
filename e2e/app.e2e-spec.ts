import { AngularAuthFirebasePage } from './app.po';

describe('angular-auth-firebase App', function() {
  let page: AngularAuthFirebasePage;

  beforeEach(() => {
    page = new AngularAuthFirebasePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
