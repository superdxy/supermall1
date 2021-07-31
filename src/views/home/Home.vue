<!--
 * @Author: your name
 * @Date: 2021-07-19 23:50:37
 * @LastEditTime: 2021-07-30 17:52:07
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \tabar\src\views\home\Home.vue
--><template>
  <div id="navbar-home">
    <nav-bar class="home-nav"><div slot="center">购物街</div></nav-bar>
    <home-swiper :banners="banners"></home-swiper>
    <recommend-view :recommends="recommends"></recommend-view>
    <feature-view></feature-view>
    <tab-control
      class="tab-control"
      :title="['流行', '新款', '精选']"
      @itemclick="itemclick"
    ></tab-control>
    <gooods-list :goods="goods[currentType].list"></gooods-list>
    <ul>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
    </ul>
  </div>
</template>

<script>
import NavBar from "components/common/navbar/NavBar";
import { gethome, GetHomeGoods } from "network/home";
import HomeSwiper from "./childcomps/HomeSwiper";
import RecommendView from "./childcomps/RecommendView";
import FeatureView from "./childcomps/FeatureView";
import TabControl from "components/content/tabcontrol/TabControl";
import GooodsList from "components/content/goods/GooodsList";
export default {
  components: {
    NavBar,
    HomeSwiper,
    RecommendView,
    FeatureView,
    TabControl,
    GooodsList,
  },
  data() {
    return {
      banners: [],
      recommends: [],
      goods: {
        pop: { page: 0, list: [] },
        new: { page: 0, list: [] },
        sell: { page: 0, list: [] },
      },
        currentType: 'pop', //默认的
    };
  },
  created() {
    this.gethome();
    this.GetHomeGoods('pop');
    this.GetHomeGoods('new');
    this.GetHomeGoods('sell');
  },
  methods: {
    //事件监听方法
    itemclick(index) {
      console.log(index);
      switch (index) {
        case 0:
          this.currentType = "pop";
          break;
        case 1:
          this.currentType = "new";
          break;
        case 2:
          this.currentType = "sell";
          break;
      }
    },

    //网络请求方法
    gethome() {
      gethome().then((res) => {
        console.log(res);
        this.banners = res.data.banner.list;
        this.recommends = res.data.recommend.list;
      });
    },
    GetHomeGoods(type) {
      const page = this.goods[type].page + 1;
      GetHomeGoods(type, page).then((res) => {
        console.log(res);
        this.goods[type].list.push(...res.data.list),
          (this.goods[type].page += 1);
      });
    },
  },
};
</script>

<style>
#navbar-home {
  padding-top: 44px;
}
.home-nav {
  background-color: var(--color-tint);
  color: #fff;
  position: fixed;
  left: 0;
  top: 0;
  right: 0;
  z-index: 9;
}
.tab-control {
  position: sticky;
  top: 44px;
  z-index: 9;
}
</style>