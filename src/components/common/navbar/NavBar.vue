<!--
 * @Author: your name
 * @Date: 2021-07-29 11:34:12
 * @LastEditTime: 2021-07-29 11:49:26
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \supermall\supermall\src\components\common\navbar\NavBar.vue
-->
<template>
<div id="nav-bar">
 <div class="left"><slot name="left"></slot></div> 
 <div class="center"><slot name="center"></slot></div> 
 <div class="right"><slot name="right"></slot></div> 
</div>
 
 
</template>

<script>
export default {

}

</script>
<style>
#nav-bar{
    display: flex;
    height: 44px;
    line-height: 44px;
    text-align: center;
    box-shadow: 0 1px 1px rgba(100,100,100,.1);
}
.left{
    width: 60px;

}
.right{
    width: 60px;
}
.center{
    flex: 1;
    text-align: center;
    line-height: 44px;
}
</style>