import { makeAutoObservable } from 'mobx';
import { createContext, useContext } from 'react';

export class StoreImpl {
  sections = [
    { title: 'About', from: 'about' },
    { title: 'Portfolio', from: 'portfolio' },
    { title: 'Contribution', from: 'contribution' },
    { title: 'Blog', from: 'blog' },
  ];

  textFiles = [{ name: 'README', content: 'Available command list:<br />ls, cd, cat, pwd, rm' }];

  constructor() {
    makeAutoObservable(this);
  }

  get files() {
    const files: string[] = [];
    this.sections.forEach((section) => files.push(section.title));
    this.textFiles.forEach((file) => files.push(file.name));

    return files;
  }

  get normalFiles() {
    return this.textFiles.map((file) => file.name);
  }

  getFileContent(name: string) {
    const ret = this.textFiles.find((file) => file.name === name)?.content;
    if (ret === undefined) {
      throw new Error(`Cannot find a file '${name}'`);
    }

    return ret;
  }

  deleteFile(name: string) {
    let index = this.sections.findIndex((section) => section.title === name);
    if (index !== -1) {
      this.sections.splice(index, 1);
    } else {
      index = this.textFiles.findIndex((file) => file.name === name);
      if (index !== -1) {
        this.textFiles.splice(index, 1);
      } else {
        throw new Error(`Cannot find a file '${name}'`);
      }
    }
  }
}

const store = new StoreImpl();

export default store;

export const StoreContext = createContext<StoreImpl>({} as StoreImpl);

export const useStore = () => useContext(StoreContext);
