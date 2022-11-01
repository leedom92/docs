import{_ as s,c as n,o as a,a as l}from"./app.f8d053e7.js";const u=JSON.parse('{"title":"\u8D4B\u503C\u4E0E\u53D6\u503C","description":"","frontmatter":{},"headers":[{"level":2,"title":"\u7ED9\u591A\u9009\u8D4B\u503C","slug":"\u7ED9\u591A\u9009\u8D4B\u503C","link":"#\u7ED9\u591A\u9009\u8D4B\u503C","children":[]},{"level":2,"title":"\u53D6\u503C","slug":"\u53D6\u503C","link":"#\u53D6\u503C","children":[]}],"relativePath":"handbook/xmselect/ZM01.md","lastUpdated":null}'),p={name:"handbook/xmselect/ZM01.md"},o=l(`<h1 id="\u8D4B\u503C\u4E0E\u53D6\u503C" tabindex="-1">\u8D4B\u503C\u4E0E\u53D6\u503C <a class="header-anchor" href="#\u8D4B\u503C\u4E0E\u53D6\u503C" aria-hidden="true">#</a></h1><h2 id="\u7ED9\u591A\u9009\u8D4B\u503C" tabindex="-1">\u7ED9\u591A\u9009\u8D4B\u503C <a class="header-anchor" href="#\u7ED9\u591A\u9009\u8D4B\u503C" aria-hidden="true">#</a></h2><p>\u51FD\u6570<code>setValue(array)</code>, \u52A8\u6001\u8D4B\u503C\u591A\u9009\u9009\u4E2D\u7684\u6570\u636E, array\u53EF\u4EE5\u662Fvalue\u6570\u7EC4, \u4E5F\u53EF\u4EE5\u662F\u5B8C\u6574\u7684object\u6570\u7EC4</p><div class="language-html line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki"><code><span class="line"><span style="color:#ABB2BF;">&lt;</span><span style="color:#E06C75;">div</span><span style="color:#ABB2BF;"> </span><span style="color:#D19A66;">id</span><span style="color:#ABB2BF;">=</span><span style="color:#98C379;">&quot;demo1&quot;</span><span style="color:#ABB2BF;"> </span><span style="color:#D19A66;">class</span><span style="color:#ABB2BF;">=</span><span style="color:#98C379;">&quot;xm-select-demo&quot;</span><span style="color:#ABB2BF;">&gt;&lt;/</span><span style="color:#E06C75;">div</span><span style="color:#ABB2BF;">&gt;</span></span>
<span class="line"><span style="color:#ABB2BF;">&lt;</span><span style="color:#E06C75;">br</span><span style="color:#ABB2BF;">/&gt;&lt;</span><span style="color:#E06C75;">br</span><span style="color:#ABB2BF;">/&gt;</span></span>
<span class="line"><span style="color:#ABB2BF;">&lt;</span><span style="color:#E06C75;">button</span><span style="color:#ABB2BF;"> </span><span style="color:#D19A66;">class</span><span style="color:#ABB2BF;">=</span><span style="color:#98C379;">&quot;btn&quot;</span><span style="color:#ABB2BF;"> </span><span style="color:#D19A66;">id</span><span style="color:#ABB2BF;">=</span><span style="color:#98C379;">&quot;demo1-test1&quot;</span><span style="color:#ABB2BF;">&gt;\u8D4B\u503C\u5F20\u4E09&lt;/</span><span style="color:#E06C75;">button</span><span style="color:#ABB2BF;">&gt;</span></span>
<span class="line"><span style="color:#ABB2BF;">&lt;</span><span style="color:#E06C75;">button</span><span style="color:#ABB2BF;"> </span><span style="color:#D19A66;">class</span><span style="color:#ABB2BF;">=</span><span style="color:#98C379;">&quot;btn&quot;</span><span style="color:#ABB2BF;"> </span><span style="color:#D19A66;">id</span><span style="color:#ABB2BF;">=</span><span style="color:#98C379;">&quot;demo1-test2&quot;</span><span style="color:#ABB2BF;">&gt;\u8D4B\u503C\u5F20\u4E09(value\u65B9\u5F0F)&lt;/</span><span style="color:#E06C75;">button</span><span style="color:#ABB2BF;">&gt;</span></span>
<span class="line"><span style="color:#ABB2BF;">&lt;</span><span style="color:#E06C75;">button</span><span style="color:#ABB2BF;"> </span><span style="color:#D19A66;">class</span><span style="color:#ABB2BF;">=</span><span style="color:#98C379;">&quot;btn&quot;</span><span style="color:#ABB2BF;"> </span><span style="color:#D19A66;">id</span><span style="color:#ABB2BF;">=</span><span style="color:#98C379;">&quot;demo1-test3&quot;</span><span style="color:#ABB2BF;">&gt;\u8FFD\u52A0\u8D4B\u503C\u674E\u56DB&lt;/</span><span style="color:#E06C75;">button</span><span style="color:#ABB2BF;">&gt;</span></span>
<span class="line"><span style="color:#ABB2BF;">&lt;</span><span style="color:#E06C75;">br</span><span style="color:#ABB2BF;">/&gt;&lt;</span><span style="color:#E06C75;">br</span><span style="color:#ABB2BF;">/&gt;</span></span>
<span class="line"><span style="color:#ABB2BF;">&lt;</span><span style="color:#E06C75;">button</span><span style="color:#ABB2BF;"> </span><span style="color:#D19A66;">class</span><span style="color:#ABB2BF;">=</span><span style="color:#98C379;">&quot;btn&quot;</span><span style="color:#ABB2BF;"> </span><span style="color:#D19A66;">id</span><span style="color:#ABB2BF;">=</span><span style="color:#98C379;">&quot;demo1-test4&quot;</span><span style="color:#ABB2BF;">&gt;\u6E05\u9664\u674E\u56DB&lt;/</span><span style="color:#E06C75;">button</span><span style="color:#ABB2BF;">&gt;</span></span>
<span class="line"><span style="color:#ABB2BF;">&lt;</span><span style="color:#E06C75;">button</span><span style="color:#ABB2BF;"> </span><span style="color:#D19A66;">class</span><span style="color:#ABB2BF;">=</span><span style="color:#98C379;">&quot;btn&quot;</span><span style="color:#ABB2BF;"> </span><span style="color:#D19A66;">id</span><span style="color:#ABB2BF;">=</span><span style="color:#98C379;">&quot;demo1-test5&quot;</span><span style="color:#ABB2BF;">&gt;\u6E05\u7A7A&lt;/</span><span style="color:#E06C75;">button</span><span style="color:#ABB2BF;">&gt;</span></span>
<span class="line"><span style="color:#ABB2BF;">&lt;</span><span style="color:#E06C75;">pre</span><span style="color:#ABB2BF;"> </span><span style="color:#D19A66;">id</span><span style="color:#ABB2BF;">=</span><span style="color:#98C379;">&quot;demo1-result&quot;</span><span style="color:#ABB2BF;">&gt;&lt;/</span><span style="color:#E06C75;">pre</span><span style="color:#ABB2BF;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#ABB2BF;">&lt;</span><span style="color:#E06C75;">script</span><span style="color:#ABB2BF;">&gt;</span></span>
<span class="line"><span style="color:#C678DD;">var</span><span style="color:#ABB2BF;"> </span><span style="color:#E06C75;">demo1</span><span style="color:#ABB2BF;"> </span><span style="color:#56B6C2;">=</span><span style="color:#ABB2BF;"> </span><span style="color:#E5C07B;">xmSelect</span><span style="color:#ABB2BF;">.</span><span style="color:#61AFEF;">render</span><span style="color:#ABB2BF;">({</span></span>
<span class="line"><span style="color:#ABB2BF;">	</span><span style="color:#E06C75;">el</span><span style="color:#ABB2BF;">: </span><span style="color:#98C379;">&#39;#demo1&#39;</span><span style="color:#ABB2BF;">, </span></span>
<span class="line"><span style="color:#ABB2BF;">	</span><span style="color:#E06C75;">data</span><span style="color:#ABB2BF;">: [</span></span>
<span class="line"><span style="color:#ABB2BF;">		{</span><span style="color:#E06C75;">name</span><span style="color:#ABB2BF;">: </span><span style="color:#98C379;">&#39;\u5F20\u4E09&#39;</span><span style="color:#ABB2BF;">, </span><span style="color:#E06C75;">value</span><span style="color:#ABB2BF;">: </span><span style="color:#D19A66;">1</span><span style="color:#ABB2BF;">},</span></span>
<span class="line"><span style="color:#ABB2BF;">		{</span><span style="color:#E06C75;">name</span><span style="color:#ABB2BF;">: </span><span style="color:#98C379;">&#39;\u674E\u56DB&#39;</span><span style="color:#ABB2BF;">, </span><span style="color:#E06C75;">value</span><span style="color:#ABB2BF;">: </span><span style="color:#D19A66;">2</span><span style="color:#ABB2BF;">},</span></span>
<span class="line"><span style="color:#ABB2BF;">		{</span><span style="color:#E06C75;">name</span><span style="color:#ABB2BF;">: </span><span style="color:#98C379;">&#39;\u738B\u4E94&#39;</span><span style="color:#ABB2BF;">, </span><span style="color:#E06C75;">value</span><span style="color:#ABB2BF;">: </span><span style="color:#D19A66;">3</span><span style="color:#ABB2BF;">},</span></span>
<span class="line"><span style="color:#ABB2BF;">	]</span></span>
<span class="line"><span style="color:#ABB2BF;">})</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E5C07B;">document</span><span style="color:#ABB2BF;">.</span><span style="color:#61AFEF;">getElementById</span><span style="color:#ABB2BF;">(</span><span style="color:#98C379;">&#39;demo1-test1&#39;</span><span style="color:#ABB2BF;">).</span><span style="color:#61AFEF;">onclick</span><span style="color:#ABB2BF;"> </span><span style="color:#56B6C2;">=</span><span style="color:#ABB2BF;"> </span><span style="color:#C678DD;">function</span><span style="color:#ABB2BF;">(){</span></span>
<span class="line"><span style="color:#ABB2BF;">	</span><span style="color:#E5C07B;">demo1</span><span style="color:#ABB2BF;">.</span><span style="color:#61AFEF;">setValue</span><span style="color:#ABB2BF;">([</span></span>
<span class="line"><span style="color:#ABB2BF;">		{</span><span style="color:#E06C75;">name</span><span style="color:#ABB2BF;">: </span><span style="color:#98C379;">&#39;\u5F20\u4E09&#39;</span><span style="color:#ABB2BF;">, </span><span style="color:#E06C75;">value</span><span style="color:#ABB2BF;">: </span><span style="color:#D19A66;">1</span><span style="color:#ABB2BF;">},</span></span>
<span class="line"><span style="color:#ABB2BF;">	])</span></span>
<span class="line"><span style="color:#ABB2BF;">};</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E5C07B;">document</span><span style="color:#ABB2BF;">.</span><span style="color:#61AFEF;">getElementById</span><span style="color:#ABB2BF;">(</span><span style="color:#98C379;">&#39;demo1-test2&#39;</span><span style="color:#ABB2BF;">).</span><span style="color:#61AFEF;">onclick</span><span style="color:#ABB2BF;"> </span><span style="color:#56B6C2;">=</span><span style="color:#ABB2BF;"> </span><span style="color:#C678DD;">function</span><span style="color:#ABB2BF;">(){</span></span>
<span class="line"><span style="color:#ABB2BF;">	</span><span style="color:#E5C07B;">demo1</span><span style="color:#ABB2BF;">.</span><span style="color:#61AFEF;">setValue</span><span style="color:#ABB2BF;">([ </span><span style="color:#D19A66;">1</span><span style="color:#ABB2BF;"> ])</span></span>
<span class="line"><span style="color:#ABB2BF;">};</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E5C07B;">document</span><span style="color:#ABB2BF;">.</span><span style="color:#61AFEF;">getElementById</span><span style="color:#ABB2BF;">(</span><span style="color:#98C379;">&#39;demo1-test3&#39;</span><span style="color:#ABB2BF;">).</span><span style="color:#61AFEF;">onclick</span><span style="color:#ABB2BF;"> </span><span style="color:#56B6C2;">=</span><span style="color:#ABB2BF;"> </span><span style="color:#C678DD;">function</span><span style="color:#ABB2BF;">(){</span></span>
<span class="line"><span style="color:#ABB2BF;">	</span><span style="color:#E5C07B;">demo1</span><span style="color:#ABB2BF;">.</span><span style="color:#61AFEF;">append</span><span style="color:#ABB2BF;">([ </span><span style="color:#D19A66;">2</span><span style="color:#ABB2BF;"> ]);</span></span>
<span class="line"><span style="color:#ABB2BF;">};</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E5C07B;">document</span><span style="color:#ABB2BF;">.</span><span style="color:#61AFEF;">getElementById</span><span style="color:#ABB2BF;">(</span><span style="color:#98C379;">&#39;demo1-test4&#39;</span><span style="color:#ABB2BF;">).</span><span style="color:#61AFEF;">onclick</span><span style="color:#ABB2BF;"> </span><span style="color:#56B6C2;">=</span><span style="color:#ABB2BF;"> </span><span style="color:#C678DD;">function</span><span style="color:#ABB2BF;">(){</span></span>
<span class="line"><span style="color:#ABB2BF;">	</span><span style="color:#E5C07B;">demo1</span><span style="color:#ABB2BF;">.</span><span style="color:#61AFEF;">delete</span><span style="color:#ABB2BF;">([ </span><span style="color:#D19A66;">2</span><span style="color:#ABB2BF;"> ])</span></span>
<span class="line"><span style="color:#ABB2BF;">};</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E5C07B;">document</span><span style="color:#ABB2BF;">.</span><span style="color:#61AFEF;">getElementById</span><span style="color:#ABB2BF;">(</span><span style="color:#98C379;">&#39;demo1-test5&#39;</span><span style="color:#ABB2BF;">).</span><span style="color:#61AFEF;">onclick</span><span style="color:#ABB2BF;"> </span><span style="color:#56B6C2;">=</span><span style="color:#ABB2BF;"> </span><span style="color:#C678DD;">function</span><span style="color:#ABB2BF;">(){</span></span>
<span class="line"><span style="color:#ABB2BF;">	</span><span style="color:#E5C07B;">demo1</span><span style="color:#ABB2BF;">.</span><span style="color:#61AFEF;">setValue</span><span style="color:#ABB2BF;">([ ])</span></span>
<span class="line"><span style="color:#ABB2BF;">};</span></span>
<span class="line"></span>
<span class="line"><span style="color:#ABB2BF;">&lt;/</span><span style="color:#E06C75;">script</span><span style="color:#ABB2BF;">&gt;</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br></div></div><h2 id="\u53D6\u503C" tabindex="-1">\u53D6\u503C <a class="header-anchor" href="#\u53D6\u503C" aria-hidden="true">#</a></h2><p>\u51FD\u6570<code>getValue(type)</code>, type\u7C7B\u578B name, nameStr, value, valueStr</p><div class="language-html line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki"><code><span class="line"><span style="color:#ABB2BF;">&lt;</span><span style="color:#E06C75;">div</span><span style="color:#ABB2BF;"> </span><span style="color:#D19A66;">id</span><span style="color:#ABB2BF;">=</span><span style="color:#98C379;">&quot;demo2&quot;</span><span style="color:#ABB2BF;"> </span><span style="color:#D19A66;">class</span><span style="color:#ABB2BF;">=</span><span style="color:#98C379;">&quot;xm-select-demo&quot;</span><span style="color:#ABB2BF;">&gt;&lt;/</span><span style="color:#E06C75;">div</span><span style="color:#ABB2BF;">&gt;</span></span>
<span class="line"><span style="color:#ABB2BF;">&lt;</span><span style="color:#E06C75;">button</span><span style="color:#ABB2BF;"> </span><span style="color:#D19A66;">class</span><span style="color:#ABB2BF;">=</span><span style="color:#98C379;">&quot;btn&quot;</span><span style="color:#ABB2BF;"> </span><span style="color:#D19A66;">id</span><span style="color:#ABB2BF;">=</span><span style="color:#98C379;">&quot;demo2-getValue&quot;</span><span style="color:#ABB2BF;">&gt;\u83B7\u53D6\u9009\u4E2D\u503C&lt;/</span><span style="color:#E06C75;">button</span><span style="color:#ABB2BF;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#ABB2BF;">&lt;</span><span style="color:#E06C75;">br</span><span style="color:#ABB2BF;">/&gt;&lt;</span><span style="color:#E06C75;">br</span><span style="color:#ABB2BF;">/&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#ABB2BF;">&lt;</span><span style="color:#E06C75;">button</span><span style="color:#ABB2BF;"> </span><span style="color:#D19A66;">class</span><span style="color:#ABB2BF;">=</span><span style="color:#98C379;">&quot;btn&quot;</span><span style="color:#ABB2BF;"> </span><span style="color:#D19A66;">id</span><span style="color:#ABB2BF;">=</span><span style="color:#98C379;">&quot;name&quot;</span><span style="color:#ABB2BF;">&gt;\u83B7\u53D6name\u6570\u7EC4&lt;/</span><span style="color:#E06C75;">button</span><span style="color:#ABB2BF;">&gt;</span></span>
<span class="line"><span style="color:#ABB2BF;">&lt;</span><span style="color:#E06C75;">button</span><span style="color:#ABB2BF;"> </span><span style="color:#D19A66;">class</span><span style="color:#ABB2BF;">=</span><span style="color:#98C379;">&quot;btn&quot;</span><span style="color:#ABB2BF;"> </span><span style="color:#D19A66;">id</span><span style="color:#ABB2BF;">=</span><span style="color:#98C379;">&quot;nameStr&quot;</span><span style="color:#ABB2BF;">&gt;\u83B7\u53D6name\u5B57\u7B26\u4E32&lt;/</span><span style="color:#E06C75;">button</span><span style="color:#ABB2BF;">&gt;</span></span>
<span class="line"><span style="color:#ABB2BF;">&lt;</span><span style="color:#E06C75;">button</span><span style="color:#ABB2BF;"> </span><span style="color:#D19A66;">class</span><span style="color:#ABB2BF;">=</span><span style="color:#98C379;">&quot;btn&quot;</span><span style="color:#ABB2BF;"> </span><span style="color:#D19A66;">id</span><span style="color:#ABB2BF;">=</span><span style="color:#98C379;">&quot;value&quot;</span><span style="color:#ABB2BF;">&gt;\u83B7\u53D6value\u6570\u7EC4&lt;/</span><span style="color:#E06C75;">button</span><span style="color:#ABB2BF;">&gt;</span></span>
<span class="line"><span style="color:#ABB2BF;">&lt;</span><span style="color:#E06C75;">button</span><span style="color:#ABB2BF;"> </span><span style="color:#D19A66;">class</span><span style="color:#ABB2BF;">=</span><span style="color:#98C379;">&quot;btn&quot;</span><span style="color:#ABB2BF;"> </span><span style="color:#D19A66;">id</span><span style="color:#ABB2BF;">=</span><span style="color:#98C379;">&quot;valueStr&quot;</span><span style="color:#ABB2BF;">&gt;\u83B7\u53D6value\u5B57\u7B26\u4E32&lt;/</span><span style="color:#E06C75;">button</span><span style="color:#ABB2BF;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#ABB2BF;">&lt;</span><span style="color:#E06C75;">pre</span><span style="color:#ABB2BF;"> </span><span style="color:#D19A66;">id</span><span style="color:#ABB2BF;">=</span><span style="color:#98C379;">&quot;demo2-value&quot;</span><span style="color:#ABB2BF;">&gt;&lt;/</span><span style="color:#E06C75;">pre</span><span style="color:#ABB2BF;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#ABB2BF;">&lt;</span><span style="color:#E06C75;">script</span><span style="color:#ABB2BF;">&gt;</span></span>
<span class="line"><span style="color:#C678DD;">var</span><span style="color:#ABB2BF;"> </span><span style="color:#E06C75;">demo2</span><span style="color:#ABB2BF;"> </span><span style="color:#56B6C2;">=</span><span style="color:#ABB2BF;"> </span><span style="color:#E5C07B;">xmSelect</span><span style="color:#ABB2BF;">.</span><span style="color:#61AFEF;">render</span><span style="color:#ABB2BF;">({</span></span>
<span class="line"><span style="color:#ABB2BF;">	</span><span style="color:#E06C75;">el</span><span style="color:#ABB2BF;">: </span><span style="color:#98C379;">&#39;#demo2&#39;</span><span style="color:#ABB2BF;">, </span></span>
<span class="line"><span style="color:#ABB2BF;">	</span><span style="color:#E06C75;">data</span><span style="color:#ABB2BF;">: [</span></span>
<span class="line"><span style="color:#ABB2BF;">		{</span><span style="color:#E06C75;">name</span><span style="color:#ABB2BF;">: </span><span style="color:#98C379;">&#39;\u5F20\u4E09&#39;</span><span style="color:#ABB2BF;">, </span><span style="color:#E06C75;">value</span><span style="color:#ABB2BF;">: </span><span style="color:#D19A66;">1</span><span style="color:#ABB2BF;">},</span></span>
<span class="line"><span style="color:#ABB2BF;">		{</span><span style="color:#E06C75;">name</span><span style="color:#ABB2BF;">: </span><span style="color:#98C379;">&#39;\u674E\u56DB&#39;</span><span style="color:#ABB2BF;">, </span><span style="color:#E06C75;">value</span><span style="color:#ABB2BF;">: </span><span style="color:#D19A66;">2</span><span style="color:#ABB2BF;">},</span></span>
<span class="line"><span style="color:#ABB2BF;">		{</span><span style="color:#E06C75;">name</span><span style="color:#ABB2BF;">: </span><span style="color:#98C379;">&#39;\u738B\u4E94&#39;</span><span style="color:#ABB2BF;">, </span><span style="color:#E06C75;">value</span><span style="color:#ABB2BF;">: </span><span style="color:#D19A66;">3</span><span style="color:#ABB2BF;">},</span></span>
<span class="line"><span style="color:#ABB2BF;">	]</span></span>
<span class="line"><span style="color:#ABB2BF;">})</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E5C07B;">document</span><span style="color:#ABB2BF;">.</span><span style="color:#61AFEF;">getElementById</span><span style="color:#ABB2BF;">(</span><span style="color:#98C379;">&#39;demo2-getValue&#39;</span><span style="color:#ABB2BF;">).</span><span style="color:#61AFEF;">onclick</span><span style="color:#ABB2BF;"> </span><span style="color:#56B6C2;">=</span><span style="color:#ABB2BF;"> </span><span style="color:#C678DD;">function</span><span style="color:#ABB2BF;">(){</span></span>
<span class="line"><span style="color:#ABB2BF;">	</span><span style="color:#7F848E;">//\u83B7\u53D6\u5F53\u524D\u591A\u9009\u9009\u4E2D\u7684\u503C</span></span>
<span class="line"><span style="color:#ABB2BF;">	</span><span style="color:#C678DD;">var</span><span style="color:#ABB2BF;"> </span><span style="color:#E06C75;">selectArr</span><span style="color:#ABB2BF;"> </span><span style="color:#56B6C2;">=</span><span style="color:#ABB2BF;"> </span><span style="color:#E5C07B;">demo2</span><span style="color:#ABB2BF;">.</span><span style="color:#61AFEF;">getValue</span><span style="color:#ABB2BF;">();</span></span>
<span class="line"><span style="color:#ABB2BF;">	</span><span style="color:#E5C07B;">document</span><span style="color:#ABB2BF;">.</span><span style="color:#61AFEF;">getElementById</span><span style="color:#ABB2BF;">(</span><span style="color:#98C379;">&#39;demo2-value&#39;</span><span style="color:#ABB2BF;">).</span><span style="color:#E06C75;">innerHTML</span><span style="color:#ABB2BF;"> </span><span style="color:#56B6C2;">=</span><span style="color:#ABB2BF;"> </span><span style="color:#98C379;">\`</span><span style="color:#56B6C2;">\\n</span><span style="color:#98C379;">demo2.getValue()</span><span style="color:#56B6C2;">\\n\\n</span><span style="color:#98C379;">\`</span><span style="color:#ABB2BF;"> </span><span style="color:#56B6C2;">+</span><span style="color:#ABB2BF;"> </span><span style="color:#E5C07B;">JSON</span><span style="color:#ABB2BF;">.</span><span style="color:#61AFEF;">stringify</span><span style="color:#ABB2BF;">(</span><span style="color:#E06C75;">selectArr</span><span style="color:#ABB2BF;">, </span><span style="color:#D19A66;">null</span><span style="color:#ABB2BF;">, </span><span style="color:#D19A66;">2</span><span style="color:#ABB2BF;">);</span></span>
<span class="line"><span style="color:#ABB2BF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C678DD;">var</span><span style="color:#ABB2BF;"> </span><span style="color:#E06C75;">types</span><span style="color:#ABB2BF;"> </span><span style="color:#56B6C2;">=</span><span style="color:#ABB2BF;"> [</span><span style="color:#98C379;">&#39;name&#39;</span><span style="color:#ABB2BF;">, </span><span style="color:#98C379;">&#39;nameStr&#39;</span><span style="color:#ABB2BF;">, </span><span style="color:#98C379;">&#39;value&#39;</span><span style="color:#ABB2BF;">, </span><span style="color:#98C379;">&#39;valueStr&#39;</span><span style="color:#ABB2BF;">];</span></span>
<span class="line"><span style="color:#E5C07B;">types</span><span style="color:#ABB2BF;">.</span><span style="color:#61AFEF;">forEach</span><span style="color:#ABB2BF;">(</span><span style="color:#C678DD;">function</span><span style="color:#ABB2BF;">(</span><span style="color:#E06C75;">type</span><span style="color:#ABB2BF;">){</span></span>
<span class="line"><span style="color:#ABB2BF;">	</span><span style="color:#E5C07B;">document</span><span style="color:#ABB2BF;">.</span><span style="color:#61AFEF;">getElementById</span><span style="color:#ABB2BF;">(</span><span style="color:#E06C75;">type</span><span style="color:#ABB2BF;">).</span><span style="color:#61AFEF;">onclick</span><span style="color:#ABB2BF;"> </span><span style="color:#56B6C2;">=</span><span style="color:#ABB2BF;"> </span><span style="color:#C678DD;">function</span><span style="color:#ABB2BF;">(){</span></span>
<span class="line"><span style="color:#ABB2BF;">		</span><span style="color:#7F848E;">//\u83B7\u53D6\u5F53\u524D\u591A\u9009\u9009\u4E2D\u7684\u503C</span></span>
<span class="line"><span style="color:#ABB2BF;">		</span><span style="color:#C678DD;">var</span><span style="color:#ABB2BF;"> </span><span style="color:#E06C75;">selectArr</span><span style="color:#ABB2BF;"> </span><span style="color:#56B6C2;">=</span><span style="color:#ABB2BF;"> </span><span style="color:#E5C07B;">demo2</span><span style="color:#ABB2BF;">.</span><span style="color:#61AFEF;">getValue</span><span style="color:#ABB2BF;">(</span><span style="color:#E06C75;">type</span><span style="color:#ABB2BF;">);</span></span>
<span class="line"><span style="color:#ABB2BF;">		</span><span style="color:#E5C07B;">document</span><span style="color:#ABB2BF;">.</span><span style="color:#61AFEF;">getElementById</span><span style="color:#ABB2BF;">(</span><span style="color:#98C379;">&#39;demo2-value&#39;</span><span style="color:#ABB2BF;">).</span><span style="color:#E06C75;">innerHTML</span><span style="color:#ABB2BF;"> </span><span style="color:#56B6C2;">=</span><span style="color:#ABB2BF;"> </span><span style="color:#98C379;">\`</span><span style="color:#56B6C2;">\\n</span><span style="color:#98C379;">demo2.getValue(&#39;</span><span style="color:#C678DD;">\${</span><span style="color:#E06C75;">type</span><span style="color:#C678DD;">}</span><span style="color:#98C379;">&#39;)</span><span style="color:#56B6C2;">\\n\\n</span><span style="color:#98C379;">\`</span><span style="color:#ABB2BF;"> </span><span style="color:#56B6C2;">+</span><span style="color:#ABB2BF;"> </span><span style="color:#E5C07B;">JSON</span><span style="color:#ABB2BF;">.</span><span style="color:#61AFEF;">stringify</span><span style="color:#ABB2BF;">(</span><span style="color:#E06C75;">selectArr</span><span style="color:#ABB2BF;">, </span><span style="color:#D19A66;">null</span><span style="color:#ABB2BF;">, </span><span style="color:#D19A66;">2</span><span style="color:#ABB2BF;">);</span></span>
<span class="line"><span style="color:#ABB2BF;">	}</span></span>
<span class="line"><span style="color:#ABB2BF;">});</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#ABB2BF;">&lt;/</span><span style="color:#E06C75;">script</span><span style="color:#ABB2BF;">&gt;</span></span>
<span class="line"></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br></div></div>`,7),e=[o];function B(t,c,r,y,A,F){return a(),n("div",null,e)}const b=s(p,[["render",B]]);export{u as __pageData,b as default};