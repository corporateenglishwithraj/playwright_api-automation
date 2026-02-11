import { test, expect } from '@playwright/test';
import { readFile } from 'fs/promises';

 import ExcelJS from 'exceljs';
import path from 'path';

import { generateToken } from '../utils/TokenGenerator.js' ;

test('PUT API REQUEST', async ({ request }) => {
  const token = await generateToken(request);

   // load excel file and parse JSON
   
  
   
  
  const putPayloadText = await readFile('test-data/PutRequestBody.json', 'utf8');
  const putBody = JSON.parse(putPayloadText);
  

  const bId = 77;

  const res = await request.put(`/booking/${bId}`, {
    headers: {
      'Content-Type': 'application/json',
      'Cookie': `token=${token}`,
    },
    data: putBody
  });

  expect(res.ok()).toBeTruthy();
  console.log(await res.text());
}) ;