<template>
  <div class="font-dm-sans mx-4 py-12">
    <div class="max-w-6xl mx-auto">
      <navbar />

      <div class="mt-8">
        <h1 class="text-3xl text-blueDark my-8">Add an employee</h1>

        <form action="">
          <input
            type="text"
            placeholder="Add employee's first name"
            class="focus:outline-none border-2 rounded-md px-2 mb-6 w-full h-10"
          />
          <br />
          <input
            type="text"
            placeholder="Add employee's last name"
            class="focus:outline-none border-2 rounded-md px-2 mb-6 w-full h-10"
          />
          <br />
          <input
            type="email"
            placeholder="Add employee's email"
            class="focus:outline-none border-2 rounded-md px-2 mb-6 w-full h-10"
          />
          <button
            type="submit"
            class="text-white font-bold bg-blueDark w-48 py-2 rounded-md"
          >
            Add employee
          </button>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import navbar from "@/components/Nav.vue";
export default {
  components: {
    navbar,
  },
};
</script>
