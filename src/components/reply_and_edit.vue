<template>
  <el-icon style="margin-top: 3px; margin-left: 10px" color="blue">
    <chat-line-round />
  </el-icon>
  <a style="margin-top: 0px" @click="get_child_comments(comment.id)">查看回复</a>

  <el-icon style="margin-top: 5px; margin-left: 10px" color="blue">
    <edit />
  </el-icon>

  <router-link :to="{name:'add_parentcomment_reply',query: {parent_comment_id:comment.id, parent_comment_content: comment.content}}" style="text-decoration: none; color: #000000">
    <a style="margin-top: 0px">回复</a>
  </router-link>


  <a v-if="this.is_show.is_show" style="margin-top: 30px">
    <el-card shadow="hover">

    <ChildComment :comments="this.child_comments.info.results"></ChildComment>
    </el-card>

  </a>

</template>

<script>
import {reactive} from "vue";
import axios from "axios";
import ChildComment from "@/components/ChildComment";

export default {
  name: "reply_and_edit",
  props: {
    comment: Object
  },
  components: {ChildComment},
  setup(){
    const child_comments = reactive({
      "info": Object,
    })
    const is_show = reactive({
      "is_show": false,
    })
    return {
      child_comments,
      is_show
    }
  },
  methods: {
    get_child_comments(parent_comments_id){
      if(this.is_show.is_show == false){
        axios.get("http://127.0.0.1:8000/api/main/child_comments/?parent_comment_id=" + parent_comments_id, {
          headers: {
            "Authorization": localStorage.getItem("token")
          }
        }).then(response => {
          this.child_comments.info = response.data
          this.is_show.is_show = true
        })
      }else{
        this.is_show.is_show = !this.is_show.is_show
      }
},
  },
}
</script>

<style scoped>

</style>