<template>
  <div class="add-currency-input">
    <select
      class="add-currency-input__input"
      v-model="currency"
    >
      <option
        :value="null"
        disabled
      >Please select one...</option>
      <option
        v-for="option in options"
        :key="option.value"
        :value="option.value"
      >{{ option.label }}</option>
    </select>
    <button
      class="add-currency-input__button"
      @click="handleClick"
    >{{ buttonLabel }}</button>
  </div>
</template>

<script>
  export default {
    name: "AddCurrencyInput",
    props: {
      options: {
        type: Array,
        default() {
          return [];
        }
      }
    },
    data() {
      return {
        currency: null
      };
    },
    computed: {
      buttonLabel() {
        return this.currency ? "Submit" : "Cancel";
      }
    },
    methods: {
      handleClick() {
        this.$emit("submit", this.currency);
      }
    }
  };
</script>

<style lang="scss" scoped>
  .add-currency-input {
    display: flex;
    height: 40px;
    border-radius: 5px;

    &__input {
      flex-grow: 1;
      border: none;
      background: transparent;
      padding: 0 10px;
      border-top-left-radius: 5px;
      border-bottom-left-radius: 5px;
      border: 2px solid #fc6767;
      font-family: "Ubuntu", sans-serif;
      font-size: 14px;
      color: #ec008c;

      &:active,
      &:focus {
        outline: none;
      }
    }

    &__button {
      flex-basis: 100px;
      border: none;
      cursor: pointer;
      background: #ec008c;
      background: -webkit-linear-gradient(to right, #fc6767, #ec008c);
      background: linear-gradient(to right, #fc6767, #ec008c);
      text-align: center;
      color: #ffffff;
      font-size: 14px;
      font-weight: 700;
      font-family: "Ubuntu", sans-serif;
      color: #ffffff;
      display: flex;
      justify-content: center;
      align-items: center;
      border-top-right-radius: 5px;
      border-bottom-right-radius: 5px;

      &:active,
      &:focus {
        outline: none;
      }
    }
  }
</style>