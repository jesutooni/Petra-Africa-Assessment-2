<template>
  <div class="font-dm-sans mx-4 py-12">
    <div class="max-w-6xl mx-auto">
      <navbar />

      <div class="mt-8">
        <h1 class="text-3xl text-blueDark my-8">List of employees</h1>

        <div>
          <div
            v-for="employee in allEmployees"
            :key="employee.id"
            class="mb-2 bg-gray-500 rounded-md px-2 h-16 py-1 cursor-pointer"
          >
            <div>
              <h1 class="">
                {{ employee.first_name + " " + employee.last_name }}
              </h1>
              <p class="text-sm text-white italic">{{ employee.email }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import navbar from "@/components/Nav.vue";
export default {
  components: {
    navbar,
  },
  computed: mapGetters(["allEmployees"]),
  methods: {
    ...mapActions(["getEmployees"]),
  },
  created() {
    this.getEmployees();
  },
};
</script>
