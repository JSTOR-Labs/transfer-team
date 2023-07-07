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
        link: '/dev-practices'
      },
      {
        text: 'Manifesto',
        link: '/manifesto'
      }
    ]
  }
})
