import { Page } from "@playwright/test";

export default class HomePage {
    constructor(private page: Page) {}

    async navigateToWebsite() {
        await this.page.goto("https://www.practo.com/");
    }

    async login(email: string, password: string) {
        await this.page.getByRole("link", { name: "Login / Signup" }).click();
        await this.page.getByRole("textbox", { name: "Mobile Number / Email ID" }).fill(email);
        await this.page.getByRole("textbox", { name: "Password" }).fill(password);
        await this.page.getByRole("button", { name: "Login" }).click();
    }
}
