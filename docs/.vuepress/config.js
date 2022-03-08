module.exports = {
  title: 'Coding Best Practices Guide',
  description: 'Guide to programming best practices at Steer',
  themeConfig: {
    logo: '/steer_logo.png',
    sidebar: [
      '/',
      'coding_process',
      'languages',
      'tools',
      'code_style',
      'code_structure',
      'data',
      'quality_assurance',
      'refactoring',
      'documentation',
      'miscellaneous'
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
