<!--
 * @Author: your name
 * @Date: 2021-07-19 19:09:25
 * @LastEditTime: 2021-07-19 21:56:03
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \tabar\src\components\tabbar\TabBar.vue
-->
<template>
    <div class="tab-bar">
   <slot ></slot>
  </div>
  
</template>

<script>

export default {
name:"TabBar"
}

</script>
<style>

/* body{
    padding: 0;
    margin: 0;
} */
.tab-bar{
  display: flex;
  background-color: #f6f6f6;
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  box-shadow: 0px -3px  1px skyblue;
}

</style>