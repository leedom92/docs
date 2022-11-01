import{_ as s,c as n,o as a,a as l}from"./app.f8d053e7.js";const C=JSON.parse('{"title":"\u6784\u5EFA\u9009\u9879","description":"","frontmatter":{},"headers":[{"level":2,"title":"\u81EA\u5B9A\u4E49\u6E32\u67D3","slug":"\u81EA\u5B9A\u4E49\u6E32\u67D3","link":"#\u81EA\u5B9A\u4E49\u6E32\u67D3","children":[]},{"level":2,"title":"\u81EA\u5B9A\u4E49\u6E32\u67D3 - label","slug":"\u81EA\u5B9A\u4E49\u6E32\u67D3-label","link":"#\u81EA\u5B9A\u4E49\u6E32\u67D3-label","children":[]}],"relativePath":"handbook/xmselect/XM15.md","lastUpdated":null}'),p={name:"handbook/xmselect/XM15.md"},o=l(`<h1 id="\u6784\u5EFA\u9009\u9879" tabindex="-1">\u6784\u5EFA\u9009\u9879 <a class="header-anchor" href="#\u6784\u5EFA\u9009\u9879" aria-hidden="true">#</a></h1><h2 id="\u81EA\u5B9A\u4E49\u6E32\u67D3" tabindex="-1">\u81EA\u5B9A\u4E49\u6E32\u67D3 <a class="header-anchor" href="#\u81EA\u5B9A\u4E49\u6E32\u67D3" aria-hidden="true">#</a></h2><div class="language-html line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki"><code><span class="line"><span style="color:#ABB2BF;">&lt;</span><span style="color:#E06C75;">div</span><span style="color:#ABB2BF;"> </span><span style="color:#D19A66;">id</span><span style="color:#ABB2BF;">=</span><span style="color:#98C379;">&quot;demo1&quot;</span><span style="color:#ABB2BF;"> </span><span style="color:#D19A66;">class</span><span style="color:#ABB2BF;">=</span><span style="color:#98C379;">&quot;xm-select-demo&quot;</span><span style="color:#ABB2BF;">&gt;&lt;/</span><span style="color:#E06C75;">div</span><span style="color:#ABB2BF;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#ABB2BF;">&lt;</span><span style="color:#E06C75;">script</span><span style="color:#ABB2BF;">&gt;</span></span>
<span class="line"><span style="color:#C678DD;">var</span><span style="color:#ABB2BF;"> </span><span style="color:#E06C75;">demo1</span><span style="color:#ABB2BF;"> </span><span style="color:#56B6C2;">=</span><span style="color:#ABB2BF;"> </span><span style="color:#E5C07B;">xmSelect</span><span style="color:#ABB2BF;">.</span><span style="color:#61AFEF;">render</span><span style="color:#ABB2BF;">({</span></span>
<span class="line"><span style="color:#ABB2BF;">	</span><span style="color:#E06C75;">el</span><span style="color:#ABB2BF;">: </span><span style="color:#98C379;">&#39;#demo1&#39;</span><span style="color:#ABB2BF;">, </span></span>
<span class="line"><span style="color:#ABB2BF;">	</span><span style="color:#61AFEF;">template</span><span style="color:#ABB2BF;">({ </span><span style="color:#E06C75;">item</span><span style="color:#ABB2BF;">, </span><span style="color:#E06C75;">sels</span><span style="color:#ABB2BF;">, </span><span style="color:#E06C75;">name</span><span style="color:#ABB2BF;">, </span><span style="color:#E06C75;">value</span><span style="color:#ABB2BF;"> }){</span></span>
<span class="line"><span style="color:#ABB2BF;">		</span><span style="color:#C678DD;">return</span><span style="color:#ABB2BF;"> </span><span style="color:#E5C07B;">item</span><span style="color:#ABB2BF;">.</span><span style="color:#E06C75;">name</span><span style="color:#ABB2BF;">  </span><span style="color:#56B6C2;">+</span><span style="color:#ABB2BF;"> </span><span style="color:#98C379;">&#39;&lt;span style=&quot;position: absolute; right: 10px; color: #8799a3&quot;&gt;&#39;</span><span style="color:#56B6C2;">+</span><span style="color:#E06C75;">value</span><span style="color:#56B6C2;">+</span><span style="color:#98C379;">&#39;&lt;/span&gt;&#39;</span><span style="color:#ABB2BF;"> </span></span>
<span class="line"><span style="color:#ABB2BF;">	},</span></span>
<span class="line"><span style="color:#ABB2BF;">	</span><span style="color:#E06C75;">prop</span><span style="color:#ABB2BF;">: {</span></span>
<span class="line"><span style="color:#ABB2BF;">		</span><span style="color:#E06C75;">name</span><span style="color:#ABB2BF;">: </span><span style="color:#98C379;">&#39;showname&#39;</span><span style="color:#ABB2BF;">,</span></span>
<span class="line"><span style="color:#ABB2BF;">	},</span></span>
<span class="line"><span style="color:#ABB2BF;">	</span><span style="color:#E06C75;">data</span><span style="color:#ABB2BF;">: [</span></span>
<span class="line"><span style="color:#ABB2BF;">		{</span><span style="color:#E06C75;">name</span><span style="color:#ABB2BF;">: </span><span style="color:#98C379;">&#39;\u5F20\u4E09&#39;</span><span style="color:#ABB2BF;">, </span><span style="color:#E06C75;">value</span><span style="color:#ABB2BF;">: </span><span style="color:#98C379;">&#39;zhangsan&#39;</span><span style="color:#ABB2BF;">, </span><span style="color:#E06C75;">showname</span><span style="color:#ABB2BF;">: </span><span style="color:#98C379;">&#39;\u7EC4\u7EC7\u90E8-\u5F20\u4E09&#39;</span><span style="color:#ABB2BF;">, </span><span style="color:#E06C75;">selected</span><span style="color:#ABB2BF;">: </span><span style="color:#D19A66;">true</span><span style="color:#ABB2BF;">},</span></span>
<span class="line"><span style="color:#ABB2BF;">		{</span><span style="color:#E06C75;">name</span><span style="color:#ABB2BF;">: </span><span style="color:#98C379;">&#39;\u674E\u56DB&#39;</span><span style="color:#ABB2BF;">, </span><span style="color:#E06C75;">value</span><span style="color:#ABB2BF;">: </span><span style="color:#98C379;">&#39;lisi&#39;</span><span style="color:#ABB2BF;">, </span><span style="color:#E06C75;">showname</span><span style="color:#ABB2BF;">: </span><span style="color:#98C379;">&#39;\u7B56\u5212\u90E8-\u674E\u56DB&#39;</span><span style="color:#ABB2BF;">, </span><span style="color:#E06C75;">selected</span><span style="color:#ABB2BF;">: </span><span style="color:#D19A66;">true</span><span style="color:#ABB2BF;">},</span></span>
<span class="line"><span style="color:#ABB2BF;">		{</span><span style="color:#E06C75;">name</span><span style="color:#ABB2BF;">: </span><span style="color:#98C379;">&#39;\u738B\u4E94&#39;</span><span style="color:#ABB2BF;">, </span><span style="color:#E06C75;">value</span><span style="color:#ABB2BF;">: </span><span style="color:#98C379;">&#39;wangwu&#39;</span><span style="color:#ABB2BF;">, </span><span style="color:#E06C75;">showname</span><span style="color:#ABB2BF;">: </span><span style="color:#98C379;">&#39;\u8FD0\u8425\u90E8-\u738B\u4E94&#39;</span><span style="color:#ABB2BF;"> },</span></span>
<span class="line"><span style="color:#ABB2BF;">	]</span></span>
<span class="line"><span style="color:#ABB2BF;">})</span></span>
<span class="line"><span style="color:#ABB2BF;">&lt;/</span><span style="color:#E06C75;">script</span><span style="color:#ABB2BF;">&gt;</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br></div></div><h2 id="\u81EA\u5B9A\u4E49\u6E32\u67D3-label" tabindex="-1">\u81EA\u5B9A\u4E49\u6E32\u67D3 - label <a class="header-anchor" href="#\u81EA\u5B9A\u4E49\u6E32\u67D3-label" aria-hidden="true">#</a></h2><div class="language-html line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki"><code><span class="line"><span style="color:#ABB2BF;">&lt;</span><span style="color:#E06C75;">div</span><span style="color:#ABB2BF;"> </span><span style="color:#D19A66;">id</span><span style="color:#ABB2BF;">=</span><span style="color:#98C379;">&quot;demo2&quot;</span><span style="color:#ABB2BF;"> </span><span style="color:#D19A66;">class</span><span style="color:#ABB2BF;">=</span><span style="color:#98C379;">&quot;xm-select-demo&quot;</span><span style="color:#ABB2BF;">&gt;&lt;/</span><span style="color:#E06C75;">div</span><span style="color:#ABB2BF;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#ABB2BF;">&lt;</span><span style="color:#E06C75;">script</span><span style="color:#ABB2BF;">&gt;</span></span>
<span class="line"><span style="color:#C678DD;">var</span><span style="color:#ABB2BF;"> </span><span style="color:#E06C75;">icons</span><span style="color:#ABB2BF;"> </span><span style="color:#56B6C2;">=</span><span style="color:#ABB2BF;"> [</span><span style="color:#98C379;">&#39;layui-icon layui-icon-face-smile&#39;</span><span style="color:#ABB2BF;">, </span><span style="color:#98C379;">&#39;layui-icon layui-icon-cellphone&#39;</span><span style="color:#ABB2BF;">]</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C678DD;">var</span><span style="color:#ABB2BF;"> </span><span style="color:#E06C75;">demo2</span><span style="color:#ABB2BF;"> </span><span style="color:#56B6C2;">=</span><span style="color:#ABB2BF;"> </span><span style="color:#E5C07B;">xmSelect</span><span style="color:#ABB2BF;">.</span><span style="color:#61AFEF;">render</span><span style="color:#ABB2BF;">({</span></span>
<span class="line"><span style="color:#ABB2BF;">	</span><span style="color:#E06C75;">el</span><span style="color:#ABB2BF;">: </span><span style="color:#98C379;">&#39;#demo2&#39;</span><span style="color:#ABB2BF;">, </span></span>
<span class="line"><span style="color:#ABB2BF;">	</span><span style="color:#E06C75;">model</span><span style="color:#ABB2BF;">: {</span></span>
<span class="line"><span style="color:#ABB2BF;">		</span><span style="color:#E06C75;">label</span><span style="color:#ABB2BF;">: {</span></span>
<span class="line"><span style="color:#ABB2BF;">			</span><span style="color:#E06C75;">block</span><span style="color:#ABB2BF;">: {</span></span>
<span class="line"><span style="color:#ABB2BF;">				</span><span style="color:#61AFEF;">template</span><span style="color:#ABB2BF;">: </span><span style="color:#C678DD;">function</span><span style="color:#ABB2BF;">(</span><span style="color:#E06C75;">item</span><span style="color:#ABB2BF;">, </span><span style="color:#E06C75;">sels</span><span style="color:#ABB2BF;">){</span></span>
<span class="line"><span style="color:#ABB2BF;">					</span><span style="color:#C678DD;">return</span><span style="color:#ABB2BF;"> </span><span style="color:#98C379;">&#39;&lt;i class=&quot;&#39;</span><span style="color:#56B6C2;">+</span><span style="color:#E06C75;">icons</span><span style="color:#ABB2BF;">[</span><span style="color:#E5C07B;">item</span><span style="color:#ABB2BF;">.</span><span style="color:#E06C75;">group</span><span style="color:#ABB2BF;">]</span><span style="color:#56B6C2;">+</span><span style="color:#98C379;">&#39;&quot;&gt;&lt;/i&gt;&#39;</span><span style="color:#ABB2BF;"> </span><span style="color:#56B6C2;">+</span><span style="color:#ABB2BF;"> </span><span style="color:#E5C07B;">item</span><span style="color:#ABB2BF;">.</span><span style="color:#E06C75;">name</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">				},</span></span>
<span class="line"><span style="color:#ABB2BF;">			},</span></span>
<span class="line"><span style="color:#ABB2BF;">		}</span></span>
<span class="line"><span style="color:#ABB2BF;">	},</span></span>
<span class="line"><span style="color:#ABB2BF;">	</span><span style="color:#61AFEF;">template</span><span style="color:#ABB2BF;">({ </span><span style="color:#E06C75;">item</span><span style="color:#ABB2BF;">, </span><span style="color:#E06C75;">sels</span><span style="color:#ABB2BF;">, </span><span style="color:#E06C75;">name</span><span style="color:#ABB2BF;">, </span><span style="color:#E06C75;">value</span><span style="color:#ABB2BF;"> }){</span></span>
<span class="line"><span style="color:#ABB2BF;">		</span><span style="color:#C678DD;">return</span><span style="color:#ABB2BF;"> </span><span style="color:#E5C07B;">item</span><span style="color:#ABB2BF;">.</span><span style="color:#E06C75;">name</span><span style="color:#ABB2BF;">  </span><span style="color:#56B6C2;">+</span><span style="color:#ABB2BF;"> </span><span style="color:#98C379;">&#39;&lt;span style=&quot;position: absolute; right: 10px; color: #8799a3&quot;&gt;&#39;</span><span style="color:#56B6C2;">+</span><span style="color:#E06C75;">value</span><span style="color:#56B6C2;">+</span><span style="color:#98C379;">&#39;&lt;/span&gt;&#39;</span><span style="color:#ABB2BF;"> </span></span>
<span class="line"><span style="color:#ABB2BF;">	},</span></span>
<span class="line"><span style="color:#ABB2BF;">	</span><span style="color:#E06C75;">data</span><span style="color:#ABB2BF;">: [</span></span>
<span class="line"><span style="color:#ABB2BF;">		{</span><span style="color:#E06C75;">group</span><span style="color:#ABB2BF;">: </span><span style="color:#D19A66;">1</span><span style="color:#ABB2BF;">, </span><span style="color:#E06C75;">name</span><span style="color:#ABB2BF;">: </span><span style="color:#98C379;">&#39;\u5F20\u4E09&#39;</span><span style="color:#ABB2BF;">, </span><span style="color:#E06C75;">value</span><span style="color:#ABB2BF;">: </span><span style="color:#98C379;">&#39;zhangsan&#39;</span><span style="color:#ABB2BF;">, </span><span style="color:#E06C75;">selected</span><span style="color:#ABB2BF;">: </span><span style="color:#D19A66;">true</span><span style="color:#ABB2BF;">},</span></span>
<span class="line"><span style="color:#ABB2BF;">		{</span><span style="color:#E06C75;">group</span><span style="color:#ABB2BF;">: </span><span style="color:#D19A66;">0</span><span style="color:#ABB2BF;">, </span><span style="color:#E06C75;">name</span><span style="color:#ABB2BF;">: </span><span style="color:#98C379;">&#39;\u674E\u56DB&#39;</span><span style="color:#ABB2BF;">, </span><span style="color:#E06C75;">value</span><span style="color:#ABB2BF;">: </span><span style="color:#98C379;">&#39;lisi&#39;</span><span style="color:#ABB2BF;">, </span><span style="color:#E06C75;">selected</span><span style="color:#ABB2BF;">: </span><span style="color:#D19A66;">true</span><span style="color:#ABB2BF;">},</span></span>
<span class="line"><span style="color:#ABB2BF;">		{</span><span style="color:#E06C75;">group</span><span style="color:#ABB2BF;">: </span><span style="color:#D19A66;">1</span><span style="color:#ABB2BF;">, </span><span style="color:#E06C75;">name</span><span style="color:#ABB2BF;">: </span><span style="color:#98C379;">&#39;\u738B\u4E94&#39;</span><span style="color:#ABB2BF;">, </span><span style="color:#E06C75;">value</span><span style="color:#ABB2BF;">: </span><span style="color:#98C379;">&#39;wangwu&#39;</span><span style="color:#ABB2BF;"> },</span></span>
<span class="line"><span style="color:#ABB2BF;">	]</span></span>
<span class="line"><span style="color:#ABB2BF;">})</span></span>
<span class="line"><span style="color:#ABB2BF;">&lt;/</span><span style="color:#E06C75;">script</span><span style="color:#ABB2BF;">&gt;</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br></div></div>`,5),e=[o];function B(t,r,c,y,i,A){return a(),n("div",null,e)}const b=s(p,[["render",B]]);export{C as __pageData,b as default};