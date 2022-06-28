import './banner.js'
import './tabs.js'
// import vue from 'vue'
// import app from './app.vue'
// import './styles/index.css'
import './styles/index.less'
// 引入字体图标文件
import './assets/fonts/iconfont.css'

import imgUrl from './assets/1.gif';

let img = document.createElement('img');
img.src = imgUrl;
document.body.appendChild(img);

// import Vue from "vue"
import {createApp} from 'vue'
import App from "./App.vue"
// import mylib from "mylib"
// Vue.use(mylib)
// Vue.config.productionTip = false

// Vue.filter('toUP',(val)=>{return val.toUpperCase()})
// Vue.filter('reverse',(val)=>{return val.split('').reverse().join('')})

// new Vue({
//   render: h => h(App),
// }).$mount('#app')

createApp(App).mount('#app')


const fn = () => {
    console.log(123456);
}
fn();


