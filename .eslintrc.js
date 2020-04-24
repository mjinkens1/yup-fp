module.exports = {
  env: {
    node: true,
    es6: true,
    jest: true,
  },
  parser: 'babel-eslint',
  extends: 'eslint:recommended',
  ignorePatterns: ['dist', 'node_module'],
};
