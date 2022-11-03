# 地图

<!-- 高德地图 -->
## 高德地图
> [vue-amap文档](https://elemefe.github.io/vue-amap/#/zh-cn/introduction/install)

### vue-map

::: warning
**'AMap' is not defined.**
:::

在.eslintrc.js中添加如下配置：
```js
  globals: {
    AMap: true
  }
```

::: tip
**实时监听zoom参数变化**
:::

利用ref获取地图实例，调取getZoom方法
```js
  <el-amap
    ref="map"
    vid="amapDemo"
    :amap-manager="amapManager"
    :zoom="zoom"
    :center="center"
    :plugin="plugin"
    :events="events"
    class="amap-demo"
  />

  data() {
    return {
      events: {
        zoomchange: (e) => {
          // 更新当前地图实例zoom
          this.zoom = this.$refs['map'].$$getInstance().getZoom()
        },
      }
    }
  }
```

<!-- 天地图 -->
<!-- ## 天地图
> [天地图文档](https://soullyoko.github.io/vue-tianditu/) -->
