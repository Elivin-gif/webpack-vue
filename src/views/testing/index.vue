<template>
  <el-tabs v-model="components" @tab-click="handleClick">
    <el-tab-pane label="用户管理" name="n1">
      <component :is="components"></component>
    </el-tab-pane>
    <el-tab-pane label="配置管理" name="n2">
      <component :is="components"></component>
    </el-tab-pane>
    <el-tab-pane label="角色管理" name="n3">
      <component :is="components"></component>
    </el-tab-pane>
    <el-tab-pane label="定时任务补偿" name="fourth">
       <component :is="components"></component>
    </el-tab-pane>
  </el-tabs>
</template>
<script lang="ts">
import { defineComponent, reactive, toRefs, defineAsyncComponent } from "vue";
export default defineComponent({
  components: {
    n1: defineAsyncComponent({
      loader: () => import("./components/n1.vue"),
      delay: 200,
      timeout: 3000,
      errorComponent: () => import("./components/n1.vue"),
      loadingComponent: () => import("./components/n1.vue"),
    }),
    n2: defineAsyncComponent({
      loader: () => import("./components/n2.vue"),
      delay: 200,
      timeout: 3000,
      errorComponent: () => import("./components/n1.vue"),
      loadingComponent: () => import("./components/n1.vue"),
    }),
    n3: defineAsyncComponent({
      loader: () => import("./components/n3.vue"),
      delay: 200,
      timeout: 3000,
      errorComponent: () => import("./components/n1.vue"),
      loadingComponent: () => import("./components/n1.vue"),
    }),
    n4: defineAsyncComponent({
      loader: () => import("./components/n1.vue"),
      delay: 200,
      timeout: 3000,
      errorComponent: () => import("./components/n1.vue"),
      loadingComponent: () => import("./components/n1.vue"),
    }),
    // n1: (resolve) => require([], resolve),
    // n2: (resolve) => require(["./components/n2.vue"], resolve),
    // n3: (resolve) => require(["./components/n3.vue"], resolve),
  },
  setup() {
    const state = reactive({
      components: "n1",
    });

    function handleClick(tab, event) {
      console.log(tab, event);
    }

    return { ...toRefs(state), handleClick };
  },
  //   data() {
  //     return {
  //
  //     };
  //   },
  //   methods: {

  //   }
});
</script>
