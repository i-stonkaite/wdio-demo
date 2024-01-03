describe('About', () => {
  it('Open About Page & assert URL', async () => {
    await browser.url('https://practice.sdetunicorns.com/');
    await $('#menu-item-491').click();

    await expect(browser).toHaveUrl('https://practice.sdetunicorns.com/about/');
  });

  it('Click Get Started button & assert url contains get-started text', async () => {
    await browser.url('https://practice.sdetunicorns.com/');

    await $('#get-started').click();
    await expect(browser).toHaveUrl('get-started/');
  });
});
