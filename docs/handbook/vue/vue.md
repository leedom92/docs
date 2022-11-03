# Vue
>***the different of start between Vue2 and Vue3***

:::: code-group
::: code-group-item VUE2
```js
const app = new Vue({
  el: '#app',
  data: {
    name: 'Leedom'
  }
})
```
:::
::: code-group-item VUE3
```js
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
::::