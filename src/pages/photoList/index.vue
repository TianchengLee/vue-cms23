<template>
  <div>
    <div id="slider" class="mui-slider">
      <div
        id="sliderSegmentedControl"
        class="mui-scroll-wrapper mui-slider-indicator mui-segmented-control mui-segmented-control-inverted"
      >
        <div class="mui-scroll">
          <a
            class="mui-control-item mui-active"
            href="#item1mobile"
            data-wid="tab-top-subpage-1.html"
          >推荐</a>
          <a class="mui-control-item" href="#item2mobile" data-wid="tab-top-subpage-2.html">热点</a>
          <a class="mui-control-item" href="#item3mobile" data-wid="tab-top-subpage-3.html">北京</a>
          <a class="mui-control-item" href="#item4mobile" data-wid="tab-top-subpage-4.html">社会</a>
          <a class="mui-control-item" href="#item5mobile" data-wid="tab-top-subpage-5.html">娱乐</a>
          <!--<a class="mui-control-item" href="#item6mobile" data-wid="tab-top-subpage-6.html">
							科技
          </a>-->
        </div>
      </div>
    </div>
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
  mounted() {
    // bug3: 第一次进入时无法滚动
    // 初始化操作必须要放在mounted钩子中, 让DOM元素加载完毕后才可以初始化
    mui(".mui-scroll-wrapper").scroll({
      deceleration: 0.0005 //flick 减速系数，系数越大，滚动速度越慢，滚动距离越小，默认值0.0006
    });
  }
};
</script>