<template>
  <div>
    <el-row>
      <el-col :span="10">
        <el-avatar :size="70" :src="user_center.info.url"></el-avatar>
      </el-col>
      <a style="margin-top: 13px; font-size: 30px;">{{ user_center.info.name }}</a>
    </el-row>

    <el-row style="margin-top: 20px">
      <el-col :span="8">
        <el-button type="primary" icon="Edit" style="width: 200px">帖子{{ user_center.info.post_count }}</el-button>
      </el-col>
    </el-row>
    <el-row style="margin-top: 20px">
      <el-col :span="8">
        <el-button type="primary" icon="comment" style="width: 200px">评论{{ user_center.info.comment_count }}</el-button>
      </el-col>
    </el-row>
    <el-row style="margin-top: 20px">
      <el-col :span="8">
        <el-button type="primary" icon="caret-top" style="width: 200px">被赞同{{ user_center.info.made_agree }}</el-button>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import {reactive} from "vue";
import axios from "axios";

export default {
  name: "SelfCenter",
  props: {
  },
  setup () {
    const user_center = reactive({
      "info": Object,
    })
    return {
      user_center,
    }
  },
  methods: {
    get_user_data(){
      axios.get("http://127.0.0.1:8000/api/main/user_center/", {
        headers: {
          "Authorization": " Token 4deb6e4449b8b8d0166707ca028aac81338b6a9a"
        }
      }).then(response => {
        this.user_center.info = response.data
      })}
  },
  created() {
    this.get_user_data()
  }
}
</script>

<style scoped>

</style>