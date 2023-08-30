import{_ as t,r as p,o,c,a as n,b as s,d as i,e as a}from"./app-ab2049dd.js";const l={},u=a(`<h1 id="路由" tabindex="-1"><a class="header-anchor" href="#路由" aria-hidden="true">#</a> 路由</h1><p>Vack 中的路由包含 <code>手动定义</code> 和 <code>自动生成</code> 两部分。 手动定义即和常规项目一样，可以手动编写 <code>vue-router</code> 的路由配置； 自动生成是指 Vack 会按一定的规则为每个页面自动生成其对应的路由。</p><h2 id="手动定义" tabindex="-1"><a class="header-anchor" href="#手动定义" aria-hidden="true">#</a> 手动定义</h2><p>Vack 中配置路由的文件在 <code>src/router/routes.js</code>，和常规项目一样可以在这里手动编写路由：</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// src/router/routes.js</span>

<span class="token keyword">import</span> loadPageRoutes <span class="token keyword">from</span> <span class="token string">&#39;./utils/loadPageRoutes&#39;</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> routes <span class="token operator">=</span> <span class="token punctuation">[</span>
  <span class="token comment">// 可以在此处手动编写路由</span>
<span class="token punctuation">]</span><span class="token punctuation">;</span>

<span class="token comment">// Vack会自动为每个页面创建路由</span>
routes<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span><span class="token operator">...</span><span class="token function">loadPageRoutes</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> routes<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,5),r={href:"https://router.vuejs.org/zh/",target:"_blank",rel:"noopener noreferrer"},d=a(`<h2 id="自动生成" tabindex="-1"><a class="header-anchor" href="#自动生成" aria-hidden="true">#</a> 自动生成</h2><p>Vack 会按一定规则为存放在 <code>src/pages</code> 目录下的所有 页面 / 子页面 生成其对应的路由。</p><p>默认的，Vack 会使用 <strong>页面目录的名称</strong> + <strong>父页面目录名称</strong>（如有）生成页面的 <code>path</code>，生成规则：</p><ul><li>目录名转小写中横线连接格式，多级路由使用 <code>/</code> 连接；</li><li>目录名为<code>Index</code>的会默认省略。</li></ul><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 路径默认省略了 index 结尾的部分</span>
pages/Index/index.vue <span class="token comment">#-&gt; /</span>
<span class="token comment"># 目录名称单个单词，转为小写</span>
pages/Home/index.vue <span class="token comment">#-&gt; /home</span>
<span class="token comment"># 多个单词转为小写，以中横线连接</span>
pages/AboutMe/index.vue <span class="token comment">#-&gt; /about-me</span>
<span class="token comment"># 多级路由使用 / 连接</span>
pages/ParentPage/SubPageA/index.vue <span class="token comment">#-&gt; /parent-page/sub-page-a</span>
<span class="token comment"># 多级路由也会省略 index 结尾的部分</span>
pages/ParentPage/SubPageA/Index/index.vue <span class="token comment">#-&gt; /parent-page/sub-page-a</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="配置" tabindex="-1"><a class="header-anchor" href="#配置" aria-hidden="true">#</a> 配置</h3><p>页面目录下可以创建 <code>index.js</code> 文件用以对该页面做补充说明，在生成路由时可以覆盖默认行为。 <code>pages/**/index.js</code>需要默认导出一个配置对象，有效的配置字段如下：</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// pages/**/index.js</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
  <span class="token comment">// 生成路由时，覆盖默认的路径</span>
  <span class="token literal-property property">path</span><span class="token operator">:</span> <span class="token string">&#39;/&#39;</span><span class="token punctuation">,</span>
  <span class="token comment">// 可以声明params参数，和路由配置的path属性一样</span>
  <span class="token literal-property property">path</span><span class="token operator">:</span> <span class="token string">&#39;/:id&#39;</span><span class="token punctuation">,</span>

  <span class="token comment">// 页面默认使用 &lt;script setup&gt;，如果需要在顶层使用 await</span>
  <span class="token comment">// 则需要显式声明该字段为 true，在生成路由时 Vack 会做额外的处理</span>
  <span class="token literal-property property">suspense</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>

  <span class="token comment">// 为生成的路由附加其他属性，如生命周期钩子等</span>
  <span class="token function">extendRoute</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token punctuation">{</span>
      <span class="token function">beforeEnter</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>

  <span class="token comment">// .... 可以添加其他任意自定义属性</span>
  <span class="token comment">// 除以上属性，其他的属性可以使用路由对象的 meta 进行访问</span>
  <span class="token literal-property property">showFooter</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-vue line-numbers-mode" data-ext="vue"><pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">setup</span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
<span class="token keyword">import</span> <span class="token punctuation">{</span> useRoute <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vue-router&#39;</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> route <span class="token operator">=</span> <span class="token function">useRoute</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>route<span class="token punctuation">.</span>meta<span class="token punctuation">.</span>showFooter<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// true</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,9);function v(k,m){const e=p("ExternalLinkIcon");return o(),c("div",null,[u,n("blockquote",null,[n("p",null,[s("路由的定义方式，可查阅 "),n("a",r,[s("vue-router"),i(e)]),s(" 的官方文档。")])]),d])}const g=t(l,[["render",v],["__file","route.html.vue"]]);export{g as default};
