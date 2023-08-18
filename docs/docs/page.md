---
title: 页面
---

# 页面

Vack 的页面编写在 `src/pages` 目录下。目录结构：
```
├─ src/pages
   ├─ PageOne              <--- PageOne页面目录
   │  ├─ SubPage           <--- SubPage页面目录
   │  │  └─ index.vue      <--- SubPage页面的入口文件
   │  └─ index.vue         <--- PageOne页面的入口文件
   └─ PageTwo              <--- PageTwo页面目录
      ├─ index.vue         <--- PageTwo页面的入口文件
      └─ index.js          <--- PageTwo页面的配置文件
```

+ 每个页面都是一个目录，该目录下的 `index.vue` 是页面的入口文件；
+ 目录名称要求使用驼峰格式且首字母需要大写；
+ 页面目录下可以嵌套子页面，子页面的目录文件结构和父页面没有任何差别；
+ 页面目录下除了子页面外还可以存在其它目录，Vack 会根据是否存在 `index.vue` 判断是否是页面；
+ `index.js`是作为页面的补充描述，在[路由](./route.md)章节会介绍到。

**.vue文件的一般结构：**

```vue
<!-- src/pages/*/index.vue -->
<!-- src/components/*/index.vue -->
<template>
  <div></div>
</template>

<script setup>
defineOptions({ name: 'PageHome' });
</script>

<style lang="scss" scoped>

</style>
```

+ 为了方便使用`vue-devtools`调试，所有页面、组件要求使用`defineOptions`定义`name`属性；
+ 在编写样式时，除了`scoped`模式，也可以使用`module`模式：

```vue
<template>
  <div :class="$style.color"></div>
</template>

<style lang="scss" module>
.color {}
</style>
```
