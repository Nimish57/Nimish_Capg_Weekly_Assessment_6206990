import { test } from "@playwright/test";
import LoginPage from "../pom/test1LoginPage";
import HomePage from "../pom/test1HomePage";
import AppointmentPage from "../pom/test1AppointmentPage";
import testData from "../data/data.json";

test("Practo Appointment Booking", async ({ page, context }) => {
    const loginPage = new LoginPage(page);
    const homePage = new HomePage(page, context);
    const appointmentPage = new AppointmentPage(page);
    await loginPage.navigateToWebsite();
    await loginPage.login(testData.username, testData.password);
    await homePage.clickConsultationTab();
    await homePage.searchSpecialization(testData.specialization);
    await appointmentPage.clickSecondDoctorAppointment();
    await appointmentPage.selectDateAfterTwoDays();
    await appointmentPage.selectFirstAvailableTimeSlot();
    await page.waitForLoadState("networkidle");
    await appointmentPage.takeScreenshot();
});
