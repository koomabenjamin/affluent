import { defineStore } from "pinia";
import { customAxios } from "../composables/axios";

export interface IState {
  posts: any[];
  loadingPosts: boolean;
}

export const usePostStore = defineStore("GroupStrore", {
  state: (): IState => {
    return {
      posts:[],
      loadingPosts: false,
    }
  },
  getters: {},
  actions: {
    async fetchPosts() {
      if(!this.loadingPosts) this.loadingPosts = true;
      const { data } = await customAxios.get('/posts');
      this.posts = data.data;
      this.loadingPosts = false;
    },
    async savePost(post:any) {
      this.posts.push(post);
    },
  }
})