import { Page } from "@playwright/test";

export default class AppointmentPage {
  constructor(private page: Page) {}

  private nameInput = 'input[placeholder="Name"]';
  private mobileInput = 'input[placeholder="Mobile Number"]';
  private bookAppointmentBtn =
    'role=button[name="Book Appointment"]';
  async fillPatientDetails(name: string, mobile: string) {
    await this.page.getByRole("textbox", {
      name: "Name",
    }).fill(name);
    await this.page.getByRole("textbox", {
      name: "Mobile Number",
    }).fill(mobile);
  }
  async clickBookAppointment() {
    await this.page.getByRole("button", {
      name: "Book Appointment",
    }).click();
  }
}