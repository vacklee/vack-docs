---
title: 组件
---

# 组件

这里介绍的组件是指开发者自己编写的全局组件或私有组件。
Vack不自带组件库，开发者根据项目的需要，可以自行引入组件库。

## 全局组件
全局组件编写在`src/components`目录下。目录结构：

```
├─ src/components
   ├─ Button              <--- Button组件目录
   │  └─ index.vue        <--- Button组件的入口文件
   └─ ButtonGroup
      └─ index.vue
```

+ 每个组件都是一个目录，该目录下的 `index.vue` 是组件的入口文件；
+ 目录名称要求使用驼峰格式且首字母需要大写；

Vack会自动引入全局组件，使用时无需手动引入。
使用全局组件的方式是以`app-`作为前缀，后面加组件目录名称转小写中横线格式：

```vue
<template>
  <app-button />
  <app-button-group />
</template>
```

## 私有组件

项目中一些组件可能和具体页面的业务具有强关联性，这类组件不适合抽象为全局组件，可以作为页面的私有组件。
页面的私有组件存放在该页面目录下的 `components` 目录，如：

```
pages
└─ MyPage
   ├─ components
   │  ├─ MyDialog
   │  │  └─ index.vue
   │  └─ MyButton.vue
   └─ index.vue
```

私有组件可以是一个目录的形式，也可以是一个单文件的形式。
