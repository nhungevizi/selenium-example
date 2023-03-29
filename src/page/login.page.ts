import { By, until, WebDriver } from 'selenium-webdriver';

export class LoginPage {
  private url = "https://id.atlassian.com/login";
  private emailInput = '#username';
  private continueButton = '#login-submit';
  private passwordInput = '#password';
  private loginButton = '//button[@data-testid="nav__profile-menu-trigger"]';
  private driver: WebDriver;

  constructor(driver: WebDriver) {
    this.driver = driver;
  }

  async navigateTo() {
    await this.driver.get(this.url);
  }

  async inputEmail(email: string) {
    await this.driver.findElement(By.css(this.emailInput)).sendKeys(email);
  }

  async clickContinueButton() {
    await this.driver.findElement(By.css(this.continueButton)).click();
  } 

  async inputPassword(password: string) {
    await this.driver.findElement(By.css(this.passwordInput)).sendKeys(password);
  }

  async clickLoginButton() {
    await this.driver.findElement(By.css(this.loginButton)).click();
  }

  async isHomePage() {
    await this.driver.sleep(2000);
  }
}
