import Vue from "vue";
import Vuex from "vuex";

import ContributionServices from "@/services/config.js";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    employees: [],
  },
  getters: {
    allEmployees: (state) => state.employees,
  },
  mutations: {
    setEmployees: (state, employees) => (state.employees = employees),
  },
  actions: {
    async getEmployees({ commit }) {
      await ContributionServices.getEmployees()
        .then((response) => {
          commit("setEmployees", response.data.data);
        })
        .catch((err) => console.error(err));
    },
  },
  modules: {},
});
