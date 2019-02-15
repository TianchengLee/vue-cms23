<template>
  <div>
    <div id="slider" class="mui-slider">
      <div
        id="sliderSegmentedControl"
        class="mui-scroll-wrapper mui-slider-indicator mui-segmented-control mui-segmented-control-inverted"
      >
        <div class="mui-scroll">
          <a
            :class="['mui-control-item', { 'mui-active' : item.id == 0 } ]"
            v-for="(item) in categories"
            :key="item.id"
            @click="getPhotoList(item.id)"
          >{{item.title}}</a>
        </div>
      </div>
    </div>
    <!-- 图片列表区域 -->
    <ul class="photo-list">
      <router-link v-for="item in photoList" :key="item.id" :to="'/home/photoInfo/' + item.id" tag="li">
        <img v-lazy="item.img_url">
        <div class="info">
          <h1 class="info-title">{{ item.title }}</h1>
          <div class="info-body">{{ item.zhaiyao }}</div>
        </div>
      </router-link>
    </ul>
  </div>
</template>

<script>
//bug1: 删除mui-fullscreen

// 导入mui.js
import mui from "@/libs/mui/js/mui.min.js";
// bug2: 导入mui之后, 发现报错: Uncaught TypeError: 'caller', 'callee', and 'arguments' properties may not be accessed on strict mode functions or the arguments objects for calls to them
// 意思是 在严格模式下无法使用caller, callee, arguments
// 在webpack4以后, 强制开启严格模式, 并且无法关闭
// babel 可以选择忽略某个js文件的转译
// 初始化区域滚动组件时用到了mui, 而mui内部调用了callee或caller或arguments
// 解决方案: 在 .babelrc 配置中添加js文件的忽略

// bug4: 解决完以上Bug之后, tabBar无法切换了
// 解决方案: 将mui-tab-item类名换一个即可
export default {
  created() {
    this.getCategories();
    this.getPhotoList(0);
  },
  mounted() {
    // bug3: 第一次进入时无法滚动
    // 初始化操作必须要放在mounted钩子中, 让DOM元素加载完毕后才可以初始化
    mui(".mui-scroll-wrapper").scroll({
      deceleration: 0.0005 //flick 减速系数，系数越大，滚动速度越慢，滚动距离越小，默认值0.0006
    });
  },
  data() {
    return {
      categories: [],
      photoList: []
    };
  },
  methods: {
    getCategories() {
      this.$http.get("getimgcategory").then(result => {
        this.categories = result.body.message;
        this.categories.unshift({
          id: 0,
          title: "全部"
        });
      });
    },
    getPhotoList(cateId) {
      this.$http.get("getimages/" + cateId).then(result => {
        this.photoList = result.body.message;
      });
    }
  }
};
</script>

<style lang="less">
* {
  touch-action: pan-y;
}

.photo-list {
  list-style: none;
  margin: 0;
  padding: 10px;
  padding-bottom: 0;
  li {
    background-color: #ccc;
    text-align: center;
    margin-bottom: 10px;
    box-shadow: 0 0 9px #999;
    position: relative;
    img {
      width: 100%;
      vertical-align: middle;
    }
    img[lazy="loading"] {
      width: 40px;
      height: 300px;
      margin: auto;
    }

    .info {
      color: white;
      text-align: left;
      position: absolute;
      bottom: 0;
      background-color: rgba(0, 0, 0, 0.4);
      max-height: 84px;
      .info-title {
        font-size: 14px;
      }
      .info-body {
        font-size: 13px;
      }
    }
  }
}
</style>
