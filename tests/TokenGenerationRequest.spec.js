import { test, expect } from '@playwright/test';
import { readFile } from 'fs/promises';



// ✅ Helper OUTSIDE the test
 export async function generateToken(request) {
 
  const payloadText = await readFile('test-data/TokenGenerationRequestBody.json', 'utf8'); 
  const requestBody = JSON.parse(payloadText);

  const res = await request.post('/auth', {
    data: requestBody,
    headers: { 'Content-Type': 'application/json' }
  });

  expect(res.ok()).toBeTruthy(); // ✅ good assertion

  const body = await res.json();

 // log token and response for debugging 
   
  console.log(
    `Status: ${res.status()}\n` +
    `Token: ${body.token}\n` +
    `Response:\n${JSON.stringify(body, null, 2)}`
  );

  return body.token;
}

test('Token Generation API REQUEST', async ({ request }) => {
  const token = await generateToken(request);
  expect(token).toBeTruthy();
});
