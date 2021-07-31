<!--
 * @Author: your name
 * @Date: 2021-07-28 15:45:35
 * @LastEditTime: 2021-07-29 10:58:02
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit * @FilePath: \supermall\supermall\src\App.vue
-->
<template>
  <div id="app">

   <router-view/>
   <tab-bar-comment />
  </div>
</template>

<script>
import TabBarComment from 'components/content/TabBarComment'
export default {
  name: 'App',
  components: {
TabBarComment,

  }
}
</script>

<style>
@import './assets/css/base.css'
</style>
