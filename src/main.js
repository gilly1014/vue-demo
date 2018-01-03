//入口文件
import Vue from 'vue'

//按需导入mint-ui文件
import { Header } from 'mint-ui';
Vue.component(Header.name, Header);

//导入mui样式
import './lib/mui/css/mui.css'

import app from './App.vue'





var vm = new Vue({
  el: '#app',
  render: c => c(app),
 
})



