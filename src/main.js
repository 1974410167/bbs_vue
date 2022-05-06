import { createApp } from 'vue/dist/vue.esm-bundler'
import App from './App.vue'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import Login from "@/components/Login";
import * as icons from "@element-plus/icons-vue"
import axios from 'axios'
import PostViews from "@/views/HomePostViews"
import vuex from "vuex"
import {createRouter, createWebHistory} from "vue-router"
import TopicPostViews from "@/views/TopicPostViews";
import Index from "@/views/Index"
const About = { template: '<div>about</div>' }
import SearchPosts from "@/views/SerachPosts"
import register from "@/components/register";
import add_post from "@/components/add_post";
import add_parentcomment from "@/components/add_parentcomment";
import add_parentcomment_reply from "@/components/add_parentcomment_reply";
import add_childcomment_reply from "@/components/add_childcomment_reply";

const routes = [
    { path: '/about', component: About },
    { path: '/login', component: Login },
    { path: "/", component: PostViews, name: "home"},
    { path: '/topic_posts', component: TopicPostViews, name: "topic_posts"},
    { path: '/index', component: Index},
    { path: '/search', component: SearchPosts, name: "search"},
    { path: '/register', component: register },
    { path: '/add_post', component: add_post , name: "add_post"},
    { path: '/add_parentcomment', component: add_parentcomment , name: "add_parentcomment"},
    { path: '/add_parentcomment_reply', component: add_parentcomment_reply , name: "add_parentcomment_reply"},
    { path: '/add_childcomment_reply', component: add_childcomment_reply , name: "add_childcomment_reply"},
]

localStorage.setItem("show_inside", "true")


const router = createRouter( {
    // 4. 内部提供了 history 模式的实现。为了简单起见，我们在这里使用 hash 模式。
    history: createWebHistory(),
    routes, // `routes: routes` 的缩写
})

router.beforeEach((to, from, next) => {
    let token = localStorage.getItem("token");
    console.log(token, to.path)
    if (to.path == "/register") {
        next();
    }else if(to.path == "/login"){
        next()
    }else if(token){
        next()
    }else{
        next("/login")
    }

})

const app = createApp(App)

Object.keys(icons).forEach(key => {
    app.component(key, icons[key])
})
app.use(router)
app.use(ElementPlus)
app.mount('#app')
app.use(axios)
app.use(vuex)

// axios.defaults.headers.common['Authorization'] = " Token 4deb6e4449b8b8d0166707ca028aac81338b6a9a"
axios.defaults.headers.post['Content-Type'] = 'application/json;charset=utf-8'; // 配置请求头
