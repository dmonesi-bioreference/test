module.exports = {
  '*.{js,jsx,ts,tsx}': ['stylelint', 'eslint --fix', 'prettier --write'],
  '*.test.js': ['npm run test -- --bail --watchAll=false'],
};
