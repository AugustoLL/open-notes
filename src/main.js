import Vue from 'vue'
import App from './App.vue'
import router from './router'
import TheHeader from '@/components/global/TheHeader.vue'
import BaseSVGIcon from '@/components/global/BaseSVGIcon.vue'
import BaseIllustration from '@/components/global/BaseIllustration.vue'
import store from './store'

Vue.config.productionTip = false

Vue.component('TheHeader', TheHeader)
Vue.component('base-svg-icon', BaseSVGIcon)
Vue.component('base-illustration', BaseIllustration)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
