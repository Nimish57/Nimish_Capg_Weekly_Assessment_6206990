import { Page, expect } from "@playwright/test";

export default class AppointmentPage {
    private bookClinicVisitBtn = 'button:has-text("Book Clinic Visit")';

    constructor(private page: Page) {}

    async clickSecondDoctorAppointment() {
        await this.page.locator(this.bookClinicVisitBtn).nth(1).click();
    }

    async selectDateAfterTwoDays() {
        const targetDate = new Date();
        targetDate.setDate(targetDate.getDate() + 2);
        const day = targetDate.getDate();

        const dateLocator = this.page.locator(`text=${day}`).first();
        await expect(dateLocator).toBeVisible({ timeout: 10000 });
        await dateLocator.click();
    }

    async selectFirstAvailableTimeSlot() {
        const timeSlot = this.page.getByText(/\d{2}:\d{2}\s?(AM|PM)/).first();
        await expect(timeSlot).toBeVisible({ timeout: 10000 });
        await timeSlot.click();
    }

    async takeScreenshot() {
        await this.page.screenshot({ path: "screenshots/test1.png", fullPage: true });
    }
}
