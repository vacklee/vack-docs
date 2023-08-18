---
title: 介绍
---

# 介绍

Vack 的定位是进阶级前端架构。作为一个偏业务型架构，Vack 在技术的选择上有着一些局限性。<br>
Vack 目前强制选择 Vue3 + Scss 作为基础技术栈，并且当下不支持使用其它技术作为替代。

Vack 总结提炼了前端开发中的九个维度：

- `页面`
- `组件`
- `路由`
- `布局`
- `样式`
- `接口`
- `接口模拟`
- `国际化`
- `状态共享`

每个维度或多或少都做了一些进阶性的提炼封装，这使得项目在开发时会更具效率和规范性。

## 目录结构

了解 Vack 项目主要的目录结构：
```
├─ mock            <--- 接口模拟目录
├─ public          <--- 静态资源目录
├─ src
│  ├─ api          <--- 接口目录
│  ├─ components   <--- 组件目录
│  ├─ layout       <--- 布局目录
│  ├─ locales      <--- 国际化目录
│  ├─ pages        <--- 页面目录
│  ├─ router       <--- 路由目录
│  ├─ store        <--- 共享状态目录
│  ├─ styles       <--- 样式目录
│  ├─ utils        <--- 工具函数目录
│  ├─ App.vue      <--- 根组件
│  └─ main.js      <--- 入口文件
├─ .env.*          <--- 环境文件
├─ index.html      <--- 模板文件
└─ vite.config.js  <--- vite配置文件
```

## 基础依赖

+ [vue v3.2.45](https://cn.vuejs.org/)
+ [vue-router v9.2.2](https://router.vuejs.org/zh/)
+ [axios v1.3.3](https://www.axios-http.cn/)
+ [sass v1.57.0](https://www.sass.hk/)
+ [pinia v2.0.30](https://pinia.web3doc.top/)
