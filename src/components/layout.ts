class Layout implements Component {
  component: HTMLTemplateElement;
  nav: HTMLElement;

  constructor() {
    this.component = document.createElement('template');
    this.nav = document.createElement('nav');

    this.build();
  }

  build() {
    this.component.append(this.nav);
  }
}

export default Layout;
