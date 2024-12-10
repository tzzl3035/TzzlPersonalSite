import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "tzzl.site",
  description: "TzzlStudio Site",
  markdown: {
    math: true
  },
  head: [['link', { rel: 'icon', href: '/favicon.png' }]],
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    logo: '/favicon.png',
    socialLinks: [
      { icon: 'github', link: 'https://github.com/tzzl3035/TzzlPersonalSite' }
    ]
  }
})
