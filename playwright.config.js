// @ts-check
import { defineConfig, devices } from '@playwright/test';
import dotenv from 'dotenv';
import path from 'path';

// Load .env from project root (same folder as this config)
dotenv.config({ path: path.resolve(__dirname, '.env') });

export default defineConfig({
  // Max time per test
  timeout: 100 * 1000,

  // Use a folder without spaces

  testDir: '.',   // root
  testMatch: [
    'api-authentications/**/*.spec.js',
    'tests/**/*.spec.js'
  ]
  ,
  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  retries: 2,
  workers: process.env.CI ? 1 : undefined,

  reporter: [
    ['line'],
    ['allure-playwright', { resultsDir: 'allure-results' }],
  ],

  use: {
    baseURL: 'https://restful-booker.herokuapp.com/',
    headless: false,
    trace: 'on-first-retry',
  },

  projects: [
    { name: 'Mobile Safari', use: { ...devices['iPhone 12'] } },
    // If you want Chrome desktop too, uncomment:
    // { name: 'Google Chrome', use: { ...devices['Desktop Chrome'], channel: 'chrome' } },
  ],
});