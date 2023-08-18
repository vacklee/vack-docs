import { defineUserConfig, defaultTheme } from 'vuepress'

export default defineUserConfig({
  lang: 'zh-CN',
  title: 'Vack',
  description: '基于 vue3 的前端进阶级框架',
  theme: defaultTheme({
    editLink: false,
    lastUpdatedText: '更新时间',
    contributorsText: '作者',
    repo: 'vacklee/create-vack',
    navbar: [
      {
        text: '文档',
        link: '/docs/'
      }
    ],
    sidebar: {
      '/docs/': [
        '/docs/',
        '/docs/getting-started.md',
        '/docs/enviroment-configuration.md',
        '/docs/page.md',
        '/docs/component.md',
        '/docs/route.md',
        '/docs/layout.md',
        '/docs/style.md',
        '/docs/api.md',
        '/docs/mock.md',
        '/docs/store.md',
        '/docs/i18n.md',
        // '/docs/eslint.md',
        // '/docs/commit.md'
      ]
    }
  })
})
