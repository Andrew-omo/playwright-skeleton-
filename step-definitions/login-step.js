const { Given, When, Then, defineStep } = require('@cucumber/cucumber')
const { LoginPage } = require('../pages/login-page')
const loginPage = new LoginPage()

//GIVENs
Given(/^I am able to login to ms d365$/, async () => {
  await loginPage.loginToMsDm()
})

//THENs
Then(/^The user is able to (Sign out of this account)$/, async (signOutLabel) => {
  await loginPage.signOut(signOutLabel)

});
