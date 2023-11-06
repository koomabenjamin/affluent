import { defineStore } from "pinia";
import { customAxios } from "../composables/axios";

export const useMemberStore = defineStore("MemberStore", {
  state: () => {
    return {
      members: [],
      loadingMembers: false,
    }
  },
  getters: {},
  actions: {
    async fetchMembers() {
      if(!this.loadingMembers) this.loadingMembers = true;
      const { data } = await customAxios.get('/users');
      this.members = data.data;
      this.loadingMembers = false;
    },
  }
})