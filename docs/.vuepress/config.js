module.exports = {
  title: 'Coding Best Practices Guide',
  description: 'Guide to programming best practices at Steer',
  themeConfig: {
    sidebar: [
      '/'
    ]
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
