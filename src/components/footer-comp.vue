<template>
  <section>
    <div
      class="line w-[90%] 2xl:w-[75%] mt-10 h-[2px] bg-box ml-auto mr-auto"
    ></div>
    <div class="flex-col flex">
      <div
        class="h-auto w-full flex flex-row bg-bg justify-items-centergrid grid-cols-2 flex-wrap gap-4 place-content-evenly"
      >
        <div class="about flex flex-col text-left mt-10 w-[25%] md:w-auto">
          <h3 class="text-[20px] text-white leading-6 my-2">About</h3>
          <p class="text-graytext text-[14px]">About Us</p>
          <a href="https://docs.palmswap.org" target="_blank">
            <p class="text-graytext text-[14px]">Documentation</p>
          </a>

          <a href="https://web3.career/web3-companies/palmswap" target="_blank">
            <p class="text-graytext text-[14px]">Job Board</p>
          </a>

          <a href="/">
            <p class="text-graytext text-[14px]">Blog</p>
          </a>
          <p class="text-graytext text-[14px]">Write Us</p>
          <p class="text-graytext text-[14px]">Terms of Service</p>
          <p class="text-graytext text-[14px]">Privacy Policy</p>
          <p class="text-graytext text-[14px]">Referral Agreement</p>
          <p class="text-graytext text-[14px]">Cookie preferences</p>
        </div>
        <div class="about flex flex-col text-left mt-10 w-[25%] md:w-auto">
          <h3 class="text-[20px] text-white leading-6 my-2">Blog</h3>
          <p
            @click="filterInFotter"
            class="cursor-pointerub text-graytext text-[14px]"
          >
            Featured
          </p>
          <p class="text-graytext text-[14px]">News</p>
          <p class="text-graytext text-[14px]">Team Reports</p>
          <p class="text-graytext text-[14px]">Announcement</p>
        </div>
        <div class="about flex flex-col text-left mt-10 w-[25%] md:w-auto">
          <h3 class="text-[20px] text-white leading-6 my-2">Support</h3>
          <p class="text-graytext text-[14px]">Support Center</p>
          <p class="text-graytext text-[14px]">Feedback</p>
          <a
            href="https://docs.palmswap.org/protocol/exchange/fee"
            target="_blank"
          >
            <p class="text-graytext text-[14px]">Fees</p>
          </a>

          <p class="text-graytext text-[14px]">Trading Rules</p>
          <a href="https://docs.palmswap.org/roadmap" target="_blank">
            <p class="text-graytext text-[14px]">Roadmap</p>
          </a>
          <p class="text-graytext text-[14px]">FAQ</p>
        </div>
        <div class="about flex flex-col text-left mt-10 w-[25%] md:w-auto">
          <h3 class="text-[20px] text-white leading-6 my-2">Products</h3>
          <a href="https://testnet.palmswap.org/" target="_blank">
            <p class="text-graytext text-[14px]">On Chain Exchange</p>
          </a>
          <a href="https://perp.palmswap.org/" target="_blank">
            <p class="text-graytext text-[14px]">Hybrid Exchange</p>
          </a>
          <p class="text-graytext text-[14px]">Palmswap Launchpad</p>
          <p class="text-graytext text-[14px]">Staking</p>
          <p class="text-graytext text-[14px]">Farming</p>
          <p class="text-graytext text-[14px]">Listing Applications</p>
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
  props: {
    method: { type: Function },
  },
  mounted() {
    // Use the parent function directly here
    this.method();
  },

  methods: {
    filterInFotter() {
      //check if we are in home component
      let url = window.location.href;
      if (url !== "http://localhost:8080/") {
        router.push("http://localhost:8080/");
      }
    },
  },
};
</script>
