<template>
  <Posts :posts="posts"></Posts>
</template>

<script>

import Posts from "@/components/Posts"
import {reactive} from "vue";
import axios from "axios";

export default {
  name: "SearchPosts",
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
    get_posts_data(search_key){

      axios.get("http://127.0.0.1:8000/api/main/posts/?content__icontains=" + search_key, {
        headers: {
          "Authorization": localStorage.getItem("token")
        }
      }).then(response => {
        this.posts.info = response.data
      })}
  },
  created() {
    let query = this.$route.query
    var search_key = query["s_key"]
    this.get_posts_data(search_key)
  },

  watch:{
    $route(to,from){
      if(to.fullPath!=from.fullPath){
        var search_key = to.query["s_key"]
        this.get_posts_data(search_key);
      }
    }
  }
}
</script>

<style scoped>

</style>