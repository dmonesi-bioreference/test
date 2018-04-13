/* eslint-disable sort-keys */
module.exports = function (plop) {
  plop.setGenerator('component', {
    description: 'create files for a new component',
    prompts: [{
      type: 'input',
      name: 'name',
      message: 'name of component',
    }],
    actions: [
      {
        type: 'add',
        path: 'src/components/{{properCase name}}/index.jsx',
        templateFile: 'plop/component/index.hbs',
      },
      {
        type: 'add',
        path: 'src/components/{{properCase name}}/{{properCase name}}.jsx',
        templateFile: 'plop/component/component.hbs',
      },
      {
        type: 'add',
        path: 'src/components/{{properCase name}}/{{properCase name}}.story.jsx',
        templateFile: 'plop/component/component.story.hbs',
      },
      {
        type: 'add',
        path: 'src/sass/06_components/{{dashCase name}}.scss',
        templateFile: 'plop/component/component.scss.hbs',
      },
    ],
  });
};
