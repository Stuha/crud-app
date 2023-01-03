import Vue from 'vue'
import App from './App.vue'
import axios from 'axios'
import VueRouter from 'vue-router'
import EmployeesList from './components/EmployeesList.vue'
import EmployeeDetail from './components/EmployeeDetail.vue'


Vue.config.productionTip = false
Vue.prototype.$http = axios

Vue.use(VueRouter)

const routes = [
    { path: '/', component: EmployeesList },
    { path: '/employee', component: EmployeeDetail,  props: true}
]

const router = new VueRouter({
    routes,
})

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
