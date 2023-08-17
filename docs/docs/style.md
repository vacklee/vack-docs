---
title: 样式
---

# 样式

Vack 使用 Scss 作为 CSS 预处理器。

## 全局注入

默认的，所有的 scss 文件和vue文件的 `<style lang="scss" />` 中注入有全局可用的 `变量`、`继承类` 和 `混合器`。

### 变量

scss 全局变量定义在 `src/styles/global/vars.scss`。

常用变量一般是 场景色 / 背景色 / 字体色 / 间距 / 圆角 / 字号 等。

```scss
// 基础色：白色、黑色
$color-black: #000000;
$color-white: #FFFFFF;

// 场景色：主题色、成功、失败、警告等
$color-primary: #409EFF;
$color-success: #67C23A;
$color-warning: #E6A23C;
$color-danger: #F56C6C;

// 字体色
$text-color-base: #303133;
$text-color-dark: #606266;
$text-color-gray: #909399;
$text-color-placeholder: #C0C4CC;

// 背景色
$bg-color-body: #F8F8F8;

// 间距：margin / padding
$spacing-mini: 4px;
$spacing-super-small: 8px;
$spacing-extra-small: 12px;
$spacing-small: 16px;
$spacing-base: 24px;
$spacing-large: 32px;
$spacing-extra-large: 48px;
$spacing-super-large: 56px;

// 字号
$font-size-small: 12px;
$font-size-base: 14px;
$font-size-medium: 16px;
$font-size-large: 18px;

// 边框
$border-color-base: #DCDFE6;

// 圆角
$border-radius-base: 4px;
$border-radius-circle: 100%;

// 字重 / 字体
$font-weight-base: 400;
$font-family-base: Arial, Helvetica, sans-serif;

// ...以及其他
```

### 继承类

继承类定义在 `src/styles/global/extend.scss`。

Vack默认内置以下继承类：

+ `%flex` - flex布局
+ `%flex-inline` - 行内flex
+ `%flex-column` - flex布局垂直方向
+ `%flex-middle` - 垂直方向居中
+ `%flex-center` - 垂直水平居中
+ `%flex-between` - 两侧分布

### 混合器

混合器定义在 `src/styles/global/mixin.scss`。

Vack默认内置以下混合器：

+ `text-cut` - 单行文本溢出省略
+ `layout` - 珊格布局

:::tip 技巧
灵活运用变量 / 继承 / 混合，可以有效提升页面开发效率。
:::

## 公共样式

在编写样式时，除了会在每个vue页面单独编写各自的样式代码，有时还需要编写公共样式。
为了便于管理，公共样式要求编写在 `src/styles/modules` 目录下，并以模块划分命名。

```
src
└─ styles
   └─ modules
      ├─ button.scss
      └─ table.scss
```

该目录下编写的样式文件，Vack已经做了全局引入，开发者无需再手动引入。
