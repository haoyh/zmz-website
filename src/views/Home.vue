<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <Item :lists="itemList"></Item>
  </div>
</template>

<script>
import Item from "../components/Item.vue";

const itemList = [
  {
    name: "最新资讯",
    icon: "logo.png",
    path: "/news",
  },
  {
    name: "视频资源",
    icon: "logo.png",
    path: "/video",
  },
  {
    name: "成员介绍",
    icon: "logo.png",
    path: "/about",
  },
];

export default {
  name: "Home",
  components: {
    Item,
  },
  data() {
    return {
      itemList: itemList,
    };
  },
};
</script>
