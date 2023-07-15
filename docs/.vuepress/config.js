const path = require('path')

module.exports = {
  title: 'Vue Google Maps',
  base: '/vue-google-maps-ui/',
  dest: 'build',
  description: 'A Google Map Component for Vue',
  head: [['link', { rel: 'icon', href: 'favicon.ico' }]],
  themeConfig: {
    editLinks: true,
    repoLabel: 'GitHub',
    repo: 'https://github.com/edisdev/vue-google-maps-ui',
    docsRepo: 'https://github.com/edisdev/vue-google-maps-ui',
    docsDir: 'docs',
    docsBranch: 'main',
    contributors: true,
    backToTop: true,
    sidebar: [
      {
        link: '/',
        text: 'GETTING STARTED',
        collapsable: false,
        children: [
          '/installation/',
          '/props/',
          '/events/'
        ]
      },
      {
        text: 'EXAMPLES',
        children: ['/examples/']
      }
    ]
  },
  alias: {
    '@': path.resolve('src')
  }
}