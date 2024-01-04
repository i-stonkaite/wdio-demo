import HomePage from '../pages/home-page.js';

describe('Home', () => {
  it('Open About Page & assert the URL', async () => {
    await HomePage.open();

    await HomePage.aboutLink.click();

    await expect(browser).toHaveUrl('https://practice.sdetunicorns.com/about/');
  });

  it('Open URL & assert title', async () => {
    await HomePage.open();

    await expect(browser).toHaveTitle(
      'Practice E-Commerce Site – SDET Unicorns – Helping you succeed in Software Quality.'
    );
  });

  it('Click Get Started button & assert the url contains get-started text', async () => {
    await HomePage.open();

    await HomePage.getStartedButton.click();
    await expect(browser).toHaveUrl(expect.stringContaining('get-started'));
  });

  it("Click on Logo button & assert the url doesn't contain get-started text", async () => {
    await HomePage.open();

    await HomePage.logoLink.click();
    await expect(browser).not.toHaveUrl(expect.stringContaining('get-started'));
  });
});
