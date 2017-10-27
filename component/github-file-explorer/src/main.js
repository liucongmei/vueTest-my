import Vue from 'vue'
import VueResource from 'vue-resource'
import App from './App.vue'
//在vue里注册vue-resource插件
Vue.use(VueResource)

new Vue({
  el: 'body',
  components: { App }
})