import Vue from 'vue'
import App from './App.vue'
import axios from 'axios'
import VueRouter from 'vue-router'
import EmployeesList from './components/EmployeesList.vue'
import EmployeeDetail from './components/EmployeeDetail.vue'
import EditEmployeeDetail from "@/components/EditEmployeeDetail.vue";
import CreateEmployee from "@/components/CreateEmployee.vue";
import DeleteEmployee from "@/components/DeleteEmployee.vue";


Vue.config.productionTip = false
Vue.prototype.$http = axios

Vue.use(VueRouter)

const routes = [
    {
        name: 'EmployeesList',
        path: '/',
        component: EmployeesList
    },
    {
        name: 'CreateEmployee',
        path: '/add-employee',
        component: CreateEmployee
    },
    {
        name: 'EmployeeDetail',
        path: '/employee/:id',
        component: EmployeeDetail,
        props: true
    },
    {
        name: 'EditEmployeeDetail',
        path: '/edit/:id',
        component: EditEmployeeDetail,
        props: true
    },
    {
        name: 'DeleteEmployee',
        path: '/delete-employee',
        component: DeleteEmployee,
        props: true
    },
]

const router = new VueRouter({
    routes,
})

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
