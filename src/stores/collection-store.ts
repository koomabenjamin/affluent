import { defineStore } from "pinia";
import { CollectionService } from "@/services/collection.service";
import type { CollectionPayload, CollectionRequest } from "@/types";

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
    async fetchAll(group: string | number) {
      if (!this.loadingCollections) this.loadingCollections = true;
      const data = await new CollectionService().fetchAll(group);
      this.collections = data;
      this.loadingCollections = false;
    },
    async save(collection: CollectionRequest) {
      const response: CollectionPayload = await new CollectionService().save(collection);
      this.collections = response;
    },
  }
})