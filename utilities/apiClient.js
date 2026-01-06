const { request } = require('@playwright/test');
const { routeProps } = require('./propertyreaders');
class ApiClient {
  static async getContext() {
    return await request.newContext({
      extraHTTPHeaders: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      }
    });
  }
}

module.exports = { ApiClient };