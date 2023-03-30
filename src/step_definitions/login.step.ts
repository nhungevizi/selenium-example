import { Given, When, Then } from '@cucumber/cucumber';
import { LoginPage } from '../page/login.page';

let loginPage= new LoginPage();

Given(/^User is on login page$/, async () => {
    loginPage = new LoginPage();
    await loginPage.navigateTo();
  });

When(/^User enter username as "([^"]*)"$/, async (email: string) => {
  await loginPage.inputEmail(email);
});

When(/^User click button continue login$/, {timeout: 10000}, async () => {
  await loginPage.clickContinueButton();
});

When(/^User enter password as "([^"]*)"$/, async (password: string) => {
  await loginPage.inputPassword(password);
});

When(/^User click button login$/, async () => {
  await loginPage.clickLoginButton();
});

Then(/^User navigate to homepage$/, async () => {
  await loginPage.isHomePage();
});
