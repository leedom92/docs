import Theme from "vitepress/theme";
import CodeGroup from './components/CodeGroup.vue'
import CodeGroupItem from './components/CodeGroupItem.vue'
import 'uno.css'
import './custom.css'

export default {
  ...Theme,
  enhanceApp({ app }) {
    app.component('CodeGroup', CodeGroup)
    app.component('CodeGroupItem', CodeGroupItem)
    // register global components
    // app.component('MyGlobalComponent', /* ... */)
  }
}