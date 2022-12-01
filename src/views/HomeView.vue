<template>
  <main class="home">
    <section
      class="flex flex-col w-full justify-center h-auto align-center z-10"
    >
      <Navbar />
      <div
        class="flex-col w-full justify-center items-center align-center mt-10"
      >
        <div class="text-center">
          <h1 class="text-[32px]">Blog</h1>
          <span class="text-graytext">Read the latest updates.</span>
        </div>

        <div
          class="search w-[301px] h-[45px] mr-auto ml-auto mt-10 align-middle"
        >
          <input
            v-model="search"
            type="text"
            placeholder="Search..."
            class="w-full bg-background h-full border border-box rounded-lg pl-4 focus:outline-none placeholder:text-graytext focus:caret-graytext focus:text-graytext"
          />
        </div>

        <div
          @click="activeButton"
          :data="items"
          id="activeWrapper"
          class="flex-wrap filter flex w-auto m-w-[509px] h-auto align-center mr-auto ml-auto space-x-4 mt-5 justify-center"
        >
          <button
            value="all"
            id="all"
            @click="allButton"
            class="cursor-pointer categories flex content-center flex-row justify-center text-[12px] flex-wrap text-graytext py-2 px-6 mt-5 bg-box text-center rounded-[500px] whitespace-nowrap"
          >
            All
          </button>
          <button
            id="featured"
            value="featured"
            @click="featuredButton"
            class="categories flex content-center flex-row justify-center flex-wrap text-[12px] text-graytext py-2 px-6 mt-5 bg-box text-center rounded-[500px] whitespace-nowrap"
          >
            Featured
          </button>
          <button
            id="announcement"
            value="announcement"
            @click="announcementButton"
            class="categories flex content-center flex-row justify-center flex-wrap text-[12px] text-graytext py-2 px-6 mt-5 bg-box text-center rounded-[500px] whitespace-nowrap"
          >
            Announcement
          </button>
          <button
            value="teamreports"
            id="teamreports"
            @click="teamreportsButton"
            class="categories flex content-center flex-row justify-center flex-wrap text-[12px] text-graytext py-2 px-6 mt-5 bg-box text-center rounded-[500px] whitespace-nowrap"
          >
            Team Reports
          </button>
          <button
            @click="palmButton"
            id="palm"
            value="palm"
            class="categories flex content-center flex-row justify-center flex-wrap text-[12px] text-graytext py-2 px-6 mt-5 bg-box text-center rounded-[500px] whitespace-nowrap"
          >
            PALM
          </button>
        </div>

        <div class="flex flex-row w-[100%] mt-10 h-auto">
          <div
            class="line md:w-[1086px] w-[90%] 2xl:w-[57%] h-[2px] bg-box ml-auto mr-auto"
          ></div>
        </div>
      </div>

      <div class="flex justify-items-center w-full">
        <div
          class="flex flex-row h-auto sm:w-[90%] md:w-[1118px] mt-10 md:justify-start sm:justify-center flex-wrap mx-auto"
        >
          <PostCard v-for="(post, i) in filterPosts" :key="i" :post="post" />

          <button
            v-if="$store.state.total_posts > $store.state.posts.length"
            @click="$store.dispatch('LoadMorePosts', 10)"
            class="btn w-[352px] h-[393px] rounded-[25px] bg-[#191B1F] ml-[5px] text-[#6C7284]"
          >
            Load More
          </button>
        </div>
      </div>

      <footer-comp v-on:buttonInFooter="updateSearch($event), activeButton()" />
    </section>
  </main>
</template>

<script>
import { onMounted, onUnmounted, ref, computed } from "vue";
import { useStore } from "vuex";
import sanity from "../client";
import Navbar from "../components/Navbar.vue";
import FooterComp from "../components/footer-comp.vue";
import PostCard from "../components/PostCard.vue";

export default {
  components: {
    PostCard,
    FooterComp,
    Navbar,
  },

  data() {
    return {
      search: "",
      category: "",
      showLoad: true,
    };
  },

  computed: {
    filterPosts() {
      let filteredPosts = this.posts.filter(
        (post) =>
          post.excerpt.toLowerCase().includes(this.search.toLowerCase()) ||
          post.title.toLowerCase().includes(this.search.toLowerCase()) ||
          post.category.toLowerCase().includes(this.search.toLowerCase())
      );

      return filteredPosts;
    },
  },

  mounted: function () {
    window.addEventListener("load", this.activeButton());
  },

  methods: {
    //active color

    updateSearch(newSearch) {
      this.search = newSearch;
    },

    activeButton() {
      const all = document.getElementById("all");
      const featured = document.getElementById("featured");
      const announcement = document.getElementById("announcement");
      const teamreport = document.getElementById("teamreports");
      const palm = document.getElementById("palm");

      if (this.search !== "") {
        all.style.background = "#23252B";
        all.style.color = "#6C7284";
      } else {
        all.style.background = "#ffffff";
        all.style.color = "#000000";
      }
      if (this.search !== "featured") {
        featured.style.background = "#23252B";
        featured.style.color = "#6C7284";
      } else {
        featured.style.background = "#ffffff";
        featured.style.color = "#000000";
      }
      if (this.search !== "announcement") {
        announcement.style.background = "#23252B";
        announcement.style.color = "#6C7284";
      } else {
        announcement.style.background = "#ffffff";
        announcement.style.color = "#000000";
      }
      if (this.search !== "teamreport") {
        teamreport.style.color = "#6C7284";
        teamreport.style.background = "#23252B";
      } else {
        teamreport.style.background = "#ffffff";
        teamreport.style.color = "#000000";
      }
      if (this.search !== "palm") {
        palm.style.color = "#6C7284";
        palm.style.background = "#23252B";
      } else {
        palm.style.background = "#ffffff";
        palm.style.color = "#000000";
      }
    },

    //buttons for category
    allButton() {
      if (this.category.length === 0) {
        this.search = "";
      } else {
        this.search = "";
        this.search = "";
      }
    },

    featuredButton() {
      if (this.category.length === 0) {
        this.search = "featured";
      } else {
        this.search = "";
        this.search = "featured";
      }
      console.log(this.filterPosts.length);
    },
    announcementButton() {
      if (this.category.length === 0) {
        this.search = "announcement";
      } else {
        this.search = "";
        this.search = "announcement";
      }
    },
    teamreportsButton() {
      if (this.category.length === 0) {
        this.search = "teamreport";
      } else {
        this.search = "";
        this.search = "teamreport";
      }
    },
    palmButton() {
      if (this.category.length === 0) {
        this.search = "palm";
      } else {
        this.search = "";
        this.search = "palm";
      }
    },
  },

  setup() {
    const subscription = ref(null);
    const store = useStore();
    const posts = computed(() => {
      return store.getters.posts;
    });

    onMounted(() => {
      store.dispatch("FetchPosts", 4);
      const query = '[_type == "post"]';

      subscription.value = sanity.listen(query).subscribe((update) => {
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
      posts,
    };
  },
};
</script>
