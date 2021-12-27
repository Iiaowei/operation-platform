import Vue from 'vue'
import TDesign from 'tdesign-vue'
import App from './App.vue'

Vue.config.productionTip = false

import 'tdesign-vue/es/style/index.css'

Vue.use(TDesign)
new Vue({
  render: h => h(App),
}).$mount('#app')
