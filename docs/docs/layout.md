---
title: 布局
---

# 布局

网站的每个页面，可能存在一些相同的组件，诸如 导航头 / 菜单 / 侧边栏 / 版权声明 等。
这类组件虽然存在于每个页面之中，但在划分页面结构时应该将其抽象独立出来，这就是 `布局`。

一个页面所承载的内容，可以分为 路由层 和 非路由层。
路由层用于承载我们定义的路由页面，非路由层用于承载 导航头 / 菜单 / 侧边栏 / 版权声明 等组件。
可以使用 `route.meta` 控制非路由层组件在不同页面下的显示、隐藏或其他差异化行为。

Vack带有一个默认的布局文件 `src/layout/index.vue`：
```vue
<template>
  <slot />
</template>

<script setup>
defineOptions({ name: 'RootLayout' });
</script>
```

这里 `<slot />` 就是承载路由层组件的插槽。开发者可以根据项目需要在此处添加其他诸如 导航头 / 菜单 / 侧边栏 / 版权声明 等组件。
并且可以使用 `route.meta` 控制这些组件在不同页面下的显示、隐藏或其他差异化行为：

```vue
<template>
  <app-header v-if="!meta.hideHeader" />
  <app-container>
    <app-sidebar v-if="!meta.hideSidebar" />
    <app-main>
      <slot />
    </app-main>
  </app-container>
</template>

<script setup>
import { computed } from 'vue';
import { useRoute } from 'vue-router';

defineOptions({ name: 'RootLayout' });

const route = useRoute();
const meta = computed(() => route.meta);
</script>
```
