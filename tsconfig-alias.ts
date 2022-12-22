import { resolve } from 'path';
import config from './tsconfig.json';

const resolveAlias = () => {
  const { baseUrl, paths } = config.compilerOptions;

  const aliases = {};

  Object.keys(paths).forEach((item) => {
    const key = item.replace('/*', '');
    const value = resolve(`${baseUrl}/${key.replace('@', '')}`);

    aliases[key] = value;
  });

  return aliases;
};

export default resolveAlias;
