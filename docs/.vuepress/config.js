module.exports = {
  title: 'Programming Best Practices',
  description: 'Guide to Programming Best Practices at Steer North America',
  themeConfig: {
    sidebar: [
      '/'
    ],
  },
  plugins: [
    [
      '@vuepress/plugin-search',
      {
        locales: {
          '/': {
            placeholder: 'Search',
          },
        },
      },
    ],
  ],
  lastUpdated: 'Last Updated',
}
