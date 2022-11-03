---
title: Tailwindcss
author: Leedom
date: '2022-01-12'
---

# Tailwind

## 安装

```bash
# 安装tailwindcss postcss autoprefixer
# vanilla
npm install -D tailwindcss postcss-cli autoprefixer
# vue
npm install -D tailwindcss postcss autoprefixer
```

```bash
# 生成tailwindcss和postcss配置文件
npx tailwindcss init -p
```

## 引入

```css
/*  
  在项目资源目录下新建css文件，引入tailwindcss三大部件
  ./your-css-folder/styles.css
*/
@tailwind base;
@tailwind components;
@tailwind utilities;
```

## 配置

```js
// 配置tailwindcss.config.js
module.exports = {
  // 去除项目中没有用到的tailwindcss的css样式
  purge: [
    /* vue项目 */
    './dist/index.html',
    './src/**/*.{vue,js,ts,jsx,tsx}'
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    // 扩展自定义配置，不会覆盖tailwindcss原有样式
    extend: {
      flex: {
        '2': '2 2 0%',
        '3': '3 3 0%',
        '4': '4 4 0%',
        '5': '5 5 0%',
        '8': '8 8 0%'
      },
      fontSize: {
        'fs12': '12px'
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
```

## demo

```html
<template>
  <h1 class="text-9xl text-center text-blue-600 sm:bg-black sm:text-white">tailwindcss</h1>
</template>
```

```css
/* 可以使用@apply指令将所用到的功能类整合成一个自定义的类 */
<template>
  <h1 class="intro">tailwindcss</h1>
</template>

@tailwind base;
@tailwind components;
@tailwind utilities;

.intro {
  @apply text-9xl text-center text-blue-600 sm:bg-black sm:text-white;
}
```

## PostCSS 7 兼容性版本

::: warning 注意
从 v2.0 版本开始，Tailwind CSS 依赖于 PostCSS 8。
由于 PostCSS 8 才使用了几个月，因此生态系统中的许多其他工具尚未更新，
这意味着在安装 Tailwind，并尝试编译 CSS 时，您可能会在终端中看到这样的错误：

```bash
Error: PostCSS plugin tailwindcss requires PostCSS 8.
```

如果遇到上述错误，请卸载 Tailwind 并使用兼容性版本重新安装：

```bash
npm uninstall tailwindcss postcss autoprefixer
npm install tailwindcss@npm:@tailwindcss/postcss7-compat @tailwindcss/postcss7-compat postcss@^7 autoprefixer@^9
```

:::
