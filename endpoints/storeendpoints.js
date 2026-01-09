const { ApiClient } = require('../utilities/apiClient');
const  routeProps   = require('../config/routes.json');
class StoreEndpoint {

  static async createorder(payload) {
    const apiContext = await ApiClient.getContext();

    const response = await apiContext.post(
      routeProps.base_url + '/store/order',
      
      {
        data: payload
      }
      
    );
  
    return response;
  }

  static async getorderById(orderId) {
    const apiContext = await ApiClient.getContext();
    const response = await apiContext.get(
      routeProps.base_url + `/store/order/${orderId}`
    );
    return response;
  }
}

module.exports = { StoreEndpoint };