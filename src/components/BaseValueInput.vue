<template>
  <div :class="styleClass">
    <div class="base-value-input__currency">USD</div>
    <div class="base-value-input__divider"></div>
    <money
      @blur="handleBlur"
      @focus="handleFocus"
      @input="handleInput"
      :value="value"
      v-bind="money"
      class="base-value-input__input"
    />
  </div>
</template>

<script>
  import { Money } from "v-money";

  export default {
    name: "BaseValueInput",
    components: {
      Money
    },
    props: {
      value: { type: Number, default: 0 }
    },
    data() {
      return {
        money: {
          decimal: ".",
          thousands: ",",
          prefix: "",
          suffix: "",
          precision: 4,
          masked: false
        },
        isFocus: false
      };
    },
    computed: {
      styleClass() {
        return [
          "base-value-input",
          {
            "base-value-input--is-focus": this.isFocus
          }
        ];
      }
    },
    methods: {
      handleFocus() {
        console.log("isFocus");
        this.isFocus = true;
      },
      handleBlur() {
        console.log("isBlur");
        this.isFocus = false;
      },
      handleInput(value) {
        this.$emit("input", value);
      }
    }
  };
</script>

<style lang="scss" scoped>
  .base-value-input {
    display: flex;
    border: 2px solid #ffffff;
    border-radius: 5px;

    &__currency {
      background-color: rgba(255, 255, 255, 0.1);
      display: flex;
      justify-content: center;
      align-items: center;
      flex-basis: 75px;
      font-weight: 700;
      font-size: 18px;
      color: #ffffff;
    }

    &__divider {
      flex-basis: 1px;
      flex-grow: 0;
      background-color: rgba(255, 255, 255, 0.5);
    }

    &__input {
      flex-grow: 1;
      height: 35px;
      background: transparent;
      border: none;
      text-align: right;
      padding: 0 10px;
      color: #ffffff;
      font-family: "Ubuntu", sans-serif;
      font-size: 14px;

      &:active,
      &:focus {
        outline: none;
      }
    }

    &--is-focus {
      box-shadow: 0 0 2px 4px rgba(255, 255, 255, 0.5);
    }
  }
</style>