import{_ as t,c as s,o as n,a}from"./app.88e19b03.js";const h=JSON.parse('{"title":"\u914D\u7F6E\u9879\u4E0E\u65B9\u6CD5","description":"","frontmatter":{},"headers":[{"level":2,"title":"\u914D\u7F6E\u9879","slug":"\u914D\u7F6E\u9879","link":"#\u914D\u7F6E\u9879","children":[]},{"level":2,"title":"prop","slug":"prop","link":"#prop","children":[]},{"level":2,"title":"\u5206\u7EC4\u8BF4\u660E","slug":"\u5206\u7EC4\u8BF4\u660E","link":"#\u5206\u7EC4\u8BF4\u660E","children":[]},{"level":2,"title":"theme","slug":"theme","link":"#theme","children":[]},{"level":2,"title":"model","slug":"model","link":"#model","children":[]},{"level":2,"title":"iconfont","slug":"iconfont","link":"#iconfont","children":[]},{"level":2,"title":"toolbar","slug":"toolbar","link":"#toolbar","children":[]},{"level":2,"title":"tree","slug":"tree","link":"#tree","children":[]},{"level":2,"title":"cascader","slug":"cascader","link":"#cascader","children":[]},{"level":2,"title":"\u5168\u5C40\u65B9\u6CD5","slug":"\u5168\u5C40\u65B9\u6CD5","link":"#\u5168\u5C40\u65B9\u6CD5","children":[]},{"level":2,"title":"\u5B9E\u4F8B\u65B9\u6CD5","slug":"\u5B9E\u4F8B\u65B9\u6CD5","link":"#\u5B9E\u4F8B\u65B9\u6CD5","children":[]}],"relativePath":"handbook/xmselect/options.md","lastUpdated":null}'),l={name:"handbook/xmselect/options.md"},e=a(`<h1 id="\u914D\u7F6E\u9879\u4E0E\u65B9\u6CD5" tabindex="-1">\u914D\u7F6E\u9879\u4E0E\u65B9\u6CD5 <a class="header-anchor" href="#\u914D\u7F6E\u9879\u4E0E\u65B9\u6CD5" aria-hidden="true">#</a></h1><h2 id="\u914D\u7F6E\u9879" tabindex="-1">\u914D\u7F6E\u9879 <a class="header-anchor" href="#\u914D\u7F6E\u9879" aria-hidden="true">#</a></h2><table><thead><tr><th>\u53C2\u6570</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th><th>\u53EF\u9009\u503C</th><th>\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td>el</td><td>\u6E32\u67D3\u5BF9\u8C61, css\u9009\u62E9\u5668, dom\u5143\u7D20</td><td>string</td><td>-</td><td>-</td></tr><tr><td>language</td><td>\u8BED\u8A00\u9009\u62E9</td><td>string</td><td>zn / en</td><td>zn</td></tr><tr><td>data</td><td>\u663E\u793A\u7684\u6570\u636E</td><td>array</td><td>-</td><td>[ ]</td></tr><tr><td>content</td><td>\u81EA\u5B9A\u4E49\u4E0B\u62C9\u6846html</td><td>string</td><td>-</td><td>-</td></tr><tr><td>initValue</td><td>\u521D\u59CB\u5316\u9009\u4E2D\u7684\u6570\u636E, \u9700\u8981\u5728data\u4E2D\u5B58\u5728</td><td>array</td><td>-</td><td>null</td></tr><tr><td>tips</td><td>\u9ED8\u8BA4\u63D0\u793A, \u7C7B\u4F3C\u4E8Eplaceholder</td><td>string</td><td>-</td><td>\u8BF7\u9009\u62E9</td></tr><tr><td>empty</td><td>\u7A7A\u6570\u636E\u63D0\u793A</td><td>string</td><td>-</td><td>\u6682\u65E0\u6570\u636E</td></tr><tr><td>filterable</td><td>\u662F\u5426\u5F00\u542F\u641C\u7D22</td><td>boolean</td><td>true / false</td><td>false</td></tr><tr><td>searchTips</td><td>\u641C\u7D22\u63D0\u793A</td><td>string</td><td>-</td><td>\u8BF7\u9009\u62E9</td></tr><tr><td>delay</td><td>\u641C\u7D22\u5EF6\u8FDF ms</td><td>int</td><td>-</td><td>500</td></tr><tr><td>filterMethod</td><td>\u641C\u7D22\u56DE\u8C03\u51FD\u6570</td><td>function(val, item, index, prop) val: \u5F53\u524D\u641C\u7D22\u503C, item: \u6BCF\u4E2Aoption\u9009\u9879, index: \u4F4D\u7F6E\u6570\u636E\u4E2D\u7684\u4E0B\u6807, prop: \u5B9A\u4E49key</td><td>-</td><td>-</td></tr><tr><td>filterDone</td><td>\u641C\u7D22\u5B8C\u6210\u51FD\u6570</td><td>function(val, list) val: \u5F53\u524D\u641C\u7D22\u503C, list: \u8FC7\u6EE4\u540E\u7684\u6570\u636E</td><td>-</td><td>-</td></tr><tr><td>remoteSearch</td><td>\u662F\u5426\u5F00\u542F\u81EA\u5B9A\u4E49\u641C\u7D22 (\u8FDC\u7A0B\u641C\u7D22)</td><td>boolean</td><td>true / false</td><td>false</td></tr><tr><td>remoteMethod</td><td>\u81EA\u5B9A\u4E49\u641C\u7D22\u56DE\u8C03\u51FD\u6570</td><td>function(val, cb, show, pageIndex) val: \u5F53\u524D\u641C\u7D22\u503C, cb(arr, totalPage): \u56DE\u8C03\u51FD\u6570, \u9700\u8981\u56DE\u8C03\u4E00\u4E2A\u6570\u7EC4, \u7ED3\u6784\u540Cdata, \u8FDC\u7A0B\u5206\u9875\u9700\u8981\u7B2C\u4E8C\u4E2A\u53C2\u6570: \u603B\u9875\u7801, show: \u4E0B\u62C9\u6846\u663E\u793A\u72B6\u6001, pageIndex: \u5206\u9875\u4E0B\u5F53\u524D\u9875\u7801</td><td>-</td><td>-</td></tr><tr><td>direction</td><td>\u4E0B\u62C9\u65B9\u5411</td><td>string</td><td>auto / up / down</td><td>auto</td></tr><tr><td>style</td><td>\u81EA\u5B9A\u4E49\u6837\u5F0F</td><td>object</td><td>-</td><td></td></tr><tr><td>height</td><td>\u9ED8\u8BA4\u6700\u5927\u9AD8\u5EA6</td><td>string</td><td>-</td><td>200px</td></tr><tr><td>paging</td><td>\u662F\u5426\u5F00\u542F\u81EA\u5B9A\u4E49\u5206\u9875</td><td>boolean</td><td>true / false</td><td>false</td></tr><tr><td>pageSize</td><td>\u5206\u9875\u6761\u6570</td><td>int</td><td>-</td><td>10</td></tr><tr><td>pageEmptyShow</td><td>\u5206\u9875\u65E0\u6570\u636E\u662F\u5426\u663E\u793A</td><td>boolean</td><td>true / false</td><td>true</td></tr><tr><td>pageRemote</td><td>\u662F\u5426\u5F00\u542F\u8FDC\u7A0B\u5206\u9875</td><td>boolean</td><td>true / false</td><td>true</td></tr><tr><td>radio</td><td>\u662F\u5426\u5F00\u542F\u5355\u9009\u6A21\u5F0F</td><td>boolean</td><td>true / false</td><td>false</td></tr><tr><td>repeat</td><td>\u662F\u5426\u5F00\u542F\u91CD\u590D\u6027\u6A21\u5F0F</td><td>boolean</td><td>true / false</td><td>false</td></tr><tr><td>clickClose</td><td>\u662F\u5426\u70B9\u51FB\u9009\u9879\u540E\u81EA\u52A8\u5173\u95ED\u4E0B\u62C9\u6846</td><td>boolean</td><td>true / false</td><td>false</td></tr><tr><td>prop</td><td>\u81EA\u5B9A\u4E49\u5C5E\u6027\u540D\u79F0, \u5177\u4F53\u770B\u4E0B\u8868</td><td>object</td><td>-</td><td></td></tr><tr><td>theme</td><td>\u4E3B\u9898\u914D\u7F6E, \u5177\u4F53\u770B\u4E0B\u8868</td><td>object</td><td>-</td><td></td></tr><tr><td>model</td><td>\u6A21\u578B, \u591A\u9009\u7684\u5C55\u793A\u65B9\u5F0F, \u5177\u4F53\u89C1\u4E0B\u8868</td><td>object</td><td>-</td><td></td></tr><tr><td>iconfont</td><td>\u81EA\u5B9A\u4E49\u9009\u4E2D\u56FE\u6807</td><td>object</td><td>-</td><td></td></tr><tr><td>show</td><td>\u5C55\u5F00\u4E0B\u62C9\u7684\u56DE\u8C03</td><td>function</td><td>-</td><td>-</td></tr><tr><td>hide</td><td>\u9690\u85CF\u4E0B\u62C9\u7684\u56DE\u8C03</td><td>function</td><td>-</td><td>-</td></tr><tr><td>template</td><td>\u81EA\u5B9A\u4E49\u6E32\u67D3\u9009\u9879</td><td>function({ item, sels, name, value })</td><td>-</td><td>-</td></tr><tr><td>on</td><td>\u76D1\u542C\u9009\u4E2D\u53D8\u5316</td><td>function({ arr, change, isAdd })</td><td>-</td><td>-</td></tr><tr><td>max</td><td>\u8BBE\u7F6E\u591A\u9009\u9009\u4E2D\u4E0A\u9650</td><td>int</td><td>-</td><td>0</td></tr><tr><td>maxMethod</td><td>\u8FBE\u5230\u9009\u4E2D\u4E0A\u9650\u7684\u56DE\u5230</td><td>function(sels, item), sels: \u5DF2\u9009\u4E2D\u6570\u636E, item: \u5F53\u524D\u9009\u4E2D\u7684\u503C</td><td>-</td><td>-</td></tr><tr><td>name</td><td>\u8868\u5355\u63D0\u4EA4\u65F6\u7684name</td><td>string</td><td>-</td><td>select</td></tr><tr><td>layVerify</td><td>\u8868\u5355\u9A8C\u8BC1, \u540Clayui\u7684lay-verify</td><td>string</td><td>-</td><td>&#39;&#39;</td></tr><tr><td>layVerType</td><td>\u8868\u5355\u9A8C\u8BC1, \u540Clayui\u7684lay-verType</td><td>string</td><td>-</td><td>&#39;&#39;</td></tr><tr><td>layReqText</td><td>\u8868\u5355\u9A8C\u8BC1, \u540Clayui\u7684lay-reqText</td><td>string</td><td>-</td><td>&#39;&#39;</td></tr><tr><td>toolbar</td><td>\u5DE5\u5177\u6761, \u5177\u4F53\u770B\u4E0B\u8868</td><td>object</td><td>-</td><td>-</td></tr><tr><td>showCount</td><td>\u5C55\u793A\u5728\u4E0B\u62C9\u6846\u4E2D\u7684\u6700\u591A\u9009\u9879\u6570\u91CF</td><td>int</td><td>-</td><td>0</td></tr><tr><td>enableKeyboard</td><td>\u662F\u5426\u542F\u7528\u952E\u76D8\u64CD\u4F5C\u9009\u9879</td><td>boolean</td><td>true / false</td><td>true</td></tr><tr><td>enableHoverFirst</td><td>\u662F\u5426\u9ED8\u8BA4\u9009\u4E2D\u7B2C\u4E00\u9879</td><td>boolean</td><td>true / false</td><td>true</td></tr><tr><td>selectedKeyCode</td><td>\u9009\u4E2D\u7684\u952E\u76D8KeyCode</td><td>int</td><td>\u5168\u90E8KeyCode, \u4E5F\u53EFxmSelect.KeyCode.Enter,xmSelect.KeyCode.Space</td><td>13</td></tr><tr><td>autoRow</td><td>\u662F\u5426\u5F00\u542F\u81EA\u52A8\u6362\u884C(\u9009\u9879\u8FC7\u591A\u65F6)</td><td>boolean</td><td>true / false</td><td>false</td></tr><tr><td>size</td><td>\u5C3A\u5BF8</td><td>string</td><td>large / medium / small / mini</td><td>medium</td></tr><tr><td>disabled</td><td>\u662F\u5426\u7981\u7528\u591A\u9009</td><td>boolean</td><td>true / false</td><td>false</td></tr><tr><td>create</td><td>\u521B\u5EFA\u6761\u76EE</td><td>function(val, data), val: \u641C\u7D22\u7684\u6570\u636E, data: \u5F53\u524D\u4E0B\u62C9\u6570\u636E</td><td>-</td><td>null</td></tr><tr><td>tree</td><td>\u6811\u5F62\u7ED3\u6784, \u5177\u4F53\u770B\u4E0B\u8868</td><td>object</td><td>-</td><td>-</td></tr><tr><td>cascader</td><td>\u7EA7\u8054\u7ED3\u6784, \u5177\u4F53\u770B\u4E0B\u8868</td><td>object</td><td>-</td><td>-</td></tr><tr><td>submitConversion</td><td>\u914D\u7F6E\u8868\u5355\u63D0\u4EA4\u6570\u636E</td><td>function(sels, prop), sels: \u5DF2\u9009\u4E2D\u6570\u636E, prop: \u81EA\u5B9A\u4E49\u7684prop</td><td>-</td><td>-</td></tr><tr><td>done</td><td>\u6E32\u67D3\u5B8C\u6210\u56DE\u8C03</td><td>function</td><td>-</td><td>-</td></tr></tbody></table><h2 id="prop" tabindex="-1">prop <a class="header-anchor" href="#prop" aria-hidden="true">#</a></h2><table><thead><tr><th>\u53C2\u6570</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th><th>\u53EF\u9009\u503C</th><th>\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td>name</td><td>\u663E\u793A\u540D\u79F0</td><td>string</td><td>-</td><td>name</td></tr><tr><td>value</td><td>\u9009\u4E2D\u503C, \u5F53\u524D\u591A\u9009\u552F\u4E00</td><td>string</td><td>-</td><td>value</td></tr><tr><td>selected</td><td>\u662F\u5426\u9009\u4E2D</td><td>string</td><td>-</td><td>selected</td></tr><tr><td>disabled</td><td>\u662F\u5426\u7981\u7528</td><td>string</td><td>-</td><td>disabled</td></tr><tr><td>children</td><td>\u5206\u7EC4children</td><td>string</td><td>-</td><td>children</td></tr><tr><td>optgroup</td><td>\u5206\u7EC4optgroup</td><td>string</td><td>-</td><td>optgroup</td></tr></tbody></table><h2 id="\u5206\u7EC4\u8BF4\u660E" tabindex="-1">\u5206\u7EC4\u8BF4\u660E <a class="header-anchor" href="#\u5206\u7EC4\u8BF4\u660E" aria-hidden="true">#</a></h2><p>\u5982\u679Cchildren\u5C5E\u6027\u4E3A\u6570\u7EC4\u7684\u65F6\u5019\u5F00\u542F\u5206\u7EC4\u6A21\u5F0F</p><div class="language-js line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki"><code><span class="line"><span style="color:#ABB2BF;">{name: </span><span style="color:#98C379;">&#39;\u9500\u552E\u5458&#39;</span><span style="color:#ABB2BF;">, children: [</span></span>
<span class="line"><span style="color:#ABB2BF;">	{</span><span style="color:#E06C75;">name</span><span style="color:#ABB2BF;">: </span><span style="color:#98C379;">&#39;\u674E\u56DB&#39;</span><span style="color:#ABB2BF;">, </span><span style="color:#E06C75;">value</span><span style="color:#ABB2BF;">: </span><span style="color:#D19A66;">4</span><span style="color:#ABB2BF;">, </span><span style="color:#E06C75;">selected</span><span style="color:#ABB2BF;">: </span><span style="color:#D19A66;">true</span><span style="color:#ABB2BF;">},</span></span>
<span class="line"><span style="color:#ABB2BF;">	{</span><span style="color:#E06C75;">name</span><span style="color:#ABB2BF;">: </span><span style="color:#98C379;">&#39;\u738B\u4E94&#39;</span><span style="color:#ABB2BF;">, </span><span style="color:#E06C75;">value</span><span style="color:#ABB2BF;">: </span><span style="color:#D19A66;">5</span><span style="color:#ABB2BF;">},</span></span>
<span class="line"><span style="color:#ABB2BF;">]},</span></span>
<span class="line"></span>
<span class="line"><span style="color:#7F848E;">//\u53EF\u5728\u5206\u7EC4\u4E0A\u5B9A\u4E49click\u5C5E\u6027, \u6765\u5B9A\u4E49\u70B9\u51FB\u4E8B\u4EF6</span></span>
<span class="line"><span style="color:#ABB2BF;">{name: </span><span style="color:#98C379;">&#39;\u9009\u4E2D&#39;</span><span style="color:#ABB2BF;">, children: [...], click: </span><span style="color:#98C379;">&#39;SELECT&#39;</span><span style="color:#ABB2BF;">},</span></span>
<span class="line"><span style="color:#ABB2BF;">{name: </span><span style="color:#98C379;">&#39;\u6E05\u7A7A&#39;</span><span style="color:#ABB2BF;">, children: [...], click: </span><span style="color:#98C379;">&#39;CLEAR&#39;</span><span style="color:#ABB2BF;">},</span></span>
<span class="line"><span style="color:#ABB2BF;">{name: </span><span style="color:#98C379;">&#39;\u81EA\u52A8&#39;</span><span style="color:#ABB2BF;">, children: [...], click: </span><span style="color:#98C379;">&#39;AUTO&#39;</span><span style="color:#ABB2BF;">},</span></span>
<span class="line"><span style="color:#ABB2BF;">{name: </span><span style="color:#98C379;">&#39;\u81EA\u5B9A\u4E49&#39;</span><span style="color:#ABB2BF;">, children: [...], click: </span><span style="color:#C678DD;">function</span><span style="color:#ABB2BF;">(</span><span style="color:#E06C75;">item</span><span style="color:#ABB2BF;">){</span></span>
<span class="line"><span style="color:#ABB2BF;">	</span><span style="color:#61AFEF;">alert</span><span style="color:#ABB2BF;">(</span><span style="color:#98C379;">&#39;\u81EA\u5B9A\u4E49\u7684, \u60F3\u5E72\u561B\u5E72\u561B&#39;</span><span style="color:#ABB2BF;">);</span></span>
<span class="line"><span style="color:#ABB2BF;">}},</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br></div></div><h2 id="theme" tabindex="-1">theme <a class="header-anchor" href="#theme" aria-hidden="true">#</a></h2><table><thead><tr><th>\u53C2\u6570</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th><th>\u53EF\u9009\u503C</th><th>\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td>color</td><td>\u4E3B\u9898\u989C\u8272</td><td>string</td><td>-</td><td>#009688</td></tr><tr><td>maxColor</td><td>\u9009\u4E2D\u4E0A\u9650\u95EA\u70C1\u8FB9\u6846\u989C\u8272</td><td>string</td><td>-</td><td>#e54d42</td></tr><tr><td>hover</td><td>\u952E\u76D8\u64CD\u4F5C\u7684\u80CC\u666F\u8272</td><td>string</td><td>-</td><td>#f2f2f2</td></tr></tbody></table><h2 id="model" tabindex="-1">model <a class="header-anchor" href="#model" aria-hidden="true">#</a></h2><p>\u76EE\u524D\u4EC5\u914D\u7F6Elabel\u5373\u53EF</p><div class="language-js line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki"><code><span class="line"><span style="color:#ABB2BF;">model: {</span></span>
<span class="line"><span style="color:#ABB2BF;">	</span><span style="color:#7F848E;">//\u662F\u5426\u5C55\u793A\u590D\u9009\u6846\u6216\u8005\u5355\u9009\u6846\u56FE\u6807 show, hidden:\u53D8\u6362\u80CC\u666F\u8272</span></span>
<span class="line"><span style="color:#ABB2BF;">	icon: </span><span style="color:#98C379;">&#39;show&#39;</span><span style="color:#ABB2BF;">,</span></span>
<span class="line"><span style="color:#ABB2BF;">	label: {</span></span>
<span class="line"><span style="color:#ABB2BF;">		</span><span style="color:#7F848E;">//\u4F7F\u7528\u65B9\u5F0F</span></span>
<span class="line"><span style="color:#ABB2BF;">		type: </span><span style="color:#98C379;">&#39;block&#39;</span><span style="color:#ABB2BF;">,</span></span>
<span class="line"><span style="color:#ABB2BF;">		</span><span style="color:#7F848E;">//\u4F7F\u7528\u5B57\u7B26\u4E32\u62FC\u63A5\u7684\u65B9\u5F0F</span></span>
<span class="line"><span style="color:#ABB2BF;">		text: {</span></span>
<span class="line"><span style="color:#ABB2BF;">			</span><span style="color:#7F848E;">//\u5DE6\u8FB9\u62FC\u63A5\u7684\u5B57\u7B26</span></span>
<span class="line"><span style="color:#ABB2BF;">			left: </span><span style="color:#98C379;">&#39;&#39;</span><span style="color:#ABB2BF;">,</span></span>
<span class="line"><span style="color:#ABB2BF;">			</span><span style="color:#7F848E;">//\u53F3\u8FB9\u62FC\u63A5\u7684\u5B57\u7B26</span></span>
<span class="line"><span style="color:#ABB2BF;">			right: </span><span style="color:#98C379;">&#39;&#39;</span><span style="color:#ABB2BF;">,</span></span>
<span class="line"><span style="color:#ABB2BF;">			</span><span style="color:#7F848E;">//\u4E2D\u95F4\u7684\u5206\u9694\u7B26</span></span>
<span class="line"><span style="color:#ABB2BF;">			separator: </span><span style="color:#98C379;">&#39;, &#39;</span><span style="color:#ABB2BF;">,</span></span>
<span class="line"><span style="color:#ABB2BF;">		},</span></span>
<span class="line"><span style="color:#ABB2BF;">		</span><span style="color:#7F848E;">//\u4F7F\u7528\u65B9\u5757\u663E\u793A</span></span>
<span class="line"><span style="color:#ABB2BF;">		block: {</span></span>
<span class="line"><span style="color:#ABB2BF;">			</span><span style="color:#7F848E;">//\u6700\u5927\u663E\u793A\u6570\u91CF, 0:\u4E0D\u9650\u5236</span></span>
<span class="line"><span style="color:#ABB2BF;">			showCount: </span><span style="color:#D19A66;">0</span><span style="color:#ABB2BF;">,</span></span>
<span class="line"><span style="color:#ABB2BF;">			</span><span style="color:#7F848E;">//\u662F\u5426\u663E\u793A\u5220\u9664\u56FE\u6807</span></span>
<span class="line"><span style="color:#ABB2BF;">			showIcon: </span><span style="color:#D19A66;">true</span><span style="color:#ABB2BF;">,</span></span>
<span class="line"><span style="color:#ABB2BF;">			</span><span style="color:#7F848E;">//\u81EA\u5B9A\u4E49\u6E32\u67D3label, \u9ED8\u8BA4\u6E32\u67D3name, \u56DE\u8C03\u53C2\u6570(item, sels)</span></span>
<span class="line"><span style="color:#ABB2BF;">			template: </span><span style="color:#D19A66;">null</span><span style="color:#ABB2BF;">,</span></span>
<span class="line"><span style="color:#ABB2BF;">		},</span></span>
<span class="line"><span style="color:#ABB2BF;">		</span><span style="color:#7F848E;">//\u81EA\u5B9A\u4E49\u6587\u5B57</span></span>
<span class="line"><span style="color:#ABB2BF;">		count: {</span></span>
<span class="line"><span style="color:#ABB2BF;">			</span><span style="color:#7F848E;">//\u51FD\u6570\u5904\u7406</span></span>
<span class="line"><span style="color:#ABB2BF;">			</span><span style="color:#61AFEF;">template</span><span style="color:#ABB2BF;">(</span><span style="color:#E06C75;">data</span><span style="color:#ABB2BF;">, </span><span style="color:#E06C75;">sels</span><span style="color:#ABB2BF;">){</span></span>
<span class="line"><span style="color:#ABB2BF;">				</span><span style="color:#7F848E;">//data: \u6240\u6709\u7684\u6570\u636E</span></span>
<span class="line"><span style="color:#ABB2BF;">				</span><span style="color:#7F848E;">//sels: \u9009\u4E2D\u7684\u6570\u636E</span></span>
<span class="line"><span style="color:#ABB2BF;">				</span><span style="color:#C678DD;">return</span><span style="color:#ABB2BF;"> </span><span style="color:#98C379;">\`\u5DF2\u9009\u4E2D </span><span style="color:#C678DD;">\${</span><span style="color:#E5C07B;">sels</span><span style="color:#ABB2BF;">.</span><span style="color:#E06C75;">length</span><span style="color:#C678DD;">}</span><span style="color:#98C379;"> \u9879, \u5171 </span><span style="color:#C678DD;">\${</span><span style="color:#E5C07B;">data</span><span style="color:#ABB2BF;">.</span><span style="color:#E06C75;">length</span><span style="color:#C678DD;">}</span><span style="color:#98C379;"> \u9879\`</span></span>
<span class="line"><span style="color:#ABB2BF;">			}</span></span>
<span class="line"><span style="color:#ABB2BF;">		},</span></span>
<span class="line"><span style="color:#ABB2BF;">	},</span></span>
<span class="line"><span style="color:#ABB2BF;">	</span><span style="color:#7F848E;">//\u5C55\u793A\u7C7B\u578B, \u4E0B\u62C9\u6846\u5F62\u5F0F: absolute, \u76F4\u63A5\u663E\u793A\u6A21\u5F0F: relative, \u6D6E\u52A8\u5E03\u5C40: fixed</span></span>
<span class="line"><span style="color:#ABB2BF;">	type: </span><span style="color:#98C379;">&#39;absolute&#39;</span><span style="color:#ABB2BF;">, </span></span>
<span class="line"><span style="color:#ABB2BF;">},</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br></div></div><h2 id="iconfont" tabindex="-1">iconfont <a class="header-anchor" href="#iconfont" aria-hidden="true">#</a></h2><table><thead><tr><th>\u53C2\u6570</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th><th>\u53EF\u9009\u503C</th><th>\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td>select</td><td>\u9009\u4E2D\u56FE\u6807</td><td>string</td><td>-</td><td>-</td></tr><tr><td>unselect</td><td>\u975E\u9009\u4E2D\u56FE\u6807</td><td>string</td><td>-</td><td>-</td></tr><tr><td>half</td><td>\u534A\u9009\u56FE\u6807</td><td>string</td><td>-</td><td>-</td></tr><tr><td>parent</td><td>\u7236\u8282\u70B9\u56FE\u6807, \u503C\u4E3Ahidden\u65F6, \u9690\u85CF</td><td>string</td><td>-</td><td>-</td></tr></tbody></table><h2 id="toolbar" tabindex="-1">toolbar <a class="header-anchor" href="#toolbar" aria-hidden="true">#</a></h2><table><thead><tr><th>\u53C2\u6570</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th><th>\u53EF\u9009\u503C</th><th>\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td>show</td><td>\u662F\u5426\u5C55\u793A\u5DE5\u5177\u6761</td><td>boolean</td><td>true / false</td><td>false</td></tr><tr><td>showIcon</td><td>\u662F\u5426\u663E\u793A\u5DE5\u5177\u56FE\u6807</td><td>boolean</td><td>true / false</td><td>true</td></tr><tr><td>list</td><td>\u5DE5\u5177\u6761\u6570\u7EC4 (\u9ED8\u8BA4\u6709 \u5168\u9009/\u6E05\u7A7A, \u53EF\u4EE5\u81EA\u5B9A\u4E49), \u8FD8\u6709 REVERSE:\u53CD\u9009</td><td>array</td><td>ALL, CLEAR, REVERSE</td><td>[ &quot;ALL&quot;, &quot;CLEAR&quot; ]</td></tr></tbody></table><blockquote><p>\u81EA\u5B9A\u4E49\u65B9\u5F0F</p></blockquote><div class="language-js line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki"><code><span class="line"><span style="color:#ABB2BF;">list: [ </span><span style="color:#98C379;">&quot;ALL&quot;</span><span style="color:#ABB2BF;">, </span><span style="color:#98C379;">&quot;CLEAR&quot;</span><span style="color:#ABB2BF;">, </span></span>
<span class="line"><span style="color:#ABB2BF;">	{</span></span>
<span class="line"><span style="color:#ABB2BF;">		</span><span style="color:#7F848E;">//\u663E\u793A\u56FE\u6807, \u53EF\u4EE5\u662Flayui\u5185\u7F6E\u7684\u56FE\u6807, \u4E5F\u53EF\u4EE5\u662F\u81EA\u5DF1\u5F15\u5165\u7684\u56FE\u6807</span></span>
<span class="line"><span style="color:#ABB2BF;">		</span><span style="color:#7F848E;">//\u4F20\u5165\u7684icon\u4F1A\u8F6C\u5316\u4E3A &lt;i class=&quot;layui-icon layui-icon-face-smile&quot;&gt;&lt;/i&gt;</span></span>
<span class="line"><span style="color:#ABB2BF;">		</span><span style="color:#E06C75;">icon</span><span style="color:#ABB2BF;">: </span><span style="color:#98C379;">&#39;layui-icon layui-icon-face-smile&#39;</span><span style="color:#ABB2BF;">,</span></span>
<span class="line"><span style="color:#ABB2BF;">		</span><span style="color:#7F848E;">//\u663E\u793A\u540D\u79F0 </span></span>
<span class="line"><span style="color:#ABB2BF;">		</span><span style="color:#E06C75;">name</span><span style="color:#ABB2BF;">: </span><span style="color:#98C379;">&#39;xxx&#39;</span><span style="color:#ABB2BF;">,</span></span>
<span class="line"><span style="color:#ABB2BF;">		</span><span style="color:#7F848E;">//\u70B9\u51FB\u65F6\u89E6\u53D1\u7684\u56DE\u8C03</span></span>
<span class="line"><span style="color:#ABB2BF;">		</span><span style="color:#61AFEF;">method</span><span style="color:#ABB2BF;">: </span><span style="color:#C678DD;">function</span><span style="color:#ABB2BF;">(</span><span style="color:#E06C75;">data</span><span style="color:#ABB2BF;">){</span></span>
<span class="line"><span style="color:#ABB2BF;">			</span><span style="color:#7F848E;">//data \u5F53\u524D\u9875\u9762\u7684\u6570\u636E</span></span>
<span class="line"><span style="color:#ABB2BF;">			</span></span>
<span class="line"><span style="color:#ABB2BF;">		}</span></span>
<span class="line"><span style="color:#ABB2BF;">	} </span></span>
<span class="line"><span style="color:#ABB2BF;">]</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br></div></div><h2 id="tree" tabindex="-1">tree <a class="header-anchor" href="#tree" aria-hidden="true">#</a></h2><table><thead><tr><th>\u53C2\u6570</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th><th>\u53EF\u9009\u503C</th><th>\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td>show</td><td>\u662F\u5426\u5C55\u793A\u4E3A\u6811\u72B6\u7ED3\u6784</td><td>boolean</td><td>true / false</td><td>false</td></tr><tr><td>showFolderIcon</td><td>\u662F\u5426\u663E\u793A\u8282\u70B9\u524D\u7684\u4E09\u89D2\u56FE\u6807</td><td>boolean</td><td>true / false</td><td>true</td></tr><tr><td>showLine</td><td>\u662F\u5426\u663E\u793A\u865A\u7EBF</td><td>boolean</td><td>true / false</td><td>true</td></tr><tr><td>indent</td><td>\u95F4\u8DDD</td><td>int</td><td>-</td><td>20</td></tr><tr><td>expandedKeys</td><td>\u9ED8\u8BA4\u5C55\u5F00\u7684\u8282\u70B9\u6570\u7EC4, \u4E3Atrue\u65F6\u5C55\u5F00\u6240\u6709\u8282\u70B9</td><td>array / boolean</td><td>-</td><td>[ ]</td></tr><tr><td>strict</td><td>\u662F\u5426\u9075\u5FAA\u4E25\u683C\u7236\u5B50\u7ED3\u6784</td><td>boolean</td><td>true / false</td><td>true</td></tr><tr><td>simple</td><td>\u662F\u5426\u5F00\u542F\u6781\u7B80\u6A21\u5F0F</td><td>boolean</td><td>true / false</td><td>false</td></tr><tr><td>nodeType</td><td>\u6807\u6CE8\u8282\u70B9\u7C7B\u578B\u7684key</td><td>string</td><td>leaf: \u53F6\u5B50\u8282\u70B9, parent: \u7236\u8282\u70B9, half: \u534A\u9009\u8282\u70B9</td><td>__node_type</td></tr><tr><td>clickExpand</td><td>\u70B9\u51FB\u8282\u70B9\u662F\u5426\u5C55\u5F00, false\u65F6\u70B9\u51FB\u4E09\u89D2\u7BAD\u5934\u8FDB\u884C\u5C55\u5F00\u64CD\u4F5C</td><td>boolean</td><td>true / false</td><td>true</td></tr><tr><td>clickCheck</td><td>\u70B9\u51FB\u8282\u70B9\u662F\u5426\u9009\u4E2D, false\u65F6\u70B9\u51FB\u590D\u9009\u6846\u8FDB\u884C\u9009\u4E2D\u64CD\u4F5C</td><td>boolean</td><td>true / false</td><td>true</td></tr></tbody></table><h2 id="cascader" tabindex="-1">cascader <a class="header-anchor" href="#cascader" aria-hidden="true">#</a></h2><table><thead><tr><th>\u53C2\u6570</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th><th>\u53EF\u9009\u503C</th><th>\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td>show</td><td>\u662F\u5426\u5C55\u793A\u4E3A\u7EA7\u8054\u7ED3\u6784</td><td>boolean</td><td>true / false</td><td>false</td></tr><tr><td>indent</td><td>\u6BCF\u4E00\u7EA7\u7684\u5BBD\u5EA6</td><td>int</td><td>-</td><td>100</td></tr><tr><td>strict</td><td>\u662F\u5426\u9075\u5FAA\u4E25\u683C\u7236\u5B50\u7ED3\u6784</td><td>boolean</td><td>true / false</td><td>true</td></tr></tbody></table><h2 id="\u5168\u5C40\u65B9\u6CD5" tabindex="-1">\u5168\u5C40\u65B9\u6CD5 <a class="header-anchor" href="#\u5168\u5C40\u65B9\u6CD5" aria-hidden="true">#</a></h2><table><thead><tr><th>\u4E8B\u4EF6\u540D</th><th>\u8BF4\u660E</th><th>\u53C2\u6570</th><th>\u8FD4\u56DE\u503C</th></tr></thead><tbody><tr><td>render</td><td>\u6E32\u67D3\u591A\u9009</td><td>(options: \u914D\u7F6E\u9879)</td><td>\u5B9E\u4F8B\u5BF9\u8C61</td></tr><tr><td>get</td><td>\u83B7\u53D6\u9875\u9762\u4E2D\u5DF2\u7ECF\u6E32\u67D3\u7684\u591A\u9009</td><td>(filter: \u8FC7\u6EE4<code>el</code>, single: \u662F\u5426\u8FD4\u56DE\u5355\u5B9E\u4F8B)</td><td>\u7B26\u5408\u6761\u4EF6\u7684\u5B9E\u4F8B\u6570\u7EC4</td></tr><tr><td>batch</td><td>\u6279\u91CF\u64CD\u4F5C\u5DF2\u6E32\u67D3\u7684\u591A\u9009</td><td>(filter: \u8FC7\u6EE4<code>el</code>, method: \u65B9\u6CD5, ...\u65B9\u6CD5\u53C2\u6570)</td><td>\u7B26\u5408\u6761\u4EF6\u7684\u5B9E\u4F8B\u6570\u7EC4</td></tr><tr><td>arr2tree</td><td>\u628A\u5217\u8868\u6570\u636E\u8F6C\u5316\u4E3A\u6811\u72B6\u7ED3\u6784</td><td>(arr: \u6570\u636E, pid: \u7236\u8282\u70B9ID\u7684key, id: \u5BF9\u5E94key, children: \u5BF9\u5E94key, topParentId: \u9876\u7EA7\u8282\u70B9\u7684ID)</td><td>\u7B26\u5408\u6761\u4EF6\u7684\u6570\u7EC4</td></tr></tbody></table><div class="language-js line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki"><code><span class="line"><span style="color:#7F848E;">//render \u4F7F\u7528\u65B9\u5F0F</span></span>
<span class="line"><span style="color:#E5C07B;">xmSelect</span><span style="color:#ABB2BF;">.</span><span style="color:#61AFEF;">render</span><span style="color:#ABB2BF;">(</span><span style="color:#E5C07B;">OPTIONS</span><span style="color:#ABB2BF;">);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#7F848E;">//get \u4F7F\u7528\u65B9\u5F0F</span></span>
<span class="line"><span style="color:#E5C07B;">xmSelect</span><span style="color:#ABB2BF;">.</span><span style="color:#61AFEF;">get</span><span style="color:#ABB2BF;">(</span><span style="color:#98C379;">&#39;#demo1&#39;</span><span style="color:#ABB2BF;">);	 </span><span style="color:#7F848E;">//\u6307\u5B9A\u67D0\u4E00\u4E2A\u83B7\u53D6</span></span>
<span class="line"><span style="color:#E5C07B;">xmSelect</span><span style="color:#ABB2BF;">.</span><span style="color:#61AFEF;">get</span><span style="color:#ABB2BF;">(</span><span style="color:#E06C75;">/.</span><span style="color:#D19A66;">*</span><span style="color:#E06C75;">demo1.</span><span style="color:#D19A66;">*</span><span style="color:#E06C75;">/</span><span style="color:#ABB2BF;">);  </span><span style="color:#7F848E;">//\u6B63\u5219\u83B7\u53D6</span></span>
<span class="line"><span style="color:#7F848E;">//\u81EA\u5B9A\u4E49\u65B9\u6CD5\u83B7\u53D6</span></span>
<span class="line"><span style="color:#E5C07B;">xmSelect</span><span style="color:#ABB2BF;">.</span><span style="color:#61AFEF;">get</span><span style="color:#ABB2BF;">(</span><span style="color:#C678DD;">function</span><span style="color:#ABB2BF;">(</span><span style="color:#E06C75;">el</span><span style="color:#ABB2BF;">){</span></span>
<span class="line"><span style="color:#ABB2BF;">	</span><span style="color:#C678DD;">return</span><span style="color:#ABB2BF;"> </span><span style="color:#E06C75;">el</span><span style="color:#ABB2BF;"> </span><span style="color:#56B6C2;">==</span><span style="color:#ABB2BF;"> </span><span style="color:#98C379;">&#39;#demo1&#39;</span><span style="color:#ABB2BF;"> </span><span style="color:#56B6C2;">||</span><span style="color:#ABB2BF;"> </span><span style="color:#E06C75;">el</span><span style="color:#ABB2BF;"> </span><span style="color:#56B6C2;">==</span><span style="color:#ABB2BF;"> </span><span style="color:#98C379;">&#39;#demo2&#39;</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">});  </span></span>
<span class="line"><span style="color:#7F848E;">//\u5355\u5B9E\u4F8B</span></span>
<span class="line"><span style="color:#E5C07B;">xmSelect</span><span style="color:#ABB2BF;">.</span><span style="color:#61AFEF;">get</span><span style="color:#ABB2BF;">(</span><span style="color:#98C379;">&#39;#demo2&#39;</span><span style="color:#ABB2BF;">, </span><span style="color:#D19A66;">true</span><span style="color:#ABB2BF;">);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#7F848E;">//batch \u4F7F\u7528\u65B9\u5F0F</span></span>
<span class="line"><span style="color:#7F848E;">//\u6279\u91CF\u6267\u884C\u7981\u7528</span></span>
<span class="line"><span style="color:#E5C07B;">xmSelect</span><span style="color:#ABB2BF;">.</span><span style="color:#61AFEF;">batch</span><span style="color:#ABB2BF;">(</span><span style="color:#E06C75;">/.</span><span style="color:#D19A66;">*</span><span style="color:#E06C75;">demo/</span><span style="color:#ABB2BF;">, </span><span style="color:#98C379;">&#39;update&#39;</span><span style="color:#ABB2BF;">, {</span></span>
<span class="line"><span style="color:#ABB2BF;">	</span><span style="color:#E06C75;">disabled</span><span style="color:#ABB2BF;">: </span><span style="color:#D19A66;">true</span><span style="color:#ABB2BF;">,</span></span>
<span class="line"><span style="color:#ABB2BF;">});   </span></span>
<span class="line"><span style="color:#7F848E;">//\u6279\u91CF\u6267\u884Cwarning</span></span>
<span class="line"><span style="color:#E5C07B;">xmSelect</span><span style="color:#ABB2BF;">.</span><span style="color:#61AFEF;">batch</span><span style="color:#ABB2BF;">(</span><span style="color:#E06C75;">/.</span><span style="color:#D19A66;">*</span><span style="color:#E06C75;">demo/</span><span style="color:#ABB2BF;">, </span><span style="color:#98C379;">&#39;warning&#39;</span><span style="color:#ABB2BF;">, </span><span style="color:#98C379;">&#39;#F00&#39;</span><span style="color:#ABB2BF;">, </span><span style="color:#D19A66;">true</span><span style="color:#ABB2BF;">);   </span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br></div></div><h2 id="\u5B9E\u4F8B\u65B9\u6CD5" tabindex="-1">\u5B9E\u4F8B\u65B9\u6CD5 <a class="header-anchor" href="#\u5B9E\u4F8B\u65B9\u6CD5" aria-hidden="true">#</a></h2><div class="warning custom-block"><p class="custom-block-title">WARNING</p><p>xmSelect.render()\u540E\u4F1A\u8FD4\u56DE\u4E00\u4E2AxmSelect\u5BF9\u8C61, \u53EF\u4EE5\u8FDB\u884C\u65B9\u6CD5\u8C03\u7528</p></div><table><thead><tr><th>\u4E8B\u4EF6\u540D</th><th>\u8BF4\u660E</th><th>\u53C2\u6570</th></tr></thead><tbody><tr><td>getValue</td><td>\u83B7\u53D6\u5F53\u524D\u9009\u4E2D\u7684\u6570\u636E</td><td>(type: \u7C7B\u578B), \u53EF\u9009\u503C: name, nameStr, value, valueStr</td></tr><tr><td>setValue</td><td>\u52A8\u6001\u8BBE\u7F6E\u6570\u636E</td><td>(array: \u9009\u4E2D\u7684\u6570\u636E, show: \u662F\u5426\u5C55\u5F00\u4E0B\u62C9,\u4E0D\u4F20\u9ED8\u8BA4\u5F53\u524D\u663E\u793A\u72B6\u6001,\u53D6\u503C: true/false, listenOn: \u662F\u5426\u89E6\u53D1on\u7684\u76D1\u542C, \u9ED8\u8BA4false)</td></tr><tr><td>append</td><td>\u8FFD\u52A0\u8D4B\u503C</td><td>(array: \u8FFD\u52A0\u7684\u6570\u636E)</td></tr><tr><td>delete</td><td>\u5220\u9664\u8D4B\u503C</td><td>(array: \u5220\u9664\u7684\u6570\u636E)</td></tr><tr><td>opened</td><td>\u4E3B\u52A8\u5C55\u5F00\u4E0B\u62C9</td><td>-</td></tr><tr><td>closed</td><td>\u4E3B\u52A8\u5173\u95ED\u4E0B\u62C9</td><td>-</td></tr><tr><td>reset</td><td>\u91CD\u7F6E\u4E3A\u4E0A\u4E00\u6B21\u7684render\u72B6\u6001</td><td>-</td></tr><tr><td>update</td><td>\u66F4\u65B0\u591A\u9009\u9009\u4E2D, reset\u4E0D\u4FDD\u7559</td><td>(options: \u89C1\u914D\u7F6E\u9879)</td></tr><tr><td>warning</td><td>\u8B66\u544A</td><td>(color: \u9ED8\u8BA4\u540Ctheme.maxColor, sustain: \u662F\u5426\u6301\u7EED\u663E\u793A)</td></tr><tr><td>getTreeValue</td><td>\u6811\u8282\u70B9\u6A21\u5F0F\u4E0B\u83B7\u53D6\u6570\u636E, v1.2.0 \u65B0\u589E</td><td>(leafOnly: \u662F\u5426\u53EA\u662F\u53F6\u5B50\u8282\u70B9\uFF0C\u9ED8\u8BA4\u503C\u4E3A false, includeHalfChecked: \u662F\u5426\u5305\u542B\u534A\u9009\u8282\u70B9\uFF0C\u9ED8\u8BA4\u503C\u4E3A false)</td></tr><tr><td>changeExpandedKeys</td><td>\u6811\u6A21\u5F0F\u4E0B\u66F4\u65B0\u8282\u70B9\u5C55\u5F00\u72B6\u6001, v1.2.0 \u65B0\u589E</td><td>(keys: true-\u5168\u90E8\u5C55\u5F00, false-\u5168\u90E8\u5173\u95ED, \u6570\u7EC4-\u5C55\u5F00\u7684\u8282\u70B9\u503C)</td></tr><tr><td>enable</td><td>\u542F\u7528\u9009\u9879, disabled=false, v1.2.0 \u65B0\u589E</td><td>(array: \u60F3\u8981\u542F\u7528\u7684\u9009\u9879\u6570\u7EC4)</td></tr><tr><td>disable</td><td>\u7981\u7528\u7528\u9009\u9879, disabled=true, v1.2.0 \u65B0\u589E</td><td>(array: \u60F3\u8981\u7981\u7528\u7684\u9009\u9879\u6570\u7EC4)</td></tr><tr><td>calcPosition</td><td>fixed\u5E03\u5C40\u6A21\u5F0F\u4E0B\u91CD\u65B0\u8BA1\u7B97\u4F4D\u7F6E, v1.2.2 \u65B0\u589E</td><td>-</td></tr></tbody></table>`,29),d=[e];function p(r,o,c,i,B,y){return n(),s("div",null,d)}const u=t(l,[["render",p]]);export{h as __pageData,u as default};
