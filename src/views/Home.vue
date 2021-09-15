<template>
  <div>
    Vue3
    <img :src="img" />
    <div class="home">vue3</div>
    <div>
      <About/>
    </div>
  </div>
</template>

<script lang="ts">
import About from "./About/index.vue";
import { defineComponent, reactive, toRefs } from "vue";
export default defineComponent({
  components: {
    About,
  },
  setup() {
    const state = reactive({});
    const img = require("../assets/images/image.jpeg");

    return { ...toRefs(state), img };
  },
});
</script>

<style lang="scss" scoped>
img {
  width: 1024px;
}
</style>