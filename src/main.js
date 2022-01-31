import { createApp } from 'vue/dist/vue.esm-bundler'
import App from './App.vue'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import Login from "@/components/Login";
import * as icons from "@element-plus/icons-vue"
import axios from 'axios'
// import VueAxios from 'vue-axios'
import PostViews from "@/views/HomePostViews"

import {createRouter, createWebHistory} from "vue-router"
import TopicPostViews from "@/views/TopicPostViews";

const About = { template: '<div>about</div>' }


const routes = [
    { path: '/about', component: About },
    { path: '/login', component: Login },
    { path: "/", component: PostViews, name: "home"},
    { path: '/topic_posts', component: TopicPostViews, name: "topic_posts"}
]


const router = createRouter( {
    // 4. 内部提供了 history 模式的实现。为了简单起见，我们在这里使用 hash 模式。
    history: createWebHistory(),
    routes, // `routes: routes` 的缩写
})


const app = createApp(App)

Object.keys(icons).forEach(key => {
    app.component(key, icons[key])
})
app.use(router)
app.use(ElementPlus)
app.mount('#app')
app.use(axios)

// app.prototype.$axios = axios
// app.prototype.axios = axios
// axios.default.baseUrl = 'http://127.0.0.1:8000/'
axios.defaults.headers.common['Authorization'] = " Token 4deb6e4449b8b8d0166707ca028aac81338b6a9a"
axios.defaults.headers.post['Content-Type'] = 'application/json;charset=utf-8'; // 配置请求头
