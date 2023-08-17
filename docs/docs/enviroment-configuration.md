---
title: 环境配置
---

# 环境配置

Vack 支持多环境开发、构建。使用 .env.* 文件配置环境变量，默认支持 dev、test、prod 三种环境。

## 环境变量

Vack 默认支持以下环境变量，部分环境变量需开启相应的预设才生效：

环境变量|说明
:-|:-|
NODE_ENV|编译模式
VITE_BASE|站点的基础路径
VITE_API_BASEURL|接口基础路径
VITE_API_MOCK|是否开启接口Mock
VITE_LOCALE_DEFAULT|国际化的默认语言

+ `VITE_BASE` 默认为 `/`，即部署在一级路由；如果需要部署在二级路由，则需修改为 `/xxx`；
+ `VITE_API_BASEURL` 也作为 axios 实例的 `BASE_URL` 参数；
+ 跟随项目需要，也可以自定义其他环境变量。

## 自定义环境

Vack 默认支持 dev、test、prod 三种环境，跟随项目需要也可以自定义环境。

新增一个环境只需要：

1. 复制一个环境变量文件；
2. 添加调试 / 构建命令。

这里以新增一个 `local` 环境举例：

1. 新建 `.env.local` 文件，将 `.env.dev` 的内容复制一份，可跟随需要修改其中内容；
2. 在 package.json 添加调试 / 构建命令：
```json
{
  "scripts": {
    "dev:local": "vite --mode local",
    "build:local": "vite build --mode local"
  }
}
```
