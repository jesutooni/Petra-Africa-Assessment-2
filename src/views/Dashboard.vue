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
            v-for="(activity, index) in activities"
            :key="activity.category"
            @click="goTo(index)"
            class="border h-16 cursor-pointer rounded-md px-5 mb-5 flex items-center hover:text-white hover:bg-blueDark duration-300"
          >
            <h1 class="text-2xl">{{ activity.category }}</h1>
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
        { category: "Add an employee", route: "addemployee" },
        { category: "View all employees", route: "employees" },
        { category: "Pay an employee", route: "pay" },
        { category: "View previous payments", route: "transactions" },
      ],
    };
  },
  methods: {
    goTo(index) {
      this.$router.push(`/${this.activities[index].route}`);
    },
  },
};
</script>
