import{_ as s,o as a,c as n,Q as e}from"./chunks/framework.237f4aa8.js";const m=JSON.parse('{"title":"问题和解决","description":"","frontmatter":{},"headers":[],"relativePath":"handbook/git/problem.md","lastUpdated":1670515610000}'),l={name:"handbook/git/problem.md"},o=e(`<h1 id="问题和解决" tabindex="-1">问题和解决 <a class="header-anchor" href="#问题和解决" aria-label="Permalink to &quot;问题和解决&quot;">​</a></h1><h2 id="" tabindex="-1"><a class="header-anchor" href="#" aria-label="Permalink to &quot;&quot;">​</a></h2><h3 id="【问题一】-ssh-connect-to-host-github-com-port-22-connection-timed-out" tabindex="-1">【问题一】“ssh:connect to host github.com port 22: Connection timed out” <a class="header-anchor" href="#【问题一】-ssh-connect-to-host-github-com-port-22-connection-timed-out" aria-label="Permalink to &quot;【问题一】“ssh:connect to host github.com port 22: Connection timed out”&quot;">​</a></h3><p>解决方法：</p><ol><li>进入 <code>.ssh</code> 目录</li></ol><div class="language-sh line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki one-dark-pro"><code><span class="line"><span style="color:#56B6C2;">cd</span><span style="color:#ABB2BF;"> </span><span style="color:#98C379;">~/.ssh</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><ol start="2"><li>编辑config文件</li></ol><div class="language-sh line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki one-dark-pro"><code><span class="line"><span style="color:#ABB2BF;">vim </span><span style="color:#98C379;">config</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><ol start="3"><li>编辑内容，添加2、3两行</li></ol><div class="language-text line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">text</span><pre class="shiki one-dark-pro has-highlighted-lines"><code><span class="line"><span style="color:#abb2bf;">Host github.com</span></span>
<span class="line highlighted"><span style="color:#abb2bf;">Hostname ssh.github.com</span></span>
<span class="line highlighted"><span style="color:#abb2bf;">Port 443</span></span>
<span class="line"><span style="color:#abb2bf;">AddKeysToAgent yes</span></span>
<span class="line"><span style="color:#abb2bf;">UseKeychain yes</span></span>
<span class="line"><span style="color:#abb2bf;">PreferredAuthentications publickey</span></span>
<span class="line"><span style="color:#abb2bf;">IdentityFile ~/.ssh/id_ed25519</span></span>
<span class="line"><span style="color:#abb2bf;"></span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><ol start="4"><li>保存退出</li></ol><div class="language-sh line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki one-dark-pro"><code><span class="line"><span style="color:#ABB2BF;">wq!</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><ol start="5"><li>检查是否成功</li></ol><div class="language-sh line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki one-dark-pro"><code><span class="line"><span style="color:#ABB2BF;">ssh </span><span style="color:#D19A66;">-T</span><span style="color:#ABB2BF;"> </span><span style="color:#98C379;">git@github.com</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;"># Hi ur_name! You&#39;ve successfully authenticated, but GitHub does not provide shell access.</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div>`,14),t=[o];function p(i,c,r,d,b,h){return a(),n("div",null,t)}const y=s(l,[["render",p]]);export{m as __pageData,y as default};
