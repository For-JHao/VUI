import Vue from 'vue'
import App from './App.vue'

import jhUI from './components'

Vue.config.productionTip = false

//use调用jhUi中的install方法，进行全局组件注册
Vue.use(jhUI)

new Vue({
  render: h => h(App),
}).$mount('#app')


