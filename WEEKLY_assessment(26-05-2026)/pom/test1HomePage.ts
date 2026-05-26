import { BrowserContext, Page } from "@playwright/test";

export default class HomePage {
    private consultationTab = '//div[@class="product-tab__title"]';
    private searchBox = '//input[@class="c-omni-searchbox c-omni-searchbox--large"]';

    constructor(private page: Page, private context: BrowserContext) {}

    async clickConsultationTab() {
        await this.page.locator(this.consultationTab).first().click();
    }
    async searchSpecialization(specialization: string) {
        const box = this.page.locator(this.searchBox).nth(1);
        await box.click();
        await box.fill(specialization);
        await this.page.waitForTimeout(2000);
        await box.press("ArrowDown");
        await box.press("Enter");
        await this.page.waitForLoadState("networkidle");
    }
}
