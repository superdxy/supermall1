/*
 * @Author: your name
 * @Date: 2021-07-28 15:45:35
 * @LastEditTime: 2021-07-29 10:43:32
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \supermall\supermall\src\main.js
 */
import Vue from 'vue'
import App from './App.vue'
import router from './router'
Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
