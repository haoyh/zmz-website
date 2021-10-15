<template>
  <TitleBar :title="title"></TitleBar>
  <p>Video</p>
</template>

<script>
import TitleBar from "../components/TitleBar.vue";
export default {
  components: {
    TitleBar,
  },
  data() {
    return {
      title: "视频资源",
    };
  },
};
</script>
