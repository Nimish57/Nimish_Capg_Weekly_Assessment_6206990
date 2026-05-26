
import { test } from "@playwright/test";
import HomePage from "../pom/test2HomePage";
import ConsultationPage from "../pom/test2ConsultationPage";
import SymptomPage from "../pom/test2SymptomPage";
import testData from "../data/data.json";
test("Practo Video Consultation Booking", async ({ page }) => {
    const homePage = new HomePage(page);
    const consultationPage = new ConsultationPage(page);
    const symptomPage = new SymptomPage(page);
    await homePage.navigateToWebsite();
    await homePage.login(testData.email, testData.password);
    await consultationPage.openVideoConsultation();
    await symptomPage.searchSymptoms(testData.symptom);
    await symptomPage.continueBooking();
    await page.waitForLoadState("networkidle");
    await page.screenshot({ path: "screenshots/test2.png", fullPage: true });
});
