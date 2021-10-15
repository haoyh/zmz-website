<template>
  <div>
    <TitleBar :title="title" />
  </div>
  <Item :lists="members" />
</template>

<script>
import Item from "../components/Item.vue";
import TitleBar from "../components/TitleBar.vue";

export default {
  components: {
    TitleBar,
    Item,
  },
  data() {
    return {
      title: "成员介绍",
      members: [
        {
          name: "A",
          desc: "aa",
        },
        {
          name: "B",
          desc: "ba",
        },
      ],
    };
  },
};
</script>
