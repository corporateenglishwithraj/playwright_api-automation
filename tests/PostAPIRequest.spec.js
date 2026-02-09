// load Playwright module
import { test, expect } from '@playwright/test';
import { readFile } from 'fs/promises';

//test 

test('POST API REQUEST', async ({ request }) => {

     // Load payload from JSON file

     const postrequestpayload = await readFile('test-data/PostRequestBody.json', 'utf8' ) ;

     const postrequestbody = JSON.parse(postrequestpayload);


    // Call API Request

    const postAPIResponse = await request.post('/booking', {
        data: postrequestbody,
        /*  headers: {
              'Content-Type': 'application/json'
          }  */
    });

    //
    //log response

    const body = await postAPIResponse.json();

    console.log(postAPIResponse.status());
    console.log(body);

    const bookingid = body.bookingid;

    console.log('new booking id : ' + bookingid)


}


);

