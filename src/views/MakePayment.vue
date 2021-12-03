<template>
  <div class="font-dm-sans mx-4 py-12">
    <div class="max-w-6xl mx-auto">
      <navbar />

      <div class="mt-8">
        <h1 class="text-3xl text-blueDark my-8">Pay an employee</h1>

        <form>
          <input
            type="email"
            placeholder="Add employee's email"
            v-model="email"
            class="focus:outline-none border-2 rounded-md px-2 mb-6 w-full h-10"
          />
          <br />

          <input
            type="number"
            placeholder="Add amount in NGN"
            v-model="amount"
            class="focus:outline-none border-2 rounded-md px-2 mb-6 w-full h-10"
          />
          <br />
          <select
            v-model="currency"
            class="focus:outline-none border-2 rounded-md px-3 mb-4 h-10"
          >
            <option>BTC</option>
            <option>ETH</option>
            <option>BSC</option>
            <option>BNB</option>
          </select>
          <br />
          <button
            @click.prevent="makePayment()"
            type="submit"
            class="text-white font-bold bg-blueDark w-48 py-2 rounded-md"
          >
            Pay
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
      amount: null,
      currency: "",
      email: "",
    };
  },
  components: {
    navbar,
  },
  methods: {
    ...mapActions(["payEmployee"]),
    makePayment() {
      if (this.amount === "" || this.currency === "" || this.email === "") {
        alert("Please fill out all the fields");
      } else {
        let type = this.currency;
        let amount = parseInt(this.amount);
        let email = this.email;

        const payload = {
          type,
          amount,
          email,
        };
        this.payEmployee(payload);
        (this.amount = ""), (this.currency = ""), (this.email = "");
      }
    },
  },
};
</script>
