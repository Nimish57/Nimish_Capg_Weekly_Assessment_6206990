
import { test } from "@playwright/test";
import LoginPage from "../pom/test4LoginPage";
import HomePage from "../pom/test4HomePage";
import AppointmentPage from "../pom/test4AppointmentPage";
import data from "../data/test4data.json";

test("book a doctor appointment on Practo", async ({ page }) => {
  const login = new LoginPage(page);
  const home = new HomePage(page);

  await login.goto(data.url);

  await login.openLoginDialog();

  await login.login(data.mobile, data.password);

  await page.waitForLoadState("networkidle");

  await home.selectDoctorCategory();

  const doctorPage = await home.openDoctorProfile(data.doctorName);

  const appointment = new AppointmentPage(doctorPage);

  await appointment.selectDate(data.appointmentDate);

  await appointment.selectTime(data.appointmentTime);

  await appointment.takeScreenshot();
});