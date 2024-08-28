# .DS_Store

`.DS_Store` 是一个由 macOS 创建的隐藏文件，用于存储目录的自定义视图选项，如图标位置和窗口大小。它通常出现在目录的根目录下。

要查找项目中的 `.DS_Store` 文件，你可以使用命令行工具。以下是一个简单的 `find` 命令示例，它会递归地搜索你的项目目录并列出所有 `.DS_Store` 文件：

```sh
find /path/to/your/project -type f -name .DS_Store -print
```
将 `/path/to/your/project` 替换为你的项目目录的实际路径。

如果你想删除这些文件，可以使用以下命令：

```sh
find /path/to/your/project -type f -name .DS_Store -exec rm {} +
```

如果你希望防止 `MacOS` 系统在文件夹中自动生成新的 `.DS_Store` 文件，可以通过修改系统设置来实现。使用 `defaults` 命令可以禁止自动生成 `.DS_Store` 文件：

```sh
defaults write com.apple.desktopservices DSDontWriteNetworkStores true
```

::: warning 警告
这个命令会禁止MacOS在共享文件夹时自动生成.DS_Store文件。注意，这个设置可能会影响系统的某些功能，因为.DS_Store文件用于存储文件夹的显示设置和元数据。