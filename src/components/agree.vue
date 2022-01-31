<template>
  <a v-if="this.is_agree.is_a">
    <el-button type="primary" icon="CaretTop" size="small" @click="cancel_agree_post(post.id)">已赞同{{ agree_num.val }}</el-button>
  </a>
  <a v-else>
    <el-button type="primary" icon="CaretTop" size="small" plain @click="agree_post(post.id)">赞同{{ agree_num.val }}</el-button>
  </a>

  <a v-if="this.is_bbad.is_bad">
    <el-button type="primary" icon="CaretBottom" size="small" class="gg1" @click="cancel_bad_post(post.id)"></el-button>
  </a>
  <a v-else>
    <el-button type="primary" icon="CaretBottom" size="small" class="gg1" plain @click="change_bad(post.id)"></el-button>
  </a>
</template>

<script>
import {reactive, ref} from "vue";
import axios from "axios";

export default {
  name: "agree",
  props: {
    post: Object
  },
  setup: function (props) {
    const posts = reactive({
      "info": Object
    })
    const agree_num = reactive({
      "val": 0
    })
    const is_agree = reactive({
      "is_a": false
    })
    const is_bbad = reactive({
      "is_bad": false
    })
    // eslint-disable-next-line vue/no-setup-props-destructure
    agree_num.val = props.post.agree_number
    // eslint-disable-next-line vue/no-setup-props-destructure
    is_agree.is_a = props.post.is_agree
    // eslint-disable-next-line vue/no-setup-props-destructure
    is_bbad.is_bad = props.post.is_bad
    return {
      posts,
      agree_num,
      is_agree,
      is_bbad
    }
  },
  methods:{
    agree_post(post_id){
      axios.post("http://127.0.0.1:8000/api/main/posts/"+ post_id +"/agree_posts/",{
        agree: true,
      },{
        headers: {
          "Authorization": " Token 4deb6e4449b8b8d0166707ca028aac81338b6a9a",
          "Content-Type": "application/json;charset=UTF-8"
        }
      }).then(response => {
            console.log(response.data)
            this.agree_num.val += 1
            this.is_agree.is_a = true
          }
      )},
    cancel_agree_post(post_id){
      axios.post("http://127.0.0.1:8000/api/main/posts/"+ post_id +"/agree_posts/",{
        agree: false,
      },{
        headers: {
          "Authorization": " Token 4deb6e4449b8b8d0166707ca028aac81338b6a9a",
          "Content-Type": "application/json;charset=UTF-8"
        }
      }).then(response => {
            console.log(response.data)
            this.agree_num.val -= 1
            this.is_agree.is_a = false
          }
      )
    },
    cancel_bad_post(post_id){
      axios.post("http://127.0.0.1:8000/api/main/posts/"+ post_id +"/bad_posts/",{
        bad: false,
      },{
        headers: {
          "Authorization": " Token 4deb6e4449b8b8d0166707ca028aac81338b6a9a",
          "Content-Type": "application/json;charset=UTF-8"
        }
      }).then(response => {
            this.is_bbad.is_bad = false
          }
      )
    },
    change_bad(post_id){
      axios.post("http://127.0.0.1:8000/api/main/posts/"+ post_id +"/bad_posts/",{
        bad: true,
      },{
        headers: {
          "Authorization": " Token 4deb6e4449b8b8d0166707ca028aac81338b6a9a",
          "Content-Type": "application/json;charset=UTF-8"
        }
      }).then(response => {
          this.is_bbad.is_bad = true
          }
      )
    }
    },
  // watch:{
  //   $route(to,from){
  //     if(to.fullPath!=from.fullPath){
  //       var topic_id = to.query["topic_id"]
  //       this.get_posts_data(topic_id);
  //     }
  //   }
  // }
}
</script>

<style scoped>

</style>