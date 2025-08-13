<script setup lang="ts">
import Container from "@/components/shared/Container.vue";
import { ref } from "vue";
import {
  HandThumbDownIcon,
  HandThumbUpIcon,
  TagIcon,
  ChatBubbleOvalLeftIcon,
  PaperClipIcon,
  FaceSmileIcon,
  CalendarDaysIcon,
  ChartPieIcon,
  GifIcon,
  HeartIcon,
  StarIcon,
} from "@heroicons/vue/24/outline";
import { } from "@heroicons/vue/20/solid";
import { usePostStore } from "@/stores/post-store";
import { storeToRefs } from "pinia";
import { Icon } from "@iconify/vue";

const postStore = usePostStore();
const { posts, loadingPosts } = storeToRefs(postStore);

const content = ref("");
const comment = ref("");
const activePost = ref(null);
const savingPost = ref(false);

const savePost = () => {
  if (content.value) {
    savingPost.value = true;
    const postContent = new String(`${content.value}`);
    setTimeout(() => {
      postStore.posts.push({
        content: postContent.toString(),
        likes: 0,
        shares: 0,
        tags: 0,
        dislikes: 0,
        loves: 0,
        favourites: 0,
        comments: [],
        images: [],
      });
      savingPost.value = false;
    }, 1000);
    content.value = "";
  }
};

const commentButtonActive = ref(false);

const REACTION_TYPES = {
  LIKES: 0,
  DISLIKES: 1,
  LOVES: 2,
  FAVORITES: 3,
  SHARES: 4
}

/**
 * Activate textarea on particular post
 * @param activePostIndex
 */
const addComment = (activePostIndex) => {
  if (activePost.value !== activePostIndex) activePost.value = activePostIndex;
  else activePost.value = null;
};

const reaction = (type, index) => {
  // const indexOfPost = posts.value.indexOf(index);
  if (index === -1) return;
  if (type === 0) {
    let likeCount = posts.value[index]["likes"] + 1;
    delete posts.value[index]["likes"];
    let newPost = Object.assign({ likes: likeCount }, posts.value[index]);
    posts.value.splice(index, 1);
    posts.value[index] = newPost;
    // console.log(index, type, posts.value[index], currentCount, newPost)
  }
  if (type === 1) {
    let dislikeCount = posts.value[index]["dislikes"] + 1;
    delete posts.value[index]["dislikes"];
    let newPost = Object.assign({ dislikes: dislikeCount }, posts.value[index]);
    posts.value.splice(index, 1);
    posts.value[index] = newPost;
    // console.log(index, type, posts.value[index], currentCount, newPost)
  }
  if (type === 3) {
    let loveCount = posts.value[index]["loves"] + 1;
    delete posts.value[index]["loves"];
    let newPost = Object.assign({ loves: loveCount }, posts.value[index]);
    posts.value.splice(index, 1);
    posts.value[index] = newPost;
    // console.log(index, type, posts.value[index], currentCount, newPost)
  }
  if (type === 2) {
    let favouriteCount = posts.value[index]["favourites"] + 1;
    delete posts.value[index]["favourites"];
    let newPost = Object.assign(
      { favourites: favouriteCount },
      posts.value[index]
    );
    posts.value.splice(index, 1);
    posts.value[index] = newPost;
    // console.log(index, type, posts.value[index], currentCount, newPost)
  }
  if (type === 4) {
    let shareCount = posts.value[index]["shares"] + 1;
    delete posts.value[index]["shares"];
    let newPost = Object.assign({ shares: shareCount }, posts.value[index]);
    posts.value.splice(index, 1);
    posts.value[index] = newPost;
    // console.log(index, type, posts.value[index], currentCount, newPost)
  }
};

const commentReaction = (type, index, commentIndex) => {
  // console.log(posts.value[index]['comments'][commentIndex], posts.value[index]['comments']);
  if (index === -1) return;
  if (type === 0) {
    // TODO: Morph these lines into a function that can validate if content even exists...
    let likeCount = posts.value[index]["comments"][commentIndex]["likes"] + 1;
    let newPost = Object.assign(posts.value[index]["comments"][commentIndex], {
      likes: likeCount,
    });
    Object.assign(posts.value[index]["comments"][commentIndex], newPost);
  }
  if (type === 1) {
    let likeCount = posts.value[index]["comments"][commentIndex]["dislikes"] + 1;
    let newPost = Object.assign(posts.value[index]["comments"][commentIndex], {
      dislikes: likeCount,
    });
    Object.assign(posts.value[index]["comments"][commentIndex], newPost);
  }
  if (type === 2) {
    let likeCount = posts.value[index]["comments"][commentIndex]["favourites"] + 1;
    let newPost = Object.assign(posts.value[index]["comments"][commentIndex], {
      favourites: likeCount,
    });
    Object.assign(posts.value[index]["comments"][commentIndex], newPost);
  }
  if (type === 3) {
    let likeCount = posts.value[index]["comments"][commentIndex]["loves"] + 1;
    let newPost = Object.assign(posts.value[index]["comments"][commentIndex], {
      loves: likeCount,
    });
    Object.assign(posts.value[index]["comments"][commentIndex], newPost);
  }
  if (type === 4) {
    let likeCount = posts.value[index]["comments"][commentIndex]["favourites"] + 1;
    let newPost = Object.assign(posts.value[index]["comments"][commentIndex], {
      favourites: likeCount,
    });
    Object.assign(posts.value[index]["comments"][commentIndex], newPost);
  }
};

