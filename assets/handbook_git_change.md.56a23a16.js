import{_ as r,o as t,c as i,C as a,z as n,Q as o,D as c,x as s,a as l}from"./chunks/framework.237f4aa8.js";const w=JSON.parse('{"title":"账号切换","description":"","frontmatter":{},"headers":[],"relativePath":"handbook/git/change.md","lastUpdated":1667488730000}'),d={name:"handbook/git/change.md"},u=o(`<h1 id="账号切换" tabindex="-1">账号切换 <a class="header-anchor" href="#账号切换" aria-label="Permalink to &quot;账号切换&quot;">​</a></h1><p><strong>分别介绍在MacOS和Windows的实现方法</strong></p><blockquote><p>假设有两个Github账号，已经添加好ssh key公钥至对应账号<br> 👨‍⚕️ 个人： <code>mine.pub</code><br> 🏢 公司： <code>company.pub</code></p></blockquote><h2 id="macos" tabindex="-1">MacOS <a class="header-anchor" href="#macos" aria-label="Permalink to &quot;MacOS&quot;">​</a></h2><h3 id="个人账号" tabindex="-1">个人账号 <a class="header-anchor" href="#个人账号" aria-label="Permalink to &quot;个人账号&quot;">​</a></h3><p>创建sh命令文件 <code>github_mine.sh</code></p><div class="language-sh line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki one-dark-pro"><code><span class="line"><span style="color:#ABB2BF;">cp </span><span style="color:#D19A66;">-Rf</span><span style="color:#ABB2BF;"> </span><span style="color:#98C379;">~/.ssh/mine</span><span style="color:#ABB2BF;"> </span><span style="color:#98C379;">~/.ssh/id_ed25519</span></span>
<span class="line"><span style="color:#ABB2BF;">cp </span><span style="color:#D19A66;">-Rf</span><span style="color:#ABB2BF;"> </span><span style="color:#98C379;">~/.ssh/mine.pub</span><span style="color:#ABB2BF;"> </span><span style="color:#98C379;">~/.ssh/id_ed25519.pub</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><hr><h3 id="公司账号" tabindex="-1">公司账号 <a class="header-anchor" href="#公司账号" aria-label="Permalink to &quot;公司账号&quot;">​</a></h3><p>创建sh命令文件 <code>github_company.sh</code></p><div class="language-sh line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki one-dark-pro"><code><span class="line"><span style="color:#ABB2BF;">cp </span><span style="color:#D19A66;">-Rf</span><span style="color:#ABB2BF;"> </span><span style="color:#98C379;">~/.ssh/company</span><span style="color:#ABB2BF;"> </span><span style="color:#98C379;">~/.ssh/id_ed25519</span></span>
<span class="line"><span style="color:#ABB2BF;">cp </span><span style="color:#D19A66;">-Rf</span><span style="color:#ABB2BF;"> </span><span style="color:#98C379;">~/.ssh/company.pub</span><span style="color:#ABB2BF;"> </span><span style="color:#98C379;">~/.ssh/id_ed25519.pub</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><hr><h3 id="切换操作" tabindex="-1">切换操作 <a class="header-anchor" href="#切换操作" aria-label="Permalink to &quot;切换操作&quot;">​</a></h3><p>根据需要使用的账号，在 <code>~</code> 或 <code>.ssh</code> 目录下，执行上述创建好的命令</p>`,14),y=s("div",{class:"language-sh line-numbers-mode"},[s("button",{title:"Copy Code",class:"copy"}),s("span",{class:"lang"},"sh"),s("pre",{class:"shiki one-dark-pro"},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#ABB2BF"}},"sh "),s("span",{style:{color:"#98C379"}},"github_mine.sh")]),l(`
`),s("span",{class:"line"})])]),s("div",{class:"line-numbers-wrapper","aria-hidden":"true"},[s("span",{class:"line-number"},"1"),s("br")])],-1),h=s("div",{class:"language-sh line-numbers-mode"},[s("button",{title:"Copy Code",class:"copy"}),s("span",{class:"lang"},"sh"),s("pre",{class:"shiki one-dark-pro"},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#ABB2BF"}},"sh "),s("span",{style:{color:"#98C379"}},"github_company.sh")]),l(`
`),s("span",{class:"line"})])]),s("div",{class:"line-numbers-wrapper","aria-hidden":"true"},[s("span",{class:"line-number"},"1"),s("br")])],-1),b=o(`<p>查看 <code>id_ed25519.pub</code> 公钥是否是对应刚执行的sh命令所属公钥</p><div class="language-sh line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki one-dark-pro"><code><span class="line"><span style="color:#ABB2BF;">cat </span><span style="color:#98C379;">~/.ssh/id_ed25519.pub</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>验证账号是否切换成功，在终端（Terminal）中执行以下命令。</p><div class="language-sh line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki one-dark-pro"><code><span class="line"><span style="color:#ABB2BF;">ssh </span><span style="color:#D19A66;">-T</span><span style="color:#ABB2BF;"> </span><span style="color:#98C379;">git@github.com</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;"># Hi ur_name! You&#39;ve successfully authenticated, but GitHub does not provide shell access.</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p>若显示 <code>Hi ur_name! You&#39;ve successfully authenticated, but GitHub does not provide shell access.</code> ，且 <code>ur_name</code> 为执行命令对应的账号用户名，则表示切换成功，您可以对该账号仓库进行操作了🎊。</p><h2 id="windows" tabindex="-1">Windows <a class="header-anchor" href="#windows" aria-label="Permalink to &quot;Windows&quot;">​</a></h2><h3 id="个人账号-1" tabindex="-1">个人账号 <a class="header-anchor" href="#个人账号-1" aria-label="Permalink to &quot;个人账号&quot;">​</a></h3><p>创建bat批处理文件 <code>github_mine.bat</code></p><div class="language-sh line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki one-dark-pro"><code><span class="line"><span style="color:#ABB2BF;">copy </span><span style="color:#98C379;">C:</span><span style="color:#56B6C2;">\\U</span><span style="color:#98C379;">sers</span><span style="color:#56B6C2;">\\A</span><span style="color:#98C379;">dministrator</span><span style="color:#56B6C2;">\\.</span><span style="color:#98C379;">ssh</span><span style="color:#56B6C2;">\\m</span><span style="color:#98C379;">ine</span><span style="color:#ABB2BF;"> </span><span style="color:#98C379;">C:</span><span style="color:#56B6C2;">\\U</span><span style="color:#98C379;">sers</span><span style="color:#56B6C2;">\\A</span><span style="color:#98C379;">dministrator</span><span style="color:#56B6C2;">\\.</span><span style="color:#98C379;">ssh</span><span style="color:#56B6C2;">\\i</span><span style="color:#98C379;">d_ed25519</span><span style="color:#ABB2BF;"> </span><span style="color:#98C379;">/Y</span></span>
<span class="line"><span style="color:#ABB2BF;">copy </span><span style="color:#98C379;">C:</span><span style="color:#56B6C2;">\\U</span><span style="color:#98C379;">sers</span><span style="color:#56B6C2;">\\A</span><span style="color:#98C379;">dministrator</span><span style="color:#56B6C2;">\\.</span><span style="color:#98C379;">ssh</span><span style="color:#56B6C2;">\\m</span><span style="color:#98C379;">ine.pub</span><span style="color:#ABB2BF;"> </span><span style="color:#98C379;">C:</span><span style="color:#56B6C2;">\\U</span><span style="color:#98C379;">sers</span><span style="color:#56B6C2;">\\A</span><span style="color:#98C379;">dministrator</span><span style="color:#56B6C2;">\\.</span><span style="color:#98C379;">ssh</span><span style="color:#56B6C2;">\\i</span><span style="color:#98C379;">d_ed25519.pub</span><span style="color:#ABB2BF;"> </span><span style="color:#98C379;">/Y</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><hr><h3 id="公司账号-1" tabindex="-1">公司账号 <a class="header-anchor" href="#公司账号-1" aria-label="Permalink to &quot;公司账号&quot;">​</a></h3><p>创建bat批处理文件 <code>github_company.bat</code></p><div class="language-sh line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki one-dark-pro"><code><span class="line"><span style="color:#ABB2BF;">copy </span><span style="color:#98C379;">C:</span><span style="color:#56B6C2;">\\U</span><span style="color:#98C379;">sers</span><span style="color:#56B6C2;">\\A</span><span style="color:#98C379;">dministrator</span><span style="color:#56B6C2;">\\.</span><span style="color:#98C379;">ssh</span><span style="color:#56B6C2;">\\c</span><span style="color:#98C379;">ompany</span><span style="color:#ABB2BF;"> </span><span style="color:#98C379;">C:</span><span style="color:#56B6C2;">\\U</span><span style="color:#98C379;">sers</span><span style="color:#56B6C2;">\\A</span><span style="color:#98C379;">dministrator</span><span style="color:#56B6C2;">\\.</span><span style="color:#98C379;">ssh</span><span style="color:#56B6C2;">\\i</span><span style="color:#98C379;">d_ed25519</span><span style="color:#ABB2BF;"> </span><span style="color:#98C379;">/Y</span></span>
<span class="line"><span style="color:#ABB2BF;">copy </span><span style="color:#98C379;">C:</span><span style="color:#56B6C2;">\\U</span><span style="color:#98C379;">sers</span><span style="color:#56B6C2;">\\A</span><span style="color:#98C379;">dministrator</span><span style="color:#56B6C2;">\\.</span><span style="color:#98C379;">ssh</span><span style="color:#56B6C2;">\\c</span><span style="color:#98C379;">ompany.pub</span><span style="color:#ABB2BF;"> </span><span style="color:#98C379;">C:</span><span style="color:#56B6C2;">\\U</span><span style="color:#98C379;">sers</span><span style="color:#56B6C2;">\\A</span><span style="color:#98C379;">dministrator</span><span style="color:#56B6C2;">\\.</span><span style="color:#98C379;">ssh</span><span style="color:#56B6C2;">\\i</span><span style="color:#98C379;">d_ed25519.pub</span><span style="color:#ABB2BF;"> </span><span style="color:#98C379;">/Y</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><hr><h3 id="环境变量" tabindex="-1">环境变量 <a class="header-anchor" href="#环境变量" aria-label="Permalink to &quot;环境变量&quot;">​</a></h3><p>添加 <code>C:\\Users\\Administrator\\.ssh</code> 至系统环境变量Path</p><div class="warning custom-block"><p class="custom-block-title">WARNING</p><p>不要忘记点击保存！</p></div><p><strong>这样就可以通过bat文件切换公钥</strong></p><hr><h3 id="切换操作-1" tabindex="-1">切换操作 <a class="header-anchor" href="#切换操作-1" aria-label="Permalink to &quot;切换操作&quot;">​</a></h3><div class="tip custom-block"><p class="custom-block-title">TIP</p><p><code>Win + R</code>，输入<code>cmd</code>打开命令提示符</p></div><p>根据需要使用的账号，执行上述创建好的脚本</p>`,22),B=s("div",{class:"language-sh line-numbers-mode"},[s("button",{title:"Copy Code",class:"copy"}),s("span",{class:"lang"},"sh"),s("pre",{class:"shiki one-dark-pro"},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#ABB2BF"}},"github_mine")]),l(`
`),s("span",{class:"line"})])]),s("div",{class:"line-numbers-wrapper","aria-hidden":"true"},[s("span",{class:"line-number"},"1"),s("br")])],-1),C=s("div",{class:"language-sh line-numbers-mode"},[s("button",{title:"Copy Code",class:"copy"}),s("span",{class:"lang"},"sh"),s("pre",{class:"shiki one-dark-pro"},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#ABB2BF"}},"github_company")]),l(`
`),s("span",{class:"line"})])]),s("div",{class:"line-numbers-wrapper","aria-hidden":"true"},[s("span",{class:"line-number"},"1"),s("br")])],-1),m=o(`<p>查看 <code>id_ed25519.pub</code> 公钥是否是对应刚执行的sh命令所属公钥</p><div class="language-sh line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki one-dark-pro"><code><span class="line"><span style="color:#ABB2BF;">cat </span><span style="color:#98C379;">~/.ssh/id_ed25519.pub</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>验证账号是否切换成功，在终端（Terminal）中执行以下命令。</p><div class="language-sh line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki one-dark-pro"><code><span class="line"><span style="color:#ABB2BF;">ssh </span><span style="color:#D19A66;">-T</span><span style="color:#ABB2BF;"> </span><span style="color:#98C379;">git@github.com</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;"># Hi ur_name! You&#39;ve successfully authenticated, but GitHub does not provide shell access.</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p>若显示 <code>Hi ur_name! You&#39;ve successfully authenticated, but GitHub does not provide shell access.</code> ，且 <code>ur_name</code> 为执行命令对应的账号用户名，则表示切换成功，您可以对该账号仓库进行操作了🎊。</p><hr><div class="warning custom-block"><p class="custom-block-title">WARNING</p><p>如果遇到以下 <code>无权限</code>的问题，可通过ssh-add命令将专用密钥添加到ssh-agent的高速缓存中来解决</p></div><div class="language-sh line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki one-dark-pro"><code><span class="line"><span style="color:#7F848E;font-style:italic;"># fatal: Could not read from remote repository.</span></span>
<span class="line"></span>
<span class="line"><span style="color:#7F848E;font-style:italic;"># Please make sure you have the correct access rights</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;"># and the repository exists.</span></span>
<span class="line"></span>
<span class="line"><span style="color:#ABB2BF;">ssh-add </span><span style="color:#98C379;">~/.ssh/id_ed25519</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div>`,8);function _(g,v,A,k,F,f){const e=c("CodeGroupItem"),p=c("CodeGroup");return t(),i("div",null,[u,a(p,null,{default:n(()=>[a(e,{title:"个人"},{default:n(()=>[y]),_:1}),a(e,{title:"公司"},{default:n(()=>[h]),_:1})]),_:1}),b,a(p,null,{default:n(()=>[a(e,{title:"个人"},{default:n(()=>[B]),_:1}),a(e,{title:"公司"},{default:n(()=>[C]),_:1})]),_:1}),m])}const q=r(d,[["render",_]]);export{w as __pageData,q as default};
