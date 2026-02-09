// load Playwright module
import { test, expect } from '@playwright/test';


test('GET API REQUEST', async ({ request }) => {
  // Call API
  const getAPIResponse = await request.get('/booking');

  // Validate status
 // expect(getAPIResponse.ok()).toBeTruthy(); // true for 2xx

  // Read & log response JSON
  const body = await getAPIResponse.json();
  console.log('Response JSON:', body);

  // Example field checks (adjust as per your API response)
  expect(body).toBeTruthy();

  //validate status code 
  console.log(getAPIResponse.status());
  expect(getAPIResponse.status()).toBe(200) ; 

  


  //print lastname 
 // console.log(body.lastname);

 // validate first name

 // expect(body.firstname).toBe('Mark') ;

});