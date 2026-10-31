import{Page,Locator} from '@playwright/test'
export class LoginPage{
page:Page
username:Locator
password:Locator
loginButton:Locator
storeSetup:Locator
logOut:Locator

constructor(page:Page){
    this.page=page
    this.username=this.page.locator("//input[@name='loginRequestBean.userId']")
    this.password=this.page.locator("//input[@name='loginRequestBean.password']")
    this.loginButton=this.page.locator("//input[@name='login']")
    this.storeSetup=this.page.frameLocator("#topFrame").getByRole('link',{name:'Store Setup',exact:true})
     this.logOut=this.page.frameLocator("#topFrame").getByRole('link',{name:'Logout',exact:true})

}
async enterUserName(user:string):Promise<void>{
    await this.username.fill(user)
}
async enterPassword(pwd:string):Promise<void>{
    await this.password.fill(pwd)
}
async clickOnLoginBtn():Promise<void>{
    await this.loginButton.click()
}
async isDisplayedAdminLoginPage(): Promise<string>{
return await this.page.title()
}
async isDisplayedstoreSetupLink(): Promise<boolean>{
return await this.storeSetup.isVisible()
}
async clickOnLoginOut(): Promise<void>{
 await this.logOut.click()
}
}