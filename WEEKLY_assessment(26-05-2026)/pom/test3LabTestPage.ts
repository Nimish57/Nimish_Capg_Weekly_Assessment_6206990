import { Page } from "@playwright/test";

export default class LabTestPage {
    constructor(private page: Page) {}

    async selectCity(city: string) {
        await this.page.getByLabel("Lab Tests").click();
        await this.page.waitForLoadState("domcontentloaded");

        const cityBox = this.page.getByRole("textbox", { name: "Search for city" });
        await cityBox.click();
        await cityBox.fill(city);
        await cityBox.press("Enter");
        await this.page.waitForTimeout(2000);
        await this.page.getByText(city).nth(1).click();
    }

    async bookLabTest() {
        await this.page.waitForLoadState("domcontentloaded");

        const bookNowBtn = this.page.getByRole("link", { name: "Book Now" }).nth(1);
        await bookNowBtn.scrollIntoViewIfNeeded();

        await Promise.all([
            this.page.waitForURL(/user-details/, { timeout: 60000 }),
            bookNowBtn.click()
        ]);
    }
}
