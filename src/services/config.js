import http from "./http-client";

class ContributionServices {
  getEmployees() {
    return http.get("/customer");
  }
  getTransactions() {
    return http.get("/transaction");
  }
}

export default new ContributionServices();
