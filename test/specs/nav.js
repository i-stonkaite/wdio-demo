import HomePage from '../pages/home-page.js';

describe('Navigation Menu', () => {
  it('Get the text of all menu items & assert them', async () => {
    await HomePage.open();

    const expectedLinks = [
      'Home',
      'About',
      'Shop',
      'Blog',
      'Contact',
      'My account',
    ];

    const actualLinks = [];

    // wait for the Home text to be displayed on the nav menu
    await browser.waitUntil(
      async function () {
        const homeText =
          await HomePage.NavComponent.navigationMenuFirstLink.getText();
        return homeText === 'Home';
      },
      {
        timeout: 5000,
        timeoutMsg: 'Could not verify the Home text from #zak-primary-menu li',
      }
    );

    const navLinks = await HomePage.NavComponent.navigationMenuLinks;

    for (let link of navLinks) {
      actualLinks.push(await link.getText());
    }

    expect(expectedLinks).toEqual(actualLinks);
  });
});
