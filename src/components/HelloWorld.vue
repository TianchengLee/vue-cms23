<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <mt-button type="default">default</mt-button>
    <mt-button type="primary">primary</mt-button>
    <mt-button type="danger">danger</mt-button>
    <div>
      <mt-button @click="showToast" size="large" type="danger">danger</mt-button>
    </div>
  </div>
</template>

<script>
import { Toast } from 'mint-ui'
export default {
  name: "HelloWorld",
  data() {
    return {
      msg: "Welcome to Your Vue.js App"
    };
  },
  methods: {
    showToast() {
      console.log('我被点了')
      // 如果使用的是js组件, 并且需要调用函数或对象的方法, 必须先引入对应的成员
      Toast('提示信息')
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1,
h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
