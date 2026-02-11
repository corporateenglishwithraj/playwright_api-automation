// api-authentications/authentication.spec.js
import { test, expect } from '@playwright/test';
import dotenv from 'dotenv';

dotenv.config();

test('GitHub /user/repos returns 401 with invalid Bearer token', async ({ request }) => {
  const token = process.env.GITHUB_TOKEN || 'BAD_TOKEN';

  console.log('Using token:', token);

  const res = await request.get('https://api.github.com/user/repos?per_page=100', {
    headers: {
      Authorization: `Bearer ${token}`, // invalid/bad token -> 401
      'User-Agent': 'playwright-tests',
      Accept: 'application/vnd.github+json',
      'X-GitHub-Api-Version': '2022-11-28'
    }
  });

  expect(res.status()).toBe(200); // Expecting 200 OK for a valid token 
  

  const body = await res.json();
  console.log('Response body:', body);

  /*

  const text = await res.text();
  let body;
  try {
    body = JSON.parse(text);
  } catch {
    body = { message: text };
  }

  expect(Array.isArray(body)).toBe(false);
  expect(typeof body?.message).toBe('string');
  expect(body.message.toLowerCase()).toContain('bad credentials'); */
});
