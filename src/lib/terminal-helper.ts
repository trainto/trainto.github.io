import { scrollToId } from './utils';

const files = ['about', 'blog', 'contribution', 'portfolio', 'README'];
const readmeFiles = ['README'];
// const readme = 'Available command list:<br />ls, cd, cat, pwd, cp, rm';
const readme = 'Available command list:<br />ls, cd, cat, pwd';

export const processCommand = (command: string) => {
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
          if (files.includes(tokens[i])) {
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

      return files.reduce((memo, file) => memo + file + '  ', '');
    case 'cd':
      if (tokens.length > 1) {
        if (['..', '/'].includes(tokens[1])) {
          return `cd: permission denied: ${tokens[1]}`;
        }

        if (tokens[1] === '.') {
          return '';
        }

        if (files.includes(tokens[1])) {
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

      if (readmeFiles.includes(tokens[1])) {
        return readme;
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
    // case 'rm':
    //   return '';
    default:
      return `zsh: command not found: ${tokens[0]}`;
  }
};
