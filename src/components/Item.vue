<template>
  <div>
    <ul>
      <li v-for="item in lists" :key="item" v-on:click="openChildPage(item)">
        <div id="content">
          <img
            v-if="item.icon"
            :src="require('../assets/' + item.icon)"
            :alt="item.name"
          />
          <div id="name">{{ item.name }}</div>
          <div id="desc">{{ item.desc }}</div>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "Item",
  props: {
    lists: Array,
  },
  methods: {
    openChildPage(info) {
      this.$router.push({ path: info.path });
      // 查询参数，会拼接到 路径 中
      //   this.$router.push({ path: info.path, query: { name: "aa" } });
      // 参数，刷新会丢失，不会拼接到路径中
      //   this.$router.push({
      //     name: info.path,
      //     params: { title: info.name },
      //   });
    },
  },
};
</script>

<style scoped>
ul {
  padding: 0;
  margin: 0;
  list-style: none;
}

li {
  font-size: 16px;
  margin: 10px 4px;
  border-width: 0.5px;
  border-color: black;
  border-style: solid;
  border-radius: 4px;
  text-align: left;
}

a {
  height: 100%;
  width: 100%;
  text-decoration: none;
  color: black;
}

img {
  width: 20px;
  height: 20px;
  float: left;
  align-content: center;
  margin-top: 2px;
}

#content {
  padding: 8px 4px;
}

#name {
  font-size: 16px;
}

#desc {
  font-size: 14px;
}
</style>
