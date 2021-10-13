<template>
  <div>
    <ul>
      <li v-for="item in lists" :key="item" v-on:click="openChildPage(item)">
        <div id="content">
          <img :src="require('../assets/' + item.icon)" :alt="item.name" />
          <div>{{ item.name }}</div>
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
      console.log(info.name);
      //   this.$router.push("/news");
      this.$router.push(info.path);
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
</style>
