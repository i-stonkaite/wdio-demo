describe('Contact', () => {
  it('Open Contact Page, fill input fields, submit form & assert success message', async () => {
    await browser.url('/contact');

    // addValue will add text to input field
    // setValue will clear the input field and then add text to

    await $('.contact-name input').addValue('name');
    await $('.contact-email input').addValue('email@email.com');
    await $('.contact-phone input').addValue('+115861245698');
    await $('.contact-message textarea').addValue('My test message');
    await $('button=Submit').click();

    const successMessage = await $('.everest-forms-notice--success');

    await expect(successMessage).toHaveText(
      expect.stringContaining(
        'Thanks for contacting us! We will be in touch with you shortly'
      )
    );
  });
});
