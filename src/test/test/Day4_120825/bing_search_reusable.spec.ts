import { Page, test } from '@playwright/test';
import {getText, type} from '../Reusable_Actions';


let page: Page;//initialize page variable for browser since we are calling multiple tests

test.beforeAll(async ({browser}) => {
    page = await browser.newPage();
});

test('search for playwright keyword on bing', async ({}) => {
    await page.goto('https://www.bing.com');
    await page.waitForTimeout(2000);
    await type(page, '[name="q"]', 'Playwright', 'Search Box');
    await page.keyboard.press('Enter'); //hitting enter key after typing
})  //end of test

test('capture the search number results for playwright keyword', async ({}) => {
let searchResult = await getText(page, '[class="sb_count"]', 'Search Result Text');
console.log('Search Results: ' + searchResult);
let searchNumber = searchResult.split(' ');
console.log('Search number is: ' + searchNumber[1]);
})  //end of test