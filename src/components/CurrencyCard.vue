<template>
  <div class="currency-card">
    <div class="currency-card__head">
      <div class="currency-card__head__currency">{{ currencyCode }}</div>
      <div class="currency-card__head__value">{{ value.toLocaleString() }}</div>
    </div>
    <div class="currency-card__body">
      <div class="currency-card__body__currency">
        <div class="currency-card__body__currency__name">{{ currencyName }}</div>
        <div class="currency-card__body__currency__rate">{{ currencyRateString }}</div>
      </div>
      <div
        class="currency-card__body__button"
        @click="remove"
      >
        <img
          :src="trashIcon"
          alt="Trash Icon"
        >
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "CurrencyCard",
    props: {
      baseCurrencyCode: { type: String, default: "" },
      baseCurrencyValue: { type: Number, default: 0 },
      currencyCode: { type: String, default: "" },
      currencyName: { type: String, default: "" },
      currencyRate: { type: Number, default: 0 }
    },
    data() {
      return {
        trashIcon: require("@/assets/trash.svg")
      };
    },
    computed: {
      value() {
        return this.currencyRate * this.baseCurrencyValue;
      },
      currencyRateString() {
        return `1 ${this.baseCurrencyCode} = ${this.currencyCode} ${
          this.currencyRate
        }`;
      }
    },
    methods: {
      remove() {
        this.$emit("remove", this.currencyCode);
      }
    }
  };
</script>

<style lang="scss" scoped>
  .currency-card {
    padding: 10px;
    background-color: #ffffff;
    border: 1px solid #fc6767;
    border-radius: 5px;

    &__head {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 10px;

      &__currency {
        font-size: 16px;
        color: #ec008c;
      }

      &__value {
        font-size: 18px;
        font-weight: 700;
        color: #777;
      }
    }

    &__body {
      display: flex;
      justify-content: space-between;
      align-items: center;

      &__currency {
        font-style: italic;

        &__name {
          font-size: 14px;
          font-weight: 700;
          color: #777;
        }

        &__rate {
          font-size: 15px;
          color: #777;
        }
      }

      &__button {
        cursor: pointer;
        filter: grayscale(1);
        transition: filter 0.2s ease;

        img {
          display: block;
          width: 18px;
          height: 18px;
        }

        &:hover {
          filter: initial;
        }
      }
    }
  }
</style>