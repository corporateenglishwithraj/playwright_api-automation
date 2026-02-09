

function expectBookingSchema(body) {
  expect(body).toEqual(expect.objectContaining({
    firstname: expect.any(String),
    lastname: expect.any(String),
    totalprice: expect.any(Number),
    depositpaid: expect.any(Boolean),
    bookingdates: expect.objectContaining({
      checkin: expect.any(String),
      checkout: expect.any(String),
    }),
  }));
}

import { test, expect } from '@playwright/test';

test('Validate with custom schema helper', async ({ request }) => {
  const res = await request.get('/booking/77');
  expect(res.status()).toBe(200);

  const body = await res.json();
  expectBookingSchema(body);
});