import { Given, When, Then } from 'cucumber';
import { LoginPage } from '../page/login.page';

let loginPage: LoginPage;

Given(/^User is on login page$/, async () => {
  await loginPage.navigateTo();
});

When(/^User enter username as "([^"]*)"$/, async (email: string) => {
  await loginPage.inputEmail(email);
});

When(/^User click button continue login$/, async () => {
  await loginPage.clickContinueButton();
});

When(/^User enter password as "([^"]*)"$/, async (password: string) => {
  await loginPage.inputEmail(password);
});

When(/^User click button login$/, async () => {
  await loginPage.clickLoginButton();
});

Then(/^User navigate to homepage$/, async () => {
  await loginPage.isHomePage();
});
