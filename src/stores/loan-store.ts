import { defineStore } from "pinia";
import { customAxios } from "../composables/axios";

export const useLoanStore = defineStore("LoanStore", {
  state: () => {
    return {
      loans: [],
      loadingLoans: false,
    }
  },
  getters: {},
  actions: {
    async fetchLoans() {
      if(!this.loadingLoans) this.loadingLoans = true;
      const { data } = await customAxios.get('/users');
      this.loans = data.data;
      this.loadingLoans = false;
    },
  }
})