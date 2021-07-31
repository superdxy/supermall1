
<template>
  <div class="tab-bar-item" @click="btnclick">
    <div v-if="!Active"><slot name="tabbar-tupian"></slot></div>
    <div v-else><slot name="tabbar-tupian-active"> </slot></div>
    <div :style="activeStyle"><slot name="tabbar-xinxi"></slot></div>
  </div>
</template>

<script>
export default {
  name: "TabBarItem",
  props: {
    path: String,
    activeColor: {
      type: String,
      default: "red",
    },
  },
  data() {
    return {
      /*  isActive:true */
    };
  },
  methods: {
    btnclick() {
      console.log("btnclick");
      this.$router.replace(this.path);
    },
  },
  computed: {
    Active() {
      return this.$route.path.indexOf(this.path) !== -1;
    },
    activeStyle() {
      return this.Active ? { color: this.activeColor } : {};
    },
  },
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
  width: 24px;
  height: 24px;
  margin-top: 3px;
  vertical-align: middle;
  margin-bottom: 2px;
}
</style>