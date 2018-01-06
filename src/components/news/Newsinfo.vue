<template>
    <div class="newsinfoContainer">
        <h3 class="title">{{newsinfo.title}}</h3>
        <p class="subtitle">
            <span>评论时间:{{newsinfo.add_time}}</span>
            <span>点击：{{newsinfo.click}}</span>
        </p>
        <!-- 内容区域 -->
        <div class="content" v-html="newsinfo.content"></div>
        <!-- 评论子组件区域 -->
     <comment-box :id="id"></comment-box>
    </div>
</template>

<script>
// 1. 导入 评论子组件
import comment from '../subcomponents/comment.vue'
export default {
  data() {
    return {
      id: this.$route.params.id,
      newsinfo: {}
    };
  },
  created() {
    this.getNewsInfo();
    
  },
  methods: {
    getNewsInfo() {
      this.$http.get("api/getnew/" + this.id).then(result => {
        if (result.body.status == 0) {
          this.newsinfo = result.body.message[0];
        } else {
          Toast("新闻读取失败！");
        }
      });
    }
  },
   components: {
    // 用来注册子组件的节点
    "comment-box": comment
  }
};
</script>

<style lang="scss" scoped>
.newsinfoContainer {
  padding: 0 4px;
  .title {
    font-size: 16px;
    text-align: center;
    margin: 15px 0;
    color: red;
  }
  .subtitle {
    font-size: 13px;
    color: #226aff;
    display: flex;
    justify-content: space-between;
  }
  .content {
    img {
      width: 100%;
    }
  }
}
</style>

