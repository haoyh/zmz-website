<template>
  <TitleBar :title="title"></TitleBar>
  <p>news</p>
</template>

<script>
import TitleBar from "../components/TitleBar.vue";
export default {
  name: "News",
  components: {
    TitleBar,
  },
  data() {
    return {
      title: "最新资讯",
    };
  },
};
</script>
