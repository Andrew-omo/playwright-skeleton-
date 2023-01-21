const {expect} = require('@playwright/test')
const fs = require('fs')
const request = require('request')

class CommonAction {
    async openUrl(url) {
        return page.goto(url)
    }

    async openUrl_extendedTimeout(url, timeout) {
        return page.goto(url, {timeout: timeout})
    }

    async waitFor(timeoutInMilliseconds) {
        return page.waitForTimeout(timeoutInMilliseconds)
    }

    async waitForElementToBeVisible(element) {
        return page.waitForSelector(element, {
            state: 'visible'
        })
    }

    async waitForPageToLoad() {
        return await page.waitForLoadState('networkidle')
    }

    async pageUrlContainString(urlSubString) {
        let url = await page.url()
        return expect(url).toContain(urlSubString)
    }

    async waitForUrl(urlSubString) {
        return page.waitForURL(`**/${urlSubString}`)
    }

    async verifyPageTitle(pageTitle) {
        let url = await page.title()
        return expect(url).toEqual(pageTitle)
    }

    async verifyPageTitleHas(pageTitleSubString) {
        let url = await page.title()
        return expect(url).toContain(pageTitleSubString)
    }

    async pressKey(key) {
        return await page.keyboard.press(key)
    }

    async clickOn(element) {
        return page.locator(element).click()
    }

    async doubleClickOn(element) {
        return await page.dblclick(element)
    }

    async forceClick(element) {
        return page.locator(element).click({force: true})
    }

    async getFromMultipleWithPosition(element, position) {
        return page.locator(element).nth(position)
    }

    async clickFromMultipleWithPosition(element, position) {
        return page.locator(element).nth(position).click()
    }

    async elementContainText(element, text) {
        await page.waitForSelector(element)
        return expect(page.locator(element)).toContainText(text)
    }

    async getElementText(element) {
        return page.locator(element).textContent()
    }

    async shouldIncludeText(element, expectedText) {
        await page.waitForSelector(element)
        return expect(page.locator(element)).toContainText(expectedText)
    }

    async executeCommand(command) {
        return require('child_process').execSync(command)
    }

    async elementShouldNotExist(element) {
        return expect(page.locator(element)).not.toBeVisible()
    }

    async elementShouldExist(element) {
        const locator = await page.locator(element)
        return expect(locator).toBeVisible()
    }

    async getElementAttribute(element, attribute) {
        return page.getAttribute(element, attribute)
    }

    async dragAndDrop(source, target) {
        await this.waitForElementToBeVisible(source)
        return page.dragAndDrop(source, target)
    }

    async sendKeys(element, text) {
        return page.fill(element, text)
    }

    async typeWithKeyboard(element, text) {
        return new Promise(async (resolve, reject) => {
            try {
                await this.clickOn(element)
                const splitText = text.split('')
                for (let i = 0; i < splitText.length; i++) {
                    await page.keyboard.press(splitText[i])
                }
                resolve(true)
            } catch (error) {
                reject(error)
            }
        })
    }

    async sendKeys_forced(element, text) {
        return page.fill(element, text, {force: true})
    }

    async selectByText(element, text) {
        return page.locator(`${element}:has-text("${text}")`).click()
    }

    async elementCount(element, expectedCount) {
        let count = await page.locator(element).count()
        return expect(count).toEqual(expectedCount)
    }

    async elementShouldBeDisabled(element) {
        return expect(page.locator(element)).toBeDisabled()
    }

    async elementShouldBeEnabled(element) {
        return expect(page.locator(element)).toBeEnabled()
    }

    async clear(element) {
        return page.fill(element, '')
    }

    async tab(element) {
        await page.click(element)
        return page.keyboard.press('Tab')
    }

    async inputValueShouldHaveText(element, value) {
        let text = await page.inputValue(element)
        return expect(text).toContain(value)
    }

    async logMessageInConsole(message) {
        console.log(message)
    }
}

module.exports = CommonAction