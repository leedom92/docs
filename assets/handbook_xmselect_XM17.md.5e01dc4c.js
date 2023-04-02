import{_ as s,o as n,c as a,Q as l}from"./chunks/framework.237f4aa8.js";const b=JSON.parse('{"title":"性能测试","description":"","frontmatter":{},"headers":[],"relativePath":"handbook/xmselect/XM17.md","lastUpdated":1667488730000}'),p={name:"handbook/xmselect/XM17.md"},o=l(`<h1 id="性能测试" tabindex="-1">性能测试 <a class="header-anchor" href="#性能测试" aria-label="Permalink to &quot;性能测试&quot;">​</a></h1><h2 id="数据渲染耗时测试" tabindex="-1">数据渲染耗时测试 <a class="header-anchor" href="#数据渲染耗时测试" aria-label="Permalink to &quot;数据渲染耗时测试&quot;">​</a></h2><p>事实证明分页是好使的 ^_^</p><div class="language-html line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki one-dark-pro"><code><span class="line"><span style="color:#ABB2BF;">&lt;</span><span style="color:#E06C75;">div</span><span style="color:#ABB2BF;"> </span><span style="color:#D19A66;">id</span><span style="color:#ABB2BF;">=</span><span style="color:#98C379;">&quot;demo1&quot;</span><span style="color:#ABB2BF;"> </span><span style="color:#D19A66;">class</span><span style="color:#ABB2BF;">=</span><span style="color:#98C379;">&quot;xm-select-demo&quot;</span><span style="color:#ABB2BF;">&gt;&lt;/</span><span style="color:#E06C75;">div</span><span style="color:#ABB2BF;">&gt;</span></span>
<span class="line"><span style="color:#ABB2BF;">&lt;</span><span style="color:#E06C75;">button</span><span style="color:#ABB2BF;"> </span><span style="color:#D19A66;">class</span><span style="color:#ABB2BF;">=</span><span style="color:#98C379;">&quot;btn&quot;</span><span style="color:#ABB2BF;"> </span><span style="color:#D19A66;">id</span><span style="color:#ABB2BF;">=</span><span style="color:#98C379;">&quot;demo1-test1&quot;</span><span style="color:#ABB2BF;">&gt;测试1000条&lt;/</span><span style="color:#E06C75;">button</span><span style="color:#ABB2BF;">&gt;</span></span>
<span class="line"><span style="color:#ABB2BF;">&lt;</span><span style="color:#E06C75;">button</span><span style="color:#ABB2BF;"> </span><span style="color:#D19A66;">class</span><span style="color:#ABB2BF;">=</span><span style="color:#98C379;">&quot;btn&quot;</span><span style="color:#ABB2BF;"> </span><span style="color:#D19A66;">id</span><span style="color:#ABB2BF;">=</span><span style="color:#98C379;">&quot;demo1-test2&quot;</span><span style="color:#ABB2BF;">&gt;测试10000条&lt;/</span><span style="color:#E06C75;">button</span><span style="color:#ABB2BF;">&gt;</span></span>
<span class="line"><span style="color:#ABB2BF;">&lt;</span><span style="color:#E06C75;">button</span><span style="color:#ABB2BF;"> </span><span style="color:#D19A66;">class</span><span style="color:#ABB2BF;">=</span><span style="color:#98C379;">&quot;btn&quot;</span><span style="color:#ABB2BF;"> </span><span style="color:#D19A66;">id</span><span style="color:#ABB2BF;">=</span><span style="color:#98C379;">&quot;demo1-test3&quot;</span><span style="color:#ABB2BF;">&gt;测试10000条+分页&lt;/</span><span style="color:#E06C75;">button</span><span style="color:#ABB2BF;">&gt;</span></span>
<span class="line"><span style="color:#ABB2BF;">&lt;</span><span style="color:#E06C75;">pre</span><span style="color:#ABB2BF;"> </span><span style="color:#D19A66;">id</span><span style="color:#ABB2BF;">=</span><span style="color:#98C379;">&quot;demo1-result&quot;</span><span style="color:#ABB2BF;">&gt;&lt;/</span><span style="color:#E06C75;">pre</span><span style="color:#ABB2BF;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#ABB2BF;">&lt;</span><span style="color:#E06C75;">script</span><span style="color:#ABB2BF;">&gt;</span></span>
<span class="line"><span style="color:#C678DD;">function</span><span style="color:#ABB2BF;"> </span><span style="color:#61AFEF;">run</span><span style="color:#ABB2BF;">(</span><span style="color:#E06C75;font-style:italic;">count</span><span style="color:#ABB2BF;">, </span><span style="color:#E06C75;font-style:italic;">paging</span><span style="color:#ABB2BF;">){</span></span>
<span class="line"><span style="color:#ABB2BF;">	</span><span style="color:#7F848E;font-style:italic;">//生成数据</span></span>
<span class="line"><span style="color:#ABB2BF;">	</span><span style="color:#C678DD;">var</span><span style="color:#ABB2BF;"> </span><span style="color:#E06C75;">data</span><span style="color:#ABB2BF;"> </span><span style="color:#56B6C2;">=</span><span style="color:#ABB2BF;"> [];</span></span>
<span class="line"><span style="color:#ABB2BF;">	</span><span style="color:#C678DD;">for</span><span style="color:#ABB2BF;">(</span><span style="color:#C678DD;">var</span><span style="color:#ABB2BF;"> </span><span style="color:#E06C75;">i</span><span style="color:#ABB2BF;"> </span><span style="color:#56B6C2;">=</span><span style="color:#ABB2BF;"> </span><span style="color:#D19A66;">0</span><span style="color:#ABB2BF;">; </span><span style="color:#E06C75;">i</span><span style="color:#ABB2BF;"> </span><span style="color:#56B6C2;">&lt;</span><span style="color:#ABB2BF;"> </span><span style="color:#E06C75;">count</span><span style="color:#ABB2BF;">; </span><span style="color:#E06C75;">i</span><span style="color:#56B6C2;">++</span><span style="color:#ABB2BF;">){</span></span>
<span class="line"><span style="color:#ABB2BF;">		</span><span style="color:#E5C07B;">data</span><span style="color:#ABB2BF;">.</span><span style="color:#61AFEF;">push</span><span style="color:#ABB2BF;">({</span></span>
<span class="line"><span style="color:#ABB2BF;">			</span><span style="color:#E06C75;">name</span><span style="color:#ABB2BF;">: </span><span style="color:#98C379;">&#39;测试数据&#39;</span><span style="color:#ABB2BF;"> </span><span style="color:#56B6C2;">+</span><span style="color:#ABB2BF;"> </span><span style="color:#E06C75;">i</span><span style="color:#ABB2BF;">,</span></span>
<span class="line"><span style="color:#ABB2BF;">			</span><span style="color:#E06C75;">value</span><span style="color:#ABB2BF;">: </span><span style="color:#E06C75;">i</span><span style="color:#ABB2BF;">,</span></span>
<span class="line"><span style="color:#ABB2BF;">		})</span></span>
<span class="line"><span style="color:#ABB2BF;">	}</span></span>
<span class="line"><span style="color:#ABB2BF;">	</span></span>
<span class="line"><span style="color:#ABB2BF;">	</span><span style="color:#7F848E;font-style:italic;">//记录开始渲染时间</span></span>
<span class="line"><span style="color:#ABB2BF;">	</span><span style="color:#C678DD;">var</span><span style="color:#ABB2BF;"> </span><span style="color:#E06C75;">startTime</span><span style="color:#ABB2BF;"> </span><span style="color:#56B6C2;">=</span><span style="color:#ABB2BF;"> </span><span style="color:#E5C07B;">Date</span><span style="color:#ABB2BF;">.</span><span style="color:#61AFEF;">now</span><span style="color:#ABB2BF;">();</span></span>
<span class="line"><span style="color:#ABB2BF;">	</span></span>
<span class="line"><span style="color:#ABB2BF;">	</span><span style="color:#C678DD;">var</span><span style="color:#ABB2BF;"> </span><span style="color:#E06C75;">demo1</span><span style="color:#ABB2BF;"> </span><span style="color:#56B6C2;">=</span><span style="color:#ABB2BF;"> </span><span style="color:#E5C07B;">xmSelect</span><span style="color:#ABB2BF;">.</span><span style="color:#61AFEF;">render</span><span style="color:#ABB2BF;">({</span></span>
<span class="line"><span style="color:#ABB2BF;">		</span><span style="color:#E06C75;">el</span><span style="color:#ABB2BF;">: </span><span style="color:#98C379;">&#39;#demo1&#39;</span><span style="color:#ABB2BF;">, </span></span>
<span class="line"><span style="color:#ABB2BF;">		</span><span style="color:#E06C75;">paging</span><span style="color:#ABB2BF;">,</span></span>
<span class="line"><span style="color:#ABB2BF;">		</span><span style="color:#E06C75;">data</span></span>
<span class="line"><span style="color:#ABB2BF;">	})</span></span>
<span class="line"><span style="color:#ABB2BF;">	</span></span>
<span class="line"><span style="color:#ABB2BF;">	</span><span style="color:#7F848E;font-style:italic;">//记录结束时间</span></span>
<span class="line"><span style="color:#ABB2BF;">	</span><span style="color:#C678DD;">var</span><span style="color:#ABB2BF;"> </span><span style="color:#E06C75;">endTime</span><span style="color:#ABB2BF;"> </span><span style="color:#56B6C2;">=</span><span style="color:#ABB2BF;"> </span><span style="color:#E5C07B;">Date</span><span style="color:#ABB2BF;">.</span><span style="color:#61AFEF;">now</span><span style="color:#ABB2BF;">();</span></span>
<span class="line"><span style="color:#ABB2BF;">	</span></span>
<span class="line"><span style="color:#ABB2BF;">	</span><span style="color:#E5C07B;">document</span><span style="color:#ABB2BF;">.</span><span style="color:#61AFEF;">getElementById</span><span style="color:#ABB2BF;">(</span><span style="color:#98C379;">&#39;demo1-result&#39;</span><span style="color:#ABB2BF;">).</span><span style="color:#E06C75;">innerText</span><span style="color:#ABB2BF;"> </span><span style="color:#56B6C2;">=</span><span style="color:#ABB2BF;"> </span><span style="color:#98C379;">\`渲染耗时: </span><span style="color:#C678DD;">\${</span><span style="color:#E06C75;">endTime</span><span style="color:#ABB2BF;"> </span><span style="color:#56B6C2;">-</span><span style="color:#ABB2BF;"> </span><span style="color:#E06C75;">startTime</span><span style="color:#C678DD;">}</span><span style="color:#98C379;"> ms\`</span></span>
<span class="line"><span style="color:#ABB2BF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E5C07B;">document</span><span style="color:#ABB2BF;">.</span><span style="color:#61AFEF;">getElementById</span><span style="color:#ABB2BF;">(</span><span style="color:#98C379;">&#39;demo1-test1&#39;</span><span style="color:#ABB2BF;">).</span><span style="color:#61AFEF;">onclick</span><span style="color:#ABB2BF;"> </span><span style="color:#56B6C2;">=</span><span style="color:#ABB2BF;"> </span><span style="color:#C678DD;">function</span><span style="color:#ABB2BF;">(){</span></span>
<span class="line"><span style="color:#ABB2BF;">	</span><span style="color:#61AFEF;">run</span><span style="color:#ABB2BF;">(</span><span style="color:#D19A66;">1000</span><span style="color:#ABB2BF;">, </span><span style="color:#D19A66;">false</span><span style="color:#ABB2BF;">)</span></span>
<span class="line"><span style="color:#ABB2BF;">};</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E5C07B;">document</span><span style="color:#ABB2BF;">.</span><span style="color:#61AFEF;">getElementById</span><span style="color:#ABB2BF;">(</span><span style="color:#98C379;">&#39;demo1-test2&#39;</span><span style="color:#ABB2BF;">).</span><span style="color:#61AFEF;">onclick</span><span style="color:#ABB2BF;"> </span><span style="color:#56B6C2;">=</span><span style="color:#ABB2BF;"> </span><span style="color:#C678DD;">function</span><span style="color:#ABB2BF;">(){</span></span>
<span class="line"><span style="color:#ABB2BF;">	</span><span style="color:#61AFEF;">run</span><span style="color:#ABB2BF;">(</span><span style="color:#D19A66;">10000</span><span style="color:#ABB2BF;">, </span><span style="color:#D19A66;">false</span><span style="color:#ABB2BF;">)</span></span>
<span class="line"><span style="color:#ABB2BF;">};</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E5C07B;">document</span><span style="color:#ABB2BF;">.</span><span style="color:#61AFEF;">getElementById</span><span style="color:#ABB2BF;">(</span><span style="color:#98C379;">&#39;demo1-test3&#39;</span><span style="color:#ABB2BF;">).</span><span style="color:#61AFEF;">onclick</span><span style="color:#ABB2BF;"> </span><span style="color:#56B6C2;">=</span><span style="color:#ABB2BF;"> </span><span style="color:#C678DD;">function</span><span style="color:#ABB2BF;">(){</span></span>
<span class="line"><span style="color:#ABB2BF;">	</span><span style="color:#61AFEF;">run</span><span style="color:#ABB2BF;">(</span><span style="color:#D19A66;">10000</span><span style="color:#ABB2BF;">, </span><span style="color:#D19A66;">true</span><span style="color:#ABB2BF;">)</span></span>
<span class="line"><span style="color:#ABB2BF;">};</span></span>
<span class="line"></span>
<span class="line"><span style="color:#61AFEF;">run</span><span style="color:#ABB2BF;">(</span><span style="color:#D19A66;">1000</span><span style="color:#ABB2BF;">, </span><span style="color:#D19A66;">false</span><span style="color:#ABB2BF;">);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#ABB2BF;">&lt;/</span><span style="color:#E06C75;">script</span><span style="color:#ABB2BF;">&gt;</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br></div></div>`,4),e=[o];function t(B,c,r,y,A,F){return n(),a("div",null,e)}const u=s(p,[["render",t]]);export{b as __pageData,u as default};
