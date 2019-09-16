<template>
  <div class="currency-card-container">
    <slot/>
  </div>
</template>

<script>
  export default {
    name: "CurrencyCardContainer"
  };
</script>

<style lang="scss" scoped>
  .currency-card-container {
    display: grid;
    grid-template-columns: 1fr;
    grid-row-gap: 10px;
    margin-bottom: 25px;
  }
</style>