import http from "./http-client";

class ContributionServices {
  getEmployees() {
    return http.get("/customer");
  }
  getTransactions() {
    return http.get("/transaction");
  }
  addEmployee(data) {
    http.post("/customer", data);
  }
  payEmployee(data) {
    http.post("/transaction/initialize", data);
  }
  seeTransaction(id) {
    return http.get(`/transaction/${id}`);
  }
}

export default new ContributionServices();
