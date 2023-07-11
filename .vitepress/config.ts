import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "ACT Dev Handbook",
  description: "how we work",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      // { text: 'Examples', link: '/markdown-examples' }
    ],

    sidebar: [
      {
        text: 'Development practices',
        items: [
          { text: 'CI/CD', link: '/dev-practices/ci-cd' },
          { text: 'Code review', link: '/dev-practices/code-review' },
          { text: 'Documentation', link: '/dev-practices/documentation' },
          { text: 'Git history', link: '/dev-practices/git-history' },
          { text: 'Testing', link: '/dev-practices/testing' },
          { text: 'Misc', link: '/dev-practices/misc' },
        ]
      },
      {
        text: 'Manifesto',
        link: '/manifesto'
      }
    ],

    footer: {
      message: 'Made with ❤️ and 🦖'
    },
  },
  base: "/transfer-team/"
})
