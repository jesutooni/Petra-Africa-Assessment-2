<template>
  <div class="home mx-4">
    <header class="max-w-6xl mx-auto pb-8">
      <nav class="flex justify-between items-center py-6 mid:py-0">
        <div class="flex items-center">
          <span
            class="iconify"
            data-icon="bx:bx-money"
            style="color: #0e1229"
            data-width="40"
          ></span>
          <h1 class="text-3xl font-stardos font-bold ml-1 text-blueDark">
            CryptoPay
          </h1>
        </div>

        <ul class="hidden mid:flex gap-8 font-dm-sans text-gray-500 text-lg">
          <li
            class="pb-6 pt-8 hover:text-blueDark font-semibold border-b-4 border-transparent hover:border-blueDark duration-150 cursor-pointer"
          >
            About
          </li>
          <li
            class="pb-6 pt-8 hover:text-blueDark font-semibold border-b-4 border-transparent hover:border-blueDark duration-150 cursor-pointer"
          >
            Fast Transactions
          </li>
          <li
            class="pb-6 pt-8 hover:text-blueDark font-semibold border-b-4 border-transparent hover:border-blueDark duration-150 cursor-pointer"
          >
            Open Source
          </li>
          <li
            class="pb-6 pt-8 hover:text-blueDark font-semibold border-b-4 border-transparent hover:border-blueDark duration-150 cursor-pointer"
          >
            License
          </li>
        </ul>

        <button
          @click="signIn"
          class="hidden sm:block text-white font-bold bg-blueDark w-28 py-2 rounded-md"
        >
          Sign In
        </button>
        <div @click="toggleNav" class="sm:hidden">
          <span class="iconify" data-icon="entypo:menu" data-width="45"></span>
        </div>
      </nav>
      <button
        v-if="nav"
        @click="signIn"
        class="text-white sm:hidden font-bold bg-blueDark w-28 py-2 rounded-md"
      >
        Sign In
      </button>

      <hr class="hidden sm:block" />

      <section class="font-dm-sans mt-24 md:flex flex-row-reverse">
        <div class="w-48 md:w-auto mx-auto md:mx-0">
          <img src="../assets/image.png" alt="" />
        </div>
        <div class="md:w-1/2 text-center md:text-left">
          <h1 class="text-5xl xs:text-6xl font-bold capitalize">
            Pay employee salaries in cryto with ease
          </h1>
          <button
            class="bg-blueDark mt-10 text-white py-3 rounded-lg text-lg font-semibold px-4"
          >
            Create your organisation
          </button>
        </div>
      </section>
    </header>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: "Home",
  data() {
    return {
      nav: false,
    };
  },
  methods: {
    signIn() {
      this.$router.push("/dashboard");
    },
    toggleNav() {
      this.nav = !this.nav;
    },
  },
};
</script>
