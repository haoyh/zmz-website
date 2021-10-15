<template>
  <div>
    <img src="../assets/img/ic_back.svg" alt="back" v-on:click="goBack" />
    <p>{{ title }}</p>
  </div>
</template>

<script>
export default {
  name: "TitleBar",
  props: {
    title: String,
  },
  methods: {
    goBack() {
      this.$router.go(-1);
    },
  },
};
</script>

<style scoped>
div {
  display: flex;
}

img {
  width: 20px;
}

p {
  font-size: 18px;
  color: black;
  width: 100%;
  margin-right: 20px;
}
</style>
