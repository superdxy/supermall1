<!--
 * @Author: your name
 * @Date: 2021-07-30 14:03:14
 * @LastEditTime: 2021-07-30 15:59:28
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \supermall\supermall\src\components\content\goods\GoodsListItem.vue
-->
<template>
  <div class="goods-list-item">
    <img :src="listitem.show.img" alt="" />
    <div class="goods-info">
      <p>{{ listitem.title }}</p>
      <span class="price">{{ listitem.price }}</span>
      <span class="collect">{{ listitem.cfav }}</span>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    listitem: {
      type: Object,
      default() {
        return [];
      },
    },
  },
};
</script>
<style>
.goods-list-item {
  padding-bottom: 40px;
  position: relative;
  width: 48%;
}
.goods-list-item img {
  width: 100%;
  height: 100%;
  border-radius: 5px;
}
.goods-info {
  font-size: 12px;
  position: absolute;
  bottom: 5px;
  left: 0;
  right: 0;
  overflow: hidden;
  text-align: center;
}
.goods-info p {
  overflow: hidden;
  text-overflow: ellipsis; /* 用省略号代替长度不显示地方 */
  white-space: nowrap; /* 文本自动处理换行。假如抵达容器边界内容会转到下一行 */
  margin-bottom: 3px;
}
.goods-info .price {
  color: var(--color-high-text);
  margin-right: 20px;
}
.goods-info .collect {
  position: relative;
}
.goods-info .collect::before {
  content: "";
  position: absolute;
  left: -15px;
  top: -1px;
  width: 14px;
  height: 14px;
  background: url("~assets/img/common/collect.svg") 0 0/14px 14px;
}
</style>