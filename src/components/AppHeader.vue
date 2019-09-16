<template>
  <div class="app-header">
    <l-container>
      <slot/>
    </l-container>
  </div>
</template>

<script>
  import LContainer from "@/components/LContainer";

  export default {
    name: "AppHeader",
    components: {
      LContainer
    }
  };
</script>

<style lang="scss" scoped>
  .app-header {
    background: #ec008c;
    background: -webkit-linear-gradient(to right, #fc6767, #ec008c);
    background: linear-gradient(to right, #fc6767, #ec008c);
  }
</style>