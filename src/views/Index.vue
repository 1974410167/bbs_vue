<template>
  <div>
    <el-row :gutter="20" class="head_color">
      <el-col :span="6" class="head1"><h1 class=color1>西亚斯校园论坛</h1></el-col>
      <el-col :span="10" class="head1">
        <h1 class=color1 style="margin-left: 150px">
          <router-link :to="{name: 'home'}" style="text-decoration: none; color: white">
            首页
          </router-link>
        </h1>
      </el-col>

      <el-col :span="8" class="head1">

        <el-input
            style="width: auto;"
            v-model="search_key"
            placeholder="....."
        />

        <el-button
            size="default"
            type="success"
            class="inline-block"
            icon="Search"
            @click="action_search"
        >搜索</el-button>

        <a v-if="is_login">
          <el-button type="success" style="margin-top: 20px; margin-left: 90px" @click="logout" plain>注销</el-button>
        </a>
        <a v-else>
          <el-button type="success" style="margin-top: 20px; margin-left: 90px" @click="user_login">登录</el-button>
        </a>

          <el-button type="success" style="margin-top: 20px; margin-left: 8px" @click="user_register" plain>注册</el-button>
      </el-col>

    </el-row>

    <el-row :gutter="20">
      <el-col :span="4" class="aside1" :offset="1">
        <el-card class="box-card">

          <a v-if="show_inside == 'true'">
            <Topic :topics="topics"></Topic>
          </a>

        </el-card>
      </el-col>

      <el-col :span="12" class="main1" :offset="1">
        <el-card class="box-card">

          <router-view></router-view>

        </el-card>

      </el-col>
      <el-col :span="4" class="main1" :offset="1">
        <el-card class="box-card" style="height: 600px; color: cadetblue">

          <a v-if="show_inside == 'true'">
            <SelfCenter></SelfCenter>
          </a>

        </el-card>
      </el-col>

    </el-row>
  </div>


</template>

<script>

import axios from "axios";
import { reactive,ref } from "vue";
import Topic from "@/components/Topic";
import SelfCenter from "@/components/SelfCenter";

export default {
  name: 'Index',
  components: {
    SelfCenter,
    Topic,

  },
  setup () {
    const posts = reactive({
      "info": Object
    })
    const topics = reactive({
      "info": Object
    })
    const search_key = ref("")
    const is_login = ref(false)


    const show_inside = ref(localStorage.getItem("show_inside"))

    const fun1 = () => {
      posts.value.count ++
    }

    return {
      fun1,
      posts,
      topics,
      search_key,
      is_login,
      show_inside
    }
  },
  created() {
    if (localStorage.getItem("token")){
      this.is_login = true
    }else {
      this.is_login = false
    }
    axios.get("http://127.0.0.1:8000/api/main/posts/", {
      headers: {
        "Authorization": localStorage.getItem("token")
      }
    }).then(response => {
      this.posts.info = response.data

    })
    axios.get("http://127.0.0.1:8000/api/main/topics/", {
      headers: {
        "Authorization": localStorage.getItem("token")
      }
    }).then(response => {
      this.topics.info = response.data
    })

  },
  methods: {
    logout(){
      localStorage.removeItem("token")
      this.show_inside = "false"
      this.$router.push('/login')
    },
    user_register(){
      localStorage.removeItem("token")
      // this.$router.go(0)
      this.show_inside = "false"
      this.is_login = false
      this.$router.push('/register')
    },
    user_login(){
      // this.$router.go(0)
      this.show_inside = "false"
      this.$router.push('/login')
    },
    action_search(){
      this.$router.push({name: "search", query: {s_key: this.search_key}})
    }
  }
}

</script>

<style>
.head_color{
  background-color: #409EFF;
}

.head1{
  height: 90px;
  /*border: #2c3e50 1px solid;*/
}
.color1{
  color: white;
}

.color2{
  color: #2c3e50;
}
.aside1{
  height: 800px
}
.main1{
  height: 800px;
  /*border: #2c3e50 1px solid;*/
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  /*margin-top: 0px;*/
}


</style>
