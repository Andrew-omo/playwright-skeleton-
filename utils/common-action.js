const {expect} = require('@playwright/test')
const fs = require('fs')
const request = require('request')

class CommonAction {
    async openUrl(url) {
        return page.goto(url)
    }

    async waitFor(timeoutInMilliseconds) {
        return page.waitForTimeout(timeoutInMilliseconds)
    }

    async waitForPageToLoad() {
        return await page.waitForLoadState('networkidle')
    }

    async pageUrlContainString(urlSubString) {
        let url = await page.url()
        return expect(url).toContain(urlSubString)
    }

    async pressKey(key) {
        return await page.keyboard.press(key)
    }

    async clickOn(element) {
        return page.locator(element).click()
    }

    async sendKeys(element, text) {
        return page.fill(element, text)
    }

}

module.exports = CommonAction