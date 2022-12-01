<template>
  <section>
    <div class="line w-[100%] mt-10 h-[2px] bg-box ml-auto mr-auto"></div>
    <div class="flex-col flex">
      <div
        class="h-auto w-full flex flex-row bg-bg justify-items-centergrid grid-cols-2 flex-wrap gap-4 place-content-evenly"
      >
        <div class="about flex flex-col text-left mt-10 w-[25%] md:w-auto">
          <h3 class="text-[20px] text-white leading-6 my-2">About</h3>

          <a href="https://docs.palmswap.org" target="_blank">
            <p class="text-graytext text-[14px]">Documentation</p>
          </a>

          <a href="https://web3.career/web3-companies/palmswap" target="_blank">
            <p class="text-graytext text-[14px]">Job Board</p>
          </a>

          <a href="/">
            <p class="text-graytext text-[14px]">Blog</p>
          </a>
          <a href="mailto:office@palmswap.org">
            <p class="text-graytext text-[14px]">Write Us</p>
          </a>

          <a href="https://palmswap.org/terms_of_use">
            <p class="text-graytext text-[14px]">Terms of Service</p>
          </a>

          <a href="https://palmswap.org/privacy" target="_blank">
            <p class="text-graytext text-[14px]">Privacy Policy</p>
          </a>

          <a href="https://palmswap.org/referral_agreement" target="_blank">
            <p class="text-graytext text-[14px]">Referral Agreement</p>
          </a>
        </div>
        <div class="about flex flex-col text-left mt-10 w-[25%] md:w-auto">
          <h3 class="text-[20px] text-white leading-6 my-2">Blog</h3>
          <p
            v-on:click="featuredButtonInFooter"
            class="cursor-pointer text-graytext text-[14px]"
          >
            Featured
          </p>
          <p
            v-on:click="AnnouncementButtonInFooter"
            class="cursor-pointer text-graytext text-[14px]"
          >
            Announcement
          </p>
          <p
            v-on:click="teamreportButtonInFooter"
            class="cursor-pointer text-graytext text-[14px]"
          >
            Team Reports
          </p>
          <p
            v-on:click="palmButtonInFooter"
            class="cursor-pointer text-graytext text-[14px]"
          >
            Palm
          </p>
        </div>
        <div class="about flex flex-col text-left mt-10 w-[25%] md:w-auto">
          <h3 class="text-[20px] text-white leading-6 my-2">Support</h3>

          <a href="https://palmswap.canny.io/" target="_blank">
            <p class="text-graytext text-[14px]">Feedback</p>
          </a>
          <a
            href="https://docs.palmswap.org/protocol/exchange/fee"
            target="_blank"
          >
            <p class="text-graytext text-[14px]">Fees</p>
          </a>

          <a href="https://docs.palmswap.org/roadmap" target="_blank">
            <p class="text-graytext text-[14px]">Roadmap</p>
          </a>

          <a href="https://palmswap.org/faq" target="_blank">
            <p class="text-graytext text-[14px]">FAQ</p>
          </a>
        </div>
        <div class="about flex flex-col text-left mt-10 w-[25%] md:w-auto">
          <h3 class="text-[20px] text-white leading-6 my-2">Products</h3>
          <a href="https://testnet.palmswap.org/" target="_blank">
            <p class="text-graytext text-[14px]">On Chain Exchange</p>
          </a>
          <a href="https://perp.palmswap.org/" target="_blank">
            <p class="text-graytext text-[14px]">Hybrid Exchange</p>
          </a>

          <a href="https://app.palmswap.org/launchpad" target="_blank">
            <p class="text-graytext text-[14px]">Palmswap Launchpad</p>
          </a>
          <a href="https://app.palmswap.org/earn/staking" target="_blank">
            <p class="text-graytext text-[14px]">Staking</p>
          </a>
          <a href="https://app.palmswap.org/earn/farm" target="_blank">
            <p class="text-graytext text-[14px]">Farming</p>
          </a>
        </div>
        <div class="about flex flex-col text-left mt-10 w-[25%] md:w-auto">
          <h3 class="text-[20px] text-white leading-6 my-2">Trade</h3>
          <a href="https://testnet.palmswap.org/trade/BTC-USDT" target="_blank">
            <p class="text-graytext text-[14px]">BTC/USDT</p>
          </a>
          <a href="https://testnet.palmswap.org/trade/ETH-USDT" target="_blank">
            <p class="text-graytext text-[14px]">ETH/USDT</p>
          </a>
        </div>
        <div class="about flex flex-col text-left mt-10 w-[25%] md:w-auto">
          <h3 class="text-[20px] text-white leading-6 my-2">Community</h3>
          <a href="https://twitter.com/Palmswaporg" target="_blank">
            <p class="text-graytext text-[14px]">Twitter</p>
          </a>
          <a href="https://discord.com/invite/B2EyhkQSZR" target="_blank">
            <p class="text-graytext text-[14px]">Discord</p>
          </a>
          <a href="https://t.me/Palmswapchat" target="_blank">
            <p class="text-graytext text-[14px]">Telegram</p>
          </a>
          <a href="https://t.me/Palmswapann" target="_blank">
            <p class="text-graytext text-[14px]">Telegram Ann</p>
          </a>
        </div>
      </div>

      <div
        class="w-[100%] items-center align-center justify-items-center mb-2 mt-20 flex flex-col h-auto"
      >
        <p class="text-graytext text-[14px] leading-6">© 2022 Palmswap, Inc.</p>
      </div>
    </div>
  </section>
</template>

<script>
import router from "@/router";

export default {
  data() {
    return {
      search: "",
      category: "",
    };
  },

  methods: {
    featuredButtonInFooter() {
      window.scrollTo({ top: 0, behavior: "smooth" });
      if (this.category.length === 0) {
        this.$emit("buttonInFooter", (this.search = "featured"));
        router.push({ path: "/" });
      } else {
        this.$emit("buttonInFooter", (this.search = ""));
        this.$emit("buttonInFooter", (this.search = "featured"));
      }
    },
    AnnouncementButtonInFooter() {
      window.scrollTo({ top: 0, behavior: "smooth" });
      if (this.category.length === 0) {
        this.$emit("buttonInFooter", (this.search = "announcement"));
      } else {
        this.$emit("buttonInFooter", (this.search = ""));
        this.$emit("buttonInFooter", (this.search = "announcement"));
      }
    },
    teamreportButtonInFooter() {
      window.scrollTo({ top: 0, behavior: "smooth" });
      if (this.category.length === 0) {
        this.$emit("buttonInFooter", (this.search = "teamreport"));
      } else {
        this.$emit("buttonInFooter", (this.search = ""));
        this.$emit("buttonInFooter", (this.search = "teamreport"));
      }
    },

    palmButtonInFooter() {
      window.scrollTo({ top: 0, behavior: "smooth" });
      if (this.category.length === 0) {
        this.$emit("buttonInFooter", (this.search = "palm"));
      } else {
        this.$emit("buttonInFooter", (this.search = ""));
        this.$emit("buttonInFooter", (this.search = "palm"));
      }
    },
  },
};
</script>
