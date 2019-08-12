https://singingxy.github.io/VueCNode/

# VueCNode

*技术栈: 基于vue.js + vue-cli + vue-router + vuex + axios + less 重写vue版cnode社区，使用webpack打包

*感谢cnodejs社区提供的API。

## 预览地址

>[在线访问](https://singingxy.github.io/VueCNode/)

## 源码地址

>https://github.com/singingXY/VueCNode

## 项目目录说明
```
VueCNode
├─ .babelrc                         // ES6语法编译配置
├─ .gitignore                       // git 忽略文件
├─ package.json                     // 项目配置文件
├─ README.md                        // 项目说明
├─ index.html                       // 项目首页html
├─ dist                             // 输出目录
├─ node_modules                     // Node.js 模块
├─ src                              // 源码目录
│   ├─ App.vue                      // 页面入口文件
│   ├─ assets                       // 资源文件夹
│   │    ├─ less                    // less文件
│   │    │   ├─ list.less           // 全局通用less文件
│   │    │   └─reset.less           // 全局通用reset文件
│   │    └─ logo.png                // 头部logo图
│   ├─ common.js                    // 全局js文件
│   ├─ components                   // 公共组件
│   │    ├─ header.vue              // 页面头部公共组件
│   │    ├─ loading.vue             // 页面数据加载公共组件
│   │    └─ sidebar.vue             // 页面侧边公共组件
│   ├─ main.js                      // 程序入口文件，加载各种公共组件
│   ├─ routers.js                   // 配置页面路由
│   ├─ store                        // vuex的状态管理
│   │    └─ index.js                // 加载各种store模块
│   └─ views                        // 各种页面组件
│       ├─ about.vue                // 关于
│       ├─ article.vue              // 主题详情
│       ├─ collect.vue              // 我的收藏
│       ├─ list.vue                 // 首页列表
│       ├─ message.vue              // 我的消息
│       └─ user.vue                 // 查看用户资料
├─ build                            // 构建服务和webpack配置
└─ config                           // 项目开发环境配置

```

## Build Setup

``` bash
# clone repo
git clone git@github.com:singingXY/VueCNode.git

# install dependencies
npm install

# build for production with minification
npm run build

```
