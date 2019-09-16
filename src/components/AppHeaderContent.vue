<template>
  <div class="app-header-content">
    <div class="app-header-content__currency">{{ currencyName }}</div>
    <div class="app-header-content__input">
      <slot/>
    </div>
  </div>
</template>

<script>
  export default {
    name: "AppHeaderContent",
    props: {
      currencyName: { type: String, default: "" }
    }
  };
</script>

<style lang="scss" scoped>
  .app-header-content {
    padding: 20px 0;

    &__currency {
      color: #ffffff;
      font-weight: 500;
      font-style: italic;
      font-size: 14px;
      margin-bottom: 10px;
    }
  }
</style>