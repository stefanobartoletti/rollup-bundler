module.exports = {
  root: true,
  env: {
    browser: true
  },
  parser: '@babel/eslint-parser',
  extends: [
    'standard'
  ],
  rules: {
    semi: ['error', 'always']
  }
};
