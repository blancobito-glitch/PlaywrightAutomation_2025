import { Page, test } from '@playwright/test';
import { click, clickByIndex, selectByText, type } from '../Reusable_Actions';


test('Assignment 2B Northwestern mutual @ai', async ({page}) => {
    //navigate to northwestern mutual
    await page.goto('https://www.northwesternmutual.com')
    await page.waitForTimeout(3000)//wait for 3 seconds
    //click on insurance
    await clickByIndex(page, '[class="nmx-nav-link nmx-nav-link-primary"]', 2, 'Insurance menu')
    //click on get insurance 
    await click(page, '[id="insurance-hero-cta-primary"]', 'Get Insurance link')
    //click on buy home insurance
    await click(page, '[id="fafa-interactive-flow-goal-card-buy-a-home"]', 'Buy Home Insurance link')
    await page.waitForTimeout(3000)//wait for 3 seconds
    //click on next button
    await click(page, '[class="sc-gTgzoy bZZDJT nmx-button sc-ekbpNA fmQAtJ"]', 'Next button')
    await page.waitForTimeout(3000)//wait for 3 seconds
    //enter age
    await type(page, '[name="age"]', '30', 'Age field')
    //enter zip code
    await type(page, '[id="in-page-lead-form-zip-input"]', '10454', 'Zip Code field')
    //select household income
    await selectByText(page, '[name="incomeRange"]', '$75,001 - $100,000', 'Household Income dropdown')
    await page.waitForTimeout(2000)//wait for 2 seconds
    //click on next button
    await click(page, '[id="in-page-lead-step-2-next-button"]','Next button')
    //enter first name
    await type(page, '[id="in-page-lead-form-first-name-input"]', 'John', 'First Name field')
    //enter last name
    await type(page, '[id="in-page-lead-form-last-name-input"]', 'Doe', 'Last Name field')
    await page.waitForTimeout(2000)//wait for 2 seconds
    //click on next button
    await click(page, '[id="in-page-lead-step-3-next-button"]', 'Next button')
    await page.waitForTimeout(2000)//wait for 2 seconds
    //enter phone number
    await type(page, '[id="in-page-lead-form-phone-input"]', '347-555-1234', 'Phone Number field')
    //enter email address
    await type(page, '[id="in-page-lead-form-email-input"]', 'john.doe@example.com', 'Email Address field')
    await page.waitForTimeout(4000)//wait for 4 seconds
    //click on submit button
    await page.waitForTimeout(4000)//wait for 4 seconds
    await clickByIndex(page, '[type="submit"]', 1, 'Submit button')
    //capture waiting longer than expected message
    let waitMessage = await page.locator('[class="sc-gKseQn iCNYCE"]').textContent()
    console.log('Wait Message: ' + waitMessage)
})//end of test