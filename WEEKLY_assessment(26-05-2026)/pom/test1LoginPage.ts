import { Page } from "@playwright/test";

export default class LoginPage {
    private loginSignupBtn = '//a[@class="btn-border nav-login nav-interact "]';
    private usernameInput = '//input[@id="username"]';
    private passwordInput = '//input[@id="password"]';
    private loginBtn = '//button[@id="login"]';
    constructor(private page: Page) {}
    async navigateToWebsite() {
        await this.page.goto("https://www.practo.com/");
    }
    async login(username: string, password: string) {
        await this.page.locator(this.loginSignupBtn).click();
        await this.page.locator(this.usernameInput).fill(username);
        await this.page.locator(this.passwordInput).fill(password);
        await this.page.locator(this.loginBtn).click();
    }
}
