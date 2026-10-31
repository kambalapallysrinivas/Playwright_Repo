import { Given,Then,When } from "@cucumber/cucumber";
import { TestContext } from "../support/testcontext";
import { expect } from "@playwright/test";
import { LoginPage } from "../pages/loginpage";

Given('I open the browser and navigate to the admin login URL {string}', async function (this:TestContext,url:string) {
   await this.page.goto(url)
   this.page.waitForTimeout(5000)
});
Then('I should see the admin login page', async function (this:TestContext) {
    let actTitle=await this.loginpage.isDisplayedAdminLoginPage()
    console.log(actTitle)
   expect.soft(actTitle).toEqual("Login Page")
   
});

When('I enter the username {string}', async function (this:TestContext,user:string) {
await this.loginpage.enterUserName(user)
});

When('I enter the password {string}',async function (this:TestContext,pwd:string) {
 await this.loginpage.enterPassword(pwd)
});

When('I click the Submit button', async function (this:TestContext) {
 await this.loginpage.clickOnLoginBtn()
});

Then('I should see the admin dashboard', async function (this:TestContext) {
 expect(this.loginpage.isDisplayedstoreSetupLink()).toBeTruthy()
 
});

When('I click the Logout button', function (this:TestContext) {
  this.loginpage.clickOnLoginOut()
  this.page.waitForTimeout(5000)
});