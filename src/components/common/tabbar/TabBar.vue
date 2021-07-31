<!--
 * @Author: your name
 * @Date: 2019-01-13 00:10:09
 * @LastEditTime: 2021-07-26 14:21:19
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \02-tabbar\src\components\tabbar\TabBar.vue
-->
<template>
  <div id="tab-bar">
    <slot></slot>
  </div>
</template>

<script>
  export default {
    name: "TabBar"
  }
</script>

<style scoped>
  #tab-bar {
    display: flex;
    background-color: #f6f6f6;

    position: fixed;
    left: 0;
    right: 0;
    bottom: 0;

    box-shadow: 0 -1px 1px rgba(100,100,100,.2);
  }

</style>
