import{_ as s,c as n,o as a,a as l}from"./app.73b1cdcc.js";const b=JSON.parse('{"title":"\u5F39\u6846\u4E2D\u7684\u591A\u9009","description":"","frontmatter":{},"headers":[{"level":2,"title":"layer\u5F39\u51FA\u6846","slug":"layer\u5F39\u51FA\u6846","link":"#layer\u5F39\u51FA\u6846","children":[]}],"relativePath":"handbook/xmselect/ZM06.md","lastUpdated":null}'),p={name:"handbook/xmselect/ZM06.md"},o=l(`<h1 id="\u5F39\u6846\u4E2D\u7684\u591A\u9009" tabindex="-1">\u5F39\u6846\u4E2D\u7684\u591A\u9009 <a class="header-anchor" href="#\u5F39\u6846\u4E2D\u7684\u591A\u9009" aria-hidden="true">#</a></h1><h2 id="layer\u5F39\u51FA\u6846" tabindex="-1">layer\u5F39\u51FA\u6846 <a class="header-anchor" href="#layer\u5F39\u51FA\u6846" aria-hidden="true">#</a></h2><div class="language-html line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki"><code><span class="line"><span style="color:#ABB2BF;">&lt;</span><span style="color:#E06C75;">button</span><span style="color:#ABB2BF;"> </span><span style="color:#D19A66;">class</span><span style="color:#ABB2BF;">=</span><span style="color:#98C379;">&quot;btn&quot;</span><span style="color:#ABB2BF;"> </span><span style="color:#D19A66;">id</span><span style="color:#ABB2BF;">=</span><span style="color:#98C379;">&quot;demo1-btn&quot;</span><span style="color:#ABB2BF;">&gt;\u5F39\u51FA\u591A\u9009&lt;/</span><span style="color:#E06C75;">button</span><span style="color:#ABB2BF;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#ABB2BF;">&lt;</span><span style="color:#E06C75;">script</span><span style="color:#ABB2BF;">&gt;</span></span>
<span class="line"><span style="color:#E5C07B;">document</span><span style="color:#ABB2BF;">.</span><span style="color:#61AFEF;">getElementById</span><span style="color:#ABB2BF;">(</span><span style="color:#98C379;">&#39;demo1-btn&#39;</span><span style="color:#ABB2BF;">).</span><span style="color:#61AFEF;">onclick</span><span style="color:#ABB2BF;"> </span><span style="color:#56B6C2;">=</span><span style="color:#ABB2BF;"> </span><span style="color:#C678DD;">function</span><span style="color:#ABB2BF;">(){</span></span>
<span class="line"><span style="color:#ABB2BF;">	</span><span style="color:#E5C07B;">layer</span><span style="color:#ABB2BF;">.</span><span style="color:#61AFEF;">open</span><span style="color:#ABB2BF;">({</span></span>
<span class="line"><span style="color:#ABB2BF;">		</span><span style="color:#E06C75;">type</span><span style="color:#ABB2BF;">: </span><span style="color:#D19A66;">1</span><span style="color:#ABB2BF;">,</span></span>
<span class="line"><span style="color:#ABB2BF;">		</span><span style="color:#E06C75;">title</span><span style="color:#ABB2BF;">: </span><span style="color:#98C379;">&#39;\u591A\u9009&#39;</span><span style="color:#ABB2BF;">,</span></span>
<span class="line"><span style="color:#ABB2BF;">		</span><span style="color:#E06C75;">content</span><span style="color:#ABB2BF;">: </span><span style="color:#98C379;">&#39;&lt;div id=&quot;demo1&quot; class=&quot;xm-select-demo-alert&quot;&gt;&lt;/div&gt;&#39;</span><span style="color:#ABB2BF;">,</span></span>
<span class="line"><span style="color:#ABB2BF;">		</span><span style="color:#61AFEF;">success</span><span style="color:#ABB2BF;">: </span><span style="color:#C678DD;">function</span><span style="color:#ABB2BF;">(</span><span style="color:#E06C75;">layero</span><span style="color:#ABB2BF;">, </span><span style="color:#E06C75;">index</span><span style="color:#ABB2BF;">){</span></span>
<span class="line"><span style="color:#ABB2BF;">			</span><span style="color:#7F848E;">//\u8FD9\u91CC\u56E0\u4E3A\u5185\u5BB9\u8FC7\u5C11, \u4F1A\u88AB\u906E\u6321, \u6240\u4EE5\u7B80\u5355\u4FEE\u6539\u4E86\u4E0B\u6837\u5F0F</span></span>
<span class="line"><span style="color:#ABB2BF;">			</span><span style="color:#E5C07B;">document</span><span style="color:#ABB2BF;">.</span><span style="color:#61AFEF;">getElementById</span><span style="color:#ABB2BF;">(</span><span style="color:#98C379;">&#39;layui-layer&#39;</span><span style="color:#ABB2BF;"> </span><span style="color:#56B6C2;">+</span><span style="color:#ABB2BF;"> </span><span style="color:#E06C75;">index</span><span style="color:#ABB2BF;">).</span><span style="color:#61AFEF;">getElementsByClassName</span><span style="color:#ABB2BF;">(</span><span style="color:#98C379;">&#39;layui-layer-content&#39;</span><span style="color:#ABB2BF;">)[</span><span style="color:#D19A66;">0</span><span style="color:#ABB2BF;">].</span><span style="color:#E5C07B;">style</span><span style="color:#ABB2BF;">.</span><span style="color:#E06C75;">overflow</span><span style="color:#ABB2BF;"> </span><span style="color:#56B6C2;">=</span><span style="color:#ABB2BF;"> </span><span style="color:#98C379;">&#39;unset&#39;</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">			</span><span style="color:#7F848E;">//\u6E32\u67D3\u591A\u9009</span></span>
<span class="line"><span style="color:#ABB2BF;">			</span><span style="color:#C678DD;">var</span><span style="color:#ABB2BF;"> </span><span style="color:#E06C75;">demo1</span><span style="color:#ABB2BF;"> </span><span style="color:#56B6C2;">=</span><span style="color:#ABB2BF;"> </span><span style="color:#E5C07B;">xmSelect</span><span style="color:#ABB2BF;">.</span><span style="color:#61AFEF;">render</span><span style="color:#ABB2BF;">({</span></span>
<span class="line"><span style="color:#ABB2BF;">				</span><span style="color:#E06C75;">el</span><span style="color:#ABB2BF;">: </span><span style="color:#98C379;">&#39;#demo1&#39;</span><span style="color:#ABB2BF;">, </span></span>
<span class="line"><span style="color:#ABB2BF;">				</span><span style="color:#E06C75;">data</span><span style="color:#ABB2BF;">: [</span></span>
<span class="line"><span style="color:#ABB2BF;">					{</span><span style="color:#E06C75;">name</span><span style="color:#ABB2BF;">: </span><span style="color:#98C379;">&#39;\u5F20\u4E09&#39;</span><span style="color:#ABB2BF;">, </span><span style="color:#E06C75;">value</span><span style="color:#ABB2BF;">: </span><span style="color:#D19A66;">1</span><span style="color:#ABB2BF;">, </span><span style="color:#E06C75;">selected</span><span style="color:#ABB2BF;">: </span><span style="color:#D19A66;">true</span><span style="color:#ABB2BF;">},</span></span>
<span class="line"><span style="color:#ABB2BF;">					{</span><span style="color:#E06C75;">name</span><span style="color:#ABB2BF;">: </span><span style="color:#98C379;">&#39;\u674E\u56DB&#39;</span><span style="color:#ABB2BF;">, </span><span style="color:#E06C75;">value</span><span style="color:#ABB2BF;">: </span><span style="color:#D19A66;">2</span><span style="color:#ABB2BF;">, </span><span style="color:#E06C75;">disabled</span><span style="color:#ABB2BF;">: </span><span style="color:#D19A66;">true</span><span style="color:#ABB2BF;">},</span></span>
<span class="line"><span style="color:#ABB2BF;">					{</span><span style="color:#E06C75;">name</span><span style="color:#ABB2BF;">: </span><span style="color:#98C379;">&#39;\u738B\u4E94&#39;</span><span style="color:#ABB2BF;">, </span><span style="color:#E06C75;">value</span><span style="color:#ABB2BF;">: </span><span style="color:#D19A66;">3</span><span style="color:#ABB2BF;">},</span></span>
<span class="line"><span style="color:#ABB2BF;">				]</span></span>
<span class="line"><span style="color:#ABB2BF;">			})</span></span>
<span class="line"><span style="color:#ABB2BF;">		}</span></span>
<span class="line"><span style="color:#ABB2BF;">	});</span></span>
<span class="line"><span style="color:#ABB2BF;">}</span></span>
<span class="line"><span style="color:#ABB2BF;">&lt;/</span><span style="color:#E06C75;">script</span><span style="color:#ABB2BF;">&gt;</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br></div></div>`,3),e=[o];function t(B,r,c,y,A,F){return a(),n("div",null,e)}const u=s(p,[["render",t]]);export{b as __pageData,u as default};