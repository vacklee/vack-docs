import { defineUserConfig, defaultTheme } from 'vuepress'

export default defineUserConfig({
  lang: 'zh-CN',
  title: 'Vack',
  description: '基于 vue3 的前端进阶级框架',
  theme: defaultTheme({
    repo: 'vacklee/create-vack',
    navbar: [
      {
        text: '文档',
        link: '/docs/'
      },
      {
        text: 'vue3文档',
        link: 'https://cn.vuejs.org/'
      }
    ],
    sidebar: {
      '/docs/': [
        '/docs/',
        '/docs/getting-started.md',
        '/docs/enviroment-configuration.md',
        '/docs/route.md',
        '/docs/page.md',
        '/docs/component.md',
        '/docs/layout.md',
        '/docs/style.md',
        '/docs/store.md',
        '/docs/api.md',
        '/docs/mock.md',
        '/docs/i18n.md',
        '/docs/eslint.md',
        '/docs/commit.md'
      ]
    },
    editLink: false
  })
})
