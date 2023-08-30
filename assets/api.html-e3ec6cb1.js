import{_ as e,r as p,o as t,c as o,a as s,b as n,d as c,e as i}from"./app-ab2049dd.js";const l={},r=s("h1",{id:"接口",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#接口","aria-hidden":"true"},"#"),n(" 接口")],-1),u={href:"https://www.axios-http.cn/",target:"_blank",rel:"noopener noreferrer"},d=i(`<h2 id="配置" tabindex="-1"><a class="header-anchor" href="#配置" aria-hidden="true">#</a> 配置</h2><ul><li>接口基础路径，通过环境变量 <code>VITE_API_BASEURL</code> 来配置</li><li>其他可配置项定义在 <code>src/api/config.js</code> 中：</li></ul><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// 接口基础路径</span>
<span class="token keyword">export</span> <span class="token keyword">const</span> baseURL <span class="token operator">=</span> <span class="token keyword">import</span><span class="token punctuation">.</span>meta<span class="token punctuation">.</span>env<span class="token punctuation">.</span><span class="token constant">VITE_API_BASEURL</span><span class="token punctuation">;</span>
<span class="token comment">// 超时时间，为0则不限制</span>
<span class="token keyword">export</span> <span class="token keyword">const</span> timeout <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>

<span class="token comment">// 请求成功状态码</span>
<span class="token keyword">export</span> <span class="token keyword">const</span> codeOK <span class="token operator">=</span> <span class="token string">&#39;0&#39;</span><span class="token punctuation">;</span>

<span class="token comment">// 转换响应数据格式</span>
<span class="token keyword">export</span> <span class="token keyword">const</span> <span class="token function-variable function">responseTransfer</span> <span class="token operator">=</span> <span class="token parameter">res</span> <span class="token operator">=&gt;</span> <span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">msg</span><span class="token operator">:</span> res<span class="token operator">?.</span>msg<span class="token punctuation">,</span>
  <span class="token literal-property property">data</span><span class="token operator">:</span> res<span class="token operator">?.</span>data<span class="token punctuation">,</span>
  <span class="token literal-property property">code</span><span class="token operator">:</span> res<span class="token operator">?.</span>code<span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// 注入请求头</span>
<span class="token keyword">export</span> <span class="token keyword">const</span> <span class="token function-variable function">injectHeaders</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">(</span><span class="token punctuation">{</span>

<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// 全局API Hooks</span>
<span class="token keyword">export</span> <span class="token keyword">const</span> globalHooks <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>

<span class="token comment">// 接口定义</span>
<span class="token keyword">export</span> <span class="token keyword">const</span> apiUrls <span class="token operator">=</span> <span class="token punctuation">{</span>

<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>不同项目接口响应数据的格式基本不同，但一般都有状态码(code)、数据(data)、提示信息(msg)这三个数据。通过 <code>responseTransfer</code> 告知 Vack 如何从响应数据中提取这三个信息。</li></ul><h2 id="定义" tabindex="-1"><a class="header-anchor" href="#定义" aria-hidden="true">#</a> 定义</h2><p>在 <code>apiUrls</code> 以键值对的形式定义一个接口，如：</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">export</span> <span class="token keyword">const</span> apiUrls <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">login</span><span class="token operator">:</span> <span class="token string">&#39;/login&#39;</span><span class="token punctuation">,</span>

  <span class="token comment">// 支持嵌套定义</span>
  <span class="token literal-property property">user</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">getUserInfo</span><span class="token operator">:</span> <span class="token string">&#39;/getUserInfo&#39;</span><span class="token punctuation">,</span>
    <span class="token comment">// 定义 POST 接口</span>
    <span class="token literal-property property">updateUserInfo</span><span class="token operator">:</span> <span class="token string">&#39;&lt;POST&gt;/updateUserInfo&#39;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>键名就是接口的名称，键值是接口的请求地址；</li><li>接口声明支持层级嵌套。</li></ul><h2 id="使用" tabindex="-1"><a class="header-anchor" href="#使用" aria-hidden="true">#</a> 使用</h2><ol><li>在需要使用接口的地方引入 api 对象：</li></ol><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">import</span> api <span class="token keyword">from</span> <span class="token string">&#39;@/api&#39;</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ol start="2"><li>一般调用：</li></ol><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>api<span class="token punctuation">.</span><span class="token function">login</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
  <span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">data</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">)</span>
  <span class="token punctuation">.</span><span class="token function">catch</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">err</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>接口请求成功时走向 <code>then</code> 分支，异常时走向 <code>catch</code> 分支；</li><li>接口请求仅在正常发送且响应数据的状态码是<code>codeOK</code>时视为请求成功；</li><li>即使接口请求正常发送，但响应数据的状态码不是<code>codeOK</code>，也视为请求异常；</li><li><code>then</code>分支接收的参数，是响应数据格式中<code>code</code> / <code>data</code> / <code>msg</code>中的<code>data</code>部分；</li><li><code>catch</code>分支接收的<code>err</code>参数是一个<code>Error</code>对象的实例，其<code>message</code>就是响应数据格式中的<code>msg</code>， 响应数据的<code>code</code>可以通过<code>err.code</code>访问。</li></ul><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// 调用层级嵌套的接口</span>
api<span class="token punctuation">.</span>user<span class="token punctuation">.</span><span class="token function">getUserInfo</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
  <span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">data</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">)</span>
  <span class="token punctuation">.</span><span class="token function">catch</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">err</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="3"><li>接口传参：</li></ol><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>api<span class="token punctuation">.</span><span class="token function">login</span><span class="token punctuation">(</span><span class="token punctuation">{</span> <span class="token literal-property property">username</span><span class="token operator">:</span> <span class="token string">&#39;&#39;</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
api<span class="token punctuation">.</span>user<span class="token punctuation">.</span><span class="token function">updateUserInfo</span><span class="token punctuation">(</span><span class="token punctuation">{</span> <span class="token literal-property property">username</span><span class="token operator">:</span> <span class="token string">&#39;&#39;</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>无论接口是 GET / POST，传参方式是统一的；</li><li>对于 GET 接口，Vack 会将参数携带在 query 中；</li><li>对于 POST 接口，Vack 会将参数携带在 body 中。</li></ul><ol start="4"><li>使用第二个参数添加请求头：</li></ol><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>api<span class="token punctuation">.</span>user<span class="token punctuation">.</span><span class="token function">login</span><span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
  <span class="token string-property property">&#39;content-type&#39;</span><span class="token operator">:</span> <span class="token string">&#39;application/json&#39;</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="5"><li>使用第三个参数添加其他 <code>axios</code> 函数支持的参数：</li></ol><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>api<span class="token punctuation">.</span>user<span class="token punctuation">.</span><span class="token function">login</span><span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">{</span> <span class="token literal-property property">timeout</span><span class="token operator">:</span> <span class="token number">60000</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="中间件" tabindex="-1"><a class="header-anchor" href="#中间件" aria-hidden="true">#</a> 中间件</h2><h3 id="概念" tabindex="-1"><a class="header-anchor" href="#概念" aria-hidden="true">#</a> 概念</h3><p>中间件是可以定制化接口行为的一种机制。使用中间件，可以在接口请求前、请求后、请求异常等时机插入执行逻辑。 使用中间件的方式，就是在定义接口时，在接口路径前面声明 <code>&lt;中间件名称&gt;</code>。</p><p>正如上面定义 POST 接口一样，<code>&lt;POST&gt;</code> 就是 Vack 内置支持的名叫 POST 中间件，作用是将接口的请求方式改为POST。</p><h3 id="定义-1" tabindex="-1"><a class="header-anchor" href="#定义-1" aria-hidden="true">#</a> 定义</h3><p>接口中间件编写在 <code>src/api/hooks</code> 目录下，文件名全大写或以下划线(_)连接，如：<code>POST.js</code>、<code>POST_FORM.js</code>。</p><p>一个中间件文件的结构是这样：</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// src/api/hooks/GET.js</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token keyword">function</span> <span class="token function">getHook</span><span class="token punctuation">(</span><span class="token parameter">params</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">method</span><span class="token operator">:</span> <span class="token string">&#39;GET&#39;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">beforeHooks</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token literal-property property">afterHooks</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token literal-property property">errorHooks</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li><code>params</code> - 中间件参数</li><li><code>method</code> - 接口的请求方式</li><li><code>beforeHooks</code> - 在请求发出前插入钩子函数</li><li><code>afterHooks</code> - 在请求成功时插入钩子函数</li><li><code>errorHooks</code> - 在请求异常时插入钩子函数</li></ul><h4 id="beforehooks" tabindex="-1"><a class="header-anchor" href="#beforehooks" aria-hidden="true">#</a> beforeHooks</h4><p>在请求发出前插入钩子函数，可用于修改请求方式、请求参数、请求头等信息。 钩子函数可以声明多个，多个函数之间依次执行。 每个钩子函数会接收当前请求的<code>配置参数(RequestConfig)</code>对象并且可以选择性的返回新配置，新的配置会合并覆盖旧的配置：</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">interface</span> <span class="token class-name">RequestConfig</span> <span class="token punctuation">{</span>
  <span class="token comment">// 当前请求的地址</span>
  url<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>
  <span class="token comment">// 当前的请求参数</span>
  data<span class="token operator">:</span> <span class="token builtin">any</span><span class="token punctuation">;</span>
  <span class="token comment">// 请求头</span>
  headers<span class="token operator">:</span> AxiosRequestHeaders<span class="token punctuation">;</span>
  <span class="token comment">// axios的响应对象</span>
  response<span class="token operator">:</span> AxiosResponse <span class="token operator">|</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
  <span class="token comment">// axios实例的其它参数</span>
  opts<span class="token operator">:</span> AxiosRequestConfig<span class="token punctuation">;</span>
  <span class="token comment">// 当前的请求函数</span>
  apiHandle<span class="token operator">:</span> <span class="token builtin">Function</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">function</span> <span class="token function">beforeHook</span><span class="token punctuation">(</span>config<span class="token operator">:</span> RequestConfig<span class="token punctuation">)</span><span class="token operator">:</span> RequestConfig
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="afterhooks" tabindex="-1"><a class="header-anchor" href="#afterhooks" aria-hidden="true">#</a> afterHooks</h4><p>在请求发送成功且响应数据的状态码为 <code>codeOK</code> 时插入钩子函数，可用于修改响应数据，支持Promise。 每个钩子函数依次执行，并且接收两个参数，第一个是响应数据的 data，第二个是当前请求的配置参数。 上游钩子返回的数据将作为下游钩子的新响应数据。</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">function</span> <span class="token function">afterHook</span><span class="token punctuation">(</span>data<span class="token operator">:</span> <span class="token builtin">any</span><span class="token punctuation">,</span> config<span class="token operator">:</span> RequestConfig<span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">Promise</span><span class="token operator">&lt;</span><span class="token builtin">any</span><span class="token operator">&gt;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h4 id="errorhooks" tabindex="-1"><a class="header-anchor" href="#errorhooks" aria-hidden="true">#</a> errorHooks</h4><p>在请求发送异常，或响应数据的状态码不为 <code>codeOK</code> 时插入钩子函数，可在接口请求异常时做重新请求等操作，支持Promise。 每个钩子函数依次执行，并且接收两个参数，第一个是 Error 实例表示当前异常信息，第二个是当前请求的配置参数。 如果上游钩子不再抛出异常，那么下游的其它 error 钩子将不再执行，且返回的数据将作为接口的成功响应数据。</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">class</span> <span class="token class-name">RequestError</span> <span class="token keyword">extends</span> <span class="token class-name">Error</span> <span class="token punctuation">{</span>
  <span class="token comment">// 异常状态码</span>
  code<span class="token operator">:</span> <span class="token builtin">unknown</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">function</span> <span class="token function">errorHook</span><span class="token punctuation">(</span>err<span class="token operator">:</span> RequestError<span class="token punctuation">,</span> config<span class="token operator">:</span> RequestConfig<span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">Promise</span><span class="token operator">&lt;</span><span class="token builtin">any</span><span class="token operator">&gt;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="使用-1" tabindex="-1"><a class="header-anchor" href="#使用-1" aria-hidden="true">#</a> 使用</h3><p>中间件可以针对单个接口使用，即在接口的地址前面以 <code>&lt;中间件&gt;</code> 形式声明。支持同时声明多个中间件，每个中间件会依次执行。</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">export</span> <span class="token keyword">const</span> apiUrls <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">login</span><span class="token operator">:</span> <span class="token string">&#39;&lt;POST&gt;&lt;MY_HOOK&gt;/login&#39;</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>中间件针对单个接口使用时，支持传递参数：</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">export</span> <span class="token keyword">const</span> apiUrls <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">login</span><span class="token operator">:</span> <span class="token string">&#39;&lt;POST:content-type=application/json&gt;/login&#39;</span><span class="token punctuation">,</span>
  <span class="token literal-property property">update</span><span class="token operator">:</span> <span class="token string">&#39;&lt;POST:timeout=6000&gt;/update&#39;</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token keyword">function</span> <span class="token function">postHook</span><span class="token punctuation">(</span><span class="token parameter">params</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>params<span class="token punctuation">[</span><span class="token string">&#39;content-type&#39;</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token comment">// api.login -&gt; &quot;application/json&quot;</span>
  <span class="token comment">// api.update -&gt; undefined</span>

  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>params<span class="token punctuation">.</span>timeout<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token comment">// api.login -&gt; undefined</span>
  <span class="token comment">// api.update -&gt; &quot;6000&quot;</span>

  <span class="token keyword">return</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">method</span><span class="token operator">:</span> <span class="token string">&#39;POST&#39;</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>中间件也可以全局声明，这将对所有的接口请求都生效。 全局中间件声明在 <code>src/api/config.js</code> 的 <code>globalHooks</code>：</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// src/api/config.js</span>
<span class="token keyword">export</span> <span class="token keyword">const</span> globalHooks <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token string">&#39;MY_GLOBAL_HOOK&#39;</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div>`,47);function k(v,m){const a=p("ExternalLinkIcon");return t(),o("div",null,[r,s("p",null,[n("Vack的接口部分基于 "),s("a",u,[n("axios"),c(a)]),n("，为了使用起来更便捷高效，基于 axios 做了更进一层的封装。")]),d])}const g=e(l,[["render",k],["__file","api.html.vue"]]);export{g as default};