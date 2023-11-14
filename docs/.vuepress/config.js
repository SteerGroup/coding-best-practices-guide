import { defaultTheme } from 'vuepress'
import { searchPlugin } from '@vuepress/plugin-search'

export default {
  lang: 'en-US',
  title: 'Coding Best Practices Guide',
  description: 'Guide to programming best practices at Steer',
  theme: defaultTheme({
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
    ],
  }),
  plugins: [
    searchPlugin({
      locales: {
        '/': {
          placeholder: 'Search',
        },
      },
    }),
  ],
  lastUpdated: 'Last Updated',
}
