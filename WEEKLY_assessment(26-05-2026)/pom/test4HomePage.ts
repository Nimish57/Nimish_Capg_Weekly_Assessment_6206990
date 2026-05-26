import { Page } from "@playwright/test";

export default class HomePage {
  constructor(private page: Page) {}

  async selectDoctorCategory() {
    await this.page.locator(".card.card--280 > .card-link").first().click();
  }

  async openDoctorProfile(doctorName: string): Promise<Page> {
    const newTab = this.page.waitForEvent("popup");
    await this.page.getByRole("link", { name: doctorName }).click();
    return newTab;
  }
}