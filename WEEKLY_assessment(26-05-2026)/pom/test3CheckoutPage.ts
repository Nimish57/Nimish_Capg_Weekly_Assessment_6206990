import { Page } from "@playwright/test";

export default class CheckoutPage {
    constructor(private page: Page) {}

    async enterAge(aged: string) {
        await this.page.getByRole("spinbutton").fill(aged);
    }

    async continueGenderSelection() {
        await this.page.locator(".c-radio__ctrl").first().click();
        await this.page.getByRole("button", { name: "Continue" }).click();
        await this.page.waitForLoadState("networkidle");
    }

    async enterEmail(email: string) {
        await this.page.getByRole("textbox", { name: "you@practo.com" }).fill(email);
        await this.page.getByRole("button", { name: "Continue" }).click();
        await this.page.waitForLoadState("networkidle");
    }

    async selectLocation(location: string) {
        const locationBox = this.page.locator('input[placeholder="Search any town/city..."]');
        await locationBox.waitFor({ state: "visible", timeout: 60000 });
        await locationBox.click();
        await locationBox.fill(location);
        await this.page.waitForTimeout(2000);
        await this.page.locator(`text=${location}`).first().click();
    }
}
