import axios from 'axios';
import config from '../config/env.config.js';

export default class BaseAPI {

  static async getHeaders() {    
    const headers = new Headers();
    headers.append('Accept', 'application/json');
    headers.append('Content-Type', 'application/json');
    headers.append('Authorization', 'Bearer 123-abc');
    return headers;
  }

  static async makeRequest(endpoint, method = "GET", body = undefined) {
    const url = config.API_BASE_URL + endpoint;
    const headers = await this.getHeaders();
    const response = await axios(url, {
      method,
      data: body,
      headers: {
        Authorization: 'Bearer 123-abc'
      }
    }).catch((error) => {
      return { data: {error: "Not authorized" } }
    })
    return response;
  }

  // Methods
  static async get(endpoint) {
    return await this.makeRequest(endpoint);
  }

  static async post(endpoint, body) {
    return await this.makeRequest(endpoint, "POST", body);
  }

  static async put(endpoint, body) {
    return await this.makeRequest(endpoint, "PUT", body);
  }

  static async delete(endpoint) {
    return await this.makeRequest(endpoint, "DELETE");
  }
}