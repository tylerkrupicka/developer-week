const themed = require('postcss-themed').default;
const defaultConfig = require('@design-systems/build/postcss.config');

const themes = {
  intuit: {},
  turbotax: {},
  quickbooks: {}
};

module.exports = ctx => {
  const config = defaultConfig(ctx);
  const [nested, ...rest] = config.plugins;
  const plugins = [
    // Nested must come after mixins because mixin might have nesting
    nested,
    // Themed must come after nested so theme classnames are properly generated
    themed({ config: themes, defaultTheme: 'intuit' }),
    ...rest
  ];

  return {
    ...config,
    plugins
  };
};
