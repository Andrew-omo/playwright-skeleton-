const { Given, When, Then, defineStep } = require('@cucumber/cucumber')
const { LoginPage } = require('../pages/login-page')
const loginPage = new LoginPage()

//GIVENs
Given(/^I am able to login to cm$/, async () => {
  await loginPage.loginToCm()
})

//WHENs
When(/^I navigate to the (.*) page$/, async (tab) => {
  await loginPage.clickOnLabelByName(tab)

})

//THENs
Then(/^I should be in the (.*) page$/, async (page) => {
  await loginPage.verifyPage(page)

})
