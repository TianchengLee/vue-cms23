<template>
  <div class="home-container">
    <mt-swipe :auto="4000">
      <mt-swipe-item v-for="(item, index) in banners" :key="index">
        <a :href="item.url">
          <img :src="item.img">
        </a>
      </mt-swipe-item>
    </mt-swipe>
  </div>
</template>

<script>
export default {
  data() {
    return {
      banners: []
    };
  },
  created() {
    this.getBanner();
  },
  methods: {
    getBanner() {
      this.$http.get("http://www.lovegf.cn:8899/api/getlunbo").then(result => {
        this.banners = result.body.message;
      });
    }
  }
};
</script>

<style lang="less">
.home-container {
  .mint-swipe {
    height: 200px;
    .mint-swipe-item {
      img {
        width: 100%;
        height: 100%;
      }
    }
  }
}
</style>
