import { defineConfig } from 'vitepress';
import { markdownConfig } from './configs';

// 顶部导航
const nav = [
  {
    text: "首页",
    link: "/",
  },
  {
    text: "指南",
    link: "/handbook/git/sshkey",
  },
  {
    text: "指南",
    link: "/life/mico/jojo",
  },
  {
    text: "方案",
    items: [
      {
        text: 'Vue',
        items: [
          {
            text: 'vue-element-admin',
            link: 'https://panjiachen.gitee.io/vue-element-admin-site/zh/',
          },
          {
            text: 'antdv',
            link: 'https://pro.antdv.com/',
          },
          {
            text: 'antdv文档',
            link: 'https://antdv.com/docs/vue/introduce-cn/',
          },
        ],
      },
    ],
  },
]

// 侧边导航
const collapsible = true // 显示一个展开的切换按钮
const collapsed = false // 章节展开
const sidebar = {
  "/handbook/": [
    {
      text: "introduce",
      collapsible,
      collapsed,
      items: [
        {
          text: "介绍",
          link: "/handbook/introduce",
        }
      ],
    },
    {
      text: "git",
      collapsible,
      collapsed,
      items: [
        {
          text: "SSH公钥",
          link: "/handbook/git/sshkey",
        },
        {
          text: "账号切换",
          link: "/handbook/git/change",
        },
        {
          text: "fork同步",
          link: "/handbook/git/fork",
        },
        {
          text: "问题和解决",
          link: "/handbook/git/problem",
        },
      ],
    },
    {
      text: "vue",
      collapsible,
      collapsed,
      items: [
        {
          text: "Vue",
          link: "/handbook/vue/vue",
        },
        {
          text: "组件库",
          link: "/handbook/vue/library",
        },
        {
          text: "地图",
          link: "/handbook/vue/map",
        },
      ],
    },
    {
      text: "css",
      collapsible,
      collapsed,
      items: [
        {
          text: "tailwindcss",
          link: "/handbook/css/tailwind",
        },
      ],
    },
    {
      text: "xm-select",
      collapsible,
      collapsed,
      items: [
        {
          text: "入门指南",
          collapsible,
          collapsed,
          items: [
            {
              text: '安装',
              link: "/handbook/xmselect/install",
            },
            {
              text: '配置项与方法',
              link: "/handbook/xmselect/options",
            },
          ]
        },
        {
          text: "示例",
          collapsible,
          collapsed,
          items: [
            {
              text: '基础使用',
              link: "/handbook/xmselect/XM01",
            },
            {
              text: '国际化',
              link: "/handbook/xmselect/XM02",
            },
            {
              text: '默认选中',
              link: "/handbook/xmselect/XM03",
            },
            {
              text: '修改提示',
              link: "/handbook/xmselect/XM04",
            },
            {
              text: '搜索模式',
              link: "/handbook/xmselect/XM05",
            },
            {
              text: '下拉方向',
              link: "/handbook/xmselect/XM06",
            },
            {
              text: '自定义样式',
              link: "/handbook/xmselect/XM07",
            },
            {
              text: '分页',
              link: "/handbook/xmselect/XM08",
            },
            {
              text: '单选',
              link: "/handbook/xmselect/XM09",
            },
            {
              text: '重复选',
              link: "/handbook/xmselect/XM10",
            },
            {
              text: '自定义属性',
              link: "/handbook/xmselect/XM11",
            },
            {
              text: '主题',
              link: "/handbook/xmselect/XM12",
            },
            {
              text: '显示与隐藏',
              link: "/handbook/xmselect/XM13",
            },
            {
              text: '显示方式',
              link: "/handbook/xmselect/XM14",
            },
            {
              text: '构建选项',
              link: "/handbook/xmselect/XM15",
            },
            {
              text: '监听选择',
              link: "/handbook/xmselect/XM16",
            },
            {
              text: '性能测试',
              link: "/handbook/xmselect/XM17",
            },
            {
              text: '多选上限',
              link: "/handbook/xmselect/XM18",
            },
            {
              text: '工具条',
              link: "/handbook/xmselect/XM19",
            },
            {
              text: '选项显示数量',
              link: "/handbook/xmselect/XM20",
            },
            {
              text: '分组',
              link: "/handbook/xmselect/XM21",
            },
            {
              text: '自动换行',
              link: "/handbook/xmselect/XM22",
            },
            {
              text: '隐藏图标',
              link: "/handbook/xmselect/XM23",
            },
            {
              text: '尺寸',
              link: "/handbook/xmselect/XM24",
            },
            {
              text: '警告',
              link: "/handbook/xmselect/XM25",
            },
            {
              text: '禁用',
              link: "/handbook/xmselect/XM26",
            },
            {
              text: '创建条目',
              link: "/handbook/xmselect/XM27",
            },
          ]
        },
        {
          text: "进阶示例",
          collapsible,
          collapsed,
          items: [
            {
              text: '赋值与取值',
              link: "/handbook/xmselect/ZM01",
            },
            {
              text: '表单提交',
              link: "/handbook/xmselect/ZM02",
            },
            {
              text: '表格中多选',
              link: "/handbook/xmselect/ZM03",
            },
            {
              text: '远程搜索',
              link: "/handbook/xmselect/ZM04",
            },
            {
              text: '动态数据',
              link: "/handbook/xmselect/ZM05",
            },
            {
              text: '弹框中的多选',
              link: "/handbook/xmselect/ZM06",
            },
            {
              text: '获取实例对象',
              link: "/handbook/xmselect/ZM07",
            },
            {
              text: '批量操作',
              link: "/handbook/xmselect/ZM08",
            },
          ]
        },
        {
          text: "拓展中心",
          collapsible,
          collapsed,
          items: [
            {
              text: '下拉自定义',
              link: "/handbook/xmselect/ZP01",
            },
            {
              text: '下拉树',
              link: "/handbook/xmselect/ZP02",
            },
            {
              text: '下拉日期多选',
              link: "/handbook/xmselect/ZP03",
            },
            {
              text: '下拉折叠面板',
              link: "/handbook/xmselect/ZP04",
            },
            {
              text: '下拉穿梭框',
              link: "/handbook/xmselect/ZP05",
            },
            {
              text: '级联模式',
              link: "/handbook/xmselect/ZP06",
            },
          ]
        },
        {
          text: "常见问题",
          link: "/handbook/xmselect/question",
        },
        {
          text: "ES6语法说明",
          link: "/handbook/xmselect/es6",
        },
      ],
    },
  ],
}

