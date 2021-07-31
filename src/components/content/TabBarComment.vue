<!--
 * @Author: your name
 * @Date: 2021-07-26 23:14:26
 * @LastEditTime: 2021-07-29 11:07:11
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \tabbar\src\components\TabBar\comment.vue
-->
<template>
  <div>
         <tab-bar> 
     <tab-bar-item  path='/home'> 
       <img slot="tabbar-tupian" src="@/assets/img/tabbar/home.svg" alt="">
       <img slot="tabbar-tupian-active" src="@/assets/img/tabbar/home_active.svg" alt="">
       <div slot="tabbar-xinxi">首页</div>
       </tab-bar-item>
       <tab-bar-item path='/categary'> 
         <img slot="tabbar-tupian" src="@/assets/img/tabbar/category.svg" alt="">
         <img slot="tabbar-tupian-active" src="@/assets/img/tabbar/category_active.svg" alt="">
       <div slot="tabbar-xinxi">分类</div>
       </tab-bar-item>
       <tab-bar-item path='/cart' > 
         <img slot="tabbar-tupian" src="@/assets/img/tabbar/shopcart.svg" alt="">
         <img slot="tabbar-tupian-active" src="@/assets/img/tabbar/shopcart_active.svg" alt="">
       <div slot="tabbar-xinxi">购物车</div>
        </tab-bar-item>
        <tab-bar-item path='/profile'> 
         <img slot="tabbar-tupian" src="@/assets/img/tabbar/profile.svg" alt="">
         <img slot="tabbar-tupian-active" src="@/assets/img/tabbar/profile_active.svg" alt="">
       <div slot="tabbar-xinxi">我的</div>
       </tab-bar-item>
   </tab-bar>
  </div>
</template>

<script>
import TabBar from '@/components/common/tabbar/TabBar'
import TabBarItem from '@/components/common/tabbar/TabBarItem'
export default {

 components: { 
   TabBar,
TabBarItem
     },

}

</script>
<style>

</style>