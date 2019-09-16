<template>
  <button
    @click="handleClick"
    class="add-currency-button"
  >Add More Currencies</button>
</template>

<script>
  export default {
    name: "AddCurrencyButton",
    methods: {
      handleClick() {
        this.$emit("click");
      }
    }
  };
</script>

<style lang="scss" scoped>
  .add-currency-button {
    border: none;
    cursor: pointer;
    background: #ec008c;
    background: -webkit-linear-gradient(to right, #fc6767, #ec008c);
    background: linear-gradient(to right, #fc6767, #ec008c);
    text-align: center;
    padding: 0 15px;
    border-radius: 5px;
    color: #ffffff;
    font-size: 16px;
    font-weight: 500;
    font-family: "Ubuntu", sans-serif;
    display: block;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 40px;

    &:active,
    &:focus {
      outline: none;
    }
  }
</style>