import Vue from 'vue';
import App from './components/button.vue';
new Vue({
  el: '#app',
  render: h => h(App)
})
// new Vue({
//   el: '#app',
//   template: '<App/>',
//   components: { App }
// })