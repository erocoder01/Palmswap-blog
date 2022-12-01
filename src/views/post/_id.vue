<template>
  <main class="post-page">
    <section v-if="post">
      <!-- Katgorie -->
      <div class="category w-full items-center flex flex-row">
        <button
          class="flex text-[12px] content-center flex-row justify-center flex-wrap text-active-text py-2 px-6 bg-active-bg text-center rounded-[500px] whitespace-nowrap my-10 mx-auto"
        >
          {{ post.category.toUpperCase() }}
        </button>
      </div>

      <!-- Title -->

      <div
        class="w-full items-center justify-center content-center flex flex-row"
      >
        <div
          class="Title relative w-[738px] flex flex-row text-center items-center justify-center m-w-[738px]"
        >
          <!-- graphic -->

          <a href="/">
            <button
              class="w-[35px] h-[35px] absolute left-0 ml-5 mt-2 bg-box rounded-full items-center justify-center"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="12"
                height="12"
                class="ml-auto mr-auto"
              >
                <path
                  d="M 9.333 0 L 4.667 4 L 0 0"
                  transform="translate(1 3.667) rotate(90 4.667 2)"
                  fill="transparent"
                  stroke-width="1.34"
                  stroke="rgb(108, 114, 132)"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></path>
              </svg>
            </button>
          </a>

          <h1 class="text-white text-[32px] m-w-[575px]">
            {{ post.title }}
          </h1>
        </div>
      </div>

      <!-- Palmswap logo mit datum und readtime -->

      <div class="flex flex-row w-full items-center justify-center mt-10">
        <div class="w-[210px] h-[45px] flex flex-row">
          <svg xmlns="http://www.w3.org/2000/svg" width="45" height="45">
            <path
              d="M 1.337 22.648 C 1.337 10.892 10.867 1.363 22.622 1.363 C 34.378 1.363 43.907 10.892 43.907 22.648 C 43.907 34.403 34.378 43.933 22.622 43.933 C 10.867 43.933 1.337 34.403 1.337 22.648 Z"
              fill="transparent"
              stroke-width="1.9285714285714284"
              stroke="rgb(NaN,NaN,NaN)"
              stroke-miterlimit="0.6428571428571428"
              stroke-dasharray=""
            ></path>
            <g>
              <defs>
                <linearGradient
                  id="idkjgvR4B6og1642158904"
                  gradientTransform="rotate(-27.261615812642056, 0.5, 0.5)"
                >
                  <stop
                    offset="0"
                    stop-color="rgb(255,255,255)"
                    stop-opacity="1"
                  ></stop>
                  <stop
                    offset="1"
                    stop-color="rgb(191,191,191)"
                    stop-opacity="1"
                  ></stop>
                </linearGradient>
              </defs>
              <path
                d="M 1.337 22.648 C 1.337 10.892 10.867 1.363 22.622 1.363 C 34.378 1.363 43.907 10.892 43.907 22.648 C 43.907 34.403 34.378 43.933 22.622 43.933 C 10.867 43.933 1.337 34.403 1.337 22.648 Z"
                fill="url(#idkjgvR4B6og1642158904)"
              ></path>
            </g>
            <g>
              <defs>
                <linearGradient
                  id="idJbTx39RwHg1642158904"
                  gradientTransform="rotate(-27.261600799531273, 0.5, 0.5)"
                >
                  <stop
                    offset="0"
                    stop-color="rgb(255,255,255)"
                    stop-opacity="1"
                  ></stop>
                  <stop
                    offset="1"
                    stop-color="rgb(191,191,191)"
                    stop-opacity="1"
                  ></stop>
                </linearGradient>
              </defs>
              <path
                d="M 22.622 3.291 C 25.239 3.291 27.771 3.806 30.156 4.815 C 32.464 5.792 34.534 7.187 36.309 8.961 C 38.089 10.742 39.484 12.812 40.455 15.114 C 41.464 17.499 41.979 20.031 41.979 22.648 C 41.979 25.264 41.464 27.797 40.455 30.182 C 39.478 32.49 38.083 34.56 36.309 36.334 C 34.528 38.115 32.458 39.51 30.156 40.481 C 27.771 41.49 25.239 42.004 22.622 42.004 C 20.006 42.004 17.473 41.49 15.088 40.481 C 12.78 39.504 10.71 38.109 8.936 36.334 C 7.155 34.554 5.76 32.484 4.789 30.182 C 3.774 27.804 3.266 25.264 3.266 22.648 C 3.266 20.031 3.78 17.499 4.789 15.114 C 5.766 12.806 7.161 10.736 8.936 8.961 C 10.716 7.181 12.786 5.786 15.088 4.815 C 17.473 3.806 20.012 3.291 22.622 3.291 M 22.622 1.363 C 10.864 1.363 1.337 10.896 1.337 22.648 C 1.337 34.399 10.864 43.939 22.622 43.939 C 34.38 43.939 43.907 34.406 43.907 22.654 C 43.907 10.903 34.38 1.363 22.622 1.363 Z"
                fill="url(#idJbTx39RwHg1642158904)"
              ></path>
            </g>
            <g>
              <defs>
                <linearGradient
                  id="idegRngplJtg-451969977"
                  gradientTransform="rotate(0, 0.5, 0.5)"
                >
                  <stop
                    offset="0"
                    stop-color="rgb(26,27,32)"
                    stop-opacity="1"
                  ></stop>
                  <stop
                    offset="1"
                    stop-color="rgb(49,52,60)"
                    stop-opacity="1"
                  ></stop>
                </linearGradient>
              </defs>
              <path
                d="M 14.233 16.502 C 15.107 15.718 15.988 14.908 16.888 14.117 C 18.643 12.542 20.391 10.948 22.172 9.354 C 22.217 9.334 22.236 9.309 22.262 9.289 C 22.307 9.244 22.326 9.225 22.371 9.199 L 22.391 9.18 L 22.41 9.199 C 22.455 9.219 22.474 9.244 22.5 9.289 C 22.519 9.309 22.545 9.354 22.59 9.379 C 22.905 9.714 23.22 10.074 23.535 10.414 C 24.409 11.379 25.309 12.349 26.1 13.339 C 27.18 14.689 28.125 16.039 28.639 17.428 C 29.154 18.823 29.289 20.237 28.794 21.677 C 28.299 23.136 27.174 24.666 25.155 26.241 C 24.795 26.511 24.281 26.576 23.805 26.486 C 23.336 26.376 22.905 26.106 22.706 25.701 C 22.481 25.277 22.416 24.936 22.436 24.621 C 22.455 24.332 22.59 24.062 22.77 23.811 C 22.95 23.586 23.149 23.361 23.4 23.117 L 23.464 23.053 C 23.709 22.783 23.979 22.513 24.204 22.179 C 26.338 18.739 21.844 14.4 18.225 17.55 C 18.071 17.685 17.91 17.839 17.73 18 C 17.55 18.154 17.396 18.334 17.19 18.495 C 16.811 18.829 16.425 19.144 16.046 19.35 C 15.666 19.549 15.281 19.639 14.921 19.549 C 14.561 19.459 14.201 19.215 13.841 18.63 C 13.442 18.026 13.603 17.061 14.233 16.502 Z"
                fill="url(#idegRngplJtg-451969977)"
              ></path>
            </g>
            <g>
              <defs>
                <linearGradient
                  id="idm8iPAI4ORg-451969977"
                  gradientTransform="rotate(0, 0.5, 0.5)"
                >
                  <stop
                    offset="0"
                    stop-color="rgb(26,27,32)"
                    stop-opacity="1"
                  ></stop>
                  <stop
                    offset="1"
                    stop-color="rgb(49,52,60)"
                    stop-opacity="1"
                  ></stop>
                </linearGradient>
              </defs>
              <path
                d="M 30.729 28.749 C 31.378 28.164 31.584 27.129 31.134 26.434 C 29.674 24.094 27.784 26.415 26.55 27.514 C 23.046 30.574 18.707 26.389 20.771 23.066 C 21.626 21.806 23.22 21.176 22.275 19.401 C 21.806 18.501 20.43 18.231 19.62 18.816 C 11.481 25.155 17.505 30.684 22.159 35.878 C 22.474 36.212 22.404 36.212 22.789 35.897 C 25.47 33.493 28.074 31.134 30.729 28.749 Z"
                fill="url(#idm8iPAI4ORg-451969977)"
              ></path>
            </g>
          </svg>
          <div class="flex flex-col ml-2">
            <p class="text-graytext text-[14px] leading-6">by Palmswap</p>

            <div class="flex flex-row">
              <p class="text-graytext text-[14px] leading-6">
                {{ FormatDate(post._createdAt) }}
              </p>
              <p class="text-graytext text-[14px] leading-6 mx-2 -mt-1">.</p>
              <p class="text-graytext text-[14px] leading-6 whitespace-nowrap">
                {{ post.readtime }} min read
              </p>
            </div>
          </div>
        </div>
      </div>

      <!-- Image -->

      <div
        class="mt-10 overflow-hidden w-[100%] h-auto flex flex-row text-center items-center justify-center m-w-[738px] p-4"
      >
        <div class="overflow-hidden rounded-[25px] h-[100%] mx-2">
          <img
            v-if="post.image"
            :src="createURL(post.image, 738, 415)"
            class="w-[738px] h-[auto] rounded-[25px] object-scale-down"
          />
        </div>
      </div>

      <!-- Content -->

      <div
        class="flex flex-col justify-center w-[100%] whitespace-pre-line break-words"
      >
        <div
          class="w-[100%] md:w-[738px] flex ml-auto mr-auto whitespace-pre-line break-words"
        >
          <div
            class="text-left mt-10 w-[100%] h-[auto] break-words flex flex-col px-6 md:px-0 text-[18px] text-left justify-items-start m-w-[738px]"
          >
            <SanityBlocks :blocks="post.content" class="spantest" />
          </div>
        </div>
      </div>

      <!-- share on social media -->

      <div
        class="mt-10 w-[100%] h-[auto] flex flex-row items-center justify-center m-w-[738px]"
      >
        <div
          class="flex flex-col items-center place-content-evenly justify-center text-center w-[380px] h-[149px] rounded-[25px] border-box border-2"
        >
          <p class="font-bold text-[24px] leading-6 mb-3">
            Share on Social Media
          </p>
          <div
            class="gap-2 icons flex flex-row align center justify-center mt-3"
          >
            <a
              @click="shareOnFB"
              class="flex cursor-pointer facebook flex-row items-center justify-center rounded-full w-[40px] h-[40px] bg-[#3B5998]"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18">
                <path
                  d="M 6.75 6 L 4.5 6 L 4.5 9 L 6.75 9 L 6.75 18 L 10.5 18 L 10.5 9 L 13.232 9 L 13.5 6 L 10.5 6 L 10.5 4.75 C 10.5 4.034 10.644 3.75 11.336 3.75 L 13.5 3.75 L 13.5 0 L 10.644 0 C 7.947 0 6.75 1.187 6.75 3.461 Z"
                  fill="hsl(0, 0%, 100%)"
                ></path>
              </svg>
            </a>
            <a
              @click="shareOnTwitter"
              class="twitter cursor-pointer flex flex-row items-center justify-center rounded-full w-[40px] h-[40px] bg-[#00ACED]"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18">
                <path
                  d="M 18 3.418 C 17.326 3.716 16.611 3.912 15.879 3.999 C 16.65 3.538 17.228 2.812 17.503 1.956 C 16.778 2.386 15.985 2.689 15.158 2.852 C 14.459 2.107 13.483 1.685 12.462 1.686 C 10.078 1.686 8.326 3.911 8.864 6.22 C 5.895 6.071 3.128 4.669 1.253 2.362 C 0.273 4.049 0.773 6.208 2.396 7.292 C 1.809 7.274 1.236 7.115 0.724 6.83 C 0.683 8.541 1.909 10.141 3.685 10.498 C 3.142 10.645 2.571 10.667 2.017 10.561 C 2.501 12.065 3.888 13.096 5.467 13.125 C 3.92 14.339 1.953 14.889 0 14.655 C 1.689 15.74 3.654 16.316 5.661 16.314 C 12.517 16.314 16.391 10.523 16.157 5.329 C 16.88 4.807 17.504 4.159 18 3.418 Z"
                  fill="hsl(0, 0%, 100%)"
                ></path>
              </svg>
            </a>

            <a
              @click="shareOnLinkedIn"
              class="linkedin cursor-pointer flex flex-row items-center justify-center rounded-full w-[40px] h-[40px] bg-[#FF4500]"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18">
                <path
                  d="M 3.735 2.625 C 3.735 3.661 2.902 4.5 1.875 4.5 C 0.848 4.5 0.015 3.661 0.015 2.625 C 0.015 1.59 0.847 0.75 1.875 0.75 C 2.903 0.75 3.735 1.59 3.735 2.625 Z M 3.75 6 L 0 6 L 0 18 L 3.75 18 Z M 9.736 6 L 6.011 6 L 6.011 18 L 9.737 18 L 9.737 11.701 C 9.737 8.198 14.259 7.912 14.259 11.701 L 14.259 18 L 18 18 L 18 10.402 C 18 4.492 11.309 4.707 9.736 7.616 Z"
                  fill="hsl(0, 0%, 100%)"
                ></path>
              </svg>
            </a>
            <a
              @click="shareOnReddit"
              class="reddit cursor-pointer flex flex-row items-center justify-center rounded-full w-[40px] h-[40px] bg-[#3B5998]"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18">
                <path
                  d="M 18 8.834 C 17.997 8.037 17.518 7.319 16.784 7.009 C 16.049 6.698 15.201 6.856 14.627 7.41 C 13.27 6.517 11.433 5.948 9.399 5.875 L 10.511 2.374 L 13.523 3.079 L 13.519 3.123 C 13.522 4.021 14.251 4.747 15.149 4.745 C 16.047 4.746 16.775 4.02 16.778 3.123 C 16.776 2.341 16.218 1.671 15.45 1.527 C 14.681 1.383 13.918 1.806 13.634 2.534 L 10.387 1.773 C 10.245 1.739 10.1 1.82 10.057 1.96 L 8.816 5.865 C 6.688 5.89 4.759 6.463 3.341 7.384 C 2.975 7.042 2.493 6.851 1.992 6.85 C 0.894 6.849 0.003 7.737 0 8.834 C 0 9.562 0.4 10.192 0.988 10.537 C 0.947 10.749 0.925 10.964 0.923 11.18 C 0.923 14.113 4.529 16.5 8.962 16.5 C 13.396 16.5 17.002 14.113 17.002 11.18 C 17.002 10.975 16.981 10.772 16.946 10.573 C 17.592 10.232 17.997 9.564 18 8.834 Z M 5.082 10.196 C 5.082 9.545 5.614 9.015 6.269 9.015 C 6.922 9.015 7.454 9.545 7.454 10.196 C 7.454 10.847 6.923 11.377 6.269 11.377 C 5.614 11.377 5.082 10.847 5.082 10.196 Z M 11.878 13.698 C 11.28 14.293 10.342 14.582 9.01 14.582 L 9 14.58 L 8.99 14.582 C 7.657 14.582 6.719 14.293 6.122 13.698 C 6.07 13.646 6.041 13.575 6.041 13.502 C 6.041 13.428 6.07 13.358 6.122 13.306 C 6.231 13.197 6.408 13.197 6.517 13.306 C 7.004 13.791 7.813 14.026 8.99 14.026 L 9 14.029 L 9.01 14.026 C 10.186 14.026 10.996 13.79 11.483 13.305 C 11.592 13.196 11.769 13.196 11.878 13.305 C 11.93 13.357 11.959 13.428 11.959 13.502 C 11.959 13.575 11.93 13.646 11.878 13.698 Z M 11.736 11.377 C 11.083 11.377 10.553 10.849 10.55 10.196 C 10.55 9.545 11.082 9.015 11.736 9.015 C 12.39 9.015 12.922 9.545 12.922 10.196 C 12.922 10.847 12.39 11.377 11.736 11.377 Z"
                  fill="hsl(0, 0%, 100%)"
                ></path>
              </svg>
            </a>
          </div>
        </div>
      </div>

      <!-- Recomended -->
      <div
        class="mt-10 w-[100%] h-[auto] break-words flex flex-row text-left items-center justify-center m-w-[738px] whitespace-pre-line"
      >
        <p class="text-white text-[24px]">Recommended</p>
      </div>

      <div
        class="flex w-[100%] relative flex-col justify-center m-w-[738px] items-center"
      >
        <a href="/post/${post._id}">
          <div
            @click="reloadPage"
            class="flex flex-row h-auto w-[100%] mt-10 space-x-4 justify-center relative flex-wrap items-left"
          >
            <PostCard
              v-for="(post, i) in posts"
              :key="i"
              :post="post"
              @click="reloadPage"
            />
          </div>
        </a>
      </div>
      <div
        class="mb-10 mt-2 w-[100%] h-[auto] break-words flex flex-row text-left items-center justify-center m-w-[738px] whitespace-pre-line"
      >
        <a href="/" exact>
          <button
            onclick="reloadPage"
            class="text-white text-[14px] bg-[#715AD0] w-[133px] h-[40px] rounded-[500px]"
          >
            View More
          </button>
        </a>
      </div>

      <div class="mt-[200px]">
        <FooterComp />
      </div>
      <router-view :key="$route.path"></router-view>
    </section>
  </main>
