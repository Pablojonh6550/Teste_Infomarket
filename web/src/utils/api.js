import apiInstance from "../config/axios";

class PeopleApi {
  static path = "/people";

  static get() {
    return apiInstance.get(this.path);
  }

  static post(data) {
    return apiInstance.post(this.path, data);
  }

  static put(peopleId, data) {
    return apiInstance.put(`${this.path}/${peopleId}`, data);
  }

  static delete(peopleId) {
    return apiInstance.delete(`${this.path}/${peopleId}`);
  }
}

export default PeopleApi;
