import Vue from 'vue'
import App from './App.vue'
import App2 from './App-practice.vue'
import store from './vuex/store'
import {getUrlParameter} from './choose_practice.js'

import './unit/const';
import './control';
import { subscribeRecord } from './unit';
subscribeRecord(store); // 将更新的状态记录到localStorage
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

function changePage(target, time) {
  function get_tiao_func(target) {
    return function tiao(){
      window.open(target,"_self");
    }
  };

  let tiao = get_tiao_func(target);
  setTimeout( "tiao()",time*1000);
}


if (getUrlParameter('type')==='practice') {
  changePage('pre/test.html', 5)
}
