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
    async fetchGroups() {
      if(!this.loadingGroups) this.loadingGroups = true;
      const { data } = await customAxios.get('/groups');
      this.groups = data.data;
      this.loadingGroups = false;
    },
  }
})