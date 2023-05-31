import{_ as s,o as n,c as a,Q as l}from"./chunks/framework.71457ee7.js";const b=JSON.parse('{"title":"下拉穿梭框","description":"","frontmatter":{},"headers":[],"relativePath":"handbook/xmselect/ZP05.md","lastUpdated":1684068125000}'),p={name:"handbook/xmselect/ZP05.md"},o=l(`<h1 id="下拉穿梭框" tabindex="-1">下拉穿梭框 <a class="header-anchor" href="#下拉穿梭框" aria-label="Permalink to &quot;下拉穿梭框&quot;">​</a></h1><h2 id="layui-transfer" tabindex="-1">layui transfer <a class="header-anchor" href="#layui-transfer" aria-label="Permalink to &quot;layui transfer&quot;">​</a></h2><div class="language-sass line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">sass</span><pre class="shiki one-dark-pro"><code><span class="line"><span style="color:#7F848E;font-style:italic;">//css调整部分</span></span>
<span class="line"><span style="color:#D19A66;">xm-select</span><span style="color:#ABB2BF;"> </span><span style="color:#D19A66;">.scroll-body{</span></span>
<span class="line"><span style="color:#ABB2BF;">	padding-left: </span><span style="color:#D19A66;">10</span><span style="color:#C678DD;">px</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">	overflow: </span><span style="color:#D19A66;">hidden</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><div class="language-html line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki one-dark-pro"><code><span class="line"></span>
<span class="line"><span style="color:#ABB2BF;">&lt;</span><span style="color:#E06C75;">div</span><span style="color:#ABB2BF;"> </span><span style="color:#D19A66;">id</span><span style="color:#ABB2BF;">=</span><span style="color:#98C379;">&quot;demo1&quot;</span><span style="color:#ABB2BF;"> </span><span style="color:#D19A66;">style</span><span style="color:#ABB2BF;">=</span><span style="color:#98C379;">&quot;width: 502px;&quot;</span><span style="color:#ABB2BF;">&gt;&lt;/</span><span style="color:#E06C75;">div</span><span style="color:#ABB2BF;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#ABB2BF;">&lt;</span><span style="color:#E06C75;">script</span><span style="color:#ABB2BF;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C678DD;">var</span><span style="color:#ABB2BF;"> </span><span style="color:#E06C75;">list</span><span style="color:#ABB2BF;"> </span><span style="color:#56B6C2;">=</span><span style="color:#ABB2BF;"> [</span></span>
<span class="line"><span style="color:#ABB2BF;">	{</span><span style="color:#E06C75;">value</span><span style="color:#ABB2BF;">: </span><span style="color:#98C379;">&quot;1&quot;</span><span style="color:#ABB2BF;">, </span><span style="color:#E06C75;">title</span><span style="color:#ABB2BF;">: </span><span style="color:#98C379;">&quot;李白&quot;</span><span style="color:#ABB2BF;"> },</span></span>
<span class="line"><span style="color:#ABB2BF;">	{</span><span style="color:#E06C75;">value</span><span style="color:#ABB2BF;">: </span><span style="color:#98C379;">&quot;2&quot;</span><span style="color:#ABB2BF;">, </span><span style="color:#E06C75;">title</span><span style="color:#ABB2BF;">: </span><span style="color:#98C379;">&quot;杜甫&quot;</span><span style="color:#ABB2BF;"> },</span></span>
<span class="line"><span style="color:#ABB2BF;">	{</span><span style="color:#E06C75;">value</span><span style="color:#ABB2BF;">: </span><span style="color:#98C379;">&quot;3&quot;</span><span style="color:#ABB2BF;">, </span><span style="color:#E06C75;">title</span><span style="color:#ABB2BF;">: </span><span style="color:#98C379;">&quot;贤心&quot;</span><span style="color:#ABB2BF;"> },</span></span>
<span class="line"><span style="color:#ABB2BF;">]</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C678DD;">var</span><span style="color:#ABB2BF;"> </span><span style="color:#E06C75;">initValue</span><span style="color:#ABB2BF;"> </span><span style="color:#56B6C2;">=</span><span style="color:#ABB2BF;"> [</span><span style="color:#98C379;">&quot;1&quot;</span><span style="color:#ABB2BF;">]</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C678DD;">var</span><span style="color:#ABB2BF;"> </span><span style="color:#E06C75;">demo1</span><span style="color:#ABB2BF;"> </span><span style="color:#56B6C2;">=</span><span style="color:#ABB2BF;"> </span><span style="color:#E5C07B;">xmSelect</span><span style="color:#ABB2BF;">.</span><span style="color:#61AFEF;">render</span><span style="color:#ABB2BF;">({</span></span>
<span class="line"><span style="color:#ABB2BF;">	</span><span style="color:#E06C75;">el</span><span style="color:#ABB2BF;">: </span><span style="color:#98C379;">&#39;#demo1&#39;</span><span style="color:#ABB2BF;">, </span></span>
<span class="line"><span style="color:#ABB2BF;">	</span><span style="color:#E06C75;">content</span><span style="color:#ABB2BF;">: </span><span style="color:#98C379;">&quot;&lt;div id=&#39;transfer&#39;&gt;&lt;/div&gt;&quot;</span><span style="color:#ABB2BF;">,</span></span>
<span class="line"><span style="color:#ABB2BF;">	</span><span style="color:#E06C75;">height</span><span style="color:#ABB2BF;">: </span><span style="color:#98C379;">&#39;auto&#39;</span><span style="color:#ABB2BF;">,</span></span>
<span class="line"><span style="color:#ABB2BF;">	</span><span style="color:#E06C75;">autoRow</span><span style="color:#ABB2BF;">: </span><span style="color:#D19A66;">true</span><span style="color:#ABB2BF;">,</span></span>
<span class="line"><span style="color:#ABB2BF;">	</span><span style="color:#E06C75;">initValue</span><span style="color:#ABB2BF;">: </span><span style="color:#E06C75;">initValue</span><span style="color:#ABB2BF;">,</span></span>
<span class="line"><span style="color:#ABB2BF;">	</span><span style="color:#E06C75;">data</span><span style="color:#ABB2BF;">: </span><span style="color:#E06C75;">list</span><span style="color:#ABB2BF;">,</span></span>
<span class="line"><span style="color:#ABB2BF;">	</span><span style="color:#E06C75;">prop</span><span style="color:#ABB2BF;">: { </span><span style="color:#E06C75;">name</span><span style="color:#ABB2BF;">: </span><span style="color:#98C379;">&#39;title&#39;</span><span style="color:#ABB2BF;"> },</span></span>
<span class="line"><span style="color:#ABB2BF;">	</span><span style="color:#61AFEF;">on</span><span style="color:#ABB2BF;">: </span><span style="color:#C678DD;">function</span><span style="color:#ABB2BF;">(</span><span style="color:#E06C75;font-style:italic;">data</span><span style="color:#ABB2BF;">){</span></span>
<span class="line"><span style="color:#ABB2BF;">		</span><span style="color:#C678DD;">if</span><span style="color:#ABB2BF;">(</span><span style="color:#56B6C2;">!</span><span style="color:#E5C07B;">data</span><span style="color:#ABB2BF;">.</span><span style="color:#E06C75;">isAdd</span><span style="color:#ABB2BF;">){</span></span>
<span class="line"><span style="color:#ABB2BF;">			</span><span style="color:#E5C07B;">layui</span><span style="color:#ABB2BF;">.</span><span style="color:#E5C07B;">transfer</span><span style="color:#ABB2BF;">.</span><span style="color:#61AFEF;">reload</span><span style="color:#ABB2BF;">(</span><span style="color:#98C379;">&#39;transfer&#39;</span><span style="color:#ABB2BF;">, {</span></span>
<span class="line"><span style="color:#ABB2BF;">				</span><span style="color:#E06C75;">value</span><span style="color:#ABB2BF;">: </span><span style="color:#E5C07B;">demo1</span><span style="color:#ABB2BF;">.</span><span style="color:#61AFEF;">getValue</span><span style="color:#ABB2BF;">(</span><span style="color:#98C379;">&#39;value&#39;</span><span style="color:#ABB2BF;">)</span></span>
<span class="line"><span style="color:#ABB2BF;">			})</span></span>
<span class="line"><span style="color:#ABB2BF;">		}</span></span>
<span class="line"><span style="color:#ABB2BF;">	}</span></span>
<span class="line"><span style="color:#ABB2BF;">})</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E5C07B;">layui</span><span style="color:#ABB2BF;">.</span><span style="color:#E5C07B;">transfer</span><span style="color:#ABB2BF;">.</span><span style="color:#61AFEF;">render</span><span style="color:#ABB2BF;">({</span></span>
<span class="line"><span style="color:#ABB2BF;">	</span><span style="color:#E06C75;">id</span><span style="color:#ABB2BF;">: </span><span style="color:#98C379;">&#39;transfer&#39;</span><span style="color:#ABB2BF;">,</span></span>
<span class="line"><span style="color:#ABB2BF;">	</span><span style="color:#E06C75;">elem</span><span style="color:#ABB2BF;">: </span><span style="color:#98C379;">&#39;#transfer&#39;</span><span style="color:#ABB2BF;">,  </span><span style="color:#7F848E;font-style:italic;">//绑定元素</span></span>
<span class="line"><span style="color:#ABB2BF;">	</span><span style="color:#E06C75;">title</span><span style="color:#ABB2BF;">: [</span><span style="color:#98C379;">&#39;候选人&#39;</span><span style="color:#ABB2BF;">, </span><span style="color:#98C379;">&#39;获奖者&#39;</span><span style="color:#ABB2BF;">],</span></span>
<span class="line"><span style="color:#ABB2BF;">	</span><span style="color:#E06C75;">data</span><span style="color:#ABB2BF;">: </span><span style="color:#E06C75;">list</span><span style="color:#ABB2BF;">,</span></span>
<span class="line"><span style="color:#ABB2BF;">	</span><span style="color:#E06C75;">value</span><span style="color:#ABB2BF;">: </span><span style="color:#E06C75;">initValue</span><span style="color:#ABB2BF;">,</span></span>
<span class="line"><span style="color:#ABB2BF;">	</span><span style="color:#61AFEF;">onchange</span><span style="color:#ABB2BF;">: </span><span style="color:#C678DD;">function</span><span style="color:#ABB2BF;">(</span><span style="color:#E06C75;font-style:italic;">data</span><span style="color:#ABB2BF;">, </span><span style="color:#E06C75;font-style:italic;">index</span><span style="color:#ABB2BF;">){</span></span>
<span class="line"><span style="color:#ABB2BF;">		</span><span style="color:#C678DD;">if</span><span style="color:#ABB2BF;">(</span><span style="color:#E06C75;">index</span><span style="color:#ABB2BF;"> </span><span style="color:#56B6C2;">==</span><span style="color:#ABB2BF;"> </span><span style="color:#D19A66;">0</span><span style="color:#ABB2BF;">){</span></span>
<span class="line"><span style="color:#ABB2BF;">			</span><span style="color:#E5C07B;">demo1</span><span style="color:#ABB2BF;">.</span><span style="color:#61AFEF;">append</span><span style="color:#ABB2BF;">(</span><span style="color:#E06C75;">data</span><span style="color:#ABB2BF;">)</span></span>
<span class="line"><span style="color:#ABB2BF;">		}</span><span style="color:#C678DD;">else</span><span style="color:#ABB2BF;">{</span></span>
<span class="line"><span style="color:#ABB2BF;">			</span><span style="color:#E5C07B;">demo1</span><span style="color:#ABB2BF;">.</span><span style="color:#61AFEF;">delete</span><span style="color:#ABB2BF;">(</span><span style="color:#E06C75;">data</span><span style="color:#ABB2BF;">)</span></span>
<span class="line"><span style="color:#ABB2BF;">		}</span></span>
<span class="line"><span style="color:#ABB2BF;">	}</span></span>
<span class="line"><span style="color:#ABB2BF;">});</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#7F848E;font-style:italic;">//这里仅仅提供一个演示, 更多的想法由你自己来创造</span></span>
<span class="line"></span>
<span class="line"><span style="color:#ABB2BF;">&lt;/</span><span style="color:#E06C75;">script</span><span style="color:#ABB2BF;">&gt;</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br></div></div>`,4),e=[o];function t(r,B,c,y,i,A){return n(),a("div",null,e)}const u=s(p,[["render",t]]);export{b as __pageData,u as default};