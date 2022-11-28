import { createStore } from "vuex";
import sanity from "../client";

export default createStore({
  state: {
    posts: [],
    total_posts: 0,
    category: "",
  },
  getters: {
    posts: (state) =>
      state.posts.sort(
        (a, b) =>
          new Date(b._createdAt).getTime() - new Date(a._createdAt).getTime()
      ),
  },
  mutations: {
    SET_POSTS(state, posts) {
      state.posts = posts;
    },
    SET_TOTAL_POSTS(state, total_posts) {
      state.total_posts = total_posts;
    },
    INCREMENT_TOTAL_POSTS(state, increment = 1) {
      state.total_posts += increment;
    },
  },
  actions: {
    FetchPosts({ commit }, limit = null) {
      const query = `*[_type == 'post'] | order(_createdAt desc) ${
        limit ? `[0...${limit}]` : ""
      }`;

      const count_query = 'count(*[_type == "post"])';

      const fetchPosts = async () => {
        await sanity.fetch(query).then((posts) => {
          console.log(posts, "here are the posts");
          commit("SET_POSTS", posts);
        });
      };

      const countPosts = async () => {
        await sanity.fetch(count_query).then((count) => {
          commit("SET_TOTAL_POSTS", count);
        });
      };

      fetchPosts();
      countPosts();
    },
    AddNewPost({ commit }, post) {
      commit("SET_POSTS", [...this.state.posts, post]);
      commit("INCREMENT_TOTAL_POSTS");
    },
    RemovePost({ commit }, id) {
      commit(
        "SET_POSTS",
        this.state.posts.filter((p) => p._id !== id)
      );
      commit("INCREMENT_TOTAL_POSTS", -1);
    },
    LoadMorePosts({ commit }, limit = 5) {
      const query = `*[_type == "post"] {...} | order(_createdAt desc) [${
        this.state.posts.length
      }...${this.state.posts.length + limit}] `;

      const loadposts = async () => {
        await sanity.fetch(query).then((posts) => {
          commit("SET_POSTS", [...this.state.posts, ...posts]);
        });
      };

      loadposts();
    },
  },
});
