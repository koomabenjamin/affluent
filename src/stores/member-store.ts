import { defineStore } from "pinia";
import { MemberService } from "@/services/member.service";
import type { MemberPayload, MemberRequest } from "@/types";

export interface IState {
  members: any[];
  isSavingMember: boolean;
  loadingMembers: boolean;
}

export const useMemberStore = defineStore("MemberStore", {
  state: (): IState => {
    return {
      members: [],
      isSavingMember: false,
      loadingMembers: false,
    }
  },
  getters: {},
  actions: {
    async fetchAll(group: string | number) {
      if (!this.loadingMembers) this.loadingMembers = true;
      const data = await new MemberService().fetchAll(group);
      this.members = data ?? [];
      this.loadingMembers = false;
    },
    async save(member: MemberRequest) {
      this.isSavingMember = true;
      const response: MemberPayload = await new MemberService().save(member);
      this.members = response;
      this.isSavingMember = false;
    },
  }
})