import { test, expect } from "@playwright/test";
import LoginPage from "../pom/test1LoginPage";
import SurgeryPage from "../pom/test5SurgeryPage";
import AppointmentPage from "../pom/test5AppointmentPage";
import testData from "../data/data.json";
const PATIENT = {
  name: "Hemlo",
  phone: "9999999999",
};
test.describe("Practo - Surgery Booking Flow", () => {
  let loginPage: LoginPage;
  let surgeryPage: SurgeryPage;
  let appointmentPage: AppointmentPage;
  test.beforeEach(async ({ page }) => {
    loginPage = new LoginPage(page);
    surgeryPage = new SurgeryPage(page);
    appointmentPage = new AppointmentPage(page);
  });
  test("should successfully book a surgery appointment", async ({ page }) => {
    await test.step("Navigate to website", async () => {
      await loginPage.navigateToWebsite();
    });
    await test.step("Login with valid credentials", async () => {
      await loginPage.login(testData.username, testData.password);
    });
    await test.step("Open surgeries page", async () => {
      await surgeryPage.openSurgeriesPage();
    });
    await test.step("Select surgery options", async () => {
      await surgeryPage.selectSurgeryOptions();
    });
    await test.step("Fill patient details", async () => {
      await appointmentPage.fillPatientDetails(PATIENT.name, PATIENT.phone);
    });
    await test.step("Confirm and book appointment", async () => {
      await appointmentPage.clickBookAppointment();
    });
    await page.waitForLoadState("networkidle");
    await page.screenshot({ path: "screenshots/test5.png"});
  });
});