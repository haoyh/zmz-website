<template>
  <div class="home">
    <div id="info">
      <img id="logo" alt="Vue logo" src="../assets/img/zmz-logo.jpeg" />
      <p id="title">MoonDreamer字幕组</p>
      <p id="subTitle">李赫宰个人字幕组</p>
    </div>
    <div>
      <Item :lists="itemList" />
    </div>
    <div id="footer">
      <a href="https://weibo.com/u/7207302882">
        <p class="footer_link">微博</p>
      </a>
      <a href="https://space.bilibili.com/439531411">
        <p class="footer_link">B站</p>
      </a>
      <!-- <p class="footer_link" v-on:click="goMessage">留言</p> -->
    </div>
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
    path: "/member",
  },
  {
    name: "关于我们",
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
  methods: {
    goMessage() {
      this.$router.push("/about");
    },
  },
};
</script>

<style scoped>
.home {
  display: flex;
  flex-direction: column;
}

#info {
  width: 100%;
  text-align: center;
  margin-bottom: 20px;
}

#logo {
  border-radius: 20px;
  margin: 20px 5px 0px;
  height: 200px;
}

#title {
  font-size: 18px;
  color: purple;
}

#subTitle {
  font-size: 14px;
}

#footer {
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  position: fixed;
  bottom: 0px;
}

.footer_link {
  font-size: 14px;
  color: dodgerblue;
  padding: 10px 20px;
  margin: 0px;
}

a {
  text-decoration: none;
  /* background: red; */
  /* color: aquamarine; */
}
</style>
