import Component from './component';

class About extends Component {
  a: LocalStore<>;
  constructor() {
    super([]);
  }

  build() {
    console.log(this.listenFor);
  }
}

export default Nav;
