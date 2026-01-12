const {test, expect} = require('@playwright/test');
const { StoreEndpoint } = require('../../endpoints/storeendpoints.js');
const storePayload = require('../../testdata/storePayload.json');
 

test('Create store order API - static payload', async () => {
  const response = await StoreEndpoint.createorder(storePayload);
  console.log('Response body:', await response.json());
  expect(response.status()).toBe(200);
});

test('Get order by ID API - static payload', async () => {
    const response = await StoreEndpoint.getorderById(storePayload.id);
    console.log('Response body:', await response.json());
    expect(response.status()).toBe(200);  

});

test('Get Store Inventory API', async () => {
    const response = await StoreEndpoint.getInventory();
    console.log('Response body:', await response.json());
    expect(response.status()).toBe(200);
});

