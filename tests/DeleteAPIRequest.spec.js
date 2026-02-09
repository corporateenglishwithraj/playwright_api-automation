import { test, expect } from '@playwright/test';
import { readFile } from 'fs/promises';

import { generateToken } from '../utils/TokenGenerator.js' ;

test('Delete API REQUEST', async ({ request }) => {
  
  const token = await generateToken(request);

  const bId = 13;

  const res = await request.delete(`/booking/${bId}`, {
    headers: {
      'Content-Type': 'application/json',
      'Cookie': `token=${token}`,
    },
    
  });

  expect(res.ok()).toBeTruthy();
  console.log(await res.text());
}) ;