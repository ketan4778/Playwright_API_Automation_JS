const { test, expect } = require('@playwright/test');
const { UserEndpoint } = require('../../endpoints/userendpoints2.js');
const userPayloads = require('../../testdata/userPayload.json');
const userPayload = userPayloads[0]
const updateuserpayload = {
  ...userPayload,
  ...userPayloads[1]
};

test('Create user API - static payload', async () => {
  const response = await UserEndpoint.createUser(userPayload);
  expect(response.status()).toBe(200);
});

test('Read user API - static payload', async () => {

    const response = await UserEndpoint.readUser(userPayload.username);
    expect(response.status()).toBe(200);
    expect((await response.json()).username).toBe(userPayload.username);
    
});
test('Update user API - dynamic payload', async () => {
  console.log('Update payload being sent:', updateuserpayload);
  const response = await UserEndpoint.updateUser(userPayload.username, updateuserpayload);
  const updateResponseBody = await response.json();
  console.log('Update response status:', response.status());
  console.log('Update response body:', updateResponseBody);
  expect(response.status()).toBe(200);

  // Add a short delay to rule out race conditions
  await new Promise(r => setTimeout(r, 500));

  const response1 = await UserEndpoint.readUser(userPayload.username);
  const readResponseBody = await response1.json();
  console.log('Read after update status:', response1.status());
  console.log('Read after update body:', readResponseBody);
  expect(response1.status()).toBe(200);
})

test('Delete user API - dynamic payload', async () => {
  const response = await UserEndpoint.deleteUser(userPayload.username);
  expect(response.status()).toBe(200);
})
