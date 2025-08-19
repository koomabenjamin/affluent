import { defineStore } from "pinia";
import { customAxios } from "../composables/axios";

export const useGroupStore = defineStore("GroupStore", {
  state: () => {
    return {
      groups: [],
      loadingGroups: false,
    }
  },
  getters: {},
  actions: {
    async fetchAll() {
      if (!this.loadingGroups) this.loadingGroups = true;
      const response = await customAxios.get('/groups');
      this.groups = response?.data?.payload ?? [];
      this.loadingGroups = false;
    },
  }
})