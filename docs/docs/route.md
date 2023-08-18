---
title: 路由
sidebarDepth: 1
---

# 路由

Vack 中的路由包含 `手动定义` 和 `自动生成` 两部分。
手动定义即和常规项目一样，可以手动编写 `vue-router` 的路由配置；
自动生成是指 Vack 会按一定的规则为每个页面自动生成其对应的路由。

## 手动定义

Vack 中配置路由的文件在 `src/router/routes.js`，和常规项目一样可以在这里手动编写路由：
```js
// src/router/routes.js

import loadPageRoutes from './utils/loadPageRoutes';

const routes = [
  // 可以在此处手动编写路由
];

// Vack会自动为每个页面创建路由
routes.push(...loadPageRoutes());

export default routes;
```

> 路由的定义方式，可查阅 [vue-router](https://router.vuejs.org/zh/) 的官方文档。

## 自动生成

Vack 会按一定规则为存放在 `src/pages` 目录下的所有 页面 / 子页面 生成其对应的路由。

默认的，Vack 会使用 **页面目录的名称** + **父页面目录名称**（如有）生成页面的 `path`，生成规则：
+ 目录名转小写中横线连接格式，多级路由使用 `/` 连接；
+ 目录名为`Index`的会默认省略。

```sh
# 路径默认省略了 index 结尾的部分
pages/Index/index.vue #-> /
# 目录名称单个单词，转为小写
pages/Home/index.vue #-> /home
# 多个单词转为小写，以中横线连接
pages/AboutMe/index.vue #-> /about-me
# 多级路由使用 / 连接
pages/ParentPage/SubPageA/index.vue #-> /parent-page/sub-page-a
# 多级路由也会省略 index 结尾的部分
pages/ParentPage/SubPageA/Index/index.vue #-> /parent-page/sub-page-a
```

### 配置

页面目录下可以创建 `index.js` 文件用以对该页面做补充说明，在生成路由时可以覆盖默认行为。
`pages/**/index.js`需要默认导出一个配置对象，有效的配置字段如下：

```js
// pages/**/index.js

export default {
  // 生成路由时，覆盖默认的路径
  path: '/',
  // 可以声明params参数，和路由配置的path属性一样
  path: '/:id',

  // 页面默认使用 <script setup>，如果需要在顶层使用 await
  // 则需要显式声明该字段为 true，在生成路由时 Vack 会做额外的处理
  suspense: true,

  // 为生成的路由附加其他属性，如生命周期钩子等
  extendRoute() {
    return {
      beforeEnter() {},
    },
  },

  // .... 可以添加其他任意自定义属性
  // 除以上属性，其他的属性可以使用路由对象的 meta 进行访问
  showFooter: true,
};
```

```vue
<script setup>
import { useRoute } from 'vue-router';

const route = useRoute();
console.log(route.meta.showFooter); // true
</script>
```
