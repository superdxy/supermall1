<!--
 * @Author: your name
 * @Date: 2021-07-29 17:02:46
 * @LastEditTime: 2021-07-29 17:24:42
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \supermall\supermall\src\views\home\childcomps\RecommendView.vue
-->
<template>
  <div class="recommends">
      <div v-for="item in recommends" class="recommends-item">
          <a :href="item.link">
              <img :src="item.image" alt="">
              <div>{{item.title}}</div>
          </a>
      </div>
  </div>
</template>

<script>
export default {
 props:{
     recommends:{
         type:Array,
         default(){
             return[]
         }
     }
 }
}

</script>
<style>
.recommends{
    display: flex;
    width: 100%;
    text-align: center;
    font-size: 12px;
    padding: 10px 0 20px;
    border-bottom: 10px solid #eee;
}
.recommends-item{
    flex: 1;
}
.recommends-item img{
    width: 65px;
    height: 65px;
    margin-bottom: 10px;
} 
</style>