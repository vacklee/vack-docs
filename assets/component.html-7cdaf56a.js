import{_ as n,o as e,c as a,e as s}from"./app-ab2049dd.js";const t={},i=s(`<h1 id="组件" tabindex="-1"><a class="header-anchor" href="#组件" aria-hidden="true">#</a> 组件</h1><p>这里介绍的组件是指开发者自己编写的全局组件或私有组件。 Vack不自带组件库，开发者根据项目的需要，可以自行引入组件库。</p><h2 id="全局组件" tabindex="-1"><a class="header-anchor" href="#全局组件" aria-hidden="true">#</a> 全局组件</h2><p>全局组件编写在<code>src/components</code>目录下。目录结构：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>├─ src/components
   ├─ Button              &lt;--- Button组件目录
   │  └─ index.vue        &lt;--- Button组件的入口文件
   └─ ButtonGroup
      └─ index.vue
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>每个组件都是一个目录，该目录下的 <code>index.vue</code> 是组件的入口文件；</li><li>目录名称要求使用驼峰格式且首字母需要大写；</li></ul><p>Vack会自动引入全局组件，使用时无需手动引入。 使用全局组件的方式是以<code>app-</code>作为前缀，后面加组件目录名称转小写中横线格式：</p><div class="language-vue line-numbers-mode" data-ext="vue"><pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>app-button</span> <span class="token punctuation">/&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>app-button-group</span> <span class="token punctuation">/&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="私有组件" tabindex="-1"><a class="header-anchor" href="#私有组件" aria-hidden="true">#</a> 私有组件</h2><p>项目中一些组件可能和具体页面的业务具有强关联性，这类组件不适合抽象为全局组件，可以作为页面的私有组件。 页面的私有组件存放在该页面目录下的 <code>components</code> 目录，如：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>pages
└─ MyPage
   ├─ components
   │  ├─ MyDialog
   │  │  └─ index.vue
   │  └─ MyButton.vue
   └─ index.vue
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>私有组件可以是一个目录的形式，也可以是一个单文件的形式。</p>`,12),d=[i];function c(l,o){return e(),a("div",null,d)}const u=n(t,[["render",c],["__file","component.html.vue"]]);export{u as default};
