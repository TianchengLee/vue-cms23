<template>
  <div id="app">
    <mt-header fixed title="黑马程序员高端项目"></mt-header>
    <transition name="app">
      <router-view/>
    </transition>
    <nav class="mui-bar mui-bar-tab">
      <router-link class="mui-tab-item1" to="/home">
        <span class="mui-icon mui-icon-home"></span>
        <span class="mui-tab-label">首页</span>
      </router-link>
      <router-link class="mui-tab-item1" to="/member">
        <span class="mui-icon mui-icon-contact"></span>
        <span class="mui-tab-label">会员</span>
      </router-link>
      <router-link class="mui-tab-item1" to="/shopcar">
        <span class="mui-icon mui-icon-extra mui-icon-extra-cart">
          <span id="badge" class="mui-badge">0</span>
        </span>
        <span class="mui-tab-label">购物车</span>
      </router-link>
      <router-link class="mui-tab-item1" to="/search">
        <span class="mui-icon mui-icon-search"></span>
        <span class="mui-tab-label">搜索</span>
      </router-link>
    </nav>
  </div>
</template>

<script>
export default {
  name: "App"
};
</script>

<style lang="less">
#app {
  padding-top: 40px;
  padding-bottom: 50px;
  overflow-x: hidden;
  .mint-header.is-fixed {
    z-index: 999;
  }
}

.app-enter {
  opacity: 0;
  transform: translateX(100%);
}

.app-leave-to {
  opacity: 0;
  transform: translateX(-100%);
  position: absolute;
}

.app-enter-active,
.app-leave-active {
  transition: all 0.5s ease;
}

/* .router-link-active {
  color: skyblue !important;
} */

.mui-bar-tab .mui-tab-item1.mui-active {
  color: #007aff;
}

.mui-bar-tab .mui-tab-item1 {
  display: table-cell;
  overflow: hidden;
  width: 1%;
  height: 50px;
  text-align: center;
  vertical-align: middle;
  white-space: nowrap;
  text-overflow: ellipsis;
  color: #929292;
}

.mui-bar-tab .mui-tab-item1 .mui-icon {
    top: 3px;
    width: 24px;
    height: 24px;
    padding-top: 0;
    padding-bottom: 0;
}

.mui-bar-tab .mui-tab-item1 .mui-icon ~ .mui-tab-label {
    font-size: 11px;
    display: block;
    overflow: hidden;
    text-overflow: ellipsis;
}
</style>
