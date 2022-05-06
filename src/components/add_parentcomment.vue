<template>
  <a style="margin-top: 20px">{{ post_content.inf1 }}</a>
  <br>
  <br>

  <el-form :model="form" label-width="120px">
    <el-form-item label="写下你的评论">
      <el-input v-model="form.content"></el-input>
    </el-form-item>

    <el-form-item>
      <el-button type="primary" @click="onSubmit">发布</el-button>
      <el-button @click="cancel">取消</el-button>
    </el-form-item>
  </el-form>

</template>

<script>
import { reactive } from 'vue'
import axios from "axios";
export default {
  name: "add_parentcomment",
  props:{
    post: Object
  },
  setup(){
    const form = reactive({
      content: '',
    })
    const post_content = reactive({
          inf1: '',
    })
    return {
      post_content,
      form,
    }
  },
  methods: {
    onSubmit(){
      let query = this.$route.query
      var post_id = query["post_id"]

      axios.post("http://127.0.0.1:8000/api/main/comments/", {
        "content": this.form.content,
        "post_id": post_id
      },{
        headers: {
          "Authorization": localStorage.getItem("token"),
          "Content-Type": "application/json;charset=UTF-8"
        }
      }).then(response => {
        this.$router.push('/')
      })
    },
    cancel(){
      this.$router.push('/')
    }
  },
  created() {
    let query = this.$route.query
    var post_content = query["post_content"]
    this.post_content.inf1 = post_content
  }

}


</script>

<style scoped>

</style>


