import{_ as s,o as n,c as a,e}from"./app-ab2049dd.js";const p={},c=e(`<h1 id="样式" tabindex="-1"><a class="header-anchor" href="#样式" aria-hidden="true">#</a> 样式</h1><p>Vack 使用 Scss 作为 CSS 预处理器。</p><h2 id="全局注入" tabindex="-1"><a class="header-anchor" href="#全局注入" aria-hidden="true">#</a> 全局注入</h2><p>默认的，所有的 scss 文件和vue文件的 <code>&lt;style lang=&quot;scss&quot; /&gt;</code> 中注入有全局可用的 <code>变量</code>、<code>继承类</code> 和 <code>混合器</code>。</p><h3 id="变量" tabindex="-1"><a class="header-anchor" href="#变量" aria-hidden="true">#</a> 变量</h3><p>scss 全局变量定义在 <code>src/styles/global/vars.scss</code>。</p><p>常用变量一般是 场景色 / 背景色 / 字体色 / 间距 / 圆角 / 字号 等。</p><div class="language-scss line-numbers-mode" data-ext="scss"><pre class="language-scss"><code><span class="token comment">// 基础色：白色、黑色</span>
<span class="token property"><span class="token variable">$color-black</span></span><span class="token punctuation">:</span> #000000<span class="token punctuation">;</span>
<span class="token property"><span class="token variable">$color-white</span></span><span class="token punctuation">:</span> #FFFFFF<span class="token punctuation">;</span>

<span class="token comment">// 场景色：主题色、成功、失败、警告等</span>
<span class="token property"><span class="token variable">$color-primary</span></span><span class="token punctuation">:</span> #409EFF<span class="token punctuation">;</span>
<span class="token property"><span class="token variable">$color-success</span></span><span class="token punctuation">:</span> #67C23A<span class="token punctuation">;</span>
<span class="token property"><span class="token variable">$color-warning</span></span><span class="token punctuation">:</span> #E6A23C<span class="token punctuation">;</span>
<span class="token property"><span class="token variable">$color-danger</span></span><span class="token punctuation">:</span> #F56C6C<span class="token punctuation">;</span>

<span class="token comment">// 字体色</span>
<span class="token property"><span class="token variable">$text-color-base</span></span><span class="token punctuation">:</span> #303133<span class="token punctuation">;</span>
<span class="token property"><span class="token variable">$text-color-dark</span></span><span class="token punctuation">:</span> #606266<span class="token punctuation">;</span>
<span class="token property"><span class="token variable">$text-color-gray</span></span><span class="token punctuation">:</span> #909399<span class="token punctuation">;</span>
<span class="token property"><span class="token variable">$text-color-placeholder</span></span><span class="token punctuation">:</span> #C0C4CC<span class="token punctuation">;</span>

<span class="token comment">// 背景色</span>
<span class="token property"><span class="token variable">$bg-color-body</span></span><span class="token punctuation">:</span> #F8F8F8<span class="token punctuation">;</span>

<span class="token comment">// 间距：margin / padding</span>
<span class="token property"><span class="token variable">$spacing-mini</span></span><span class="token punctuation">:</span> 4px<span class="token punctuation">;</span>
<span class="token property"><span class="token variable">$spacing-super-small</span></span><span class="token punctuation">:</span> 8px<span class="token punctuation">;</span>
<span class="token property"><span class="token variable">$spacing-extra-small</span></span><span class="token punctuation">:</span> 12px<span class="token punctuation">;</span>
<span class="token property"><span class="token variable">$spacing-small</span></span><span class="token punctuation">:</span> 16px<span class="token punctuation">;</span>
<span class="token property"><span class="token variable">$spacing-base</span></span><span class="token punctuation">:</span> 24px<span class="token punctuation">;</span>
<span class="token property"><span class="token variable">$spacing-large</span></span><span class="token punctuation">:</span> 32px<span class="token punctuation">;</span>
<span class="token property"><span class="token variable">$spacing-extra-large</span></span><span class="token punctuation">:</span> 48px<span class="token punctuation">;</span>
<span class="token property"><span class="token variable">$spacing-super-large</span></span><span class="token punctuation">:</span> 56px<span class="token punctuation">;</span>

<span class="token comment">// 字号</span>
<span class="token property"><span class="token variable">$font-size-small</span></span><span class="token punctuation">:</span> 12px<span class="token punctuation">;</span>
<span class="token property"><span class="token variable">$font-size-base</span></span><span class="token punctuation">:</span> 14px<span class="token punctuation">;</span>
<span class="token property"><span class="token variable">$font-size-medium</span></span><span class="token punctuation">:</span> 16px<span class="token punctuation">;</span>
<span class="token property"><span class="token variable">$font-size-large</span></span><span class="token punctuation">:</span> 18px<span class="token punctuation">;</span>

<span class="token comment">// 边框</span>
<span class="token property"><span class="token variable">$border-color-base</span></span><span class="token punctuation">:</span> #DCDFE6<span class="token punctuation">;</span>

<span class="token comment">// 圆角</span>
<span class="token property"><span class="token variable">$border-radius-base</span></span><span class="token punctuation">:</span> 4px<span class="token punctuation">;</span>
<span class="token property"><span class="token variable">$border-radius-circle</span></span><span class="token punctuation">:</span> 100%<span class="token punctuation">;</span>

<span class="token comment">// 字重 / 字体</span>
<span class="token property"><span class="token variable">$font-weight-base</span></span><span class="token punctuation">:</span> 400<span class="token punctuation">;</span>
<span class="token property"><span class="token variable">$font-family-base</span></span><span class="token punctuation">:</span> Arial<span class="token punctuation">,</span> Helvetica<span class="token punctuation">,</span> sans-serif<span class="token punctuation">;</span>

<span class="token comment">// ...以及其他</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="继承类" tabindex="-1"><a class="header-anchor" href="#继承类" aria-hidden="true">#</a> 继承类</h3><p>继承类定义在 <code>src/styles/global/extend.scss</code>。</p><p>Vack默认内置以下继承类：</p><ul><li><code>%flex</code> - flex布局</li><li><code>%flex-inline</code> - 行内flex</li><li><code>%flex-column</code> - flex布局垂直方向</li><li><code>%flex-middle</code> - 垂直方向居中</li><li><code>%flex-center</code> - 垂直水平居中</li><li><code>%flex-between</code> - 两侧分布</li></ul><h3 id="混合器" tabindex="-1"><a class="header-anchor" href="#混合器" aria-hidden="true">#</a> 混合器</h3><p>混合器定义在 <code>src/styles/global/mixin.scss</code>。</p><p>Vack默认内置以下混合器：</p><ul><li><code>text-cut</code> - 单行文本溢出省略</li><li><code>layout</code> - 珊格布局</li></ul><div class="custom-container tip"><p class="custom-container-title">技巧</p><p>灵活运用变量 / 继承 / 混合，可以有效提升页面开发效率。</p></div><h2 id="公共样式" tabindex="-1"><a class="header-anchor" href="#公共样式" aria-hidden="true">#</a> 公共样式</h2><p>在编写样式时，除了会在每个vue页面单独编写各自的样式代码，有时还需要编写公共样式。 为了便于管理，公共样式要求编写在 <code>src/styles/modules</code> 目录下，并以模块划分命名。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>src
└─ styles
   └─ modules
      ├─ button.scss
      └─ table.scss
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>该目录下编写的样式文件，Vack已经做了全局引入，开发者无需再手动引入。</p>`,21),l=[c];function t(i,o){return n(),a("div",null,l)}const d=s(p,[["render",t],["__file","style.html.vue"]]);export{d as default};
