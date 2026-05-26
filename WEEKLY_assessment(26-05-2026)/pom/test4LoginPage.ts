import { Page } from "@playwright/test";

export default class LoginPage {
  constructor(private page: Page) {}

  async goto(url: string) {
    await this.page.goto(url);
  }

  async openLoginDialog() {
    await this.page.getByRole("link", { name: "Login / Signup" }).click();
  }

  async login(mobile: string, password: string) {
    await this.page.getByRole("textbox", { name: "Mobile Number / Email ID" }).fill(mobile);
    await this.page.getByRole("textbox", { name: "Password" }).fill(password);
    await this.page.getByRole("button", { name: "Login" }).click();
  }
}