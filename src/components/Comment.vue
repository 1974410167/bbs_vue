<template>
  <div>
    <a v-for="comment in comments" :key="comment">

      <el-row>
        <el-icon style="margin-top: 5px">
          <avatar />
        </el-icon>
        <a style="margin-left: 3px;">{{ comment.create.name }}</a>
      </el-row>

      <p style="text-align:justify; text-justify:inter-ideograph; margin-left: 12px; margin-top: 10px; ">
        {{comment.content}}
      </p>
      <el-row>
        <el-icon color="blue" style="margin-top: 3px">
          <caret-top />
        </el-icon>

        <a style="margin-top: 3px">{{ comment.like_count }}</a>

        <reply_and_edit :comment="comment"></reply_and_edit>

      </el-row>
      <br>
    </a>
  </div>
</template>

<script>

import ChildComment from "@/components/ChildComment";
import {reactive} from "vue";
import axios from "axios";
import Reply_and_edit from "@/components/reply_and_edit";
export default {
  name: "Comment",
  // eslint-disable-next-line vue/no-unused-components
  components: {Reply_and_edit},
  // components: {ChildComment},
  props:{
    comments: Object
  },

}
</script>

<style scoped>

</style>