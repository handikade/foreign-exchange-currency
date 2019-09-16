<template>
  <div class="home">
    <app-header>
      <app-header-content :currency-name="currencyDictionary[baseCurrencyCode].name">
        <base-value-input
          :value="baseCurrencyValue"
          @input="handleValueInput"
        />
      </app-header-content>
    </app-header>
    <app-body>
      <currency-card-container>
        <currency-card
          v-for="(currency, key) in showedCurrencies"
          :key="key"
          :base-currency-code="baseCurrencyCode"
          :base-currency-value="baseCurrencyValue"
          :currency-code="currency.currencyCode"
          :currency-name="currency.currencyName"
          :currency-rate="currency.currencyRate"
          @remove="remove"
        />
      </currency-card-container>
      <add-currency-button
        v-if="!isShowAddInput"
        @click="showAddInput"
      />
      <add-currency-input
        v-if="isShowAddInput"
        :options="currencyOptions"
        @submit="handleSubmit"
      />
    </app-body>
  </div>
</template>

<script>
  import AppHeader from "@/components/AppHeader";
  import AppHeaderContent from "@/components/AppHeaderContent";
  import BaseValueInput from "@/components/BaseValueInput";

  import AppBody from "@/components/AppBody";

  import CurrencyCardContainer from "@/components/CurrencyCardContainer";
  import CurrencyCard from "@/components/CurrencyCard";

  import AddCurrencyButton from "@/components/AddCurrencyButton";
  import AddCurrencyInput from "@/components/AddCurrencyInput";
  
  import { getLatestExchangeRate } from "@/api";

  export default {
    name: "home",
    components: {
      AppHeader,
      AppHeaderContent,
      BaseValueInput,
      AppBody,
      CurrencyCardContainer,
      CurrencyCard,
      AddCurrencyButton,
      AddCurrencyInput,
    },
    data() {
      return {
        baseCurrencyCode: "USD",
        baseCurrencyValue: 0,
        currencyDictionary: {
          USD: {
            code: "USD",
            name: "United States Dollar"
          },
          CAD: {
            code: "CAD",
            name: "Canadian Dollar"
          },
          IDR: {
            code: "IDR",
            name: "Indonesian Rupiah"
          },
          GBP: {
            code: "GBP",
            name: "Great Britain Pound"
          },
          CHF: {
            code: "CHF",
            name: "Confoederatio Helvetica Franc"
          },
          SGD: {
            code: "SGD",
            name: "Singapore Dollar"
          },
          INR: {
            code: "INR",
            name: "Indian Rupee"
          },
          MYR: {
            code: "MYR",
            name: "Malaysian Ringgit"
          },
          JPY: {
            code: "JPY",
            name: "Japanese Yen"
          },
          KRW: {
            code: "KRW",
            name: "Korean Won"
          }
        },
        showedCurrencies: [],
        rates: {},
        isShowAddInput: false,
        currencyOptions: []
      };
    },
    methods: {
      showAddInput() {
        this.isShowAddInput = true;
      },
      hideAddInput() {
        this.isShowAddInput = false;
      },
      handleSubmit(value) {
        if (value) {
          this.showedCurrencies.push({
            currencyCode: this.currencyDictionary[value].code,
            currencyName: this.currencyDictionary[value].name,
            currencyRate: this.rates[value]
          });
        }

        this.hideAddInput();
      },
      handleValueInput(value) {
        this.baseCurrencyValue = value;
      },
      remove(currencyCode) {
        console.log("remove", currencyCode);
        this.showedCurrencies = this.showedCurrencies.filter(e => {
          return e.currencyCode != currencyCode;
        });
      },
      generateCurrencyOptions() {
        const dicts = Object.values(this.currencyDictionary);

        dicts.forEach(dict => {
          if (dict.code != this.baseCurrencyCode) {
            this.currencyOptions.push({
              label: dict.name,
              value: dict.code
            });
          }
        });
      }
    },
    mounted() {
      getLatestExchangeRate(this.baseCurrencyCode).then(res => {
        this.rates = res.data.rates;
      });

      this.generateCurrencyOptions();
    }
  };
</script>
