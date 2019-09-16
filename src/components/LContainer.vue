<template>
  <div class="layout-container">
    <slot/>
  </div>
</template>

<script>
  export default {
    name: "LayoutContainer"
  };
</script>

<style lang="scss" scoped>
  .layout-container {
    max-width: 600px;
    margin: 0 auto;
    padding: 0 20px;
  }
</style>