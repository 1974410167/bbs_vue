<template>
  <div>

    <el-row style="">
      <el-col span="14" style="margin-left: 520px">
        <h1 class=color2>帖子</h1>
      </el-col>
      <el-col span="8" style="">
        <router-link :to="{name:'add_post'}">
          <el-button type="success" style="margin-top: 20px; margin-left: 410px; margin-top: 30px">发布帖子</el-button>
        </router-link>
      </el-col>
    </el-row>

    <div v-for="post in posts.info.results" :key="post.id" style="margin-top: 20px">
      <el-row>
        <el-tag effect="dark">{{ post.topic.name }}</el-tag>
        <el-icon style="margin-left: 5px; margin-top: 10px">
          <avatar />
        </el-icon>
        <a style="margin-left: 5px;margin-top: 4px">{{ post.create.name }}</a>
      </el-row>

      <p style="text-align:justify; text-justify:inter-ideograph; margin-left: 12px">
        {{ post.content }}
      </p>
          <agree_and_comment :post="post"></agree_and_comment>

      <br/>
    </div>

  </div>
</template>

<script>


import agree_and_comment from "@/components/agree_and_comment";

export default {
  name: "Posts",
  components: {agree_and_comment},
  props: {
    posts: Object
  },
}

</script>

<style scoped>

</style>