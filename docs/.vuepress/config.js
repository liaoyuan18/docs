module.exports = {
    base: "/docs",
    title: '春海个人笔记',
    description: '记录生活',
    themeConfig: {
        nav: [
            { text: 'Home', link: '/' },
            { text: 'Guide', link: '/guide/' },
            { text: 'External', link: 'https://google.com' },
            {
                text: "Language",
                items: [
                    { text: "English", link: "baidu.com" },
                    { text: "Japanese", link: "baidu.com" },
                    { text: "Chinese", link: "baidu.com" }
                ]
            }
        ],
        lastUpdated: 'Last Updated', // string | boolean
    }

}