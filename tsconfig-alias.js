const { resolve } = require('path');

/**
 * Resolve tsconfig.json paths to Webpack aliases
 * @param  {string} tsconfigPath           - Path to tsconfig
 * @return {object}                        - Webpack alias config
 */
function resolveAlias({ tsconfigPath = './tsconfig.json' } = {}) {
  const { baseUrl, paths } = require(tsconfigPath).compilerOptions;

  const aliases = {};

  Object.keys(paths).forEach((item) => {
    const key = item.replace('/*', '');
    const value = resolve(`${baseUrl}/${key.replace('@', '')}`);

    aliases[key] = value;
  });

  return aliases;
}

module.exports = resolveAlias;