const postComment = (index) => {
  if (comment.value) {
    const commentContent = new String(`${comment.value}`);
    let comments = posts.value[index]["comments"];
    comments.push({
      content: commentContent.toString(),
      likes: 0,
      shares: 0,
      tags: 0,
      dislikes: 0,
      loves: 0,
      favourites: 0,
    });
    comment.value = "";
  }
};
interface NewsFeedPageProps {
  showSummaries?: boolean;
}

const props = defineProps<NewsFeedPageProps>();

</script>

<template>
  <div :class="`h-screen ${!props.showSummaries ? 'w-full' : 'w-[52.5%]'} overflow-auto pb-20`">
    <div :class="`flex flex-col items-center justify-between w-full pt-4 ${!props.showSummaries ? 'w-2/3' : 'w-full'}`">
      <div class="w-full py-2 -px-4 border-b">
        <div class="px-2 bg-white rounded-lg shadow p-2">
          <textarea name="" id="" rows="3" placeholder="Write out your post..." v-model="content"
            class="w-full p-4 h-24 text-slate-600 text-sm rounded-xl ring-transparent"></textarea>
          <div class="h-10 flex flex-row-reverse space-x-1 text-sm w-full items-center justify-between p-1">
            <button
              class="text-white text-base font-bold w-auto px-4 py-1 rounded-full bg-blue-600 shadow center space-x-2 hover:bg-blue-600 hover:text-white duration-150"
              @click="savePost()">
              <span>Post</span>
              <!-- <PaperAirplaneIcon class="h-6" /> -->
            </button>
            <div class="flex space-x-0.5 text-blue-500">
              <button class="w-auto px-2 py-1 rounded center hover:bg-blue-600 hover:text-white duration-150">
                <PaperClipIcon class="h-6" />
              </button>
              <button class="w-auto px-2 py-1 rounded center hover:bg-blue-600 hover:text-white duration-150">
                <CalendarDaysIcon class="h-6" />
              </button>
              <button class="w-auto px-2 py-1 rounded center hover:bg-blue-600 hover:text-white duration-150">
                <ChartPieIcon class="h-6" />
              </button>
              <button class="w-auto px-2 py-1 rounded center hover:bg-blue-600 hover:text-white duration-150">
                <FaceSmileIcon class="h-6" />
              </button>
              <button class="w-auto px-2 py-1 rounded center hover:bg-blue-600 hover:text-white duration-150">
                <GifIcon class="h-6" />
              </button>
              <button class="w-auto px-2 py-1 rounded center hover:bg-blue-600 hover:text-white duration-150">
                <TagIcon class="h-6" />
              </button>
            </div>
          </div>
        </div>
      </div>
      <div class="w-full center" v-if="savingPost">
        <Icon icon="svg-spinners:180-ring-with-bg" class="text-blue-500" width="20" v-if="savingPost" />
      </div>
      <div class="w-full space-y-1 rounded overflow-auto h-full" v-if="(posts?.length ?? 0) > 0">
        <div class="h-full overflow-auto divide-y">
          <!-- ******* START OF LIST OF POSTS ****** -->
          <div class="h-auto flex space-x-2 items-center bg-white"
            v-for="(feed, index) in (posts ?? []).sort((a, b) => b + a)" :key="feed">
            <div class="flex flex-col w-full px-6 py-4 h-auto space-y-1 hover:bg-slate-100">
              <div class="w-full h-auto rounded-lg p-2 text-xs flex space-x-2">
                <div class="h-12 w-12 rounded-full bg-black"></div>
                <div class="flex flex-col text-sm">
                  <span class="font-bold">Benjamin Kooma</span>
                  <span class="text-xs font-semibold text-slate-600">@benjaminKooma</span>
                </div>
                <span class="text-sm text-slate-500">Jan 25</span>
              </div>
              <div class="flex flex-wrap h-auto ml-16 text-sm">
                {{ feed.content }}
              </div>
              <div class="grid grid-cols-2 gap-0">
                <div v-for="image in feed.images" :key="image" :class="`bg-blue-600 h-20 border border-white`">
                  {{ image }}
                </div>
              </div>
              <div class="w-full h-auto rounded-lg p-2 text-xs items-center justify-between pr-5 py-1 flex">
                <div class="w-auto -space-x-5 flex">
                  <div class="bg-blue-500 border h-8 w-8 rounded-full" v-for="tag in feed.tags" :key="tag"></div>
                </div>
                <div class="w-auto flex space-x-2 text-blue-800 font-bold">
                  <div @click="addComment(index)" class="h-5 rounded center">
                    {{ feed.comments.length }}
                    <ChatBubbleOvalLeftIcon class="h-5" />
                  </div>
                  <div @click="reaction(0, index)" class="h-5 w-auto rounded center">
                    {{ feed.likes }}
                    <HandThumbUpIcon class="h-6" />
                  </div>
                  <div @click="reaction(1, index)" class="h-5 w-auto rounded center">
                    {{ feed.dislikes }}
                    <HandThumbDownIcon class="h-6" />
                  </div>
                  <div @click="reaction(2, index)" class="h-5 w-auto rounded center">
                    {{ feed.favourites }}
                    <StarIcon class="h-6" />
                  </div>
                  <div @click="reaction(3, index)" class="h-5 w-auto rounded center">
                    {{ feed.loves }}
                    <HeartIcon class="h-6" />
                  </div>
                  <div @click="reaction(4, index)" class="h-5 w-auto rounded center">
                    {{ feed.shares }}
                    <TagIcon class="h-5" />
                  </div>
                </div>
              </div>
              <div class="flex flex-col w-full items-end space-y-2 px-5" v-if="activePost === index">
                <textarea name="" id="" rows="2" v-model="comment"
                  class="border w-full shadow p-4 h-24 text-slate-600 text-sm rounded-xl"></textarea>
                <button @click="postComment(index)" class="border bg-blue-800 text-white p-2 rounded text-xs">
                  Comment
                </button>
              </div>
              <div class="h-auto w-full" v-if="feed.comments.length > 0">
                <div class="h-8 font-bold">Comments</div>
                <!-- <div class="space-y-1"> -->
                <div class="py-2 px-2 border text-sm" v-for="(comment, commentIndex) in feed.comments" :key="comment">
                  <div class="w-full h-auto rounded-lg p-1 text-xs flex space-x-2">
                    <div class="h-10 w-10 rounded-full bg-black flex-none"></div>
                    <div class="flex flex-col text-sm">
                      <div>
                        <span class="font-bold">Benjamin Kooma</span>
                        <span class="text-xs font-semibold text-slate-600">
                          @benjaminKooma
                        </span>
                      </div>
                      <span>{{ comment.content }}</span>
                    </div>
                  </div>
                  <div class="w-auto flex text-slate-400 font-bold justify-end text-xs">
                    <!-- <div class="h-6 w-auto px-1 rounded center">
                        <span class="text-slate-700">{{ feed.comments.length }}</span>
                        <ChatBubbleOvalLeftIcon class="h-5" />
                      </div> -->
                    <div @click="commentReaction(0, index, commentIndex)" class="h-6 w-auto px-1 rounded center">
                      <span class="text-slate-700">{{ comment.likes }}</span>
                      <HandThumbUpIcon class="h-5" />
                    </div>
                    <div @click="commentReaction(1, index, commentIndex)" class="h-6 w-auto px-1 rounded center">
                      <span class="text-slate-700">{{ comment.dislikes }}</span>
                      <HandThumbDownIcon class="h-5" />
                    </div>
                    <div @click="commentReaction(2, index, commentIndex)" class="h-6 w-auto px-1 rounded center">
                      <span class="text-slate-700">{{ comment.favourites }}</span>
                      <StarIcon class="h-5" />
                    </div>
                    <div @click="commentReaction(3, index, commentIndex)" class="h-6 w-auto px-1 rounded center">
                      <span class="text-slate-700">{{ comment.loves }}</span>
                      <HeartIcon class="h-5" />
                    </div>
                    <div @click="commentReaction(4, index, commentIndex)" class="h-6 w-auto px-1 rounded center">
                      <span class="text-slate-700">{{ comment.shares }}</span>
                      <TagIcon class="h-5" />
                    </div>
                  </div>
                </div>
                <!-- </div> -->
              </div>
            </div>
          </div>
          <!-- ******* END OF LIST OF POSTS ****** -->
        </div>
      </div>
      <div v-if="(posts?.length ?? 0) === 0" class="w-full flex items-center flex-col space-y-4 mt-20">
        <img src="../../assets//svg/no-data.svg" alt="no-data" height="250" width="250" />
        <span class="text-sm text-slate-600">No posts availble yet...</span>
      </div>
    </div>
  </div>
</template>
