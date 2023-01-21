const playwright = require('playwright')
const { Before, After, BeforeAll, AfterAll, Status, setDefaultTimeout } = require('@cucumber/cucumber')
setDefaultTimeout(60 * 1000)
const options = {
  headless: false,
  slowMo: 100,
  args: [
    '--disable-setuid-sandbox',
    '--disable-infobars',
    '--start-fullscreen',
    '--window-position=0,0',
    '--window-size=1920,1080',
    '--user-agent="Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/86.0.4240.198 Safari/537.36"'
  ]
}

BeforeAll(async () => {
  console.log('********************************************')
  console.log('***     RUNNING E2E ACCEPTANCE TESTS     ***')
  console.log('***           PLAYWRIGHT TEST            ***')
  console.log('********************************************')
  console.log('********************************************')
  console.log('************launch Browser******************')
  global.browser = await playwright['chromium'].launch(options)
})

AfterAll(async () => {
  console.log('Close Browser')
  await global.browser.close()
})

Before(async () => {
  console.log('Create new context and page')
  global.context = await global.browser.newContext()
  global.page = await global.browser.newPage()
})

After(async () => {
  console.log('Close new context and page')
  await global.context.close()
  await global.page.close()
})

After(async function(scenario) {
  if (scenario.result.status === Status.FAILED) {
    let buffer = await global.page.screenshot({ path: `reports/${scenario.pickle.name}.png`, fullPage: true })
    this.attachScreenshot(buffer, 'image/png')
  }
})
