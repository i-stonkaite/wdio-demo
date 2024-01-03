describe('Navigation Menu', () => {
  it('Get the text of all menu items & assert them', async () => {
    await browser.url('/');

    const expectedLinks = [
      'Home',
      'About',
      'Shop',
      'Blog',
      'Contact',
      'My account',
    ];

    const actualLinks = [];

    const navLinks = await $('#zak-primary-menu').$$('li[id*=menu]');

    for (let link of navLinks) {
      actualLinks.push(await link.getText());
    }

    expect(expectedLinks).toEqual(actualLinks);
  });
});
