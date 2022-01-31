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
            v-model="input2"
            placeholder="....."
        />
        <el-button
            size="default"
            type="success"
            class="inline-block"
            icon="Search"
        >搜索</el-button>

        <a v-if="is_login">
          <el-button type="success" style="margin-top: 20px; margin-left: 90px">注销</el-button>
        </a>
        <a v-else>
          <el-button type="success" style="margin-top: 20px; margin-left: 90px">登录</el-button>
        </a>

      </el-col>

    </el-row>

    <el-row :gutter="20">
      <el-col :span="4" class="aside1" :offset="1">
        <el-card class="box-card">

          <Topic :topics="topics"></Topic>

        </el-card>
      </el-col>

      <el-col :span="12" class="main1" :offset="1">
        <el-card class="box-card">

          <router-view></router-view>

        </el-card>

      </el-col>
      <el-col :span="4" class="main1" :offset="1">
        <el-card class="box-card" style="height: 600px; color: cadetblue">

            <SelfCenter></SelfCenter>

        </el-card>
      </el-col>

    </el-row>
  </div>


</template>

<script>

import axios from "axios";
import Posts from "@/components/Posts";
import { reactive,ref } from "vue";
import Topic from "@/components/Topic";
import SelfCenter from "@/components/SelfCenter";

export default {
  name: 'App',
  components: {
    SelfCenter,
    Topic,
    // Posts,
    // Comment
  },
  setup () {
    const posts = reactive({
      "info": Object
    })
    const topics = reactive({
      "info": Object
    })
    const input2 = ref("")
    const usermessage = reactive({
      "circleUrl": "https://img1.baidu.com/it/u=554809536,2732110137&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=560",
      "username": "哥哥好远",
      "posts": 1234,
      "comments": 2312,
      "made_agree": 2134
    })
    const is_login = ref(true)

    const fun1 = () => {
      posts.value.count ++
    }

    return {
      fun1,
      posts,
      topics,
      input2,
      usermessage,
      is_login
    }
  },
  created() {

    axios.get("http://127.0.0.1:8000/api/main/posts/", {
      headers: {
        "Authorization": " Token 4deb6e4449b8b8d0166707ca028aac81338b6a9a"
      }
    }).then(response => {
      this.posts.info = response.data

    })

    axios.get("http://127.0.0.1:8000/api/main/topics/", {
      headers: {
        "Authorization": " Token 4deb6e4449b8b8d0166707ca028aac81338b6a9a"
      }
    }).then(response => {
      this.topics.info = response.data
    })

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
