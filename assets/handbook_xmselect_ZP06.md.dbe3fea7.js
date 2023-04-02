import{_ as s,o as n,c as a,Q as l}from"./chunks/framework.237f4aa8.js";const b=JSON.parse('{"title":"级联模式","description":"","frontmatter":{},"headers":[],"relativePath":"handbook/xmselect/ZP06.md","lastUpdated":1667488730000}'),p={name:"handbook/xmselect/ZP06.md"},o=l(`<h1 id="级联模式" tabindex="-1">级联模式 <a class="header-anchor" href="#级联模式" aria-label="Permalink to &quot;级联模式&quot;">​</a></h1><h2 id="cascader" tabindex="-1">cascader <a class="header-anchor" href="#cascader" aria-label="Permalink to &quot;cascader&quot;">​</a></h2><p>默认配置</p><div class="language-js line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki one-dark-pro"><code><span class="line"><span style="color:#ABB2BF;">cascader: {</span></span>
<span class="line"><span style="color:#ABB2BF;">	</span><span style="color:#7F848E;font-style:italic;">//是否显示级联模式</span></span>
<span class="line"><span style="color:#ABB2BF;">	show: </span><span style="color:#D19A66;">true</span><span style="color:#ABB2BF;">,</span></span>
<span class="line"><span style="color:#ABB2BF;">	</span><span style="color:#7F848E;font-style:italic;">//间距</span></span>
<span class="line"><span style="color:#ABB2BF;">	indent: </span><span style="color:#D19A66;">200</span><span style="color:#ABB2BF;">,</span></span>
<span class="line"><span style="color:#ABB2BF;">	</span><span style="color:#7F848E;font-style:italic;">//是否严格遵守父子模式</span></span>
<span class="line"><span style="color:#ABB2BF;">	strict: </span><span style="color:#D19A66;">true</span><span style="color:#ABB2BF;">,</span></span>
<span class="line"><span style="color:#ABB2BF;">},</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><div class="language-html line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki one-dark-pro"><code><span class="line"></span>
<span class="line"><span style="color:#ABB2BF;">&lt;</span><span style="color:#E06C75;">div</span><span style="color:#ABB2BF;"> </span><span style="color:#D19A66;">id</span><span style="color:#ABB2BF;">=</span><span style="color:#98C379;">&quot;demo1&quot;</span><span style="color:#ABB2BF;"> </span><span style="color:#D19A66;">class</span><span style="color:#ABB2BF;">=</span><span style="color:#98C379;">&quot;xm-select-demo&quot;</span><span style="color:#ABB2BF;">&gt;&lt;/</span><span style="color:#E06C75;">div</span><span style="color:#ABB2BF;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#ABB2BF;">&lt;</span><span style="color:#E06C75;">br</span><span style="color:#ABB2BF;">/&gt;</span></span>
<span class="line"><span style="color:#ABB2BF;">&lt;</span><span style="color:#E06C75;">div</span><span style="color:#ABB2BF;"> </span><span style="color:#D19A66;">class</span><span style="color:#ABB2BF;">=</span><span style="color:#98C379;">&quot;layui-form&quot;</span><span style="color:#ABB2BF;">&gt;</span></span>
<span class="line"><span style="color:#ABB2BF;">	&lt;</span><span style="color:#E06C75;">input</span><span style="color:#ABB2BF;"> </span><span style="color:#D19A66;">type</span><span style="color:#ABB2BF;">=</span><span style="color:#98C379;">&quot;checkbox&quot;</span><span style="color:#ABB2BF;"> </span><span style="color:#D19A66;">name</span><span style="color:#ABB2BF;">=</span><span style="color:#98C379;">&quot;strict&quot;</span><span style="color:#ABB2BF;"> </span><span style="color:#D19A66;">lay-filter</span><span style="color:#ABB2BF;">=</span><span style="color:#98C379;">&quot;strict&quot;</span><span style="color:#ABB2BF;"> </span><span style="color:#D19A66;">lay-skin</span><span style="color:#ABB2BF;">=</span><span style="color:#98C379;">&quot;primary&quot;</span><span style="color:#ABB2BF;"> </span><span style="color:#D19A66;">title</span><span style="color:#ABB2BF;">=</span><span style="color:#98C379;">&quot;严格父子结构&quot;</span><span style="color:#ABB2BF;"> </span><span style="color:#D19A66;">checked</span><span style="color:#ABB2BF;">&gt;</span></span>
<span class="line"><span style="color:#ABB2BF;">	&lt;</span><span style="color:#E06C75;">input</span><span style="color:#ABB2BF;"> </span><span style="color:#D19A66;">type</span><span style="color:#ABB2BF;">=</span><span style="color:#98C379;">&quot;checkbox&quot;</span><span style="color:#ABB2BF;"> </span><span style="color:#D19A66;">name</span><span style="color:#ABB2BF;">=</span><span style="color:#98C379;">&quot;hidden&quot;</span><span style="color:#ABB2BF;"> </span><span style="color:#D19A66;">lay-filter</span><span style="color:#ABB2BF;">=</span><span style="color:#98C379;">&quot;hidden&quot;</span><span style="color:#ABB2BF;"> </span><span style="color:#D19A66;">lay-skin</span><span style="color:#ABB2BF;">=</span><span style="color:#98C379;">&quot;primary&quot;</span><span style="color:#ABB2BF;"> </span><span style="color:#D19A66;">title</span><span style="color:#ABB2BF;">=</span><span style="color:#98C379;">&quot;隐藏父节点图标&quot;</span><span style="color:#ABB2BF;">&gt;</span></span>
<span class="line"><span style="color:#ABB2BF;">	&lt;</span><span style="color:#E06C75;">input</span><span style="color:#ABB2BF;"> </span><span style="color:#D19A66;">type</span><span style="color:#ABB2BF;">=</span><span style="color:#98C379;">&quot;checkbox&quot;</span><span style="color:#ABB2BF;"> </span><span style="color:#D19A66;">name</span><span style="color:#ABB2BF;">=</span><span style="color:#98C379;">&quot;custom&quot;</span><span style="color:#ABB2BF;"> </span><span style="color:#D19A66;">lay-filter</span><span style="color:#ABB2BF;">=</span><span style="color:#98C379;">&quot;custom&quot;</span><span style="color:#ABB2BF;"> </span><span style="color:#D19A66;">lay-skin</span><span style="color:#ABB2BF;">=</span><span style="color:#98C379;">&quot;primary&quot;</span><span style="color:#ABB2BF;"> </span><span style="color:#D19A66;">title</span><span style="color:#ABB2BF;">=</span><span style="color:#98C379;">&quot;自定义图标&quot;</span><span style="color:#ABB2BF;">&gt;</span></span>
<span class="line"><span style="color:#ABB2BF;">&lt;/</span><span style="color:#E06C75;">div</span><span style="color:#ABB2BF;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#ABB2BF;">&lt;</span><span style="color:#E06C75;">div</span><span style="color:#ABB2BF;"> </span><span style="color:#D19A66;">style</span><span style="color:#ABB2BF;">=</span><span style="color:#98C379;">&quot;margin-top: 20px&quot;</span><span style="color:#ABB2BF;">&gt;间距&lt;/</span><span style="color:#E06C75;">div</span><span style="color:#ABB2BF;">&gt;</span></span>
<span class="line"><span style="color:#ABB2BF;">&lt;</span><span style="color:#E06C75;">div</span><span style="color:#ABB2BF;"> </span><span style="color:#D19A66;">id</span><span style="color:#ABB2BF;">=</span><span style="color:#98C379;">&quot;slideTest1&quot;</span><span style="color:#ABB2BF;">&gt;&lt;/</span><span style="color:#E06C75;">div</span><span style="color:#ABB2BF;">&gt;</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#ABB2BF;">&lt;</span><span style="color:#E06C75;">script</span><span style="color:#ABB2BF;">&gt;</span></span>
<span class="line"><span style="color:#C678DD;">var</span><span style="color:#ABB2BF;"> </span><span style="color:#E06C75;">demo1</span><span style="color:#ABB2BF;"> </span><span style="color:#56B6C2;">=</span><span style="color:#ABB2BF;"> </span><span style="color:#E5C07B;">xmSelect</span><span style="color:#ABB2BF;">.</span><span style="color:#61AFEF;">render</span><span style="color:#ABB2BF;">({</span></span>
<span class="line"><span style="color:#ABB2BF;">	</span><span style="color:#E06C75;">el</span><span style="color:#ABB2BF;">: </span><span style="color:#98C379;">&#39;#demo1&#39;</span><span style="color:#ABB2BF;">, </span></span>
<span class="line"><span style="color:#ABB2BF;">	</span><span style="color:#E06C75;">autoRow</span><span style="color:#ABB2BF;">: </span><span style="color:#D19A66;">true</span><span style="color:#ABB2BF;">,</span></span>
<span class="line"><span style="color:#ABB2BF;">	</span><span style="color:#E06C75;">cascader</span><span style="color:#ABB2BF;">: {</span></span>
<span class="line"><span style="color:#ABB2BF;">		</span><span style="color:#E06C75;">show</span><span style="color:#ABB2BF;">: </span><span style="color:#D19A66;">true</span><span style="color:#ABB2BF;">,</span></span>
<span class="line"><span style="color:#ABB2BF;">		</span><span style="color:#E06C75;">indent</span><span style="color:#ABB2BF;">: </span><span style="color:#D19A66;">200</span><span style="color:#ABB2BF;">,</span></span>
<span class="line"><span style="color:#ABB2BF;">	},</span></span>
<span class="line"><span style="color:#ABB2BF;">	</span><span style="color:#E06C75;">height</span><span style="color:#ABB2BF;">: </span><span style="color:#98C379;">&#39;200px&#39;</span><span style="color:#ABB2BF;">,</span></span>
<span class="line"><span style="color:#ABB2BF;">	</span><span style="color:#61AFEF;">data</span><span style="color:#ABB2BF;">(){</span></span>
<span class="line"><span style="color:#ABB2BF;">		</span><span style="color:#C678DD;">return</span><span style="color:#ABB2BF;"> [</span></span>
<span class="line"><span style="color:#ABB2BF;">			{</span><span style="color:#E06C75;">name</span><span style="color:#ABB2BF;">: </span><span style="color:#98C379;">&#39;销售员&#39;</span><span style="color:#ABB2BF;">, </span><span style="color:#E06C75;">value</span><span style="color:#ABB2BF;">: </span><span style="color:#56B6C2;">-</span><span style="color:#D19A66;">1</span><span style="color:#ABB2BF;">, </span><span style="color:#E06C75;">disabled</span><span style="color:#ABB2BF;">: </span><span style="color:#D19A66;">true</span><span style="color:#ABB2BF;">, </span><span style="color:#E06C75;">children</span><span style="color:#ABB2BF;">: [</span></span>
<span class="line"><span style="color:#ABB2BF;">				{</span><span style="color:#E06C75;">name</span><span style="color:#ABB2BF;">: </span><span style="color:#98C379;">&#39;张三1&#39;</span><span style="color:#ABB2BF;">, </span><span style="color:#E06C75;">value</span><span style="color:#ABB2BF;">: </span><span style="color:#D19A66;">1</span><span style="color:#ABB2BF;">, </span><span style="color:#E06C75;">selected</span><span style="color:#ABB2BF;">: </span><span style="color:#D19A66;">true</span><span style="color:#ABB2BF;">, </span><span style="color:#E06C75;">children</span><span style="color:#ABB2BF;">: []},</span></span>
<span class="line"><span style="color:#ABB2BF;">				{</span><span style="color:#E06C75;">name</span><span style="color:#ABB2BF;">: </span><span style="color:#98C379;">&#39;李四1&#39;</span><span style="color:#ABB2BF;">, </span><span style="color:#E06C75;">value</span><span style="color:#ABB2BF;">: </span><span style="color:#D19A66;">2</span><span style="color:#ABB2BF;">, </span><span style="color:#E06C75;">selected</span><span style="color:#ABB2BF;">: </span><span style="color:#D19A66;">true</span><span style="color:#ABB2BF;">},</span></span>
<span class="line"><span style="color:#ABB2BF;">				{</span><span style="color:#E06C75;">name</span><span style="color:#ABB2BF;">: </span><span style="color:#98C379;">&#39;王五1&#39;</span><span style="color:#ABB2BF;">, </span><span style="color:#E06C75;">value</span><span style="color:#ABB2BF;">: </span><span style="color:#D19A66;">3</span><span style="color:#ABB2BF;">, </span><span style="color:#E06C75;">disabled</span><span style="color:#ABB2BF;">: </span><span style="color:#D19A66;">true</span><span style="color:#ABB2BF;">},</span></span>
<span class="line"><span style="color:#ABB2BF;">			]},</span></span>
<span class="line"><span style="color:#ABB2BF;">			{</span><span style="color:#E06C75;">name</span><span style="color:#ABB2BF;">: </span><span style="color:#98C379;">&#39;奖品&#39;</span><span style="color:#ABB2BF;">, </span><span style="color:#E06C75;">value</span><span style="color:#ABB2BF;">: </span><span style="color:#56B6C2;">-</span><span style="color:#D19A66;">2</span><span style="color:#ABB2BF;">, </span><span style="color:#E06C75;">children</span><span style="color:#ABB2BF;">: [</span></span>
<span class="line"><span style="color:#ABB2BF;">				{</span><span style="color:#E06C75;">name</span><span style="color:#ABB2BF;">: </span><span style="color:#98C379;">&#39;奖品3&#39;</span><span style="color:#ABB2BF;">, </span><span style="color:#E06C75;">value</span><span style="color:#ABB2BF;">: </span><span style="color:#56B6C2;">-</span><span style="color:#D19A66;">3</span><span style="color:#ABB2BF;">, </span><span style="color:#E06C75;">children</span><span style="color:#ABB2BF;">: [</span></span>
<span class="line"><span style="color:#ABB2BF;">					{</span><span style="color:#E06C75;">name</span><span style="color:#ABB2BF;">: </span><span style="color:#98C379;">&#39;苹果3&#39;</span><span style="color:#ABB2BF;">, </span><span style="color:#E06C75;">value</span><span style="color:#ABB2BF;">: </span><span style="color:#D19A66;">14</span><span style="color:#ABB2BF;">, </span><span style="color:#E06C75;">selected</span><span style="color:#ABB2BF;">: </span><span style="color:#D19A66;">true</span><span style="color:#ABB2BF;">},</span></span>
<span class="line"><span style="color:#ABB2BF;">					{</span><span style="color:#E06C75;">name</span><span style="color:#ABB2BF;">: </span><span style="color:#98C379;">&#39;香蕉3&#39;</span><span style="color:#ABB2BF;">, </span><span style="color:#E06C75;">value</span><span style="color:#ABB2BF;">: </span><span style="color:#D19A66;">15</span><span style="color:#ABB2BF;">},</span></span>
<span class="line"><span style="color:#ABB2BF;">					{</span><span style="color:#E06C75;">name</span><span style="color:#ABB2BF;">: </span><span style="color:#98C379;">&#39;葡萄3&#39;</span><span style="color:#ABB2BF;">, </span><span style="color:#E06C75;">value</span><span style="color:#ABB2BF;">: </span><span style="color:#D19A66;">16</span><span style="color:#ABB2BF;">},</span></span>
<span class="line"><span style="color:#ABB2BF;">				]},</span></span>
<span class="line"><span style="color:#ABB2BF;">				{</span><span style="color:#E06C75;">name</span><span style="color:#ABB2BF;">: </span><span style="color:#98C379;">&#39;苹果2&#39;</span><span style="color:#ABB2BF;">, </span><span style="color:#E06C75;">value</span><span style="color:#ABB2BF;">: </span><span style="color:#D19A66;">4</span><span style="color:#ABB2BF;">, </span><span style="color:#E06C75;">selected</span><span style="color:#ABB2BF;">: </span><span style="color:#D19A66;">true</span><span style="color:#ABB2BF;">, </span><span style="color:#E06C75;">disabled</span><span style="color:#ABB2BF;">: </span><span style="color:#D19A66;">true</span><span style="color:#ABB2BF;">},</span></span>
<span class="line"><span style="color:#ABB2BF;">				{</span><span style="color:#E06C75;">name</span><span style="color:#ABB2BF;">: </span><span style="color:#98C379;">&#39;香蕉2&#39;</span><span style="color:#ABB2BF;">, </span><span style="color:#E06C75;">value</span><span style="color:#ABB2BF;">: </span><span style="color:#D19A66;">5</span><span style="color:#ABB2BF;">},</span></span>
<span class="line"><span style="color:#ABB2BF;">				{</span><span style="color:#E06C75;">name</span><span style="color:#ABB2BF;">: </span><span style="color:#98C379;">&#39;葡萄2&#39;</span><span style="color:#ABB2BF;">, </span><span style="color:#E06C75;">value</span><span style="color:#ABB2BF;">: </span><span style="color:#D19A66;">6</span><span style="color:#ABB2BF;">},</span></span>
<span class="line"><span style="color:#ABB2BF;">			]},</span></span>
<span class="line"><span style="color:#ABB2BF;">		]</span></span>
<span class="line"><span style="color:#ABB2BF;">	}</span></span>
<span class="line"><span style="color:#ABB2BF;">})</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E5C07B;">layui</span><span style="color:#ABB2BF;">.</span><span style="color:#E5C07B;">form</span><span style="color:#ABB2BF;">.</span><span style="color:#61AFEF;">render</span><span style="color:#ABB2BF;">();</span></span>
<span class="line"></span>
<span class="line"><span style="color:#ABB2BF;">[</span><span style="color:#98C379;">&#39;strict&#39;</span><span style="color:#ABB2BF;">].</span><span style="color:#61AFEF;">forEach</span><span style="color:#ABB2BF;">(</span><span style="color:#C678DD;">function</span><span style="color:#ABB2BF;">(</span><span style="color:#E06C75;font-style:italic;">key</span><span style="color:#ABB2BF;">){</span></span>
<span class="line"><span style="color:#ABB2BF;">	</span><span style="color:#E5C07B;">layui</span><span style="color:#ABB2BF;">.</span><span style="color:#E5C07B;">form</span><span style="color:#ABB2BF;">.</span><span style="color:#61AFEF;">on</span><span style="color:#ABB2BF;">(</span><span style="color:#98C379;">&#39;checkbox(&#39;</span><span style="color:#56B6C2;">+</span><span style="color:#E06C75;">key</span><span style="color:#56B6C2;">+</span><span style="color:#98C379;">&#39;)&#39;</span><span style="color:#ABB2BF;">, </span><span style="color:#C678DD;">function</span><span style="color:#ABB2BF;">(</span><span style="color:#E06C75;font-style:italic;">data</span><span style="color:#ABB2BF;">){</span></span>
<span class="line"><span style="color:#ABB2BF;">		</span><span style="color:#C678DD;">var</span><span style="color:#ABB2BF;"> </span><span style="color:#E06C75;">config</span><span style="color:#ABB2BF;"> </span><span style="color:#56B6C2;">=</span><span style="color:#ABB2BF;"> {};</span></span>
<span class="line"><span style="color:#ABB2BF;">		</span><span style="color:#E06C75;">config</span><span style="color:#ABB2BF;">[</span><span style="color:#E06C75;">key</span><span style="color:#ABB2BF;">] </span><span style="color:#56B6C2;">=</span><span style="color:#ABB2BF;"> </span><span style="color:#E5C07B;">data</span><span style="color:#ABB2BF;">.</span><span style="color:#E5C07B;">elem</span><span style="color:#ABB2BF;">.</span><span style="color:#E06C75;">checked</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">		</span><span style="color:#E5C07B;">demo1</span><span style="color:#ABB2BF;">.</span><span style="color:#61AFEF;">update</span><span style="color:#ABB2BF;">({</span></span>
<span class="line"><span style="color:#ABB2BF;">			</span><span style="color:#E06C75;">cascader</span><span style="color:#ABB2BF;">: </span><span style="color:#E06C75;">config</span></span>
<span class="line"><span style="color:#ABB2BF;">		})</span></span>
<span class="line"><span style="color:#ABB2BF;">	});</span></span>
<span class="line"><span style="color:#ABB2BF;">})</span></span>
<span class="line"></span>
<span class="line"><span style="color:#7F848E;font-style:italic;">//控制显示父节点的图标</span></span>
<span class="line"><span style="color:#E5C07B;">layui</span><span style="color:#ABB2BF;">.</span><span style="color:#E5C07B;">form</span><span style="color:#ABB2BF;">.</span><span style="color:#61AFEF;">on</span><span style="color:#ABB2BF;">(</span><span style="color:#98C379;">&#39;checkbox(hidden)&#39;</span><span style="color:#ABB2BF;">, </span><span style="color:#C678DD;">function</span><span style="color:#ABB2BF;">(</span><span style="color:#E06C75;font-style:italic;">data</span><span style="color:#ABB2BF;">){</span></span>
<span class="line"><span style="color:#ABB2BF;">	</span><span style="color:#E5C07B;">demo1</span><span style="color:#ABB2BF;">.</span><span style="color:#61AFEF;">update</span><span style="color:#ABB2BF;">({</span></span>
<span class="line"><span style="color:#ABB2BF;">		</span><span style="color:#E06C75;">iconfont</span><span style="color:#ABB2BF;">: {</span></span>
<span class="line"><span style="color:#ABB2BF;">			</span><span style="color:#E06C75;">parent</span><span style="color:#ABB2BF;">: </span><span style="color:#E5C07B;">data</span><span style="color:#ABB2BF;">.</span><span style="color:#E5C07B;">elem</span><span style="color:#ABB2BF;">.</span><span style="color:#E06C75;">checked</span><span style="color:#ABB2BF;"> </span><span style="color:#C678DD;">?</span><span style="color:#ABB2BF;"> </span><span style="color:#98C379;">&#39;hidden&#39;</span><span style="color:#ABB2BF;"> </span><span style="color:#C678DD;">:</span><span style="color:#ABB2BF;"> </span><span style="color:#98C379;">&#39;&#39;</span><span style="color:#ABB2BF;">,</span></span>
<span class="line"><span style="color:#ABB2BF;">		}</span></span>
<span class="line"><span style="color:#ABB2BF;">	})</span></span>
<span class="line"><span style="color:#ABB2BF;">});</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;">//自定义图标</span></span>
<span class="line"><span style="color:#E5C07B;">layui</span><span style="color:#ABB2BF;">.</span><span style="color:#E5C07B;">form</span><span style="color:#ABB2BF;">.</span><span style="color:#61AFEF;">on</span><span style="color:#ABB2BF;">(</span><span style="color:#98C379;">&#39;checkbox(custom)&#39;</span><span style="color:#ABB2BF;">, </span><span style="color:#C678DD;">function</span><span style="color:#ABB2BF;">(</span><span style="color:#E06C75;font-style:italic;">data</span><span style="color:#ABB2BF;">){</span></span>
<span class="line"><span style="color:#ABB2BF;">	</span><span style="color:#C678DD;">let</span><span style="color:#ABB2BF;"> </span><span style="color:#E06C75;">iconfont</span><span style="color:#ABB2BF;"> </span><span style="color:#56B6C2;">=</span><span style="color:#ABB2BF;"> </span><span style="color:#E5C07B;">data</span><span style="color:#ABB2BF;">.</span><span style="color:#E5C07B;">elem</span><span style="color:#ABB2BF;">.</span><span style="color:#E06C75;">checked</span><span style="color:#ABB2BF;"> </span><span style="color:#C678DD;">?</span><span style="color:#ABB2BF;"> {</span></span>
<span class="line"><span style="color:#ABB2BF;">		</span><span style="color:#E06C75;">select</span><span style="color:#ABB2BF;">: </span><span style="color:#98C379;">&#39;layui-icon layui-icon-chart&#39;</span><span style="color:#ABB2BF;">,</span></span>
<span class="line"><span style="color:#ABB2BF;">		</span><span style="color:#E06C75;">unselect</span><span style="color:#ABB2BF;">: </span><span style="color:#98C379;">&#39;layui-icon-ok-circle&#39;</span><span style="color:#ABB2BF;">,</span></span>
<span class="line"><span style="color:#ABB2BF;">		</span><span style="color:#E06C75;">half</span><span style="color:#ABB2BF;">: </span><span style="color:#98C379;">&#39;layui-icon layui-icon-table&#39;</span><span style="color:#ABB2BF;">,</span></span>
<span class="line"><span style="color:#ABB2BF;">		</span><span style="color:#E06C75;">parent</span><span style="color:#ABB2BF;">: </span><span style="color:#98C379;">&#39;layui-icon layui-icon-survey&#39;</span><span style="color:#ABB2BF;">,</span></span>
<span class="line"><span style="color:#ABB2BF;">	} </span><span style="color:#C678DD;">:</span><span style="color:#ABB2BF;"> {</span></span>
<span class="line"><span style="color:#ABB2BF;">		</span><span style="color:#E06C75;">select</span><span style="color:#ABB2BF;">: </span><span style="color:#98C379;">&#39;&#39;</span><span style="color:#ABB2BF;">,</span></span>
<span class="line"><span style="color:#ABB2BF;">		</span><span style="color:#E06C75;">unselect</span><span style="color:#ABB2BF;">: </span><span style="color:#98C379;">&#39;&#39;</span><span style="color:#ABB2BF;">,</span></span>
<span class="line"><span style="color:#ABB2BF;">		</span><span style="color:#E06C75;">half</span><span style="color:#ABB2BF;">: </span><span style="color:#98C379;">&#39;&#39;</span><span style="color:#ABB2BF;">,</span></span>
<span class="line"><span style="color:#ABB2BF;">		</span><span style="color:#E06C75;">parent</span><span style="color:#ABB2BF;">: </span><span style="color:#98C379;">&#39;&#39;</span><span style="color:#ABB2BF;">,</span></span>
<span class="line"><span style="color:#ABB2BF;">	}</span></span>
<span class="line"><span style="color:#ABB2BF;">	</span><span style="color:#E5C07B;">demo1</span><span style="color:#ABB2BF;">.</span><span style="color:#61AFEF;">update</span><span style="color:#ABB2BF;">({</span></span>
<span class="line"><span style="color:#ABB2BF;">		</span><span style="color:#E06C75;">iconfont</span><span style="color:#ABB2BF;">: </span><span style="color:#E06C75;">iconfont</span></span>
<span class="line"><span style="color:#ABB2BF;">	})</span></span>
<span class="line"><span style="color:#ABB2BF;">	</span><span style="color:#E5C07B;">layui</span><span style="color:#ABB2BF;">.</span><span style="color:#E5C07B;">form</span><span style="color:#ABB2BF;">.</span><span style="color:#61AFEF;">render</span><span style="color:#ABB2BF;">();</span></span>
<span class="line"><span style="color:#ABB2BF;">});</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#E5C07B;">layui</span><span style="color:#ABB2BF;">.</span><span style="color:#E5C07B;">slider</span><span style="color:#ABB2BF;">.</span><span style="color:#61AFEF;">render</span><span style="color:#ABB2BF;">({</span></span>
<span class="line"><span style="color:#ABB2BF;">	</span><span style="color:#E06C75;">elem</span><span style="color:#ABB2BF;">: </span><span style="color:#98C379;">&#39;#slideTest1&#39;</span><span style="color:#ABB2BF;">,</span></span>
<span class="line"><span style="color:#ABB2BF;">	</span><span style="color:#E06C75;">min</span><span style="color:#ABB2BF;">: </span><span style="color:#D19A66;">50</span><span style="color:#ABB2BF;">,</span></span>
<span class="line"><span style="color:#ABB2BF;">	</span><span style="color:#E06C75;">max</span><span style="color:#ABB2BF;">: </span><span style="color:#D19A66;">400</span><span style="color:#ABB2BF;">,</span></span>
<span class="line"><span style="color:#ABB2BF;">	</span><span style="color:#E06C75;">showstep</span><span style="color:#ABB2BF;">: </span><span style="color:#D19A66;">true</span><span style="color:#ABB2BF;">,</span></span>
<span class="line"><span style="color:#ABB2BF;">	</span><span style="color:#E06C75;">input</span><span style="color:#ABB2BF;">: </span><span style="color:#D19A66;">true</span><span style="color:#ABB2BF;">,</span></span>
<span class="line"><span style="color:#ABB2BF;">	</span><span style="color:#E06C75;">tips</span><span style="color:#ABB2BF;">: </span><span style="color:#D19A66;">true</span><span style="color:#ABB2BF;">,</span></span>
<span class="line"><span style="color:#ABB2BF;">	</span><span style="color:#E06C75;">value</span><span style="color:#ABB2BF;">: </span><span style="color:#D19A66;">200</span><span style="color:#ABB2BF;">,</span></span>
<span class="line"><span style="color:#ABB2BF;">	</span><span style="color:#61AFEF;">change</span><span style="color:#ABB2BF;">: </span><span style="color:#C678DD;">function</span><span style="color:#ABB2BF;">(</span><span style="color:#E06C75;font-style:italic;">value</span><span style="color:#ABB2BF;">){</span></span>
<span class="line"><span style="color:#ABB2BF;">		</span><span style="color:#E5C07B;">demo1</span><span style="color:#ABB2BF;">.</span><span style="color:#61AFEF;">update</span><span style="color:#ABB2BF;">({</span></span>
<span class="line"><span style="color:#ABB2BF;">			</span><span style="color:#E06C75;">cascader</span><span style="color:#ABB2BF;">: {</span></span>
<span class="line"><span style="color:#ABB2BF;">				</span><span style="color:#E06C75;">indent</span><span style="color:#ABB2BF;">: </span><span style="color:#E06C75;">value</span></span>
<span class="line"><span style="color:#ABB2BF;">			}</span></span>
<span class="line"><span style="color:#ABB2BF;">		})</span></span>
<span class="line"><span style="color:#ABB2BF;">	}</span></span>
<span class="line"><span style="color:#ABB2BF;">});</span></span>
<span class="line"><span style="color:#ABB2BF;">&lt;/</span><span style="color:#E06C75;">script</span><span style="color:#ABB2BF;">&gt;</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br><span class="line-number">53</span><br><span class="line-number">54</span><br><span class="line-number">55</span><br><span class="line-number">56</span><br><span class="line-number">57</span><br><span class="line-number">58</span><br><span class="line-number">59</span><br><span class="line-number">60</span><br><span class="line-number">61</span><br><span class="line-number">62</span><br><span class="line-number">63</span><br><span class="line-number">64</span><br><span class="line-number">65</span><br><span class="line-number">66</span><br><span class="line-number">67</span><br><span class="line-number">68</span><br><span class="line-number">69</span><br><span class="line-number">70</span><br><span class="line-number">71</span><br><span class="line-number">72</span><br><span class="line-number">73</span><br><span class="line-number">74</span><br><span class="line-number">75</span><br><span class="line-number">76</span><br><span class="line-number">77</span><br><span class="line-number">78</span><br><span class="line-number">79</span><br><span class="line-number">80</span><br><span class="line-number">81</span><br><span class="line-number">82</span><br><span class="line-number">83</span><br><span class="line-number">84</span><br><span class="line-number">85</span><br><span class="line-number">86</span><br><span class="line-number">87</span><br><span class="line-number">88</span><br><span class="line-number">89</span><br><span class="line-number">90</span><br><span class="line-number">91</span><br><span class="line-number">92</span><br><span class="line-number">93</span><br><span class="line-number">94</span><br><span class="line-number">95</span><br><span class="line-number">96</span><br><span class="line-number">97</span><br><span class="line-number">98</span><br><span class="line-number">99</span><br><span class="line-number">100</span><br><span class="line-number">101</span><br></div></div>`,5),e=[o];function B(t,c,r,y,A,i){return n(),a("div",null,e)}const u=s(p,[["render",B]]);export{b as __pageData,u as default};
