import Vue from 'vue'
import App from './App.vue'
import router from './router'
import './plugins/element.js'
import './plugins/highlight.js'
import './icons'
import * as filters from '../src/filters'
import directives from '../src/directive'

Vue.config.productionTip = false

// 全局filter
for (const key of Object.keys(filters)) {
  Vue.filter(key, filters[key])
}

// 指令
for (const key of Object.keys(directives)) {
  Vue.directive(key, directives[key])
}

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
