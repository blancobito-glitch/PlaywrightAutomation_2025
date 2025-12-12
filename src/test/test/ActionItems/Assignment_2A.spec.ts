import { Page, test } from '@playwright/test';
import { click, clickByIndex, mouseHover, mouseHoverByIndex, scrollByPixel, type } from '../Reusable_Actions';


test('USPS Assignment 2A @ai', async ({page}) => {
    //navigate to usps
    await page.goto('https://www.usps.com')
    //hover to Shop module
    await mouseHoverByIndex(page, '[class="menuitem"]', 2, 'Shop Menu')
    //click on stamps
    await clickByIndex(page, '[class="tool-stamps"]', 1, 'Stamps')
    //click on checkbox for stamps under category
    await click(page, '[for="checkbox-type-Category-Stamps-104"]', 'Stamps category checkbox')
    //click on additional postage under product type
    await clickByIndex(page, '[class="checkbox-label"]', 4, 'Additional Postage product type checkbox')
    //scroll by 400 pixels
    await scrollByPixel(page, 400, 'down')
    //click on first stamp 
    await clickByIndex(page, '[class="result-product-img"]', 0, 'First Stamp')
    //click on add to cart
    await click(page, '[id="addToCartVisBtn122104"]', 'Add to Cart button')
    //click on view cart
    await click(page, '[class="button--primary button--white"]', 'View Cart button')
    //add 2 quantity
    await type(page, '[class="col-8 form-control"]', '2', 'Quantity field')
    //click on update button
    await click(page, '[id="atg_store_update"]', 'Update button')
    //capture the stamp information under the item section and print it 
    let stampInfo = await page.locator('[class="item-wrapper"]').textContent()
    console.log('Stamp Information: ' + stampInfo)
})//end of test