<template>
  <div>
    <div class="flex justify-between mb-4">
      <h1 class="text-4xl text-blueDark font-bold">Welcome, Petra Africa</h1>
      <button
        @click="signOut"
        class="hidden sm:block text-white font-bold bg-blueDark w-28 py-2 rounded-md"
      >
        Sign Out
      </button>

      <div @click="toggleNav" class="sm:hidden">
        <span class="iconify" data-icon="entypo:menu" data-width="45"></span>
      </div>
    </div>
    <button
      v-if="nav"
      @click="signOut"
      class="text-white sm:hidden font-bold bg-blueDark w-28 py-2 rounded-md"
    >
      Sign Out
    </button>
    <hr class="hidden sm:block" />
  </div>
</template>

<script>
export default {
  data() {
    return {
      nav: false,
    };
  },
  methods: {
    signOut() {
      this.$router.push("/");
    },
    toggleNav() {
      this.nav = !this.nav;
    },
  },
};
</script>
