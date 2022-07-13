import { useCallback } from 'react';
import { createStore, useMutableState } from 'recostore';

const useGlobal = () => {
  const [sections] = useMutableState([
    { title: 'About', from: 'about' },
    { title: 'Portfolio', from: 'portfolio' },
    // { title: 'Side-Project', from: 'side-project' },
    { title: 'Contribution', from: 'contribution' },
    { title: 'Blog', from: 'blog' },
  ]);
  const [textFiles] = useMutableState([
    { name: 'README', content: 'Available command list:<br />ls, cd, cat, pwd, rm' },
  ]);

  const getFiles = useCallback(() => {
    const files: string[] = [];
    sections.forEach((section) => files.push(section.title));
    textFiles.forEach((file) => files.push(file.name));

    return files;
  }, [sections, textFiles]);

  const getNormalFiles = useCallback(() => {
    return textFiles.map((file) => file.name);
  }, [textFiles]);

  const getFileContent = useCallback(
    (name: string) => {
      const ret = textFiles.find((file) => file.name === name)?.content;
      if (ret === undefined) {
        throw new Error(`Cannot find a file '${name}'`);
      }

      return ret;
    },
    [textFiles]
  );

  const deleteFile = useCallback(
    (name: string) => {
      let index = sections.findIndex((section) => section.title === name);
      if (index !== -1) {
        sections.splice(index, 1);
      } else {
        index = textFiles.findIndex((file) => file.name === name);
        if (index !== -1) {
          textFiles.splice(index, 1);
        } else {
          throw new Error(`Cannot find a file '${name}'`);
        }
      }
    },
    [sections, textFiles]
  );

  return {
    sections,

    getFiles,
    getNormalFiles,
    getFileContent,
    deleteFile,
  };
};

const GlobalStore = createStore(useGlobal, { displayName: 'GlobalStore' });

export default GlobalStore;
