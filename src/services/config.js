import http from "./http-client";

class ContributionServices {
  getEmployees() {
    return http.get("/customer");
  }
}

export default new ContributionServices();
