<template>
  <div class="font-dm-sans mx-4 py-12">
    <div class="max-w-6xl mx-auto">
      <navbar />

      <div class="mt-8">
        <h1 class="text-3xl text-blueDark my-8">Previous payments</h1>

        <div>
          <div
            @click="viewTransaction(index)"
            v-for="(transaction, index) in allTransactions"
            :key="transaction.id"
            class="mb-2 cursor-pointer bg-gray-500 text-white px-2 py-1 rounded-md"
          >
            <h1>To: {{ transaction.customer.email }}</h1>
            <h1>Amount: #{{ transaction.amount }}</h1>
            <h1 class="text-xs py-2">See details</h1>
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
  computed: mapGetters(["allTransactions"]),
  methods: {
    ...mapActions(["getTransactions"]),
    viewTransaction(index) {
      this.$router.push(`/transaction/${this.allTransactions[index].id}`);
    },
  },
  created() {
    this.getTransactions();
  },
};
</script>
