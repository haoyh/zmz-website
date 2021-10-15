<template>
  <TitleBar :title="title"></TitleBar>
  <div class="about">
    <p id="desc">月亮语言转换器🌙李赫宰个人字幕组🌙</p>
    <p id="recruit">永远在招新🌙</p>
  </div>
</template>

<script>
import TitleBar from "../components/TitleBar.vue";

export default {
  components: {
    TitleBar,
  },
  data() {
    return {
      title: "关于我们",
    };
  },
};
</script>

<style scoped>
#desc {
  margin-top: 40px;
  font-size: 16px;
  color: purple;
}

#recruit {
  margin-top: 20px;
  font-size: 26px;
  color: purple;
}
</style>
