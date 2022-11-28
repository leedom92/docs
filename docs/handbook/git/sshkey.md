# SSH公钥

## 生成公钥
你可以使用以下命令生成sshkey：

:::: code-group
::: code-group-item ed25519
```sh
ssh-keygen -t ed25519 -C "ur_email@example.com"
```
:::
::: code-group-item rsa
```sh
ssh-keygen -t rsa -b 4096 -C "ur_email@example.com"
```
:::
::::

::: warning
**如果您使用的是不支持 Ed25519 算法的旧系统，请使用第二种 `rsa` 。**   
这里的 ur_email@example.com 只是生成的 sshkey 的名称，并不约束或要求具体命名为某个邮箱。
:::

按照提示完成三次回车，即可生成shh key。通过查看 ~/.ssh/id_ed25519.pub 文件内容，获取到你的 public key 公钥

```sh
cat ~/.ssh/id_ed25519.pub
# ssh-ed25519 AAAAB3NzaC1yc2EAAAADAQABAAABAQC6eNtGpNGwstc....
```

## 添加公钥
>**以Github为例**

复制生成后的 ssh key，通过个人中心 「setting」->「SSH and GPG keys」->「New SSH key」，添加生成的 public key 添加到SSH keys中。

![添加公钥至github](https://fuckjs.gitee.io/cdn/docs-leedom-me/add-public-key.png)

添加后，在终端（Terminal）中输入
```sh
ssh -T git@github.com
# Hi XXX! You've successfully authenticated, but GitHub does not provide shell access.
```
首次使用需要确认并添加主机到本机SSH可信列表。若返回 `Hi XXX! You've successfully authenticated, but GitHub does not provide shell access.` 内容，则证明添加成功:tada:。添加成功后，就可以使用SSH协议对仓库进行操作了:wink:。