const { Given, When, Then } = require('@cucumber/cucumber')
const { LogoutPage } = require('../pages/logout-page')
const logoutPage = new LogoutPage()

//THENs
Then(/^The user is able to (Sign out of this account)$/, async (signOutLabel) => {
  await logoutPage.signOut(signOutLabel)

});