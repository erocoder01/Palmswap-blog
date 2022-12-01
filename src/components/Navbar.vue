<template>
  <section>
    <div class="navbar z-10">
      <div
        id="click"
        v-if="isEarnVisible"
        class="absolute w-full h-full"
        @click="toggleDropdownOff"
      ></div>
      <div
        id="click"
        v-if="isMoreVisible"
        class="absolute w-full h-full"
        @click="toggleDropdownOff"
      ></div>
      <div class="w-full h-14 my-0.5 py-2 flex flex-row z-10">
        <div class="w-[50%] flex flex-row items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="21"
            height="31"
            class="mx-3"
          >
            <path
              d="M 0.799 8.733 C 1.811 7.848 2.824 6.963 3.821 6.078 C 5.846 4.307 7.87 2.537 9.895 0.767 C 9.939 0.724 9.983 0.695 10.012 0.667 C 10.056 0.624 10.1 0.595 10.13 0.567 C 10.144 0.552 10.159 0.538 10.174 0.538 C 10.174 0.538 10.188 0.552 10.203 0.567 C 10.232 0.595 10.262 0.624 10.306 0.667 C 10.335 0.695 10.365 0.738 10.409 0.781 C 10.761 1.166 11.127 1.552 11.48 1.937 C 12.492 3.008 13.504 4.093 14.428 5.207 C 15.675 6.706 16.732 8.219 17.333 9.775 C 17.935 11.317 18.081 12.902 17.509 14.515 C 16.937 16.143 15.646 17.828 13.328 19.584 C 12.903 19.883 12.33 19.955 11.788 19.841 C 11.245 19.726 10.761 19.427 10.526 18.97 C 10.262 18.499 10.188 18.113 10.218 17.77 C 10.247 17.442 10.394 17.142 10.614 16.857 C 10.805 16.6 11.054 16.343 11.318 16.071 C 11.347 16.043 11.377 16.014 11.391 15.986 C 11.685 15.686 11.993 15.372 12.242 15.015 C 14.693 11.189 9.543 6.349 5.391 9.875 C 5.215 10.032 5.024 10.204 4.819 10.389 L 4.804 10.404 C 4.613 10.589 4.408 10.775 4.203 10.946 C 3.777 11.317 3.322 11.66 2.882 11.888 C 2.442 12.117 2.002 12.217 1.591 12.131 C 1.18 12.031 0.77 11.746 0.359 11.103 C -0.096 10.418 0.095 9.333 0.799 8.733 Z"
              fill="rgb(255, 255, 255)"
            ></path>
            <path
              d="M 19.725 22.382 C 20.488 21.725 20.693 20.569 20.194 19.812 C 18.522 17.199 16.365 19.798 14.928 21.011 C 12.91 22.717 10.662 22.4 9.213 21.195 C 7.764 19.991 7.115 17.899 8.296 16.057 C 9.264 14.644 11.113 13.944 10.027 11.974 C 9.485 10.989 7.929 10.661 6.99 11.317 C -2.34 18.384 4.54 24.538 9.895 30.334 C 10.262 30.72 10.174 30.72 10.614 30.348 C 13.68 27.664 16.688 25.037 19.725 22.382 Z"
              fill="rgb(255, 255, 255)"
            ></path>
          </svg>
          <div class="line mx-3 h-[26px] w-[2px] bg-box"></div>
          <a href="https://perp.palmswap.org/" target="_blank">
            <p
              class="sm:hidden md:flex px-3 py-2 text-[#6C7284] cursor-pointer text-[14px] hover:text-white"
            >
              Trade
            </p>
          </a>

          <a
            href="https://testnet.palmswap.org/portfolio/overview"
            target="_blank"
          >
            <p
              class="sm:hidden md:flex px-3 py-2 text-[#6C7284] cursor-pointer text-[14px] hover:text-white"
            >
              Portfolio
            </p>
          </a>
          <a href="https://testnet.palmswap.org/leaderboard" target="_blank">
            <p
              class="px-3 sm:hidden md:flex py-2 text-[#6C7284] cursor-pointer text-[14px] hover:text-white"
            >
              Leaderboard
            </p>
          </a>

          <div
            @click="toggleEarnDropdown"
            id="earn"
            class="px-3 sm:hidden md:flex relative flex items-center text-[#6C7284] fill-[#6C7284] hover:text-white hover:fill-white"
          >
            <p class="py-2 pr-1 cursor-pointer text-[14px]">Earn</p>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              aria-hidden="true"
              class="h-4 cursor-pointer"
            >
              <path
                fill-rule="evenodd"
                d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
                clip-rule="evenodd"
              ></path>
            </svg>
            <div
              v-if="isEarnVisible"
              class="earndropdown border-2 border-border p-2 top-10 bg-[#14151a] w-[160px] absolute h-[170px] rounded-lg items-center flex flex-col"
            >
              <a
                href="https://app.palmswap.org/earn/staking"
                class="w-full"
                target="_blank"
              >
                <div
                  class="w-full cursor-pointer rounded-lg flex pl-3 text-[12px] text-graytext items-center justify-items-start h-[34px] hover:bg-[#191b1f]"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    aria-hidden="true"
                    class="h-4"
                  >
                    <path
                      d="M3.196 12.87l-.825.483a.75.75 0 000 1.294l7.25 4.25a.75.75 0 00.758 0l7.25-4.25a.75.75 0 000-1.294l-.825-.484-5.666 3.322a2.25 2.25 0 01-2.276 0L3.196 12.87z"
                    ></path>
                    <path
                      d="M3.196 8.87l-.825.483a.75.75 0 000 1.294l7.25 4.25a.75.75 0 00.758 0l7.25-4.25a.75.75 0 000-1.294l-.825-.484-5.666 3.322a2.25 2.25 0 01-2.276 0L3.196 8.87z"
                    ></path>
                    <path
                      d="M10.38 1.103a.75.75 0 00-.76 0l-7.25 4.25a.75.75 0 000 1.294l7.25 4.25a.75.75 0 00.76 0l7.25-4.25a.75.75 0 000-1.294l-7.25-4.25z"
                    ></path>
                  </svg>
                  <button class="ml-1">Staking</button>
                </div>
              </a>
              <a
                href="https://app.palmswap.org/earn/farm"
                class="w-full"
                target="_blank"
              >
                <div
                  class="w-full cursor-pointer mt-1 rounded-lg flex pl-3 text-[12px] text-graytext items-center justify-items-start h-[34px] hover:bg-[#191b1f]"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    xmlns:xlink="http://www.w3.org/1999/xlink"
                    version="1.1"
                    x="0px"
                    y="0px"
                    width="15px"
                    height="15px"
                    viewBox="0 0 1000 1000"
                    enable-background="new 0 0 1000 1000"
                    xml:space="preserve"
                  >
                    <metadata fill="#6c7284"></metadata>

                    <path
                      d="M940.7,424.1h-38V266.5l-0.6-5.4c0-0.2-2.9-14.9,4.5-24c7.5-9.2,24-11.1,36.6-11.1c13.7,0,24.6-11.1,24.6-24.6s-11-24.6-24.6-24.6c-34.3,0-59.7,10.1-75.4,30c-18.8,23.7-16.1,52.2-14.4,62.1v155.3H603.7L492.8,161.8c-20.4-50.1-51.1-86.3-98.6-86.3H153.8c-47.5,0-86.3,38.7-86.3,86.3v318.2L82,465.4c19.2-19.2,45.3-29.2,72.3-28.8c18-19.3,43.7-31,71.9-31h49.3c28.2,0,53.8,11.7,71.9,31c27.1-0.5,53.1,9.6,72.3,28.8l34.8,34.8c19.6,19.5,29.4,46.1,28.7,72.6c19.2,18.2,31.1,43.9,31.1,71.7v45.2H669c-23.4,25-37.9,58.4-37.9,95.3c0,76.8,62.5,139.5,139.5,139.5c76.8,0,139.5-62.6,139.5-139.5c0-37.2-14.7-70.8-38.3-95.8c27.5-2.3,68.9-23.2,68.9-48.7L990,473.5C989.9,446.1,967.8,424.1,940.7,424.1z M142.4,364.1V189.7c0-31.6,25.7-57.2,57.2-57.2h159.3c31.5,0,51.9,24,65.4,57.2l73.5,175.1L142.4,364.1z M770.5,850.5c-36.1,0-65.5-29.4-65.5-65.5c0-36.2,29.4-65.5,65.5-65.5S836,748.9,836,785C836,821.1,806.6,850.5,770.5,850.5z"
                      fill="#6c7284"
                    />
                    <path
                      d="M426.2,539.3l-31-31c-17.1-17.2-40.3-26.2-64.5-25.7c-16.1-17.2-38.9-27.6-64.1-27.6h-43.9c-25.1,0-47.9,10.4-64,27.6c-24-0.5-47.3,8.5-64.5,25.7l-31.1,31c-17.8,17.8-26.6,41.4-25.8,65c-17,16.2-27.4,39-27.4,63.5v43.9c0,24.5,10.5,47.3,27.4,63.6c-0.8,23.6,8,47.1,25.8,64.9l31,31c17.1,17.2,40.4,26.4,64.5,25.7c16.1,17.2,38.9,27.6,64,27.6h43.9c25.1,0,47.9-10.4,64.1-27.6c24.2,0.8,47.3-8.5,64.5-25.7l31-31c17.4-17.4,26.2-41.1,25.6-64.7c17.1-16.2,27.7-39.2,27.7-63.9v-43.9c0-24.7-10.6-47.5-27.7-63.8C452.4,580.3,443.6,556.7,426.2,539.3z M244.7,836.6c-81,0-146.9-65.9-146.9-146.9s65.9-146.9,146.9-146.9c81,0,146.9,65.9,146.9,146.9S325.6,836.6,244.7,836.6z"
                      fill="#6c7284"
                    />
                    <circle cx="244.7" cy="689.7" r="81" fill="#6c7284" />
                  </svg>
                  <button class="ml-1">Farm</button>
                </div>
              </a>
              <a
                href="https://app.palmswap.org/claim"
                class="w-full"
                target="_blank"
              >
                <div
                  class="w-full cursor-pointer mt-1 rounded-lg flex pl-3 text-[12px] text-graytext items-center justify-items-start h-[34px] hover:bg-[#191b1f]"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    aria-hidden="true"
                    class="h-4"
                  >
                    <path
                      d="M12 1.5a.75.75 0 01.75.75V7.5h-1.5V2.25A.75.75 0 0112 1.5zM11.25 7.5v5.69l-1.72-1.72a.75.75 0 00-1.06 1.06l3 3a.75.75 0 001.06 0l3-3a.75.75 0 10-1.06-1.06l-1.72 1.72V7.5h3.75a3 3 0 013 3v9a3 3 0 01-3 3h-9a3 3 0 01-3-3v-9a3 3 0 013-3h3.75z"
                    ></path>
                  </svg>
                  <button class="ml-1">Claim</button>
                </div>
              </a>

              <a
                href="https://app.palmswap.org/launchpad"
                class="w-full"
                target="_blank"
              >
                <div
                  class="w-full cursor-pointer mt-1 rounded-lg flex pl-3 text-[12px] text-graytext items-center justify-items-start h-[34px] hover:bg-[#191b1f]"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    aria-hidden="true"
                    class="h-4"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M3 6a3 3 0 013-3h2.25a3 3 0 013 3v2.25a3 3 0 01-3 3H6a3 3 0 01-3-3V6zm9.75 0a3 3 0 013-3H18a3 3 0 013 3v2.25a3 3 0 01-3 3h-2.25a3 3 0 01-3-3V6zM3 15.75a3 3 0 013-3h2.25a3 3 0 013 3V18a3 3 0 01-3 3H6a3 3 0 01-3-3v-2.25zm9.75 0a3 3 0 013-3H18a3 3 0 013 3V18a3 3 0 01-3 3h-2.25a3 3 0 01-3-3v-2.25z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>

                  <button class="ml-1">Launchpad</button>
                </div>
              </a>
            </div>
          </div>

          <a href="https://testnet.palmswap.org/faucet" target="_blank">
            <p
              class="sm:hidden md:flex px-3 py-2 text-[#6C7284] cursor-pointer text-[14px] hover:text-white"
            >
              Faucet
            </p>
          </a>

          <p
            class="sm:hidden md:flex whitespace-nowrap px-3 py-2 text-[#6C7284] cursor-pointer text-[14px] hover:text-white"
          >
            Rewards 🔥
          </p>
          <div
            @click="toggleMoreDropdown"
            id="earn"
            class="px-3 sm:hidden md:flex relative flex items-center text-[#6C7284] fill-[#6C7284] hover:text-white hover:fill-white"
          >
            <p class="py-2 pr-1 cursor-pointer text-[14px]">More</p>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              aria-hidden="true"
              class="h-4 cursor-pointer"
            >
              <path
                fill-rule="evenodd"
                d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
                clip-rule="evenodd"
              ></path>
            </svg>
            <div
              v-if="isMoreVisible"
              class="moredropdown border-2 border-border justify-items-start p-2 top-10 bg-[#14151a] w-[409px] absolute h-[226px] rounded-lg flex flex-wrap flex-col"
            >
              <a
                href="https://docs.palmswap.org"
                class="w-[50%]"
                target="_blank"
              >
                <div
                  class="w-[100%] cursor-pointer rounded-lg flex pl-3 text-[12px] text-graytext items-center justify-items-start h-[34px] hover:bg-[#191b1f]"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    aria-hidden="true"
                    class="h-4"
                  >
                    <path
                      d="M3.196 12.87l-.825.483a.75.75 0 000 1.294l7.25 4.25a.75.75 0 00.758 0l7.25-4.25a.75.75 0 000-1.294l-.825-.484-5.666 3.322a2.25 2.25 0 01-2.276 0L3.196 12.87z"
                    ></path>
                    <path
                      d="M3.196 8.87l-.825.483a.75.75 0 000 1.294l7.25 4.25a.75.75 0 00.758 0l7.25-4.25a.75.75 0 000-1.294l-.825-.484-5.666 3.322a2.25 2.25 0 01-2.276 0L3.196 8.87z"
                    ></path>
                    <path
                      d="M10.38 1.103a.75.75 0 00-.76 0l-7.25 4.25a.75.75 0 000 1.294l7.25 4.25a.75.75 0 00.76 0l7.25-4.25a.75.75 0 000-1.294l-7.25-4.25z"
                    ></path>
                  </svg>
                  <button class="ml-1">Documentation</button>
                </div>
              </a>
              <a
                href="https://palmswap.org/referral_agreement"
                class="w-[50%] whitespace-nowrap"
                target="_blank"
              >
                <div
                  class="w-[100%] cursor-pointer mt-1 rounded-lg flex pl-3 text-[12px] text-graytext items-center justify-items-start h-[34px] hover:bg-[#191b1f]"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    aria-hidden="true"
                    class="h-4"
                    role="none"
                  >
                    <path
                      d="M3 3.5A1.5 1.5 0 014.5 2h6.879a1.5 1.5 0 011.06.44l4.122 4.12A1.5 1.5 0 0117 7.622V16.5a1.5 1.5 0 01-1.5 1.5h-11A1.5 1.5 0 013 16.5v-13z"
                      role="none"
                    ></path>
                  </svg>
                  <button class="ml-1">Referral Agreement</button>
                </div>
              </a>

              <a href="https://palmswap.org/terms_of_use" target="_blank">
                <div
                  class="w-[100%] whitespace-nowrap cursor-pointer mt-1 rounded-lg flex pl-3 text-[12px] text-graytext items-center justify-items-start h-[34px] hover:bg-[#191b1f]"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    aria-hidden="true"
                    class="h-4"
                    role="none"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M4.5 2A1.5 1.5 0 003 3.5v13A1.5 1.5 0 004.5 18h11a1.5 1.5 0 001.5-1.5V7.621a1.5 1.5 0 00-.44-1.06l-4.12-4.122A1.5 1.5 0 0011.378 2H4.5zm2.25 8.5a.75.75 0 000 1.5h6.5a.75.75 0 000-1.5h-6.5zm0 3a.75.75 0 000 1.5h6.5a.75.75 0 000-1.5h-6.5z"
                      clip-rule="evenodd"
                      role="none"
                    ></path>
                  </svg>
                  <p class="ml-1">Terms of Service</p>
                </div>
              </a>

              <a
                href="https://palmswap.org/privacy"
                class="w-[50%]"
                target="_blank"
              >
                <div
                  class="w-[100%] cursor-pointer mt-1 rounded-lg flex pl-3 text-[12px] text-graytext items-center justify-items-start h-[34px] hover:bg-[#191b1f]"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    aria-hidden="true"
                    class="h-4"
                    role="none"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M10.339 2.237a.532.532 0 00-.678 0 11.947 11.947 0 01-7.078 2.75.5.5 0 00-.479.425A12.11 12.11 0 002 7c0 5.163 3.26 9.564 7.834 11.257a.48.48 0 00.332 0C14.74 16.564 18 12.163 18 7.001c0-.54-.035-1.07-.104-1.59a.5.5 0 00-.48-.425 11.947 11.947 0 01-7.077-2.75zM10 6a.75.75 0 01.75.75v3.5a.75.75 0 01-1.5 0v-3.5A.75.75 0 0110 6zm0 9a1 1 0 100-2 1 1 0 000 2z"
                      clip-rule="evenodd"
                      role="none"
                    ></path>
                  </svg>
                  <button class="ml-1">Privacy Policy</button>
                </div>
              </a>

              <a
                href="      https://web3.career/web3-companies/palmswap"
                class="w-[50%]"
                target="_blank"
              >
                <div
                  class="w-[100%] cursor-pointer mt-1 rounded-lg flex pl-3 text-[12px] text-graytext items-center justify-items-start h-[34px] hover:bg-[#191b1f]"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    aria-hidden="true"
                    class="h-4"
                    role="none"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M6 3.75A2.75 2.75 0 018.75 1h2.5A2.75 2.75 0 0114 3.75v.443c.572.055 1.14.122 1.706.2C17.053 4.582 18 5.75 18 7.07v3.469c0 1.126-.694 2.191-1.83 2.54-1.952.599-4.024.921-6.17.921s-4.219-.322-6.17-.921C2.694 12.73 2 11.665 2 10.539V7.07c0-1.321.947-2.489 2.294-2.676A41.047 41.047 0 016 4.193V3.75zm6.5 0v.325a41.622 41.622 0 00-5 0V3.75c0-.69.56-1.25 1.25-1.25h2.5c.69 0 1.25.56 1.25 1.25zM10 10a1 1 0 00-1 1v.01a1 1 0 001 1h.01a1 1 0 001-1V11a1 1 0 00-1-1H10z"
                      clip-rule="evenodd"
                      role="none"
                    ></path>
                    <path
                      d="M3 15.055v-.684c.126.053.255.1.39.142 2.092.642 4.313.987 6.61.987 2.297 0 4.518-.345 6.61-.987.135-.041.264-.089.39-.142v.684c0 1.347-.985 2.53-2.363 2.686a41.454 41.454 0 01-9.274 0C3.985 17.585 3 16.402 3 15.055z"
                      role="none"
                    ></path>
                  </svg>

                  <button class="ml-1">Career</button>
                </div>
              </a>

              <a
                href="     https://palmswap.canny.io/"
                class="w-[50%]"
                target="_blank"
              >
                <div
                  class="w-[100%] cursor-pointer mt-1 rounded-lg flex pl-3 text-[12px] text-graytext items-center justify-items-start h-[34px] hover:bg-[#191b1f]"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    aria-hidden="true"
                    class="h-4"
                    role="none"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M10 2c-2.236 0-4.43.18-6.57.524C1.993 2.755 1 4.014 1 5.426v5.148c0 1.413.993 2.67 2.43 2.902 1.168.188 2.352.327 3.55.414.28.02.521.18.642.413l1.713 3.293a.75.75 0 001.33 0l1.713-3.293a.783.783 0 01.642-.413 41.102 41.102 0 003.55-.414c1.437-.231 2.43-1.49 2.43-2.902V5.426c0-1.413-.993-2.67-2.43-2.902A41.289 41.289 0 0010 2zM6.75 6a.75.75 0 000 1.5h6.5a.75.75 0 000-1.5h-6.5zm0 2.5a.75.75 0 000 1.5h3.5a.75.75 0 000-1.5h-3.5z"
                      clip-rule="evenodd"
                      role="none"
                    ></path>
                  </svg>

                  <button class="ml-1">Feedback</button>
                </div>
              </a>
              <div
                class="w-[50%] cursor-pointer mt-1 rounded-lg flex pl-3 text-[12px] text-graytext items-center justify-items-start h-[34px] hover:bg-[#191b1f]"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
                  class="h-4"
                  role="none"
                >
                  <path
                    fill-rule="evenodd"
                    d="M2 3.5A1.5 1.5 0 013.5 2h9A1.5 1.5 0 0114 3.5v11.75A2.75 2.75 0 0016.75 18h-12A2.75 2.75 0 012 15.25V3.5zm3.75 7a.75.75 0 000 1.5h4.5a.75.75 0 000-1.5h-4.5zm0 3a.75.75 0 000 1.5h4.5a.75.75 0 000-1.5h-4.5zM5 5.75A.75.75 0 015.75 5h4.5a.75.75 0 01.75.75v2.5a.75.75 0 01-.75.75h-4.5A.75.75 0 015 8.25v-2.5z"
                    clip-rule="evenodd"
                    role="none"
                  ></path>
                  <path
                    d="M16.5 6.5h-1v8.75a1.25 1.25 0 102.5 0V8a1.5 1.5 0 00-1.5-1.5z"
                    role="none"
                  ></path>
                </svg>

                <button class="ml-1">Blog</button>
              </div>

              <a
                href="https://linktr.ee/palmswap"
                class="w-[50%]"
                target="_blank"
              >
                <div
                  class="w-[100%]cursor-pointer mt-1 rounded-lg flex pl-3 text-[12px] text-graytext items-center justify-items-start h-[34px] hover:bg-[#191b1f]"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    aria-hidden="true"
                    class="h-4"
                    role="none"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M10 1a.75.75 0 01.75.75v1.5a.75.75 0 01-1.5 0v-1.5A.75.75 0 0110 1zM5.05 3.05a.75.75 0 011.06 0l1.062 1.06A.75.75 0 116.11 5.173L5.05 4.11a.75.75 0 010-1.06zm9.9 0a.75.75 0 010 1.06l-1.06 1.062a.75.75 0 01-1.062-1.061l1.061-1.06a.75.75 0 011.06 0zM3 8a.75.75 0 01.75-.75h1.5a.75.75 0 010 1.5h-1.5A.75.75 0 013 8zm11 0a.75.75 0 01.75-.75h1.5a.75.75 0 010 1.5h-1.5A.75.75 0 0114 8zm-6.828 2.828a.75.75 0 010 1.061L6.11 12.95a.75.75 0 01-1.06-1.06l1.06-1.06a.75.75 0 011.06 0zm3.594-3.317a.75.75 0 00-1.37.364l-.492 6.861a.75.75 0 001.204.65l1.043-.799.985 3.678a.75.75 0 001.45-.388l-.978-3.646 1.292.204a.75.75 0 00.74-1.16l-3.874-5.764z"
                      clip-rule="evenodd"
                      role="none"
                    ></path>
                  </svg>

                  <button class="ml-1">Social Media</button>
                </div>
              </a>

              <a href="" class="w-[50%]">
                <div
                  class="w-[100%] cursor-pointer mt-1 rounded-lg flex pl-3 text-[12px] text-graytext items-center justify-items-start h-[34px] hover:bg-[#191b1f]"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    aria-hidden="true"
                    class="h-4"
                    role="none"
                  >
                    <path
                      d="M15.5 2A1.5 1.5 0 0014 3.5v13a1.5 1.5 0 001.5 1.5h1a1.5 1.5 0 001.5-1.5v-13A1.5 1.5 0 0016.5 2h-1zM9.5 6A1.5 1.5 0 008 7.5v9A1.5 1.5 0 009.5 18h1a1.5 1.5 0 001.5-1.5v-9A1.5 1.5 0 0010.5 6h-1zM3.5 10A1.5 1.5 0 002 11.5v5A1.5 1.5 0 003.5 18h1A1.5 1.5 0 006 16.5v-5A1.5 1.5 0 004.5 10h-1z"
                      role="none"
                    ></path>
                  </svg>

                  <button class="ml-1">Status</button>
                </div>
              </a>
            </div>
          </div>
        </div>
        <div class="flex w-[50%] justify-items-end">
          <div
            class="ml-auto flex justify-items-end flex-nowrap items-center pr-3"
          >
            <a href="https://palmswap.canny.io/">
              <p
                class="sm:hidden md:flex px-3 py-2 text-[#6C7284] cursor-pointer text-[14px] hover:text-white"
              >
                Feedback
              </p>
            </a>
            <a href="https://perp.palmswap.org">
              <button
                class="bg-gradient-to-r from-[#9a79e7] to-[#7259d2] text-[14px] py-1 px-3 rounded-lg"
              >
                Trade now
              </button>
            </a>
          </div>
        </div>
      </div>
    </div>
    <div class="line w-[100%] h-[2px] bg-box ml-auto mr-auto"></div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      isEarnVisible: false,
      isMoreVisible: false,
    };
  },

  methods: {
    activeColor() {
      const earn = document.getElementById("earn");
      if (this.isEarnVisible) {
        earn.style.color = "#ffffff";
      }
    },

    toggleDropdownOff() {
      this.isEarnVisible = false;
      this.isMoreVisible = false;
    },
    toggleEarnDropdown() {
      this.isMoreVisible = false;

      this.isEarnVisible = !this.isEarnVisible;
    },
    toggleMoreDropdown() {
      this.isEarnVisible = false;
      this.isMoreVisible = !this.isMoreVisible;
    },
  },
};
</script>
