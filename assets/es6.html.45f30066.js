import{_ as n,c as s}from"./app.95f31e46.js";const a={},p=s(`<h1 id="es6\u8BED\u6CD5\u8BF4\u660E" tabindex="-1"><a class="header-anchor" href="#es6\u8BED\u6CD5\u8BF4\u660E" aria-hidden="true">#</a> es6\u8BED\u6CD5\u8BF4\u660E</h1><div class="custom-container warning"><p class="custom-container-title">\u6CE8\u610F</p><p>\u6587\u6863\u4E2D\u4F1A\u5B58\u5728es6\u8BED\u6CD5, \u8FD9\u91CC\u7B80\u5355\u8BF4\u660E\u4E00\u4E0B, \u5176\u4E2D<code>IE</code>\u4E0D\u652F\u6301<code>es6</code>\u8BED\u6CD5</p></div><h2 id="\u6982\u89C8" tabindex="-1"><a class="header-anchor" href="#\u6982\u89C8" aria-hidden="true">#</a> \u6982\u89C8</h2><ul><li>let const</li><li>\u6A21\u677F\u5B57\u7B26\u4E32</li><li>\u5BF9\u8C61\u4E2D\u5C5E\u6027\u65B9\u6CD5\u7B80\u5199</li><li>\u7BAD\u5934\u51FD\u6570</li><li>\u89E3\u6784</li></ul><p>\u8FD9\u91CC\u53EA\u662F\u7B80\u5355\u8BF4\u660E, \u6709\u5174\u8DA3\u53EF\u4EE5\u770B\u5927\u795E<a href="https://es6.ruanyifeng.com/" target="_blank">\u962E\u4E00\u5CF0\u7684\u8D44\u6599</a></p><h2 id="let\u4E0Econst" tabindex="-1"><a class="header-anchor" href="#let\u4E0Econst" aria-hidden="true">#</a> let\u4E0Econst</h2><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token comment">//lES6 \u65B0\u589E\u4E86let\u547D\u4EE4\uFF0C\u7528\u6765\u58F0\u660E\u53D8\u91CF\u3002\u5B83\u7684\u7528\u6CD5\u7C7B\u4F3C\u4E8Evar\uFF0C\u4F46\u662F\u6240\u58F0\u660E\u7684\u53D8\u91CF\uFF0C\u53EA\u5728let\u547D\u4EE4\u6240\u5728\u7684\u4EE3\u7801\u5757\u5185\u6709\u6548\u3002</span>

<span class="token punctuation">{</span>
	<span class="token keyword">let</span> a <span class="token operator">=</span> <span class="token number">10</span><span class="token punctuation">;</span>
	<span class="token keyword">var</span> b <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

a <span class="token comment">// ReferenceError: a is not defined.</span>
b <span class="token comment">// 1</span>


<span class="token comment">//const\u58F0\u660E\u4E00\u4E2A\u53EA\u8BFB\u7684\u5E38\u91CF\u3002\u4E00\u65E6\u58F0\u660E\uFF0C\u5E38\u91CF\u7684\u503C\u5C31\u4E0D\u80FD\u6539\u53D8\u3002</span>
<span class="token keyword">const</span> <span class="token constant">PI</span> <span class="token operator">=</span> <span class="token number">3.1415</span><span class="token punctuation">;</span>
<span class="token constant">PI</span> <span class="token comment">// 3.1415</span>

<span class="token constant">PI</span> <span class="token operator">=</span> <span class="token number">3</span><span class="token punctuation">;</span>
<span class="token comment">// TypeError: Assignment to constant variable.</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br></div></div><h2 id="\u6A21\u677F\u5B57\u7B26\u4E32" tabindex="-1"><a class="header-anchor" href="#\u6A21\u677F\u5B57\u7B26\u4E32" aria-hidden="true">#</a> \u6A21\u677F\u5B57\u7B26\u4E32</h2><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token comment">//\u6A21\u677F\u5B57\u7B26\u4E32\uFF08template string\uFF09\u662F\u589E\u5F3A\u7248\u7684\u5B57\u7B26\u4E32\uFF0C\u7528\u53CD\u5F15\u53F7\uFF08\`\uFF09\u6807\u8BC6\u3002\u5B83\u53EF\u4EE5\u5F53\u4F5C\u666E\u901A\u5B57\u7B26\u4E32\u4F7F\u7528\uFF0C\u4E5F\u53EF\u4EE5\u7528\u6765\u5B9A\u4E49\u591A\u884C\u5B57\u7B26\u4E32\uFF0C\u6216\u8005\u5728\u5B57\u7B26\u4E32\u4E2D\u5D4C\u5165\u53D8\u91CF\u3002</span>

<span class="token comment">// \u666E\u901A\u5B57\u7B26\u4E32</span>
<span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">In JavaScript &#39;\\n&#39; is a line-feed.</span><span class="token template-punctuation string">\`</span></span>

<span class="token comment">// \u591A\u884C\u5B57\u7B26\u4E32</span>
<span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">In JavaScript this is
 not legal.</span><span class="token template-punctuation string">\`</span></span>

console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">string text line 1
string text line 2</span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// \u5B57\u7B26\u4E32\u4E2D\u5D4C\u5165\u53D8\u91CF</span>
<span class="token keyword">let</span> name <span class="token operator">=</span> <span class="token string">&quot;Bob&quot;</span><span class="token punctuation">,</span> time <span class="token operator">=</span> <span class="token string">&quot;today&quot;</span><span class="token punctuation">;</span>
<span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">Hello </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>name<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">, how are you </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>time<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">?</span><span class="token template-punctuation string">\`</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br></div></div><h2 id="\u5BF9\u8C61\u4E2D\u5C5E\u6027\u65B9\u6CD5\u7B80\u5199" tabindex="-1"><a class="header-anchor" href="#\u5BF9\u8C61\u4E2D\u5C5E\u6027\u65B9\u6CD5\u7B80\u5199" aria-hidden="true">#</a> \u5BF9\u8C61\u4E2D\u5C5E\u6027\u65B9\u6CD5\u7B80\u5199</h2><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token comment">//\u5E38\u89C4\u5199\u6CD5</span>
<span class="token keyword">var</span> name <span class="token operator">=</span> <span class="token string">&#39;zs&#39;</span><span class="token punctuation">;</span>

<span class="token keyword">var</span> obj <span class="token operator">=</span> <span class="token punctuation">{</span>
	<span class="token literal-property property">name</span><span class="token operator">:</span> name<span class="token punctuation">,</span>
	<span class="token function-variable function">run</span><span class="token operator">:</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
		console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;haha&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span>


<span class="token comment">//\u7B80\u5199</span>
<span class="token keyword">let</span> name <span class="token operator">=</span> <span class="token string">&#39;zs&#39;</span><span class="token punctuation">;</span>

<span class="token keyword">let</span> obj <span class="token operator">=</span> <span class="token punctuation">{</span>
	name<span class="token punctuation">,</span>
	<span class="token function">run</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
		console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;haha&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br></div></div><h2 id="\u7BAD\u5934\u51FD\u6570" tabindex="-1"><a class="header-anchor" href="#\u7BAD\u5934\u51FD\u6570" aria-hidden="true">#</a> \u7BAD\u5934\u51FD\u6570</h2><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token comment">//\u5E38\u89C4\u5199\u6CD5</span>
<span class="token function">setTimeout</span><span class="token punctuation">(</span><span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
	<span class="token comment">//...</span>
<span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token number">1000</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">//\u7B80\u5199</span>
<span class="token function">setTimeout</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
	<span class="token comment">//...</span>
<span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token number">1000</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div><h2 id="\u89E3\u6784" tabindex="-1"><a class="header-anchor" href="#\u89E3\u6784" aria-hidden="true">#</a> \u89E3\u6784</h2><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token comment">//\u5047\u5982\u73B0\u5728\u6709\u4E00\u4E2A\u5BF9\u8C61</span>
<span class="token keyword">let</span> obj <span class="token operator">=</span> <span class="token punctuation">{</span>
	<span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;zs&#39;</span><span class="token punctuation">,</span>
	<span class="token literal-property property">age</span><span class="token operator">:</span> <span class="token number">18</span><span class="token punctuation">,</span>
	<span class="token literal-property property">address</span><span class="token operator">:</span> <span class="token string">&#39;beijing&#39;</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span>

<span class="token comment">//\u6B63\u5E38\u83B7\u53D6name</span>
<span class="token keyword">var</span> name <span class="token operator">=</span> obj<span class="token punctuation">.</span>name

<span class="token comment">//\u89E3\u6784\u5199\u6CD5</span>
<span class="token keyword">let</span> <span class="token punctuation">{</span> name <span class="token punctuation">}</span> <span class="token operator">=</span> obj

<span class="token comment">//\u4E5F\u53EF\u4EE5\u591A\u4E2A</span>
<span class="token keyword">let</span> <span class="token punctuation">{</span> name<span class="token punctuation">,</span> age<span class="token punctuation">,</span> address <span class="token punctuation">}</span> <span class="token operator">=</span> obj<span class="token punctuation">;</span>

<span class="token comment">//\u5982\u679C\u4E0D\u5B58\u5728\u4E5F\u53EF\u4EE5\u58F0\u660E\u9ED8\u8BA4\u503C</span>
<span class="token keyword">let</span> <span class="token punctuation">{</span> name<span class="token punctuation">,</span> age<span class="token punctuation">,</span> address<span class="token punctuation">,</span> status <span class="token operator">=</span> <span class="token string">&#39;1&#39;</span> <span class="token punctuation">}</span> <span class="token operator">=</span> obj<span class="token punctuation">;</span>

<span class="token comment">//\u60F3\u6DFB\u52A0\u4E00\u6761\u5C5E\u6027</span>
obj<span class="token punctuation">.</span>status <span class="token operator">=</span> <span class="token string">&#39;1&#39;</span><span class="token punctuation">;</span>

<span class="token comment">//\u5BF9\u8C61\u5C5E\u6027\u5408\u5E76</span>
<span class="token keyword">var</span> newObj <span class="token operator">=</span> <span class="token punctuation">{</span>
	<span class="token operator">...</span>obj<span class="token punctuation">,</span>
	<span class="token literal-property property">status</span><span class="token operator">:</span> <span class="token string">&#39;1&#39;</span>
<span class="token punctuation">}</span>

<span class="token comment">//\u65B9\u6CD5\u4F20\u53C2</span>
<span class="token keyword">function</span> <span class="token function">calc</span><span class="token punctuation">(</span><span class="token parameter">data</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
	<span class="token keyword">var</span> a <span class="token operator">=</span> data<span class="token punctuation">.</span>a<span class="token punctuation">;</span>
	<span class="token keyword">var</span> b <span class="token operator">=</span> data<span class="token punctuation">.</span>b<span class="token punctuation">;</span>
	<span class="token keyword">return</span> a <span class="token operator">+</span> b<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token comment">//\u89E3\u6784\u4F20\u53C2</span>
<span class="token keyword">function</span> <span class="token function">calc</span><span class="token punctuation">(</span><span class="token parameter"><span class="token punctuation">{</span> a<span class="token punctuation">,</span> b <span class="token punctuation">}</span></span><span class="token punctuation">)</span><span class="token punctuation">{</span>
	<span class="token keyword">return</span> a <span class="token operator">+</span> b<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br></div></div><p>\u81F3\u4E8E\u66F4\u591A\u7684\u5C31\u81EA\u5DF1\u53BB\u627E\u5B66\u4E60\u8D44\u6599\u5427</p>`,16);function e(t,c){return p}var l=n(a,[["render",e],["__file","es6.html.vue"]]);export{l as default};
