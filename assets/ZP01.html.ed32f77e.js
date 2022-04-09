import{_ as n,c as s}from"./app.95f31e46.js";const a={},t=s(`<h1 id="\u4E0B\u62C9\u81EA\u5B9A\u4E49" tabindex="-1"><a class="header-anchor" href="#\u4E0B\u62C9\u81EA\u5B9A\u4E49" aria-hidden="true">#</a> \u4E0B\u62C9\u81EA\u5B9A\u4E49</h1><h2 id="\u4E0B\u62C9\u8868\u683C" tabindex="-1"><a class="header-anchor" href="#\u4E0B\u62C9\u8868\u683C" aria-hidden="true">#</a> \u4E0B\u62C9\u8868\u683C</h2><p>\u81F3\u4E8E\u80FD\u5E72\u4EC0\u4E48, \u5C31\u770B\u4F60\u4EEC\u7684\u60F3\u8C61\u4E86~~</p><div class="language-html ext-html line-numbers-mode"><pre class="language-html"><code>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>demo1<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
<span class="token comment">//\u5148\u6E32\u67D3\u591A\u9009</span>
<span class="token keyword">var</span> demo1 <span class="token operator">=</span> xmSelect<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
	<span class="token literal-property property">el</span><span class="token operator">:</span> <span class="token string">&#39;#demo1&#39;</span><span class="token punctuation">,</span> 
	<span class="token literal-property property">prop</span><span class="token operator">:</span> <span class="token punctuation">{</span>
		<span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;username&#39;</span><span class="token punctuation">,</span>
		<span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token string">&#39;username&#39;</span><span class="token punctuation">,</span>
	<span class="token punctuation">}</span><span class="token punctuation">,</span>
	<span class="token literal-property property">content</span><span class="token operator">:</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">
		&lt;table class=&quot;layui-table&quot; lay-filter=&quot;demo&quot;&gt;
		  &lt;thead&gt;
			&lt;tr&gt;
			  &lt;th lay-data=&quot;{field:&#39;username&#39;, width:80}&quot;&gt;\u6635\u79F0&lt;/th&gt;
			  &lt;th lay-data=&quot;{field:&#39;experience&#39;, width:50, sort:true}&quot;&gt;\u79EF\u5206&lt;/th&gt;
			  &lt;th lay-data=&quot;{field:&#39;sign&#39;, width: 200}&quot;&gt;\u7B7E\u540D&lt;/th&gt;
			&lt;/tr&gt; 
		  &lt;/thead&gt;
		  &lt;tbody&gt;
			&lt;tr&gt;
			  &lt;td&gt;\u8D24\u5FC31&lt;/td&gt;
			  &lt;td&gt;66&lt;/td&gt;
			  &lt;td&gt;\u4EBA\u751F\u5C31\u50CF\u662F\u4E00\u573A\u4FEE\u884Ca&lt;/td&gt;
			&lt;/tr&gt;
			&lt;tr&gt;
			  &lt;td&gt;\u8D24\u5FC32&lt;/td&gt;
			  &lt;td&gt;88&lt;/td&gt;
			  &lt;td&gt;\u4EBA\u751F\u5C31\u50CF\u662F\u4E00\u573A\u4FEE\u884Cb&lt;/td&gt;
			&lt;/tr&gt;
			&lt;tr&gt;
			  &lt;td&gt;\u8D24\u5FC33&lt;/td&gt;
			  &lt;td&gt;33&lt;/td&gt;
			  &lt;td&gt;\u4EBA\u751F\u5C31\u50CF\u662F\u4E00\u573A\u4FEE\u884Cc&lt;/td&gt;
			&lt;/tr&gt;
		  &lt;/tbody&gt;
		&lt;/table&gt;
	</span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">,</span>
	<span class="token literal-property property">height</span><span class="token operator">:</span> <span class="token string">&#39;auto&#39;</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>

layui<span class="token punctuation">.</span>table<span class="token punctuation">.</span><span class="token function">init</span><span class="token punctuation">(</span><span class="token string">&#39;demo&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
	<span class="token function-variable function">done</span><span class="token operator">:</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">res</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
		demo1<span class="token punctuation">.</span><span class="token function">update</span><span class="token punctuation">(</span><span class="token punctuation">{</span> <span class="token literal-property property">data</span><span class="token operator">:</span> res<span class="token punctuation">.</span>data <span class="token punctuation">}</span><span class="token punctuation">)</span>
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">on</span><span class="token punctuation">(</span><span class="token string">&#39;row(demo)&#39;</span><span class="token punctuation">,</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">obj</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
	<span class="token keyword">var</span> values <span class="token operator">=</span> demo1<span class="token punctuation">.</span><span class="token function">getValue</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token keyword">var</span> item <span class="token operator">=</span> obj<span class="token punctuation">.</span>data<span class="token punctuation">;</span>
	<span class="token keyword">var</span> has <span class="token operator">=</span> values<span class="token punctuation">.</span><span class="token function">find</span><span class="token punctuation">(</span><span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">i</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
		<span class="token keyword">return</span> i<span class="token punctuation">.</span>username <span class="token operator">===</span> item<span class="token punctuation">.</span>username
	<span class="token punctuation">}</span><span class="token punctuation">)</span>
	<span class="token keyword">if</span><span class="token punctuation">(</span>has<span class="token punctuation">)</span><span class="token punctuation">{</span>
		demo1<span class="token punctuation">.</span><span class="token function">delete</span><span class="token punctuation">(</span><span class="token punctuation">[</span> item <span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span><span class="token keyword">else</span><span class="token punctuation">{</span>
		demo1<span class="token punctuation">.</span><span class="token function">append</span><span class="token punctuation">(</span><span class="token punctuation">[</span> item <span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
	
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br><span class="line-number">53</span><br><span class="line-number">54</span><br><span class="line-number">55</span><br><span class="line-number">56</span><br><span class="line-number">57</span><br><span class="line-number">58</span><br><span class="line-number">59</span><br><span class="line-number">60</span><br></div></div>`,4);function p(e,l){return t}var c=n(a,[["render",p],["__file","ZP01.html.vue"]]);export{c as default};
