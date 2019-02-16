<template>
  <div class="cmt-container">
    <h3>发表评论</h3>
    <hr>
    <textarea v-model="commentContent" placeholder="请输入要BB的内容（做多吐槽120字）" maxlength="120"></textarea>

    <mt-button @click="postComment" type="primary" size="large">发表评论</mt-button>

    <div class="cmt-list">
      <div class="cmt-item" v-for="(item, i) in comments" :key="item.add_time">
        <div
          class="cmt-title"
        >第{{ i+1 }}楼&nbsp;&nbsp;用户：{{ item.user_name }}&nbsp;&nbsp;发表时间：{{ item.add_time | dateFormat }}</div>
        <div class="cmt-body">{{ item.content === 'undefined' ? '此用户很懒，嘛都没说': item.content }}</div>
      </div>
    </div>
    <mt-button type="danger" size="large" plain @click="getMore">加载更多</mt-button>
  </div>
</template>


<script>
import { Toast } from "mint-ui";

export default {
  data() {
    return {
      pageIndex: 1, // 默认展示第一页数据
      comments: [], // 所有的评论数据
      commentContent: ""
    };
  },
  created() {
    this.getComments();
  },
  methods: {
    getComments() {
      // 获取评论
      this.$http
        .get("getcomments/" + this.id + "?pageindex=" + this.pageIndex)
        .then(result => {
          // this.comments = result.body.message;
          // 每当获取新评论数据的时候，不要把老数据清空覆盖，而是应该以老数据，拼接上新数据
          // concat 方法连接数组, 不会修改原数组, 而是返回一个新数组
          this.comments = this.comments.concat(result.body.message);
        });
    },
    getMore() {
      // 加载更多
      this.pageIndex++;
      this.getComments();
    },
    postComment() {
      // 1. 想办法把用户输入的内容提交给服务器
      //  1.1 双向数据绑定textarea, 以便获取数据
      //  1.2 当用户点击按钮时, 获取数据, 并且做非空校验
      if (this.commentContent.trim().length === 0)
        return Toast("评论内容不能为空哦亲!");
      //  1.3 发送ajax请求将内容提交给服务器
      this.$http
        .post("postcomment/" + this.id, { content: this.commentContent })
        .then(result => {
          // console.log(result.body)
          Toast(result.body.message);
          // // 2. 让用户看到最新的数据在1楼
          // //  2.1 手动制造一个评论数据  加入当前comments中, vue会重新渲染

          // // add_time:"2019-02-15T02:58:21.000Z"
          // // content:"aaaa"
          // // user_name:"匿名用户"
          // this.comments.unshift({
          //   add_time: Date.now(),
          //   content: this.commentContent,
          //   user_name: '匿名用户',
          // })

          // this.commentContent = ''
          //  2.2 重新调用getComments
          // 调用getComments之前, 需要注意几个问题:
          //   1. 原有的数据需要被清空否则会出现重复拼接
          //   2. 将pageIndex重置为1
          this.comments = [];
          this.pageIndex = 1;
          this.getComments();
          // 清空评论输入框
          this.commentContent = "";
        });
    }
  },
  props: ["id"]
};
</script>

<style lang="less" scoped>
.cmt-container {
  h3 {
    font-size: 18px;
  }
  textarea {
    font-size: 14px;
    height: 85px;
    margin: 0;
  }

  .cmt-list {
    margin: 5px 0;
    .cmt-item {
      font-size: 13px;
      .cmt-title {
        line-height: 30px;
        background-color: #ccc;
      }
      .cmt-body {
        line-height: 35px;
        text-indent: 2em;
      }
    }
  }
}
</style>
