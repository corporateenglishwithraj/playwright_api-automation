import { test } from '@playwright/test';
import * as XLSX from 'xlsx';
import path from 'path';


const datafile = path.join(__dirname, '../test-data/tokengeneration.xlsx');

test('Read Excel file and log contents', async ({ page }) => {

    const workbook = XLSX.readFile(datafile);
    const sheetName = workbook.SheetNames[0];
    const worksheet = workbook.Sheets[sheetName];
    const jsonData = XLSX.utils.sheet_to_json(worksheet);

    console.log('Excel Data:', jsonData);


    await page.goto('https://conduit.bondaracademy.com/');
    await page.getByRole('link', { name: 'Sign in' }).click();
    await page.getByRole('textbox', { name: 'Email' }).fill(`${jsonData[0].username}`);
    await page.getByRole('textbox', { name: 'Password' }).fill(`${jsonData[0].password}`);

    await page.getByRole('button', { name: 'Sign in' }).click();


});



