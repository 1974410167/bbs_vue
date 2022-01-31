<template>
  <Posts :posts="posts"></Posts>
</template>

<script>

import Posts from "@/components/Posts"
import {reactive} from "vue";
import axios from "axios";

export default {
  name: "TopicPostViews",
  components: {Posts},
  setup () {
    const posts = reactive({
      "info": Object,
    })
    return {
      posts,
    }
  },

  methods: {
    get_posts_data(topic_id){
      axios.get("http://127.0.0.1:8000/api/main/posts/?topic_id=" + topic_id, {
        headers: {
          "Authorization": " Token 4deb6e4449b8b8d0166707ca028aac81338b6a9a"
        }
      }).then(response => {
        this.posts.info = response.data
      })}
  },
  created() {
      let query = this.$route.query
      var topic_id = query["topic_id"]
      this.get_posts_data(topic_id)
  },

  watch:{
    $route(to,from){
      if(to.fullPath!=from.fullPath){
        var topic_id = to.query["topic_id"]
        this.get_posts_data(topic_id);
      }
    }
  }
}
</script>

<style scoped>

</style>