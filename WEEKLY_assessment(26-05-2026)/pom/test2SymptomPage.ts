import { Page } from "@playwright/test";

export default class SymptomPage {
    constructor(private page: Page) {}

    async searchSymptoms(symptom: string) {
        await this.page.getByRole("textbox", { name: "Tell us your symptom or" }).fill(symptom);
        await this.page.getByText("General physician ₹").click();
    }

    async continueBooking() {
        await this.page.getByRole("button", { name: "Continue" }).click();
    }
}
