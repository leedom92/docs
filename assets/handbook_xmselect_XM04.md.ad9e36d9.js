import{_ as s,c as n,o as a,a as l}from"./app.88e19b03.js";const b=JSON.parse('{"title":"\u4FEE\u6539\u63D0\u793A","description":"","frontmatter":{},"headers":[{"level":2,"title":"\u4FEE\u6539\u9009\u9879\u63D0\u793A\u6587\u5B57","slug":"\u4FEE\u6539\u9009\u9879\u63D0\u793A\u6587\u5B57","link":"#\u4FEE\u6539\u9009\u9879\u63D0\u793A\u6587\u5B57","children":[]},{"level":2,"title":"\u4FEE\u6539\u7A7A\u6570\u636E\u63D0\u793A\u6587\u5B57","slug":"\u4FEE\u6539\u7A7A\u6570\u636E\u63D0\u793A\u6587\u5B57","link":"#\u4FEE\u6539\u7A7A\u6570\u636E\u63D0\u793A\u6587\u5B57","children":[]},{"level":2,"title":"\u4FEE\u6539\u641C\u7D22\u63D0\u793A\u6587\u5B57","slug":"\u4FEE\u6539\u641C\u7D22\u63D0\u793A\u6587\u5B57","link":"#\u4FEE\u6539\u641C\u7D22\u63D0\u793A\u6587\u5B57","children":[]}],"relativePath":"handbook/xmselect/XM04.md","lastUpdated":null}'),p={name:"handbook/xmselect/XM04.md"},o=l(`<h1 id="\u4FEE\u6539\u63D0\u793A" tabindex="-1">\u4FEE\u6539\u63D0\u793A <a class="header-anchor" href="#\u4FEE\u6539\u63D0\u793A" aria-hidden="true">#</a></h1><h2 id="\u4FEE\u6539\u9009\u9879\u63D0\u793A\u6587\u5B57" tabindex="-1">\u4FEE\u6539\u9009\u9879\u63D0\u793A\u6587\u5B57 <a class="header-anchor" href="#\u4FEE\u6539\u9009\u9879\u63D0\u793A\u6587\u5B57" aria-hidden="true">#</a></h2><div class="language-html line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki"><code><span class="line"><span style="color:#ABB2BF;">&lt;</span><span style="color:#E06C75;">div</span><span style="color:#ABB2BF;"> </span><span style="color:#D19A66;">id</span><span style="color:#ABB2BF;">=</span><span style="color:#98C379;">&quot;demo1&quot;</span><span style="color:#ABB2BF;"> </span><span style="color:#D19A66;">class</span><span style="color:#ABB2BF;">=</span><span style="color:#98C379;">&quot;xm-select-demo&quot;</span><span style="color:#ABB2BF;">&gt;&lt;/</span><span style="color:#E06C75;">div</span><span style="color:#ABB2BF;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#ABB2BF;">&lt;</span><span style="color:#E06C75;">script</span><span style="color:#ABB2BF;">&gt;</span></span>
<span class="line"><span style="color:#C678DD;">var</span><span style="color:#ABB2BF;"> </span><span style="color:#E06C75;">demo1</span><span style="color:#ABB2BF;"> </span><span style="color:#56B6C2;">=</span><span style="color:#ABB2BF;"> </span><span style="color:#E5C07B;">xmSelect</span><span style="color:#ABB2BF;">.</span><span style="color:#61AFEF;">render</span><span style="color:#ABB2BF;">({</span></span>
<span class="line"><span style="color:#ABB2BF;">	</span><span style="color:#E06C75;">el</span><span style="color:#ABB2BF;">: </span><span style="color:#98C379;">&#39;#demo1&#39;</span><span style="color:#ABB2BF;">, </span></span>
<span class="line"><span style="color:#ABB2BF;">	</span><span style="color:#E06C75;">tips</span><span style="color:#ABB2BF;">: </span><span style="color:#98C379;">&#39;\u4F60\u559C\u6B22\u4EC0\u4E48\u6C34\u679C\u5462?&#39;</span><span style="color:#ABB2BF;">,</span></span>
<span class="line"><span style="color:#ABB2BF;">	</span><span style="color:#E06C75;">data</span><span style="color:#ABB2BF;">: [</span></span>
<span class="line"><span style="color:#ABB2BF;">		{</span><span style="color:#E06C75;">name</span><span style="color:#ABB2BF;">: </span><span style="color:#98C379;">&#39;\u6C34\u679C&#39;</span><span style="color:#ABB2BF;">, </span><span style="color:#E06C75;">value</span><span style="color:#ABB2BF;">: </span><span style="color:#D19A66;">1</span><span style="color:#ABB2BF;">},</span></span>
<span class="line"><span style="color:#ABB2BF;">		{</span><span style="color:#E06C75;">name</span><span style="color:#ABB2BF;">: </span><span style="color:#98C379;">&#39;\u852C\u83DC&#39;</span><span style="color:#ABB2BF;">, </span><span style="color:#E06C75;">value</span><span style="color:#ABB2BF;">: </span><span style="color:#D19A66;">2</span><span style="color:#ABB2BF;">},</span></span>
<span class="line"><span style="color:#ABB2BF;">		{</span><span style="color:#E06C75;">name</span><span style="color:#ABB2BF;">: </span><span style="color:#98C379;">&#39;\u684C\u5B50&#39;</span><span style="color:#ABB2BF;">, </span><span style="color:#E06C75;">value</span><span style="color:#ABB2BF;">: </span><span style="color:#D19A66;">3</span><span style="color:#ABB2BF;">},</span></span>
<span class="line"><span style="color:#ABB2BF;">		{</span><span style="color:#E06C75;">name</span><span style="color:#ABB2BF;">: </span><span style="color:#98C379;">&#39;\u5317\u4EAC&#39;</span><span style="color:#ABB2BF;">, </span><span style="color:#E06C75;">value</span><span style="color:#ABB2BF;">: </span><span style="color:#D19A66;">4</span><span style="color:#ABB2BF;">},</span></span>
<span class="line"><span style="color:#ABB2BF;">	]</span></span>
<span class="line"><span style="color:#ABB2BF;">})</span></span>
<span class="line"><span style="color:#ABB2BF;">&lt;/</span><span style="color:#E06C75;">script</span><span style="color:#ABB2BF;">&gt;</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br></div></div><h2 id="\u4FEE\u6539\u7A7A\u6570\u636E\u63D0\u793A\u6587\u5B57" tabindex="-1">\u4FEE\u6539\u7A7A\u6570\u636E\u63D0\u793A\u6587\u5B57 <a class="header-anchor" href="#\u4FEE\u6539\u7A7A\u6570\u636E\u63D0\u793A\u6587\u5B57" aria-hidden="true">#</a></h2><div class="language-html line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki"><code><span class="line"><span style="color:#ABB2BF;">&lt;</span><span style="color:#E06C75;">div</span><span style="color:#ABB2BF;"> </span><span style="color:#D19A66;">id</span><span style="color:#ABB2BF;">=</span><span style="color:#98C379;">&quot;demo2&quot;</span><span style="color:#ABB2BF;"> </span><span style="color:#D19A66;">class</span><span style="color:#ABB2BF;">=</span><span style="color:#98C379;">&quot;xm-select-demo&quot;</span><span style="color:#ABB2BF;">&gt;&lt;/</span><span style="color:#E06C75;">div</span><span style="color:#ABB2BF;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#ABB2BF;">&lt;</span><span style="color:#E06C75;">script</span><span style="color:#ABB2BF;">&gt;</span></span>
<span class="line"><span style="color:#C678DD;">var</span><span style="color:#ABB2BF;"> </span><span style="color:#E06C75;">demo2</span><span style="color:#ABB2BF;"> </span><span style="color:#56B6C2;">=</span><span style="color:#ABB2BF;"> </span><span style="color:#E5C07B;">xmSelect</span><span style="color:#ABB2BF;">.</span><span style="color:#61AFEF;">render</span><span style="color:#ABB2BF;">({</span></span>
<span class="line"><span style="color:#ABB2BF;">	</span><span style="color:#E06C75;">el</span><span style="color:#ABB2BF;">: </span><span style="color:#98C379;">&#39;#demo2&#39;</span><span style="color:#ABB2BF;">, </span></span>
<span class="line"><span style="color:#ABB2BF;">	</span><span style="color:#E06C75;">empty</span><span style="color:#ABB2BF;">: </span><span style="color:#98C379;">&#39;\u5440, \u6CA1\u6709\u6570\u636E\u5462&#39;</span><span style="color:#ABB2BF;">,</span></span>
<span class="line"><span style="color:#ABB2BF;">	</span><span style="color:#E06C75;">data</span><span style="color:#ABB2BF;">: [ ]</span></span>
<span class="line"><span style="color:#ABB2BF;">})</span></span>
<span class="line"><span style="color:#ABB2BF;">&lt;/</span><span style="color:#E06C75;">script</span><span style="color:#ABB2BF;">&gt;</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div><h2 id="\u4FEE\u6539\u641C\u7D22\u63D0\u793A\u6587\u5B57" tabindex="-1">\u4FEE\u6539\u641C\u7D22\u63D0\u793A\u6587\u5B57 <a class="header-anchor" href="#\u4FEE\u6539\u641C\u7D22\u63D0\u793A\u6587\u5B57" aria-hidden="true">#</a></h2><div class="language-html line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki"><code><span class="line"><span style="color:#ABB2BF;">&lt;</span><span style="color:#E06C75;">div</span><span style="color:#ABB2BF;"> </span><span style="color:#D19A66;">id</span><span style="color:#ABB2BF;">=</span><span style="color:#98C379;">&quot;demo3&quot;</span><span style="color:#ABB2BF;"> </span><span style="color:#D19A66;">class</span><span style="color:#ABB2BF;">=</span><span style="color:#98C379;">&quot;xm-select-demo&quot;</span><span style="color:#ABB2BF;">&gt;&lt;/</span><span style="color:#E06C75;">div</span><span style="color:#ABB2BF;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#ABB2BF;">&lt;</span><span style="color:#E06C75;">script</span><span style="color:#ABB2BF;">&gt;</span></span>
<span class="line"><span style="color:#C678DD;">var</span><span style="color:#ABB2BF;"> </span><span style="color:#E06C75;">demo3</span><span style="color:#ABB2BF;"> </span><span style="color:#56B6C2;">=</span><span style="color:#ABB2BF;"> </span><span style="color:#E5C07B;">xmSelect</span><span style="color:#ABB2BF;">.</span><span style="color:#61AFEF;">render</span><span style="color:#ABB2BF;">({</span></span>
<span class="line"><span style="color:#ABB2BF;">	</span><span style="color:#E06C75;">el</span><span style="color:#ABB2BF;">: </span><span style="color:#98C379;">&#39;#demo3&#39;</span><span style="color:#ABB2BF;">, </span></span>
<span class="line"><span style="color:#ABB2BF;">	</span><span style="color:#E06C75;">filterable</span><span style="color:#ABB2BF;">: </span><span style="color:#D19A66;">true</span><span style="color:#ABB2BF;">,</span></span>
<span class="line"><span style="color:#ABB2BF;">	</span><span style="color:#E06C75;">searchTips</span><span style="color:#ABB2BF;">: </span><span style="color:#98C379;">&#39;\u4F60\u60F3\u5403\u4EC0\u4E48\u6C34\u679C\u5427&#39;</span><span style="color:#ABB2BF;">,</span></span>
<span class="line"><span style="color:#ABB2BF;">	</span><span style="color:#E06C75;">data</span><span style="color:#ABB2BF;">: [</span></span>
<span class="line"><span style="color:#ABB2BF;">		{</span><span style="color:#E06C75;">name</span><span style="color:#ABB2BF;">: </span><span style="color:#98C379;">&#39;\u6C34\u679C&#39;</span><span style="color:#ABB2BF;">, </span><span style="color:#E06C75;">value</span><span style="color:#ABB2BF;">: </span><span style="color:#D19A66;">1</span><span style="color:#ABB2BF;">},</span></span>
<span class="line"><span style="color:#ABB2BF;">		{</span><span style="color:#E06C75;">name</span><span style="color:#ABB2BF;">: </span><span style="color:#98C379;">&#39;\u852C\u83DC&#39;</span><span style="color:#ABB2BF;">, </span><span style="color:#E06C75;">value</span><span style="color:#ABB2BF;">: </span><span style="color:#D19A66;">2</span><span style="color:#ABB2BF;">},</span></span>
<span class="line"><span style="color:#ABB2BF;">		{</span><span style="color:#E06C75;">name</span><span style="color:#ABB2BF;">: </span><span style="color:#98C379;">&#39;\u684C\u5B50&#39;</span><span style="color:#ABB2BF;">, </span><span style="color:#E06C75;">value</span><span style="color:#ABB2BF;">: </span><span style="color:#D19A66;">3</span><span style="color:#ABB2BF;">},</span></span>
<span class="line"><span style="color:#ABB2BF;">		{</span><span style="color:#E06C75;">name</span><span style="color:#ABB2BF;">: </span><span style="color:#98C379;">&#39;\u5317\u4EAC&#39;</span><span style="color:#ABB2BF;">, </span><span style="color:#E06C75;">value</span><span style="color:#ABB2BF;">: </span><span style="color:#D19A66;">4</span><span style="color:#ABB2BF;">},</span></span>
<span class="line"><span style="color:#ABB2BF;">	]</span></span>
<span class="line"><span style="color:#ABB2BF;">})</span></span>
<span class="line"><span style="color:#ABB2BF;">&lt;/</span><span style="color:#E06C75;">script</span><span style="color:#ABB2BF;">&gt;</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br></div></div>`,7),e=[o];function B(t,r,c,y,i,A){return a(),n("div",null,e)}const d=s(p,[["render",B]]);export{b as __pageData,d as default};
