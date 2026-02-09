import { test, expect } from '@playwright/test';

test('Filter bookings then fetch details', async ({ request }) => {
  // 1) Search / filter (returns booking IDs)
  const searchRes = await request.get('/booking ', {
    
  });

  expect(searchRes.status()).toBe(200);

  const ids = await searchRes.json();
 // console.log('Filtered booking IDs:', ids);

  expect(Array.isArray(ids)).toBeTruthy();

  if (ids.length === 0) {
    throw new Error('No bookings found for firstname/lastname');
  }

  // 2) Fetch details for first matching booking
  const bookingId = ids[113].bookingid;
  const detailsRes = await request.get(`/booking/${bookingId}`);

  expect(detailsRes.status()).toBe(200);

  const booking = await detailsRes.json();
  console.log('Booking details:', booking);

  expect(booking).toBeTruthy();
});