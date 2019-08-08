module.exports = {
    title: '前端小黑屋',
    description: '云中桥的技术整理',
    port: 8080,
    dest: '.vuepress/dist', // build 时的输出目录
    //考虑加入页面统计，看看访问量
    head: [
        // ['script', {  src: 'https://cdn.bootcss.com/jquery/3.4.1/jquery.min.js' }],
        ['script', {  src: 'https://cdn.bootcss.com/moment.js/2.24.0/moment.js' }],
        // ['script', {  src: 'https://cdn.bootcss.com/jquery-cookie/1.4.1/jquery.cookie.min.js' }],
        // ['script', {  src: 'https://cdn.bootcss.com/lodash.js/4.17.15/lodash.min.js' }],
        ['link', { rel: 'stylesheet', href: '/style.css' }]
    ],
    markdown:{
        // toc: {
        //     includeLevel: [2, 3, 4, 5, 6]
        // },
        // lineNumbers:true, //是否显示行号
    },
    themeConfig: {
        // 右上导航
        nav: [
            {
                text: '主页',
                link: '/'
            },
            {
                text: '我的复习',
                link: '/mine/review'
            },
            {
                text: '好文收藏',
                link: '/mine/collect'
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
        sidebarDepth: 4,
        // displayAllHeaders: true, // 显示所有页面的标题链接
        // displayAllHeaders :true,
        sidebar: [
            {
                // path: '/js/',
                title: 'JavaScript',
                sidebarDepth: 3,
                children: [
                    '/js/深拷贝/',
                    '/js/正则/',
                    '/js/Object & Function/',
                    '/js/组合和管道/',
                    '/js/Object权限/',
                    '/js/Proxy/',
                    '/js/推荐书写/',
                ]
            },
            {
                // path: '/framework/',
                title: '浏览器',
                sidebarDepth: 3,
                children: [
                    '/brower/DOM操作/',
                    '/brower/渲染过程/',
                ]
            },
            {
                // path: '/framework/',
                title: 'React',
                sidebarDepth: 3,
                children: [
                    '/react/HOC/',
                ]
            },
            {
                // path: '/framework/',
                title: '架构相关',
                sidebarDepth: 3,
                children: [
                    
                ]
            }
        ],
        lastUpdated: '上次更新时间',//上次更新时间
        // 假定是 GitHub. 同时也可以是一个完整的 GitLab URL
        repo: 'https://github.com/chenqf/technical-summary',
        // 自定义仓库链接文字。默认从 `themeConfig.repo` 中自动推断为
        // "GitHub"/"GitLab"/"Bitbucket" 其中之一，或是 "Source"。
        repoLabel: '查看源码',

        // 假如文档不是放在仓库的根目录下：
        docsDir: 'docs',
        // 默认是 false, 设置为 true 来启用
        editLinks: true,
        // 默认为 "Edit this page"
        editLinkText: '帮助我们改善此页面！'
    }
}