import Vue from 'vue'
import App from './App.vue'
import router from './router'
import TheHeader from '@/components/TheHeader.vue'
import BaseSVGIcon from '@/components/BaseSVGIcon.vue'
import store from './store'

Vue.config.productionTip = false

Vue.component('TheHeader', TheHeader)
Vue.component('base-svg-icon', BaseSVGIcon)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
