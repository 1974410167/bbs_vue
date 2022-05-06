<template>
  <a style="margin-top: 20px">{{ childcomment_reply_content.inf1 }}</a>
  <br>
  <br>

  <el-form :model="form" label-width="120px">
    <el-form-item label="写下你的回复">
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
  name: "add_childcomment_reply",
  props:{
  },
  setup(){
    const form = reactive({
      content: '',
    })
    const childcomment_reply_content = reactive({
      inf1: '',
    })
    return {
      childcomment_reply_content,
      form,
    }
  },
  methods: {
    onSubmit(){
      let query = this.$route.query
      var parent_comment_id = query["parent_comment_id"]
      var comment_id = query["comment_id"]

      axios.post("http://127.0.0.1:8000/api/main/child_comments/", {
        "content": this.form.content,
        "parent_comment_id": parent_comment_id,
        "comment_id": comment_id
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
    var childcomment_reply_content = query["childcomment_reply_content"]
    this.childcomment_reply_content.inf1 = childcomment_reply_content
  }

}


</script>

<style scoped>

</style>



