<!--
 * @Author: your name
 * @Date: 2021-07-29 16:16:00
 * @LastEditTime: 2021-07-29 16:45:25
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \supermall\supermall\src\views\home\childcomps\HomeSwiper.vue
-->
<template>
  <div>
      <swiper>
    <swiper-item v-for="item in banners">
      <a :href= "item.link"><img :src="item.image" alt=""></a>
    </swiper-item>
  </swiper>
  </div>
</template>

<script>
import {Swiper,SwiperItem} from 'components/common/swiper'
export default {
components:{
    Swiper,
    SwiperItem
},
props:{
    banners:{
        type:Array,
        default(){
            return[]
        }
    }
}
}

</script>
<style>
</style>