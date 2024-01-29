import { defineStore } from "pinia";
import { customAxios } from "../composables/axios";

export interface IState {
  posts: any[];
  loadingCollections: boolean;
}

export const useCollectionStore = defineStore("collectionStore", {
  state: (): IState => {
    return {
      posts:[],
      loadingCollections: false,
    }
  },
  getters: {},
  actions: {
    async fetchCollections() {
      if(!this.loadingCollections) this.loadingCollections = true;
      const { data } = await customAxios.get('/posts');
      this.posts = data.data;
      this.loadingCollections = false;
    },
    async saveCollection(post:any) {
      this.posts.push(post);
    },
  }
})