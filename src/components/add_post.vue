<template>

  <el-form :model="form" label-width="120px">
    <el-form-item label="帖子内容">
      <el-input v-model="form.content"></el-input>
    </el-form-item>
    <el-form-item label="话题">
      <el-select v-model="form.topic" placeholder="选择话题">
        <a v-for="cur_text in topics.info" :key="cur_text">
          <el-option :label="cur_text.name" :value="cur_text.name"></el-option>
        </a>
      </el-select>
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
  name: "add_post",

  setup(){
    const form = reactive({
      content: '',
      topic: '',
      })
    const topics = reactive({
      "info": Object,
    })
    return {
      form,
      topics
    }
  },
  methods: {
    onSubmit(){
      axios.post("http://127.0.0.1:8000/api/main/posts/", {
        "content": this.form.content,
        "topic": this.form.topic
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
      axios.get("http://127.0.0.1:8000/api/main/topics/",{
        headers: {
          "Authorization": localStorage.getItem("token"),
          "Content-Type": "application/json;charset=UTF-8"
        }
      }).then(response => {
          this.topics.info = response.data.results
        console.log(this.topics)
          }
      )
  }

}


</script>

<style scoped>

</style>