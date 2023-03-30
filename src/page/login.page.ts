import { By, until, Builder } from 'selenium-webdriver';
import { driver } from '../support/world'

export class LoginPage {
  private url = "https://id.atlassian.com/login";
  private emailInput = '#username';
  private continueButton = '#login-submit';
  private passwordInput = '#password';

  constructor() {}

  async navigateTo() {
    await driver.get(this.url);
  }

  async inputEmail(email: string) {
    await driver.findElement(By.css(this.emailInput)).sendKeys(email);
  }

  async clickContinueButton() {
    await driver.findElement(By.css(this.continueButton)).click();
  } 

  async inputPassword(password: string) {
    const passwordElement = await driver.findElement(By.css(this.passwordInput));
    await driver.wait(until.elementIsVisible(passwordElement), 10000); // Wait for password textbox is displayed
    await passwordElement.sendKeys(password);
  }

  async clickLoginButton() {
    await driver.findElement(By.css(this.continueButton)).click();
  }

  async isHomePage() {
    await driver.sleep(2000); // Wait for homepage is displayed
  }
}
