<template>
<!--  <div>-->
    <el-row style="margin-left: 30px">
      <el-button-group>
        <agree :post="post"></agree>
      </el-button-group>

      <el-button type="warning" icon="ChatLineRound" size="small" style="margin-left: 8px" @click="get_comments(post.id)">
        查看评论
      </el-button>

      <el-icon :size="20" style="margin-left: 10px; margin-top: 10px;">
        <View />
      </el-icon>

      <a style="margin-top: 10px">{{ post.views_count }}</a>
    </el-row>

    <a v-if="is_show.show">
      <el-row style="margin-top: 6px">
        <el-col :span="24">
          <el-card>
            <router-link :to="{name:'add_parentcomment',query: {post_id:post.id, post_content: post.content}}" style="text-decoration: none; color: #000000">
              <el-button type="success" style="margin-left: 900px" >发布评论</el-button>
            </router-link>

            <Comment :comments="this.comments.info.results"></Comment>
            
          </el-card>
        </el-col>
      </el-row>
    </a>
<!--  </div>-->
</template>

<script>
import axios from "axios";
import {reactive} from "vue";
import agree from "@/components/agree";
import Comment from "@/components/Comment";

export default {
  name: "agree_and_comment",
  components: {agree, Comment},

  props:{
    post: Object
  },
  setup (props, context) {
    const comments = reactive({
      "info": Object
    })
    const is_show = reactive({
      "show": false,
      "is_request_status": false
    })

    return {
      comments,
      is_show
    }
  },
  methods: {

    get_comments(post_id){
      if (this.is_show.is_request_status == false){
        axios.get("http://127.0.0.1:8000/api/main/comments/?post_id=" + post_id, {
          headers: {
            "Authorization": localStorage.getItem("token")
          }
        }).then(response => {
          this.comments.info = response.data
          this.is_show.show = !this.is_show.show
        })
      }else{
        this.is_show.show = !this.is_show.show
      }

    }
  },
}
</script>

<style scoped>

</style>