import Vue from 'vue'
import App from './App.vue'
import App2 from './App-practice.vue'
import store from './vuex/store'
import {getUrlParameter} from './choose_practice.js'

import './unit/const';
import './control';
import { subscribeRecord } from './unit';
// terry: 关闭数据持久化
// subscribeRecord(store); // 将更新的状态记录到localStorage
Vue.config.productionTip = false
/* eslint-disable no-new */
// terry: 根据url的参数来选择渲染练习的组件还是正式的组件
if (getUrlParameter('type')==='practice') {
  new Vue({
    el: '#root',
    render: h => h(App),
    store: store
  })
}
else {
  new Vue({
    el: '#root',
    render: h => h(App),
    store: store
  })
}

// 若是没有开启Devtools工具，在开发环境中开启，在生产环境中关闭
if (process.env.NODE_ENV == 'development') {
  Vue.config.devtools = true;
} else {
  Vue.config.devtools = false;
}

// 自动跳转

const speedCondition = getUrlParameter('condition')

if (getUrlParameter('type')==='practice') {
  let a = '../pre/guide-2.html' + '?condition=' + speedCondition
  setTimeout(function() {window.location.href = a}, 5*60*1000);
}
else {
  let a = '../pre/guide-3.html'
  setTimeout(function() {window.location.href = a}, 15*60*1000);
}

// function changePage(target, time) {
//   function get_tiao_func(target) {
//     return function tiao(){
//       window.open(target,"_self");
//     }
//   };
//
//   function tiao() {return get_tiao_func(target)};
//   setTimeout( "tiao()",time*1000);
// }
