import Vue from "vue";
import Vuex from "vuex";

import ContributionServices from "@/services/config.js";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    employees: [],
    transactions: [],
    transaction: [],
  },
  getters: {
    allEmployees: (state) => state.employees,
    allTransactions: (state) => state.transactions,
    transaction: (state) => state.transaction,
  },
  mutations: {
    setEmployees: (state, employees) => (state.employees = employees),
    setTransactions: (state, transactions) =>
      (state.transactions = transactions),
    addEmployee: (data) => console.log(data),
    payEmployee: (data) => console.log(data),
    viewTransaction: (state, transaction) => (state.transaction = transaction),
  },
  actions: {
    async getEmployees({ commit }) {
      await ContributionServices.getEmployees()
        .then((response) => {
          commit("setEmployees", response.data.data);
        })
        .catch((err) => console.error(err));
    },
    async getTransactions({ commit }) {
      await ContributionServices.getTransactions()
        .then((response) => {
          commit("setTransactions", response.data.data);
        })
        .catch((err) => console.error(err));
    },
    async addEmployee({ commit }, data) {
      await ContributionServices.addEmployee(data);
      commit("addEmployee", data);
    },
    async payEmployee({ commit }, data) {
      await ContributionServices.payEmployee(data);
      commit("payEmployee", data);
    },
    async seeTransaction({ commit }, id) {
      await ContributionServices.seeTransaction(id)
        .then((response) => {
          commit("viewTransaction", response.data.data);
        })
        .catch((err) => console.error(err));
    },
  },
  modules: {},
});
