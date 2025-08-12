import { defineStore } from 'pinia';

export interface User {
  id: string;
  name: string;
  email: string;
  avatarUrl?: string;
}

interface UserState {
  user: User | null;
  isAuthenticated: boolean;
}

export const useUserStore = defineStore('userStore', {
  state: (): UserState => ({
    user: null,
    isAuthenticated: false,
  }),
  actions: {
    setUser(user: User) {
      this.user = user;
      this.isAuthenticated = true;
    },
    clearUser() {
      this.user = null;
      this.isAuthenticated = false;
    },
  },
  getters: {
    userName: (state) => state.user?.name || '',
    userEmail: (state) => state.user?.email || '',
  },
});