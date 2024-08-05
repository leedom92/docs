# [nvm](https://github.com/nvm-sh/nvm) -- Node版本管理器

`nvm` 可以帮助我们安装和切换不同的 [`nodejs`](https://nodejs.org/en/) 版本。

具体操作请查看[文档](https://github.com/nvm-sh/nvm/blob/master/README.md)

## 常用命令

### 查看当前已下载的nodejs版本列表
```sh
nvm ls
```
### 查看当前使用版本
```sh
nvm current
```

### 切换版本
```sh
nvm use 18
```

### 下载指定版本
```sh
nvm install 20
```

### 卸载指定版本
```sh
# 将卸载该主版本（v20.*.*）已安装的所有包
nvm uninstall 20

# 卸载具体某一版本
nvm uninstall 20.5.0
```
