import { Page, test } from '@playwright/test';


test('Weightwatchers Assignment 1', async ({page}) => {
    //declare arraylist for zip codes
    let zipCodes = new Array<string>()
    zipCodes.push('10001')
    zipCodes.push('10006')


    for(let i=0; i<zipCodes.length; i++){
        //navigate to weightwatchers
        await page.goto('https://www.weightwatchers.com/us/')
        //click on find a workshop link
        await page.locator('[icon="location"]').click()
        //enter zip code
        await page.locator('[title="location-search"]').fill(zipCodes[i])
        //click on search button
        await page.locator('[id="location-search-cta"]').click()
        //scroll down to studio address
        await page.locator('[id="location-2001880"]').scrollIntoViewIfNeeded()
        //store the address of the studios in an array list and print it
        let studioAddresses = await page.locator('[class="location__address"]').allTextContents()
        console.log('Studio Addresses for zip code ' + zipCodes[i] + ': ', studioAddresses)
        // Capture the studio address and print it
        const studioAddress = await page.locator('[id="location-2002727"]').textContent();
        console.log('Full Address: ' + studioAddress);
        // Click on the first studio link
        await page.locator('[id="location-2001880"]').click();
       // Scroll down to schedule section
        await page.locator('[class="scheduleContainerMobile-ps6Rm"]').scrollIntoViewIfNeeded();
        // Capture and print the full table of the schedule
        const fullSchedule = await page.locator('[class="scheduleContainerMobile-ps6Rm"]').textContent();
        console.log('Full Schedule: ' + fullSchedule);
        // Go back to the previous page
        await page.goBack();
    }//end of for loop
})//end of test