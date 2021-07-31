<!--
 * @Author: your name
 * @Date: 2021-07-30 14:00:22
 * @LastEditTime: 2021-07-30 15:42:11
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \supermall\supermall\src\components\content\goods\GooodsList.vue
-->
<template>
  <div class="goods">

      <goods-list-item v-for="item in goods" :listitem='item'></goods-list-item>
    {{ goods }}
  </div>
</template>

<script>
import GoodsListItem from "./GoodsListItem"
export default {
  components: {
GoodsListItem
  },
  props: {
    goods: {
      type: Array,
      default() {
        return [];
      },
    },
  },
};
</script>
<style>
.goods{
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  padding: 2px;
}
</style>