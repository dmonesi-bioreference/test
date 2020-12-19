module.exports = {
  '*.{js,jsx,ts,tsx}': [
    'stylelint',
    'eslint --fix',
    'prettier --write',
    'npm run test --bail --findRelatedTests --watchAll=false',
    'git add',
  ],
}
