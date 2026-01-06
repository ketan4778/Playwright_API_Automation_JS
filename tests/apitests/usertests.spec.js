const { test, expect } = require('@playwright/test');
const { UserEndpoint } = require('../../endpoints/userendpoints2.js');
const userPayload = require('../../testdata/userPayload.json');

test('Create user API - static payload', async () => {
  const response = await UserEndpoint.createUser(userPayload);
  expect(response.status()).toBe(200);
});

test('Read user API - static payload', async () => {

    const response = await UserEndpoint.readUser(userPayload.username);
    console.log('Response Status: +++++++',await response.status());
    expect(response.status()).toBe(200);
    expect((await response.json()).username).toBe(userPayload.username);
    console.log('Username from Response: +++++++', (await response.json()).username);
})