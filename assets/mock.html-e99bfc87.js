import{_ as n,o as s,c as a,e}from"./app-ab2049dd.js";const o={},t=e(`<h1 id="mock" tabindex="-1"><a class="header-anchor" href="#mock" aria-hidden="true">#</a> Mock</h1><p>在开发阶段支持使用 Mock 来模拟接口的响应数据。 使用 Mock 只需要为接口编写 Mock 文件即可，在环境变量 <code>VITE_API_MOCK</code> 为 <code>true</code> 时将自动生效。 接口的 Mock 文件编写在 <code>mock/modules</code> 目录下，文件名需要以 <code>.mock.js</code> 结尾，推荐以模块划分。</p><blockquote><p>框架中已经内置了 <code>mockjs</code> 插件。</p></blockquote><h2 id="编写" tabindex="-1"><a class="header-anchor" href="#编写" aria-hidden="true">#</a> 编写</h2><p>一个 Mock 文件内可以同时编写多个接口的 Mock，Mock的格式：</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// mock/modules/*.mock.js</span>

<span class="token comment">// Mock的Key即是接口的地址，与定义api时一致</span>
exports<span class="token punctuation">[</span><span class="token string">&#39;/login&#39;</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">method</span><span class="token operator">:</span> <span class="token string">&#39;GET&#39;</span><span class="token punctuation">,</span> <span class="token comment">// 接口的请求方式</span>
  <span class="token function-variable function">content</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token keyword">null</span><span class="token punctuation">,</span> <span class="token comment">// 一个函数，返回接口的响应数据，支持 Promise</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token comment">// 异常响应示例</span>
exports<span class="token punctuation">[</span><span class="token string">&#39;/login&#39;</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">method</span><span class="token operator">:</span> <span class="token string">&#39;GET&#39;</span><span class="token punctuation">,</span>
  <span class="token function-variable function">content</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> err <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Error</span><span class="token punctuation">(</span><span class="token string">&#39;异常信息&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token comment">// 可以指定状态码</span>
    err<span class="token punctuation">.</span>code <span class="token operator">=</span> <span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">;</span>
    <span class="token keyword">throw</span> err<span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="配置" tabindex="-1"><a class="header-anchor" href="#配置" aria-hidden="true">#</a> 配置</h2><p>使用 Mock 需要配置项目接口的响应数据结构、成功/异常状态码等信息。 配置文件在 <code>mock/config.js</code>：</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// mock/config.js</span>

<span class="token comment">// 成功响应的状态</span>
<span class="token keyword">export</span> <span class="token keyword">const</span> codeOK <span class="token operator">=</span> <span class="token string">&#39;0&#39;</span><span class="token punctuation">;</span>
<span class="token comment">// 异常响应的默认状态码</span>
<span class="token keyword">export</span> <span class="token keyword">const</span> codeFail <span class="token operator">=</span> <span class="token string">&#39;-1&#39;</span><span class="token punctuation">;</span>

<span class="token comment">// 转化响应数据的结构，将 code、data、msg 组合成接口响应数据的实际结构</span>
<span class="token keyword">export</span> <span class="token keyword">const</span> <span class="token function-variable function">responseTransfer</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter"><span class="token punctuation">{</span> code<span class="token punctuation">,</span> data<span class="token punctuation">,</span> msg <span class="token punctuation">}</span></span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">(</span><span class="token punctuation">{</span>
  msg<span class="token punctuation">,</span>
  code<span class="token punctuation">,</span>
  data<span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,9),p=[t];function c(i,l){return s(),a("div",null,p)}const u=n(o,[["render",c],["__file","mock.html.vue"]]);export{u as default};
