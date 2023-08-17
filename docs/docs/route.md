---
title: 路由
---

# 路由

Vack 中，除了可以手动定义路由，还会为所有页面自动生成路由。

## 手动定义

`src/router/routes.js` 是路由的配置文件，可以在该文件中手动定义任意路由。
路由的定义方式，可查阅 [vue-router](https://router.vuejs.org/zh/) 的官方文档。

## 自动生成

Vack会为所有的页面生成一个对应的路由。

### 路径转换

默认的，页面的目录名称会转换为路由的路径，转换关系：

```
Index/index.vue   -> /
Home/index.vue    -> /home
AboutMe/index.vue -> /about-me
```

支持多层级嵌套：

```
ParentPage/Index/index.vue    -> /parent-page
ParentPage/SubPageA/index.vue -> /parent-page/sub-page-a
ParentPage/SubPageB/index.vue -> /parent-page/sub-page-b
```

### 配置

可以在页面目录下定义 `index.js` 文件，以在生成路由时，覆盖一些默认操作。

`index.js` 文件对外暴露一个 json 配置：

```js
export default {
  path: '/',
};
```

目前支持的配置：

配置|类型|作用
:-|:-|:-
path|String|定义路由的 path 属性，可以覆盖默认的路径
suspense|Boolean|如果 `<script setup>` 顶层使用了 `await`，需要配置为 `true`
extendRoute|Function|该函数返回一个 json 以配置路由的其他属性

`index.js` 返回的配置数据，也存在于 `$route.meta` 对象中。
