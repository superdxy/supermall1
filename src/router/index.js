/*
 * @Author: your name
 * @Date: 2021-07-29 09:50:32
 * @LastEditTime: 2021-07-29 11:07:44
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \supermall\supermall\src\router\index.js
 */
import Vue from "vue";
import VueRouter from "vue-router";
const Home = () => import("@/views/home/Home")
const Categary = () => import("@/views/categary/Categary")
const Cart = () => import("@/views/cart/Cart")
const Profile =() => import("@/views/profile/Profile")
//1.安装插件
Vue.use(VueRouter)

//2.创建路由对象
const routes = [
    {
        path: "",
        redirect:'/home'
    },
    {
        path: '/home',
        component:Home
    },
    {
        path: '/categary',
        component:Categary
    },
    {
        path: '/cart',
        component:Cart
    },
    {
        path: '/profile',
        component:Profile
    }
]
const router = new VueRouter({
    routes,
    mode:'history'
})
//3导出router.
export default router


