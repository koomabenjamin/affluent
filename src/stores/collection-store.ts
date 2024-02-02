import { defineStore } from "pinia";
import { CollectionService } from "@/services/collection.service";
// import { CollectionPayload, CollectionRequest } from "@/types/collections/index";

export interface IState {
  collections: any[];
  loadingCollections: boolean;
}

export const useCollectionStore = defineStore("collectionStore", {
  state: (): IState => {
    return {
      collections: [],
      loadingCollections: false,
    }
  },
  getters: {},
  actions: {
    async fetchCollections() {
      if (!this.loadingCollections) this.loadingCollections = true;
      // const { data } = await customAxios.get('/collections');
      // this.collections = data.data;
      this.loadingCollections = false;
    },
    async saveCollection(collection: CollectionRequest) {
      const response: CollectionPayload = await new CollectionService().save(collection);
      this.collections = response;
    },
  }
})