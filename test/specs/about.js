describe('About', () => {
  it('Open About Page & assert the URL', async () => {
    await browser.url('/');

    await $('#menu-item-491').click();
    await expect(browser).toHaveUrl('https://practice.sdetunicorns.com/about/');
  });

  it('Open URL & assert title', async () => {
    await browser.url('/');

    await expect(browser).toHaveTitle(
      'Practice E-Commerce Site – SDET Unicorns – Helping you succeed in Software Quality.'
    );
  });

  it('Click Get Started button & assert the url contains get-started text', async () => {
    await browser.url('/');

    await $('#get-started').click();
    await expect(browser).toHaveUrl(expect.stringContaining('get-started'));
  });

  it("Click on Logo button & assert the url doesn't contain get-started text", async () => {
    await browser.url('/');

    await $('.custom-logo-link').click();
    await expect(browser).not.toHaveUrl(expect.stringContaining('get-started'));
  });
});
