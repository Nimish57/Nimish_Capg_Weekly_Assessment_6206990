import { Page } from "@playwright/test";

export default class SurgeryPage {
  constructor(private page: Page) {}
  private surgeriesLink ='role=link[name="Surgeries"]';
  private surgeryText ='text=Surgery';
  private firstRadio ='.table-cell.align-middle.w-1\\/6.cursor-pointer > .flex > .Radio-module_radioLabel__S0c6o > .Radio-module_radioCheckmark__BpOn-';
  private arrowDown ='role=img[name="Arrow Down"]';
  private secondRadio ='div:nth-child(2) > .table-cell > .flex > .Radio-module_radioLabel__S0c6o > .Radio-module_radioCheckmark__BpOn-';
  async openSurgeriesPage() {
    await this.page.getByRole("link", {name: "Surgeries",description: "surgery",exact: true,}).click();
    await this.page.getByText("Surgery", {exact: true,}).click();
  }
  async selectSurgeryOptions() {
    await this.page.locator(this.firstRadio).first().click();
    await this.page.getByRole("img", { name: "Arrow Down" }).nth(1).click();
    await this.page.locator(this.secondRadio).first().click();
  }
}