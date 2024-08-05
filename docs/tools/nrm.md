# [nrm](https://github.com/Pana/nrm) -- NPM 注册管理器

`nrm` 可以帮助我们轻松快速地切换不同的镜像源，包括：npm、yarn、tencent、cnpm、taobao、npmMirror。

## 安装
``` sh
npm install -g nrm
# 或者你使用pnpm的话
pnpm add -g nrm
```

## 常用命令

### 查看支持切换的镜像源列表
```sh
nrm ls

# 显示以下列表
  npm ---------- https://registry.npmjs.org/
  yarn --------- https://registry.yarnpkg.com/
  tencent ------ https://mirrors.cloud.tencent.com/npm/
  cnpm --------- https://r.cnpmjs.org/
* taobao ------- https://registry.npmmirror.com/
  npmMirror ---- https://skimdb.npmjs.com/registry/
```

### 查看当前镜像源
```sh
nrm current

# You are using taobao registry.
```

### 选择镜像源
```sh
nrm use npm

# The registry has been changed to 'npm'.
```

### 测试镜像源的速度
```sh
nrm test

# 显示所有镜像源的速度
  npm ---------- 2387 ms
  yarn --------- timeout (Fetch timeout over 5000 ms)
  tencent ------ 600 ms
  cnpm --------- 1661 ms
* taobao ------- 138 ms
  npmMirror ---- timeout (Fetch timeout over 5000 ms)
```

## 其他方法
可使用npm的自带命令：

```sh
# 设置为淘宝镜像源
npm config set registry https://registry.npmmirror.com/
```

```sh
# 查看当前镜像源
npm config get registry

# https://registry.npmmirror.com/
```
