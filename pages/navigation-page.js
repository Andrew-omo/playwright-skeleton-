const CommonAction = require('../utils/common-action')


class NavigationPage extends CommonAction {

  async clickOnLabelByName(tab) {
    await this.clickOn(`text=${tab}`)
    await this.waitForPageToLoad()
    await this.waitFor(2000)
  }

  async verifyPage(urlSubString) {
    await this.pageUrlContainString(urlSubString)
  }

}

module.exports = { NavigationPage }