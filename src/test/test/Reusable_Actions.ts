import { Page } from "@playwright/test";

//export means its reusable outside of this file

//method to click on any unique element
 export async function click(page:Page, locator:string, elementName:string) {
    console.log('Clicking on: ' + elementName);
    await page.locator(locator).click();
}//end of click method

//method to click on any element by index
export async function clickByIndex(page:Page, locator:string, index:number, elementName:string) {
    console.log('Clicking on: ' + elementName);
    await page.locator(locator).nth(index).click();
}//end of click by index method

//method to type on any unique element
export async function type(page:Page, locator:string, userValue:string, elementName:string) {
    console.log('Typing on: ' + elementName);
    let element = page.locator(locator);
    await element.fill(''); 
    await element.fill(userValue);
}//end of type method

//method to type on any element by index
export async function typeByIndex(page:Page, locator:string, index:number, userValue:string, elementName:string) {
    console.log('Typing on: ' + elementName);
    let element = page.locator(locator).nth(index);
    await element.clear();
    await element.fill(userValue);
}//end of type by index method

//method to get text from any unique element
export async function getText(page:Page, locator:string, elementName:string) {
    console.log('Getting text from: ' + elementName);
    let result = await page.locator(locator).textContent();
    return result;
}//end of get text method

//method to get text from any element by index
export async function getTextByIndex(page:Page, locator:string, index:number, elementName:string) {
    console.log('Getting text from: ' + elementName);
    let result = await page.locator(locator).nth(index).textContent();
    return result;
}//end of get text by index method

//method for selecting from a dropdown by visible text
export async function selectByText(page:Page, locator:string, visibleText:string, elementName:string) {
    console.log('Selecting from dropdown: ' + elementName);
    await page.locator(locator).selectOption({ label: visibleText });
}//end of select by text method

//method for mouse hover on any unique element
export async function mouseHover(page:Page, locator:string, elementName:string) {
    console.log('Hovering on: ' + elementName);
    await page.locator(locator).hover();
}//end of mouse hover method

//method for scrolling by pixels
export async function scrollByPixel(page:Page, pixelNumber:number, direction:string) {
    console.log('Scrolling by pixels: ' + pixelNumber);
    if (direction === 'down') {
        await page.evaluate((y) => { window.scrollBy(0, y); }, pixelNumber);
    } else if (direction === 'up') {
        await page.evaluate((y) => { window.scrollBy(0, -y); }, pixelNumber);
    }
}//end of scroll by pixel method

//method for mouse hover on any element by index
export async function mouseHoverByIndex(page:Page, locator:string, index:number, elementName:string) {
    console.log('Hovering on: ' + elementName);
    await page.locator(locator).nth(index).hover();
}//end of mouse hover by index method