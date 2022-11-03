/* eslint-disable @typescript-eslint/no-explicit-any */
class Store<T> extends EventTarget {
  cache: Map<keyof T, any>;

  constructor() {
    super();
    this.cache = new Map();
  }

  get(key: keyof T): any {
    return this.cache.get(key);
  }

  dispatch(key: keyof T, payload: any) {
    this.cache.set(key, payload);
    this.dispatchEvent(new Event(key));
  }
}

let store: Store;

const createStore = <T>() => {
  store = new Store<T>();
};

const getStore = (): Store => {
  if (!store) {
    throw new Error('Store is not created yet!');
  }

  return store;
};

export { createStore, getStore };
