//入口文件
import Vue from 'vue'


//导入路由的包
import VueRouter from 'vue-router'
//安装路由
Vue.use(VueRouter)
//导入自己的router.js模块
import router from './router.js'

//导入vue-resourse
import VueResource from 'vue-resource'
Vue.use(VueResource)

//按需导入mint-ui文件
import { Header, Swipe, SwipeItem  } from 'mint-ui';
Vue.component(Header.name, Header);
Vue.component(Swipe.name, Swipe);
Vue.component(SwipeItem.name, SwipeItem);

//导入mui样式
import './lib/mui/css/mui.css'
import './lib/mui/css/icons-extra.css'



import app from './App.vue'


var vm = new Vue({
  el: '#app',
  render: c => c(app),
  router
 
})



