import { test } from "@playwright/test";

test("xml selector", async ({ page }) => {

    await page.goto("https://www.amazon.com/");

    await page.locator('#twotabsearchtextbox').fill("Shoes");
    await page.locator('#nav-search-submit-button').click();
    console.log(await page.locator('//a/h2/span').first().textContent());
    console.log(await page.locator('//span[@class="a-price"]/span').first().textContent());
    await page.screenshot({path:"screenshot/task1.png"});
});