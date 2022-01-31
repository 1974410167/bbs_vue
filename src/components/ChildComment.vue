<template>
  <div>
    <a v-for="comment in comments" :key="comment">

      <el-row>

        <el-icon style="margin-top: 4px">
          <avatar />
        </el-icon>
        <a style="margin-left: 5px; ">{{ comment.create.name }}</a>

        <a v-if="comment.comment_create != null">
          &nbsp;&nbsp;
          回复了
          &nbsp;&nbsp;

          <el-icon style="margin-top: 4px">
            <avatar />
          </el-icon>
          <a style="margin-left: 5px; ">{{ comment.comment_create.name }}</a>
        </a>
      </el-row>

      <p style="text-align:justify; text-justify:inter-ideograph; margin-left: 12px; margin-top: 10px; ">
        {{comment.content}}
      </p>
      <el-row>
        <el-icon color="blue" style="margin-top: 3px">
          <caret-top />
        </el-icon>

        <a style="margin-top: 3px">{{ comment.agree }}</a>

        <el-icon style="margin-top: 5px; margin-left: 10px" color="blue">
          <edit />
        </el-icon>

        <a style="margin-top: 0px">回复</a>

      </el-row>
      <br>
    </a>
  </div>
</template>

<script>

export default {
  name: "ChildComment",
  props: {
    comments: Array
  },

}
</script>

<style scoped>

</style>