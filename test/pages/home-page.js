import NavComponent from '../pages/components/nav-comp.js';

class HomePage {
  open() {
    return browser.url('/');
  }

  get getStartedButton() {
    return $('#get-started');
  }

  get aboutLink() {
    return $('#menu-item-491');
  }

  get logoLink() {
    return $('.custom-logo-link');
  }

  get NavComponent() {
    return NavComponent;
  }
}

export default new HomePage();
