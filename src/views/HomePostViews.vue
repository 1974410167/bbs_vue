<template>
  <Posts :posts="posts"></Posts>
</template>

<script>

import Posts from "@/components/Posts"
import {reactive} from "vue";
import axios from "axios";

export default {
  name: "PostViews",
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
    get_posts_data(){
      axios.get("http://127.0.0.1:8000/api/main/posts/", {
        headers: {
          "Authorization": " Token 4deb6e4449b8b8d0166707ca028aac81338b6a9a"
        }
      }).then(response => {
        this.posts.info = response.data

      })},

  },
  created() {
    this.get_posts_data()
  }
}
</script>

<style scoped>

</style>