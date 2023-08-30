import{_ as r,r as a,o as s,c as t,a as e,b as l,d as i,e as d}from"./app-ab2049dd.js";const o={},c=d(`<h1 id="介绍" tabindex="-1"><a class="header-anchor" href="#介绍" aria-hidden="true">#</a> 介绍</h1><p>Vack 的定位是进阶级前端架构。作为一个偏业务型架构，Vack 在技术的选择上有着一些局限性。<br> Vack 目前强制选择 Vue3 + Scss 作为基础技术栈，并且当下不支持使用其它技术作为替代。</p><p>Vack 总结提炼了前端开发中的九个维度：</p><ul><li><code>页面</code></li><li><code>组件</code></li><li><code>路由</code></li><li><code>布局</code></li><li><code>样式</code></li><li><code>接口</code></li><li><code>接口模拟</code></li><li><code>国际化</code></li><li><code>状态共享</code></li></ul><p>每个维度或多或少都做了一些进阶性的提炼封装，这使得项目在开发时会更具效率和规范性。</p><h2 id="目录结构" tabindex="-1"><a class="header-anchor" href="#目录结构" aria-hidden="true">#</a> 目录结构</h2><p>了解 Vack 项目主要的目录结构：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>├─ mock            &lt;--- 接口模拟目录
├─ public          &lt;--- 静态资源目录
├─ src
│  ├─ api          &lt;--- 接口目录
│  ├─ components   &lt;--- 组件目录
│  ├─ layout       &lt;--- 布局目录
│  ├─ locales      &lt;--- 国际化目录
│  ├─ pages        &lt;--- 页面目录
│  ├─ router       &lt;--- 路由目录
│  ├─ store        &lt;--- 共享状态目录
│  ├─ styles       &lt;--- 样式目录
│  ├─ utils        &lt;--- 工具函数目录
│  ├─ App.vue      &lt;--- 根组件
│  └─ main.js      &lt;--- 入口文件
├─ .env.*          &lt;--- 环境文件
├─ index.html      &lt;--- 模板文件
└─ vite.config.js  &lt;--- vite配置文件
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="基础依赖" tabindex="-1"><a class="header-anchor" href="#基础依赖" aria-hidden="true">#</a> 基础依赖</h2>`,9),v={href:"https://cn.vuejs.org/",target:"_blank",rel:"noopener noreferrer"},u={href:"https://router.vuejs.org/zh/",target:"_blank",rel:"noopener noreferrer"},h={href:"https://www.axios-http.cn/",target:"_blank",rel:"noopener noreferrer"},p={href:"https://www.sass.hk/",target:"_blank",rel:"noopener noreferrer"},m={href:"https://pinia.web3doc.top/",target:"_blank",rel:"noopener noreferrer"};function b(_,f){const n=a("ExternalLinkIcon");return s(),t("div",null,[c,e("ul",null,[e("li",null,[e("a",v,[l("vue v3.2.45"),i(n)])]),e("li",null,[e("a",u,[l("vue-router v9.2.2"),i(n)])]),e("li",null,[e("a",h,[l("axios v1.3.3"),i(n)])]),e("li",null,[e("a",p,[l("sass v1.57.0"),i(n)])]),e("li",null,[e("a",m,[l("pinia v2.0.30"),i(n)])])])])}const k=r(o,[["render",b],["__file","index.html.vue"]]);export{k as default};
