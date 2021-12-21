module.exports = {
    title: '...',
    description: '...',
    base: '/learn-typescript/',
    theme: 'reco',
    locales: {
        '/': {
          lang: 'zh-CN'
        }
      },
    themeConfig: {
        subSidebar: 'auto',
        nav: [
            { text: '首页', link: '/' },
            { 
                text: '天空之城的 JavaScript 博客', 
                items: [
                    { text: 'Github', link: 'https://github.com/mqyqingfeng' },
                    { text: '掘金', link: 'https://juejin.cn/user/712139234359182/posts' }
                ]
            }
        ],
        sidebar: [
            {
                title: '欢迎浏览',
                path: '/',
                collapsable: false, // 不折叠
                children: [
                    { title: "看前必读", path: "/" }
                ]
            },
            {
              title: "基础学习",
              path: '/handbook/node-express',
              collapsable: false, // 不折叠
              children: [
                { title: "express", path: "/handbook/node-express" },
                { title: "错题库", path: "/handbook/wrongQuestion" }
              ],
            }
          ]
    },
}