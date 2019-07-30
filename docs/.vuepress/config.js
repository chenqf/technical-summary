module.exports = {
    title: '前端小黑屋',
    description: '云中桥的技术整理',
    port: 8080,
    dest: '.vuepress/dist', // build 时的输出目录
    themeConfig: {
        // 右上导航
        nav: [{
                text: '主页',
                link: '/'
            },
            // {
            //     text: '工具收集',
            //     link: '/'
            // },
            {
                text: '掘金主页',
                link: 'https://juejin.im/user/5c6e666be51d457fd033e984/posts'
            },
            {
                text: 'Github',
                link: 'https://github.com/chenqf'
            },
        ],
        // 侧边栏
        sidebarDepth: 3,
        // displayAllHeaders :true,
        sidebar: [
            {
                path:'/js/',
                title: 'JavaScript',
                sidebarDepth:3,
                children: [
                    '/js/深拷贝',
                    '/js/正则',
                    '/js/推荐书写', 
                ]
            }
        ]
    }
}