</template>

<style>
/* rich text editor does not make whitespaces so i needed to get creative */
p:empty {
  margin-top: 20px;
}

ul {
  margin-left: 20px;
}
ol {
  margin-left: 5px;
}

ul > li {
  display: list-item;
  list-style-type: circle;
}

ol > li {
  display: list-item;
  list-style-position: inside;
  list-style-type: decimal;
}
</style>

<script>
import PostCard from "../../components/PostCard.vue";
import FooterComp from "../../components/footer-comp.vue";

// import { FormatDate } from "../../components/utils";
import { onMounted, ref, computed, onUnmounted } from "vue";
import { useRoute } from "vue-router";
import sanity from "../../client";
import { createURL, FormatDate } from "@/components/utils";
import { useStore } from "vuex";
import { SanityBlocks } from "sanity-blocks-vue-component";

export default {
  components: {
    PostCard,
    FooterComp,
    SanityBlocks,
  },

  methods: {
    reloadPage() {
      document.location.reload();
      console.log("reloaded");
    },
    shareOnFB() {
      const link = encodeURI(window.location.href);
      const msg = encodeURIComponent("Palmswap Article: ");
      const title = this.post.title;

      console.log(link, msg, title);

      const fb = document.querySelector(".facebook");
      console.log("fb", fb);
      fb.href = `https://www.facebook.com/share.php?u=${link}`;
    },
    shareOnTwitter() {
      const link = encodeURI(window.location.href);
      const msg = encodeURIComponent("Palmswap Article: ");
      // const title = this.post.title;
      const twitter = document.querySelector(".twitter");
      twitter.href = `http://twitter.com/share?url=${link}&text=${msg}&hashtags=palmswap,dex`;
      //
      // const reddit = document.querySelector(".reddit");
    },

    shareOnLinkedIn() {
      const link = encodeURI(window.location.href);
      const linkedin = document.querySelector(".linkedin");
      linkedin.href = `hhtps://linkedin.com/sharing/share-offsite/?url=${link}`;
    },
    shareOnReddit() {
      const link = encodeURI(window.location.href);
      const reddit = document.querySelector(".reddit");
      const title = this.post.title;
      reddit.href = `http://www.reddit.com/submit?url=${link}&title=${title}`;
    },
  },

  setup() {
    const subscription = ref(null);
    const store = useStore();
    const route = useRoute();
    const id = ref(route.params.id);
    const post = ref(null);
    // const blocks = [post.content]; // Sanity block text

    const posts = computed(() => {
      return store.getters.posts;
    });
    console.log(posts, "posts");

    onMounted(() => {
      const query = '*[_type == "post" && _id == $id][0]';
      const params = { id: id.value };

      sanity.fetch(query, params).then((data) => {
        post.value = data;
        console.log(data, "data");
      }),
        3000;

      store.dispatch("FetchPosts", 3);
      const query2 = '[_type == "post"] [0..2] | order(_createdAt desc)';

      subscription.value = sanity.listen(query2).subscribe((update) => {
        switch (update.transition) {
          case "update":
            console.log("Post updated", update);
            break;
          case "appear":
            console.log("Post appeared", update);
            break;
          case "dissapear":
            console.log("Post dissapeard", update);
            break;
        }
      });
    });

    onUnmounted(() => {
      subscription.value.unsubscribe();
    });

    return {
      // blocks,
      post,
      posts,
      FormatDate,
      createURL,
    };
  },
};
</script>
