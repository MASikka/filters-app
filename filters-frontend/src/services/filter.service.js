import http from "../http-common";

class FilterDataService {
  getAll() {
    return http.get("/filters");
  }

  get(id) {
    return http.get(`/filters/${id}`);
  }

  create(data) {
    return http.post("/filters", data);
  }

  delete(id) {
    return http.delete(`/filters/${id}`);
  }

}

export default new FilterDataService();