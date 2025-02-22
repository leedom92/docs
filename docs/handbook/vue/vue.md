# Vue
>***the different of start between Vue2 and Vue3***

::: code-group

```js [VUE2]
const app = new Vue({
  el: '#app',
  data: {
    name: 'Leedom'
  }
})
```

```js [VUE3]
const app = {
  data() {
    return {
      name: 'Leedom'
    }
  }
}

Vue.createApp(app).mount('#app')
```
:::