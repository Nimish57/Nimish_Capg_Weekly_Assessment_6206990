import { Page } from "@playwright/test";

export default class ConsultationPage {
    constructor(private page: Page) {}

    async openVideoConsultation() {
        await this.page.getByRole("link", { name: "Video Consult", exact: true }).click();
        await this.page.locator("#FirstFold").getByRole("link", { name: "Consult Now" }).click();
    }
}
