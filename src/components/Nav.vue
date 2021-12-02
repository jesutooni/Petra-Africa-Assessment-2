<template>
  <div>
    <div class="flex justify-between mb-4">
      <h1 class="text-4xl text-blueDark font-bold">Welcome, Petra Africa</h1>
      <button
        @click="signOut"
        class="text-white font-bold bg-blueDark w-28 py-2 rounded-md"
      >
        Sign Out
      </button>
    </div>
    <hr />
  </div>
</template>

<script>
export default {
  methods: {
    signOut() {
      this.$router.push("/");
    },
  },
};
</script>
