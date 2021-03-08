const mustache = require('mustache');

const makeMessageByTemplate = async (template) => {
  const { templateString, replace } = template;
  return mustache.render(templateString, replace);
};

exports.makeMessageByTemplate = makeMessageByTemplate;
