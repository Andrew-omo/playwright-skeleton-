const { Given, When, Then } = require('@cucumber/cucumber')
const { NavigationPage } = require('../pages/navigation-page')
const navigationPage = new NavigationPage()


//WHENs
When(/^I navigate to the (.*) page$/, async (tab) => {
  await navigationPage.clickOnLabelByName(tab)

})

//THENs
Then(/^I should be in the (.*) page$/, async (page) => {
  await navigationPage.verifyPage(page)

})