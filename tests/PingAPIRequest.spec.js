// load Playwright module
import { test, expect } from '@playwright/test';
import { readFile } from 'fs/promises';

//test 

test('Ping API REQUEST', async ({ request }) => {

    // Call API Request
    
    const pingAPIResponse = await request.get('/ping');

    console.log('Status:', pingAPIResponse.status());
    console.log('Body:', await pingAPIResponse.text());

}

);