// algolia搜索
const algolia = {
  appId: 'ALTS7M1QY7',
  apiKey: 'dd3f3352651b8c25656774453b128223',
  indexName: 'leedom',
  // placeholder: '搜索文档',
  // translations: {
  //   button: {
  //     buttonText: '搜索文档',
  //     buttonAriaLabel: '搜索文档',
  //   },
  //   modal: {
  //     searchBox: {
  //       resetButtonTitle: '清除查询条件',
  //       resetButtonAriaLabel: '清除查询条件',
  //       cancelButtonText: '取消',
  //       cancelButtonAriaLabel: '取消',
  //     },
  //     startScreen: {
  //       recentSearchesTitle: '搜索历史',
  //       noRecentSearchesText: '没有搜索历史',
  //       saveRecentSearchButtonTitle: '保存至搜索历史',
  //       removeRecentSearchButtonTitle: '从搜索历史中移除',
  //       favoriteSearchesTitle: '收藏',
  //       removeFavoriteSearchButtonTitle: '从收藏中移除',
  //     },
  //     errorScreen: {
  //       titleText: '无法获取结果',
  //       helpText: '你可能需要检查你的网络连接',
  //     },
  //     footer: {
  //       selectText: '选择',
  //       navigateText: '切换',
  //       closeText: '关闭',
  //       // searchByText: '搜索提供者',
  //     },
  //     noResultsScreen: {
  //       noResultsText: '无法找到相关结果',
  //       suggestedQueryText: '你可以尝试查询',
  //       openIssueText: '你认为该查询应该有结果？',
  //       openIssueLinkText: '点击反馈',
  //     },
  //   },
  // }
}

// 中文
const i18n = {
  search: '搜索',
  menu: '菜单',
  toc: '本页目录',
  returnToTop: '返回顶部',
  appearance: '外观',
  previous: '前一篇',
  next: '下一篇',
  pageNotFound: '页面未找到',
  deadLink: {
    before: '你打开了一个不存在的链接：',
    after: '。'
  },
  deadLinkReport: {
    before: '不介意的话请提交到',
    link: '这里',
    after: '，我们会跟进修复。'
  },
  footerLicense: {
    before: '',
    after: ''
  },

  // aria labels
  // TODO:
  // update the key to `ariaAnnouncer` after new `@vue/theme` released
  // https://github.com/vuejs/theme/issues/75
  ariaAnnouner: {
    before: '',
    after: '已经加载完毕'
  },
  ariaDarkMode: '切换深色模式',
  ariaSkipToContent: '直接跳到内容',
  ariaToC: '当前页面的目录',
  ariaMainNav: '主导航',
  ariaMobileNav: '移动版导航',
  ariaSidebarNav: '侧边栏导航',
}

export default defineConfig({
  title: "Leedom",
  description: "Leedom's docs",
  head: [
    ['meta', { name: 'viewport', content: 'width=device-width,initial-scale=1,user-scalable=no' }],
    ['meta', { name: 'msapplication-TileColor', content: '#646cff' }],
    ['meta', { name: 'theme-color', content: '#646cff' }],
    [
      "link",
      {
        rel: "icon",
        href: "https://fuckjs.gitee.io/cdn/docs-leedom-me/hero.png",
      },
    ],
    [
      "link",
      {
        rel: "stylesheet",
        href: "https://cdn.jsdelivr.net/npm/lxgw-wenkai-webfont@1.6.0/lxgwwenkai-regular.css",
      },
    ],
  ],
  lang: "zh-CN",
  appearance: true,
  ignoreDeadLinks: true,
  lastUpdated: true,
  markdown: markdownConfig,
  themeConfig: {
    algolia,
    nav,
    sidebar,
    siteTitle: "Leedom",
    logo: "https://fuckjs.gitee.io/cdn/docs-leedom-me/hero.png",
    footer: {
      message: "",
      copyright: "Copyright © 2022-present Leedom",
    },
    socialLinks: [
      {
        icon: "github",
        link: "https://github.com/leedom92/docs",
      },
    ],
  },
})