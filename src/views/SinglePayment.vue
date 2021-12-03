<template>
  <div class="font-dm-sans mx-4 py-12">
    <div class="max-w-6xl mx-auto">
      <navbar />

      <div class="mt-8">
        <h1 class="text-3xl text-blueDark my-8">
          Payment to {{ transaction.customer.email }}
        </h1>

        <div>
          <div>
            <h1>Amount: #{{ transaction.amount }}</h1>
            <h1>Cryptocurrency: {{ transaction.currency_to_send }}</h1>
            <h1>
              Amount in ({{ transaction.currency_to_send }}):
              {{ transaction.amount_to_send }}
            </h1>
            <h1>Transfer fee: {{ transaction.converted_fee }}</h1>
            <h1>Status: {{ transaction.status }}</h1>
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
  data() {
    return {
      id: this.$route.params.id,
    };
  },
  components: {
    navbar,
  },
  computed: mapGetters(["transaction"]),
  methods: {
    ...mapActions(["seeTransaction"]),
  },
  created() {
    this.seeTransaction(this.id);
  },
};
</script>
