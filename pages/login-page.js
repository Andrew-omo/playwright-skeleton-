const CommonAction = require('../utils/common-action')
require('dotenv').config()


const USER_NAME_INPUT = '#i0116'
const NEXT_BUTTON = '#idSIButton9'
const BACK_BUTTON = '#idBtn_Back'
const PASSWORD_INPUT = '#i0118'


class LoginPage extends CommonAction {

  async loginToCm() {
    let url = `${process.env.URL}/main.aspx?appid=${process.env.APP_ID}&pagetype=dashboard&id=${process.env.ID}&type=system&_canOverride=true`
    await this.openUrl(url)
    await this.sendKeys(USER_NAME_INPUT, process.env.USER_NAME)
    await this.pressKey('Enter')
    await this.waitFor(1000)
    await this.sendKeys(PASSWORD_INPUT, process.env.PASSWORD)
    await this.pressKey('Enter')
    await this.clickOn(NEXT_BUTTON)
  }

  async clickOnLabelByName(tab) {
    await this.clickOn(`text=${tab}`)
    await this.waitForPageToLoad()
    await this.waitFor(2000)
  }

  async verifyPage(urlSubString) {
    await this.pageUrlContainString(urlSubString)
  }
}

module.exports = { LoginPage }
