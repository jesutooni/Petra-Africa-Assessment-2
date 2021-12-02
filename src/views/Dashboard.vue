<template>
  <div class="font-dm-sans mx-4 py-12">
    <div class="max-w-6xl mx-auto">
      <navbar />

      <div class="mt-8">
        <h1 class="text-3xl text-blueDark my-8">
          What do you want to do today?
        </h1>

        <div>
          <div
            v-for="activity in activities"
            :key="activity"
            class="border w-96 h-12 cursor-pointer rounded-md px-5 mb-5 flex items-center"
          >
            <h1 class="text-2xl">{{ activity }}</h1>
          </div>
        </div>
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
  data() {
    return {
      activities: [
        "Add an employee",
        "View all employees",
        "Pay an employee",
        "View previous payments",
      ],
    };
  },
};
</script>
