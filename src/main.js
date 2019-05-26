import 'material-design-icons-iconfont/dist/material-design-icons.css'
import 'vuetify/dist/vuetify.css'
import Vue from 'vue'
import Vuetify from 'vuetify'
import App from './App.vue'
import router from './router'
import store from './store'
import Vuei18n from 'vue-i18n'
// import Cookies from 'js-cookie'
import './registerServiceWorker'
Vue.use(Vuetify,{
  iconfont: 'md'
})
Vue.use(Vuei18n)
Vue.config.productionTip = false

const  i18n = new Vuei18n({
    locale:'zh-CN',
    messages:{
        'zh-CN':require('./assets/lang/zh'),
        'en-US':require('./assets/lang/en')
    }
})
new Vue({
  router,
  store,
  i18n,
  render: h => h(App)
}).$mount('#app')
