import GlobalStore from '../store/global-store';
import { scrollToId } from './utils';

export const processCommand = (command: string, store: ReturnType<typeof GlobalStore.useStore>) => {
  if (command.trim() === '') {
    return '';
  }

  const tokens = command.trim().split(' ');
  switch (tokens[0]) {
    case 'ls':
      if (tokens.length > 1) {
        let succeed = '';
        let failed = '';
        for (let i = 1; i < tokens.length; i += 1) {
          if (store.getFiles().includes(tokens[i])) {
            if (succeed !== '') {
              succeed += '  ';
            }
            succeed += tokens[i];
          } else {
            if (failed !== '') {
              failed += '<br />';
            }
            failed = `ls: cannot access '${tokens[i]}': No such file or directory`;
          }
        }

        let memo = '';
        if (failed !== '') {
          memo += failed;
        }
        if (succeed) {
          if (memo !== '') {
            memo += '<br />';
          }
          memo += succeed;
        }

        return memo;
      }

      return store.getFiles().reduce((memo, file) => memo + file + '  ', '');
    case 'cd':
      if (tokens.length > 1) {
        if (['..', '/'].includes(tokens[1])) {
          return `cd: permission denied: ${tokens[1]}`;
        }

        if (tokens[1] === '.') {
          return '';
        }

        if (store.getFiles().includes(tokens[1])) {
          return `cd: not a directory: ${tokens[1]}`;
        } else {
          return `cd: no such file or directory: ${tokens[1]}`;
        }
      }

      return '';
    case 'cat':
      if (tokens.length === 1) {
        return 'cat: missing file operand';
      }

      if (tokens.length > 2) {
        return 'cat: can take only one operand';
      }

      if (store.getNormalFiles().includes(tokens[1])) {
        return store.getFileContent(tokens[1]);
      }

      if (scrollToId(tokens[1])) {
        return `Will scroll to ${tokens[1]}`;
      }

      return `cat: ${tokens[1]}: No such file or directory`;
    case 'pwd':
      return '/home/trainto';
    // case 'cp':
    //   if (tokens.length === 1) {
    //     return 'cp: missing file operand';
    //   } else if (tokens.length === 2) {
    //     return `cp: missing destination file operand after '${tokens[1]}'`;
    //   }

    //   return '';
    case 'rm':
      if (tokens.length === 1) {
        return 'rm: missing operand';
      }

      let ret = '';
      for (let i = 1; i < tokens.length; i += 1) {
        if (store.getFiles().includes(tokens[i])) {
          store.deleteFile(tokens[i]);
        } else {
          if (ret !== '') {
            ret += '<br />';
          }
          ret += `rm: cannot remove ${tokens[i]}: No suc file or directory`;
        }
      }

      return ret;
    default:
      return `zsh: command not found: ${tokens[0]}`;
  }
};
