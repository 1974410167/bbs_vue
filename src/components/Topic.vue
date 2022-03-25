<template>
  <div>
    <h1 class=color2>热门话题</h1>

    <a style="text-align:justify; text-justify:inter-ideograph; ">
      <h3 v-for="(i, index) in topics.info.results" :key="i" style="margin-left: 35px;">

        <el-badge :value="i.host_number" class="item" type="warning" :max="100000">
          <a style="color: #7fff00">{{ index+1 }}</a>. &nbsp;
          <router-link :to="{name:'topic_posts',query: {topic_id:i.id}}" style="text-decoration: none; color: #000000">
            {{ i.name }}
          </router-link>

        </el-badge>
      </h3>
    </a>
  </div>
</template>

<script>
export default {
  name: "Topic",
  props: {
    "topics": Object
  }
}
</script>

<style scoped>

</style>