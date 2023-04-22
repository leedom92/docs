import{_ as s,o as n,c as a,Q as l}from"./chunks/framework.7943a56f.js";const b=JSON.parse('{"title":"下拉折叠面板","description":"","frontmatter":{},"headers":[],"relativePath":"handbook/xmselect/ZP04.md","lastUpdated":1682136945000}'),p={name:"handbook/xmselect/ZP04.md"},o=l(`<h1 id="下拉折叠面板" tabindex="-1">下拉折叠面板 <a class="header-anchor" href="#下拉折叠面板" aria-label="Permalink to &quot;下拉折叠面板&quot;">​</a></h1><h2 id="layui折叠面板" tabindex="-1">layui折叠面板 <a class="header-anchor" href="#layui折叠面板" aria-label="Permalink to &quot;layui折叠面板&quot;">​</a></h2><div class="language-sass line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">sass</span><pre class="shiki one-dark-pro"><code><span class="line"><span style="color:#7F848E;font-style:italic;">//css调整部分</span></span>
<span class="line"><span style="color:#D19A66;">xm-select</span><span style="color:#ABB2BF;"> </span><span style="color:#D19A66;">.scroll-body{</span></span>
<span class="line"><span style="color:#ABB2BF;">	margin-top: </span><span style="color:#D19A66;">-5</span><span style="color:#C678DD;">px</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">}</span></span>
<span class="line"><span style="color:#D19A66;">xm-select</span><span style="color:#ABB2BF;"> </span><span style="color:#D19A66;">.xm-body{</span></span>
<span class="line"><span style="color:#ABB2BF;">	padding: </span><span style="color:#D19A66;">0</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">	border: </span><span style="color:#D19A66;">none</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">	background-color: </span><span style="color:#D19A66;">usnet</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">	box-shadow: </span><span style="color:#D19A66;">none</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br></div></div><div class="language-html line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki one-dark-pro"><code><span class="line"></span>
<span class="line"><span style="color:#ABB2BF;">&lt;</span><span style="color:#E06C75;">div</span><span style="color:#ABB2BF;"> </span><span style="color:#D19A66;">id</span><span style="color:#ABB2BF;">=</span><span style="color:#98C379;">&quot;demo1&quot;</span><span style="color:#ABB2BF;"> </span><span style="color:#D19A66;">style</span><span style="color:#ABB2BF;">=</span><span style="color:#98C379;">&quot;width: 500px;&quot;</span><span style="color:#ABB2BF;">&gt;&lt;/</span><span style="color:#E06C75;">div</span><span style="color:#ABB2BF;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#ABB2BF;">&lt;</span><span style="color:#E06C75;">script</span><span style="color:#ABB2BF;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C678DD;">var</span><span style="color:#ABB2BF;"> </span><span style="color:#E06C75;">list</span><span style="color:#ABB2BF;"> </span><span style="color:#56B6C2;">=</span><span style="color:#ABB2BF;"> [</span></span>
<span class="line"><span style="color:#ABB2BF;">	{ </span><span style="color:#E06C75;">name</span><span style="color:#ABB2BF;">: </span><span style="color:#98C379;">&#39;杜甫&#39;</span><span style="color:#ABB2BF;">, </span><span style="color:#E06C75;">selected</span><span style="color:#ABB2BF;">: </span><span style="color:#D19A66;">true</span><span style="color:#ABB2BF;">, </span><span style="color:#E06C75;">content</span><span style="color:#ABB2BF;">: </span><span style="color:#98C379;">&#39;杜甫的思想核心是儒家的仁政思想，他有“致君尧舜上，再使风俗淳”的宏伟抱负。杜甫虽然在世时名声并不显赫，但后来声名远播，对中国文学和日本文学都产生了深远的影响。杜甫共有约1500首诗歌被保留了下来，大多集于《杜工部集》。&#39;</span><span style="color:#ABB2BF;"> },</span></span>
<span class="line"><span style="color:#ABB2BF;">	{ </span><span style="color:#E06C75;">name</span><span style="color:#ABB2BF;">: </span><span style="color:#98C379;">&#39;李清照&#39;</span><span style="color:#ABB2BF;">, </span><span style="color:#E06C75;">content</span><span style="color:#ABB2BF;">: </span><span style="color:#98C379;">&#39;李清照出生于书香门第，早期生活优裕，其父李格非藏书甚富，她小时候就在良好的家庭环境中打下文学基础。出嫁后与夫赵明诚共同致力于书画金石的搜集整理。金兵入据中原时，流寓南方，境遇孤苦。所作词，前期多写其悠闲生活，后期多悲叹身世，情调感伤。形式上善用白描手法，自辟途径，语言清丽。&#39;</span><span style="color:#ABB2BF;"> },</span></span>
<span class="line"><span style="color:#ABB2BF;">	{ </span><span style="color:#E06C75;">name</span><span style="color:#ABB2BF;">: </span><span style="color:#98C379;">&#39;鲁迅&#39;</span><span style="color:#ABB2BF;">, </span><span style="color:#E06C75;">content</span><span style="color:#ABB2BF;">: </span><span style="color:#98C379;">&#39;鲁迅一生在文学创作、文学批评、思想研究、文学史研究、翻译、美术理论引进、基础科学介绍和古籍校勘与研究等多个领域具有重大贡献。他对于五四运动以后的中国社会思想文化发展具有重大影响，蜚声世界文坛，尤其在韩国、日本思想文化领域有极其重要的地位和影响，被誉为“二十世纪东亚文化地图上占最大领土的作家”。&#39;</span><span style="color:#ABB2BF;"> },</span></span>
<span class="line"><span style="color:#ABB2BF;">]</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C678DD;">var</span><span style="color:#ABB2BF;"> </span><span style="color:#E06C75;">html</span><span style="color:#ABB2BF;"> </span><span style="color:#56B6C2;">=</span><span style="color:#ABB2BF;"> </span><span style="color:#E5C07B;">list</span><span style="color:#ABB2BF;">.</span><span style="color:#61AFEF;">map</span><span style="color:#ABB2BF;">(</span><span style="color:#C678DD;">function</span><span style="color:#ABB2BF;">(</span><span style="color:#E06C75;font-style:italic;">item</span><span style="color:#ABB2BF;">){</span></span>
<span class="line"><span style="color:#ABB2BF;">	</span><span style="color:#C678DD;">return</span><span style="color:#ABB2BF;"> </span><span style="color:#98C379;">\`</span></span>
<span class="line"><span style="color:#98C379;">		&lt;div class=&quot;layui-colla-item&quot;&gt;</span></span>
<span class="line"><span style="color:#98C379;">			&lt;h2 class=&quot;layui-colla-title&quot; value=&quot;</span><span style="color:#C678DD;">\${</span><span style="color:#E5C07B;">item</span><span style="color:#ABB2BF;">.</span><span style="color:#E06C75;">name</span><span style="color:#C678DD;">}</span><span style="color:#98C379;">&quot;&gt;</span><span style="color:#C678DD;">\${</span><span style="color:#ABB2BF;"> </span><span style="color:#E5C07B;">item</span><span style="color:#ABB2BF;">.</span><span style="color:#E06C75;">name</span><span style="color:#ABB2BF;"> </span><span style="color:#C678DD;">}</span><span style="color:#98C379;">&lt;/h2&gt;</span></span>
<span class="line"><span style="color:#98C379;">			&lt;div class=&quot;layui-colla-content </span><span style="color:#C678DD;">\${</span><span style="color:#ABB2BF;"> </span><span style="color:#E5C07B;">item</span><span style="color:#ABB2BF;">.</span><span style="color:#E06C75;">selected</span><span style="color:#ABB2BF;"> </span><span style="color:#56B6C2;">&amp;&amp;</span><span style="color:#ABB2BF;"> </span><span style="color:#98C379;">&#39;layui-show&#39;</span><span style="color:#ABB2BF;"> </span><span style="color:#C678DD;">}</span><span style="color:#98C379;">&quot;&gt;</span><span style="color:#C678DD;">\${</span><span style="color:#ABB2BF;"> </span><span style="color:#E5C07B;">item</span><span style="color:#ABB2BF;">.</span><span style="color:#E06C75;">content</span><span style="color:#ABB2BF;"> </span><span style="color:#C678DD;">}</span><span style="color:#98C379;">&lt;/div&gt;</span></span>
<span class="line"><span style="color:#98C379;">		&lt;/div&gt;</span></span>
<span class="line"><span style="color:#98C379;">	\`</span></span>
<span class="line"><span style="color:#ABB2BF;">}).</span><span style="color:#61AFEF;">join</span><span style="color:#ABB2BF;">(</span><span style="color:#98C379;">&#39;&#39;</span><span style="color:#ABB2BF;">);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C678DD;">var</span><span style="color:#ABB2BF;"> </span><span style="color:#E06C75;">demo1</span><span style="color:#ABB2BF;"> </span><span style="color:#56B6C2;">=</span><span style="color:#ABB2BF;"> </span><span style="color:#E5C07B;">xmSelect</span><span style="color:#ABB2BF;">.</span><span style="color:#61AFEF;">render</span><span style="color:#ABB2BF;">({</span></span>
<span class="line"><span style="color:#ABB2BF;">	</span><span style="color:#E06C75;">el</span><span style="color:#ABB2BF;">: </span><span style="color:#98C379;">&#39;#demo1&#39;</span><span style="color:#ABB2BF;">, </span></span>
<span class="line"><span style="color:#ABB2BF;">	</span><span style="color:#E06C75;">content</span><span style="color:#ABB2BF;">: </span><span style="color:#98C379;">\`</span></span>
<span class="line"><span style="color:#98C379;">		&lt;div class=&quot;layui-collapse&quot; lay-filter=&quot;collapse&quot;&gt;</span></span>
<span class="line"><span style="color:#98C379;">			</span><span style="color:#C678DD;">\${</span><span style="color:#ABB2BF;"> </span><span style="color:#E06C75;">html</span><span style="color:#ABB2BF;"> </span><span style="color:#C678DD;">}</span></span>
<span class="line"><span style="color:#98C379;">		&lt;/div&gt;</span></span>
<span class="line"><span style="color:#98C379;">	\`</span><span style="color:#ABB2BF;">,</span></span>
<span class="line"><span style="color:#ABB2BF;">	</span><span style="color:#E06C75;">height</span><span style="color:#ABB2BF;">: </span><span style="color:#98C379;">&#39;auto&#39;</span><span style="color:#ABB2BF;">,</span></span>
<span class="line"><span style="color:#ABB2BF;">	</span><span style="color:#E06C75;">autoRow</span><span style="color:#ABB2BF;">: </span><span style="color:#D19A66;">true</span><span style="color:#ABB2BF;">,</span></span>
<span class="line"><span style="color:#ABB2BF;">	</span><span style="color:#E06C75;">data</span><span style="color:#ABB2BF;">: </span><span style="color:#E06C75;">list</span><span style="color:#ABB2BF;">,</span></span>
<span class="line"><span style="color:#ABB2BF;">	</span><span style="color:#E06C75;">prop</span><span style="color:#ABB2BF;">: { </span><span style="color:#E06C75;">value</span><span style="color:#ABB2BF;">: </span><span style="color:#98C379;">&#39;name&#39;</span><span style="color:#ABB2BF;"> },</span></span>
<span class="line"><span style="color:#ABB2BF;">	</span><span style="color:#61AFEF;">on</span><span style="color:#ABB2BF;">: </span><span style="color:#C678DD;">function</span><span style="color:#ABB2BF;">(</span><span style="color:#E06C75;font-style:italic;">data</span><span style="color:#ABB2BF;">){</span></span>
<span class="line"><span style="color:#ABB2BF;">		</span><span style="color:#C678DD;">if</span><span style="color:#ABB2BF;">(</span><span style="color:#56B6C2;">!</span><span style="color:#E5C07B;">data</span><span style="color:#ABB2BF;">.</span><span style="color:#E06C75;">isAdd</span><span style="color:#ABB2BF;">){</span></span>
<span class="line"><span style="color:#ABB2BF;">			</span><span style="color:#C678DD;">var</span><span style="color:#ABB2BF;"> </span><span style="color:#E06C75;">item</span><span style="color:#ABB2BF;"> </span><span style="color:#56B6C2;">=</span><span style="color:#ABB2BF;"> </span><span style="color:#E5C07B;">data</span><span style="color:#ABB2BF;">.</span><span style="color:#E06C75;">change</span><span style="color:#ABB2BF;">[</span><span style="color:#D19A66;">0</span><span style="color:#ABB2BF;">];</span></span>
<span class="line"><span style="color:#ABB2BF;">			</span><span style="color:#E5C07B;">document</span><span style="color:#ABB2BF;">.</span><span style="color:#61AFEF;">querySelector</span><span style="color:#ABB2BF;">(</span><span style="color:#98C379;">\`#demo1 .layui-collapse .layui-colla-title[value=&quot;</span><span style="color:#C678DD;">\${</span><span style="color:#E5C07B;">item</span><span style="color:#ABB2BF;">.</span><span style="color:#E06C75;">name</span><span style="color:#C678DD;">}</span><span style="color:#98C379;">&quot;]\`</span><span style="color:#ABB2BF;">).</span><span style="color:#E5C07B;">nextElementSibling</span><span style="color:#ABB2BF;">.</span><span style="color:#E5C07B;">classList</span><span style="color:#ABB2BF;">.</span><span style="color:#61AFEF;">remove</span><span style="color:#ABB2BF;">(</span><span style="color:#98C379;">&#39;layui-show&#39;</span><span style="color:#ABB2BF;">)</span></span>
<span class="line"><span style="color:#ABB2BF;">		}</span></span>
<span class="line"><span style="color:#ABB2BF;">	}</span></span>
<span class="line"><span style="color:#ABB2BF;">})</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E5C07B;">layui</span><span style="color:#ABB2BF;">.</span><span style="color:#E5C07B;">element</span><span style="color:#ABB2BF;">.</span><span style="color:#61AFEF;">init</span><span style="color:#ABB2BF;">()</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E5C07B;">layui</span><span style="color:#ABB2BF;">.</span><span style="color:#E5C07B;">element</span><span style="color:#ABB2BF;">.</span><span style="color:#61AFEF;">on</span><span style="color:#ABB2BF;">(</span><span style="color:#98C379;">&#39;collapse(collapse)&#39;</span><span style="color:#ABB2BF;">, </span><span style="color:#C678DD;">function</span><span style="color:#ABB2BF;">(</span><span style="color:#E06C75;font-style:italic;">data</span><span style="color:#ABB2BF;">){</span></span>
<span class="line"><span style="color:#ABB2BF;">	</span><span style="color:#C678DD;">let</span><span style="color:#ABB2BF;"> </span><span style="color:#E06C75;">value</span><span style="color:#ABB2BF;"> </span><span style="color:#56B6C2;">=</span><span style="color:#ABB2BF;"> </span><span style="color:#E5C07B;">data</span><span style="color:#ABB2BF;">.</span><span style="color:#E5C07B;">title</span><span style="color:#ABB2BF;">.</span><span style="color:#61AFEF;">attr</span><span style="color:#ABB2BF;">(</span><span style="color:#98C379;">&#39;value&#39;</span><span style="color:#ABB2BF;">);</span></span>
<span class="line"><span style="color:#ABB2BF;">	</span><span style="color:#C678DD;">if</span><span style="color:#ABB2BF;">(</span><span style="color:#E5C07B;">data</span><span style="color:#ABB2BF;">.</span><span style="color:#E06C75;">show</span><span style="color:#ABB2BF;">){</span></span>
<span class="line"><span style="color:#ABB2BF;">		</span><span style="color:#E5C07B;">demo1</span><span style="color:#ABB2BF;">.</span><span style="color:#61AFEF;">append</span><span style="color:#ABB2BF;">([ </span><span style="color:#E06C75;">value</span><span style="color:#ABB2BF;"> ])</span></span>
<span class="line"><span style="color:#ABB2BF;">	}</span><span style="color:#C678DD;">else</span><span style="color:#ABB2BF;">{</span></span>
<span class="line"><span style="color:#ABB2BF;">		</span><span style="color:#E5C07B;">demo1</span><span style="color:#ABB2BF;">.</span><span style="color:#61AFEF;">delete</span><span style="color:#ABB2BF;">([ </span><span style="color:#E06C75;">value</span><span style="color:#ABB2BF;"> ])</span></span>
<span class="line"><span style="color:#ABB2BF;">	}</span></span>
<span class="line"><span style="color:#ABB2BF;">});</span></span>
<span class="line"></span>
<span class="line"><span style="color:#7F848E;font-style:italic;">//这里仅仅提供一个演示, 更多的想法由你自己来创造</span></span>
<span class="line"></span>
<span class="line"><span style="color:#ABB2BF;">&lt;/</span><span style="color:#E06C75;">script</span><span style="color:#ABB2BF;">&gt;</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br><span class="line-number">53</span><br></div></div>`,4),e=[o];function t(c,r,B,y,i,A){return n(),a("div",null,e)}const u=s(p,[["render",t]]);export{b as __pageData,u as default};