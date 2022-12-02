<template>
  <div class="w-[352px] md:mx-[10px] h-[391px] z-10">
    <router-link :key="$route.path" :to="`/${post._id}`">
      <div class="flex-1 flex flex-col inline-block inline w-full">
        <img
          v-if="post.image"
          :src="createURL(post.image, 352, 198)"
          class="w-[352px] h-[198px] rounded-[25px]"
        />

        <div class="flex flex row w-full items-center justify-between">
          <p
            class="text-[14px] text-[#735BD3] text-left leading-[1.5rem] mt-2 mb-2"
          >
            {{ post.category }}
          </p>
          <p class="text-graytext text-[14px] leading-6">
            {{ FormatDateOnPostCard(post._createdAt) }}
          </p>
        </div>
        <h3
          class="text-white leading-[1.4rem] text-[16px] mb-2 w-auto text-left h-auto break-normal"
        >
          {{ post.title }}
        </h3>

        <p class="text-[#DEDEDE] text-[16px] leading-[1.5rem] text-left inline">
          {{ post.excerpt }}
        </p>
      </div>
    </router-link>
  </div>
</template>

<script>
import { FormatDateOnPostCard, createURL } from "../components/utils";
export default {
  props: {
    post: {
      type: Object,
      required: true,
    },
  },

  setup() {
    return {
      FormatDateOnPostCard,
      createURL,
    };
  },
};
</script>
