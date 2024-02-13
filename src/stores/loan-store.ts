import { defineStore } from "pinia";
import { LoanService } from "@/services/loan.service";
import type { LoanPayload, LoanRequest } from "@/types";

export interface IState {
  loans: any[];
  loadingLoans: boolean;
}

export const useLoanStore = defineStore("loanStore", {
  state: (): IState => {
    return {
      loans: [],
      loadingLoans: false,
    }
  },
  getters: {},
  actions: {
    async fetchAll(group: string | number) {
      if (!this.loadingLoans) this.loadingLoans = true;
      const data = await new LoanService().fetchAll(group);
      this.loans = data;
      this.loadingLoans = false;
    },
    async save(loan: LoanRequest) {
      const response: LoanPayload = await new LoanService().save(loan);
      this.loans = response;
    },
  }
})