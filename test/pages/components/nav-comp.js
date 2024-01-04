class NavComponent {
  get navigationMenuLinks() {
    return $$('#zak-primary-menu li[id*=menu]');
  }

  get navigationMenuFirstLink() {
    return $('#zak-primary-menu li');
  }
}

export default new NavComponent();
