const CommonAction = require('../utils/common-action')
const USER_ACCOUNT = 'Account manager for Auto Testing'


class LogoutPage extends CommonAction {

  async signOut(signOutLabel) {
    await this.waitFor(3000)
    await this.forceClick(`button[aria-label='${USER_ACCOUNT}']`)
    await this.waitForPageToLoad()
    await this.clickOn(`button[aria-label='${signOutLabel}']`)
    await this.waitForPageToLoad()
  }

}

module.exports = { LogoutPage }