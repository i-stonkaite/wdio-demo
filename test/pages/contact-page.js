class ContactPage {
  open() {
    return browser.url('/contact');
  }

  //   const successMessage = await $('.everest-forms-notice--success');

  get nameInput() {
    return $('.contact-name input');
  }

  get emailInput() {
    return $('.contact-email input');
  }

  get phoneInput() {
    return $('.contact-phone input');
  }

  get phoneInput() {
    return $('.contact-phone input');
  }

  get textAreaMessage() {
    return $('.contact-message textarea');
  }

  get submitButton() {
    return $('.button=Submit');
  }

  get successMessage() {
    return $('.everest-forms-notice--success');
  }

  async submitForm(name, email, phone, message) {
    await this.nameInput.addValue(name);
    await this.emailInput.addValue(email);
    await this.phoneInput.addValue(phone);
    await this.textAreaMessage.addValue(message);

    await this.submitButton.click();
  }
}

export default new ContactPage();
