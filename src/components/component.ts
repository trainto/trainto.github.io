import { getStore } from '../lib/global-store';

abstract class Component {
  store = getStore();
  listenFor: string[];

  constructor(listenFor: string[] = []) {
    this.listenFor = [...listenFor];
    this.listenFor.forEach((key) =>
      this.store.addEventListener(key, () => {
        this.listen();
      })
    );

    this.build();
  }

  abstract build(): void;

  listen() {
    this.build();
  }
}

export default Component;
