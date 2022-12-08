# 问题和解决

##

### 【问题一】“ssh:connect to host github.com port 22: Connection timed out”
解决方法：
1. 进入 `.ssh` 目录
  ```sh
  cd ~/.ssh
  ```

2. 编辑config文件
  ```sh
  vim config
  ```

3. 编辑内容，添加2、3两行
  ```text{2,3}
  Host github.com
  Hostname ssh.github.com
  Port 443
  AddKeysToAgent yes
  UseKeychain yes
  PreferredAuthentications publickey
  IdentityFile ~/.ssh/id_ed25519
  ```

4. 保存退出
  ```sh
  wq!
  ```

5. 检查是否成功
  ```sh
  ssh -T git@github.com
  # Hi ur_name! You've successfully authenticated, but GitHub does not provide shell access.
  ```