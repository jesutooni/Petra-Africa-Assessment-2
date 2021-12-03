<template>
  <div class="font-dm-sans mx-4 py-12">
    <div class="max-w-6xl mx-auto">
      <navbar />

      <div class="mt-8">
        <h1 class="text-3xl text-blueDark my-8">Add an employee</h1>

        <form>
          <input
            type="text"
            placeholder="Add employee's first name"
            v-model="firstName"
            class="focus:outline-none border-2 rounded-md px-2 mb-6 w-full h-10"
          />
          <br />
          <input
            type="text"
            placeholder="Add employee's last name"
            v-model="lastName"
            class="focus:outline-none border-2 rounded-md px-2 mb-6 w-full h-10"
          />
          <br />
          <input
            type="email"
            placeholder="Add employee's email"
            v-model="email"
            class="focus:outline-none border-2 rounded-md px-2 mb-6 w-full h-10"
          />
          <button
            @click.prevent="addNewEmployee()"
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
import { mapActions } from "vuex";
export default {
  data() {
    return {
      firstName: "",
      lastName: "",
      email: "",
    };
  },
  components: {
    navbar,
  },
  methods: {
    ...mapActions(["addEmployee"]),
    addNewEmployee() {
      if (this.firstName === "" || this.lastName === "" || this.email === "") {
        alert("Please fill out all fields");
      } else {
        let first_name = this.firstName;
        let last_name = this.lastName;
        let email = this.email;
        const payload = {
          first_name,
          last_name,
          email,
        };
        this.addEmployee(payload);
        (this.firstName = ""), (this.lastName = ""), (this.email = "");
      }
    },
  },
};
</script>
