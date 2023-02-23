const path = require('path')
module.exports = {
    base:'/HpDesign/',
    title: 'Hotpot UI',
    description: '一套基于vue2.X的组件库',
    head: [
      ['link', { rel: 'icon', href: '/favicon.ico' }]
    ],
    themeConfig: {
      nav: [
        { text: 'Home', link: '/' },
        { text: 'Gitee', link: 'https://gitee.com/zhao_juchang/xixixi-ui' },
      ],
      sidebar: [
          {
              title: '开发指南',
              collapsable: false,
              children: [
                  {
                      title: '安装',
                      collapsable: false,
                      path: 'views/guide/install.md'
                  },
                  {
                      title: '快速开始',
                      collapsable: false,
                      path: 'views/guide/start.md'
                  },
              ]
            },
            {
              title: '组件',
              collapsable: false,
              children: [
                {
                    title: '基础',
                    collapsable: false,
                    children:[
                      {
                        title: 'Button',
                        collapsable: false,
                        path: 'views/components/basic/Button.md',
                      },
                      {
                        title: 'Icon',
                        collapsable: false,
                        path: 'views/components/basic/Icon.md',
                      },
                  ]
                },
                {
                    title: '表单',
                    collapsable: false,
                    children:[
                      {
                        title: 'Form',
                        collapsable: false,
                        path: 'views/components/form/Form.md',
                      },
                      {
                        title: 'Radio',
                        collapsable: false,
                        path: 'views/components/form/Radio.md',
                      },
                      {
                        title: 'Checkbox',
                        collapsable: false,
                        path: 'views/components/form/Checkbox.md',
                      },
                      {
                        title: 'Switch',
                        collapsable: false,
                        path: 'views/components/form/Switch.md',
                      },
                      {
                        title: 'Input',
                        collapsable: false,
                        path: 'views/components/form/Input.md',
                      },
                      {
                        title: 'InputNmuber',
                        collapsable: false,
                        path: 'views/components/form/InputNmuber.md',
                      },
                      {
                        title: 'Select',
                        collapsable: false,
                        path: 'views/components/form/Select.md',
                      },
                  ]
                },
                {
                    title: 'toast',
                    collapsable: false,
                    children:[
                      {
                        title: 'toast',
                        collapsable: false,
                        path: 'views/components/notice/toast.md',
                      },
                  ]
                },
                {
                    title: '其他',
                    collapsable: false,
                    children:[
                      {
                        title: 'Dialog',
                        collapsable: false,
                        path: 'views/components/other/Dialog.md',
                      },
                      {
                        title: 'Step',
                        collapsable: false,
                        path: 'views/components/other/Step.md',
                      },
                  ]
                },
              ]
            },
        ]
      },
    // scss:{ //配置 scss 根目录
    //   includePaths: [path.join(__dirname, '../../style')]
    // }
  }