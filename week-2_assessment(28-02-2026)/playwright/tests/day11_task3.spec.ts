import {test} from "@playwright/test"

test("task2",async({page})=>{
    await page.goto("https://demoapps.qspiders.com/ui?scenario=1");
    await page.locator('//input[@id="name"]').fill("hello");
    await page.locator('//input[@id="email"]').fill("nimish@gmail.com");
    await page.locator('//input[@id="password"]').fill("hello57");
    await page.keyboard.press("Enter");
    await page.locator('//input[@id="email"]').fill("nimish@gmail.com");
    await page.locator('//input[@id="password"]').fill("hello57");
    await page.keyboard.press("Enter");
    await page.screenshot({path:"screenshot/task3.png"});
});