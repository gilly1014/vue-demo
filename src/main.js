//入口文件
import Vue from 'vue'


//导入路由的包
import VueRouter from 'vue-router'
//安装路由
Vue.use(VueRouter)
//导入格式化时间的包
import moment from 'moment'
//定义全局的过滤器
Vue.filter("dateFormat",function(data,pattern='YYYY-MM-DD hh:mm:ss'){
  return moment(data).format(pattern);
})
//导入自己的router.js模块
import router from './router.js'

//导入vue-resourse
import VueResource from 'vue-resource'
Vue.use(VueResource)

import VuePreview from 'vue-preview'
Vue.use(VuePreview)

// 设置请求的根路径
Vue.http.options.root = 'http://vue.studyit.io';
Vue.http.options.emulateJSON = true;

// //按需导入mint-ui文件
// import { Header, Swipe, SwipeItem ,Button,Lazyload } from 'mint-ui';
// Vue.component(Header.name, Header);
// Vue.component(Swipe.name, Swipe);
// Vue.component(SwipeItem.name, SwipeItem);
// Vue.component(Button.name, Button);
// Vue.use(Lazyload);

// 完整引入
import MintUI from 'mint-ui'
Vue.use(MintUI)


//导入mui样式
import './lib/mui/css/mui.css'
import './lib/mui/css/icons-extra.css'



import app from './App.vue'


var vm = new Vue({
  el: '#app',
  render: c => c(app),
  router
 
})



