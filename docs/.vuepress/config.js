const { description } = require("../../package");

module.exports = {
  /**
   * Ref：https://v1.vuepress.vuejs.org/config/#title
   */
  title: "0x4447, LLC. - Foundation",
  /**
   * Ref：https://v1.vuepress.vuejs.org/config/#description
   */
  description: description,

  /**
   * Extra tags to be injected to the page HTML `<head>`
   *
   * ref：https://v1.vuepress.vuejs.org/config/#head
   */
  head: [
    ['meta', { name: 'theme-color', content: '#ffffff' }],
    ['meta', { name: 'msapplication-TileColor', content: '#2b5797' }],
    ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    [
      'meta',
      { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }],
    ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    [
      'meta',
      { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }],
    [
      'meta',
      {
        name: 'msapplication-TileImage',
        content: '/icons/mstile-150x150.png'
      }],
    ['meta', { name: 'msapplication-TileColor', content: '#2b5797' }],
    [
      'link',
      {
        rel: 'icon',
        type: 'image/png',
        sizes: '32x32',
        href: '/favicon-32x32.png'
      }],
    [
      'link',
      {
        rel: 'icon',
        type: 'image/png',
        sizes: '16x16',
        href: '/favicon-16x16.png'
      }],
    ['link', { rel: 'manifest.json', href: '/manifest.json' }],
    ['link', { rel: 'apple-touch-icon', href: '/icons/apple-touch-icon.png' }],
    [
      'link',
      {
        rel: 'mask-icon',
        href: '/icons/safari-pinned-tab.svg',
        color: '#5bbad5'
      }]
  ],

  /**
   * Theme configuration, here is the default theme configuration for VuePress.
   *
   * ref：https://v1.vuepress.vuejs.org/theme/default-theme-config.html
   */
  themeConfig: {
    repo: "https://github.com/0x4447-office/0x4447_webpage_foundation",
    editLinks: true,
    editLinkText: 'Edit on GitHub',
    docsRepo: '0x4447-office/0x4447_webpage_foundation',
    docsDir: 'docs',
    docsBranch: 'master',
    smoothScroll: true,
    displayAllHeaders: true,
    sidebarDepth: 2,
    nav: [
      {
        text: "Departments",
        items: [
          { text: "Office", link: "/departments/office/" },
          { text: "Design", link: "/departments/design/" },
          { text: "Programers", link: "/departments/programers/" }
        ]
      },
    ],
    sidebar: "auto",
  },

  markdown: {
    lineNumbers: true
  },

  /**
   * Apply plugins，ref：https://v1.vuepress.vuejs.org/zh/plugin/
   */
  plugins: ["@vuepress/plugin-back-to-top"]
};
