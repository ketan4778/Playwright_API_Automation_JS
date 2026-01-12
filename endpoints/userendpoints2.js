const { ApiClient } = require('../utilities/apiClient');
const { routeProps } = require('../utilities/propertyreaders');
class UserEndpoint {

  static async createUser(payload) {
    const apiContext = await ApiClient.getContext();

    const response = await apiContext.post(
      routeProps.base_url + '/user',
      
      {
        data: payload
      }
      
    );
    console.log(routeProps.base_url + '/user');

    return response;
 
 
  }

  static async readUser(username) {
  const apiContext = await ApiClient.getContext();
  const url = routeProps.base_url + '/user/' + username;
  const response = await apiContext.get(url);
  return response;
}

  static async updateUser(username, payload) {
    const apiContext = await ApiClient.getContext();
    const url = routeProps.base_url + '/user/' + username;
    const response = await apiContext.put(url, {
      data: payload
    });
    return response;
  }
  static async deleteUser(username) {
    const apiContext = await ApiClient.getContext();
    const url = routeProps.base_url + '/user/' + username;
    const response = await apiContext.delete(url);
    return response;
  } 
}

module.exports = { UserEndpoint };
