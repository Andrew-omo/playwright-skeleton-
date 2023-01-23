const CommonAction = require('../utils/common-action')
const USER_ACCOUNT = 'Account manager for Auto Testing'
require('dotenv').config()


const USER_NAME_INPUT = '#i0116'
const NEXT_BUTTON = '#idSIButton9'
const BACK_BUTTON = '#idBtn_Back'
const PASSWORD_INPUT = '#i0118'


class LoginPage extends CommonAction {

  async loginToMsDm() {
    let url = `${process.env.URL}/main.aspx?appid=${process.env.APP_ID}&pagetype=dashboard&id=${process.env.ID}&type=system&_canOverride=true`
    await this.openUrl(url)
    await this.sendKeys(USER_NAME_INPUT, process.env.USER_NAME)
    await this.pressKey('Enter')
    await this.waitFor(1000)
    await this.sendKeys(PASSWORD_INPUT, process.env.PASSWORD)
    await this.pressKey('Enter')
    await this.clickOn(NEXT_BUTTON)
  }

  async signOut(signOutLabel) {
    await this.waitFor(3000)
    await this.clickOn(`button[aria-label='${USER_ACCOUNT}']`)
    await this.waitForPageToLoad()
    await this.clickOn(`button[aria-label='${signOutLabel}']`)
    await this.waitForPageToLoad()
  }

}

module.exports = { LoginPage }
