---
title: 组件
---

# 组件

## 全局组件

全局组件以目录形式定义在 `src/components` 目录下。
组件的目录名以驼峰格式且首字母大写，也作为组件的名称，`index.vue` 是组件的入口文件。

```
src
└─ components
   ├─ Button
   │  └─ index.vue
   └─ ButtonGroup
      └─ index.vue
```

全局组件会被自动加载，以 `app-` 作为前缀，后面加上组件名称，使用时无需引入。如：

```vue
<template>
  <app-button />
  <app-button-group />
</template>
```

## 私有组件

项目中有些组件可能和页面业务强关联，这类组件不适合抽象为全局组件，可以作为页面的私有组件。
页面的私有组件建议存放在该页面目录下的 `components` 目录，如：

```
pages
└─ MyPage
   ├─ components
   │  ├─ MyDialog
   │  │  └─ index.vue
   │  └─ MyButton.vue
   └─ index.vue
```
