import { defineStore } from "pinia";
import { customAxios } from "../composables/axios";

export interface IState {
  posts: any[];
  loadingPosts: boolean;
}

export const usePostStore = defineStore("GroupStrore", {
  state: (): IState => {
    return {
      posts: [
        {
          content: "Rsemaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
          likes: 0,
          shares: 0,
          tags: 0,
          dislikes: 0,
          loves: 0,
          favourites: 0,
          comments: [],
          images: [],
        },
        {
          content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
          likes: 0,
          shares: 0,
          tags: 0,
          dislikes: 0,
          loves: 0,
          favourites: 0,
          comments: [],
          images: [],
          // images: [2, 3, 4],
        },
        {
          content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
          likes: 0,
          shares: 0,
          tags: 0,
          dislikes: 0,
          loves: 0,
          favourites: 0,
          comments: [],
          images: [],
        },
        {
          content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry",
          likes: 0,
          shares: 0,
          tags: 0,
          dislikes: 0,
          loves: 0,
          favourites: 0,
          comments: [],
          images: [],
          // images: [6, 6, 6, 6, 6, 6, 6, 6, 6, 6],
        },
      ],
      loadingPosts: false,
    }
  },
  getters: {},
  actions: {
    async fetchPosts() {
      if (!this.loadingPosts) this.loadingPosts = true;
      const { data } = await customAxios.get('/posts');
      this.posts = data.data;
      this.loadingPosts = false;
    },
    async savePost(post: any) {
      this.posts.push(post);
    },
  }
})