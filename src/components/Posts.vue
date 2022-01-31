<template>
  <div>
  <h1 class=color2>帖子</h1>

    <div v-for="post in posts.info.results" :key="post.id">
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