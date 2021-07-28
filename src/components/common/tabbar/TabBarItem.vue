<!--
 * @Author: your name
 * @Date: 2021-07-19 20:27:57
 * @LastEditTime: 2021-07-20 10:15:44
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \tabar\src\components\tabbar\TabBaritem.vue
-->

<template>
  <div class="tab-bar-item" @click="iteamClick">
    <slot v-if="!isActive" name="item-icon"></slot>
    <slot v-else name="item-icon-active"></slot>
    <div :class="{active:isActive}"><slot name="item-text"></slot></div>
  </div>
</template>

<script>
export default {
  name: "TabBarItem",
  props:{
    path:String,
    activecolor:{
      type:String,
      default:'red'
    }
  },
 data(){
     return{
         isActive:true,
         path:"/home"
     }
 },
 computed:{
   isActive(){
     return this.$$router.path.indexOf(this.path) !== -1
   }
 },
 methods:{
   iteamClick(){
     console.log('iteamClick');
     this.$router.replace(this.path)
   }
 }
};
</script>
<style>
.tab-bar-item {
  flex: 1;
  text-align: center;
  height: 49px;
  font-size: 14px;
}
.tab-bar-item img {
  width: 12px;
  height: 12px;
  vertical-align: middle;
}
.active{
    color: red;
}
</style>

