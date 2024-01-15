import ContactPage from '../pages/contact-page.js';

describe('Contact', () => {
  it('Open Contact Page, fill input fields, submit form & assert success message', async () => {
    await ContactPage.open();

    await ContactPage.submitForm(
      'name',
      'email@email.com',
      '+115861245698',
      'My test message'
    );

    const successMessage = await ContactPage.successMessage;

    await expect(successMessage).toHaveText(
      expect.stringContaining(
        'Thanks for contacting us! We will be in touch with you shortly'
      )
    );
  });
});
