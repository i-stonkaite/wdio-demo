// Practice E-Commerce Site – SDET Unicorns – Helping you succeed in Software Quality.
// https://practice.sdetunicorns.com/

describe('Home', () => {
  it('Open URL & assert title', async () => {
    await browser.url('https://practice.sdetunicorns.com/');

    await expect(browser).toHaveTitle(
      'Practice E-Commerce Site – SDET Unicorns – Helping you succeed in Software Quality.'
    );
  });
});
