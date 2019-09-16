<template>
  <div class="app-body">
    <l-container>
      <slot/>
    </l-container>
  </div>
</template>

<script>
  import LContainer from "@/components/LContainer";

  export default {
    name: "AppBody",
    components: {
      LContainer
    }
  };
</script>

<style lang="scss" scoped>
  .app-body {
    padding: 20px 0 150px 0;
  }
</style>