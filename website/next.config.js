/* eslint-disable @typescript-eslint/no-var-requires */
const withNextra = require('nextra')({
  theme: './theme.tsx',
  themeConfig: './theme.config.tsx',
});

module.exports = withNextra({
  i18n: {
    locales: ['en-US', 'zh-CN'],
    defaultLocale: 'zh-CN',
  },
});
