[Playwright](https://playwright.dev/) is a framework for Web Testing and Automation. It allows testing Chromium, Firefox
and WebKit with a single API.

Cross-browser. Playwright supports all modern rendering engines including Chromium, WebKit, and Firefox.

Cross-platform. Test on Windows, Linux, and macOS, locally or on CI, headless or headed.

## Getting started [Prerequisites]

## Register for a free trial version of Microsoft Dynamics 365 Sales Account

Dynamics 365 Sales: https://dynamics.microsoft.com/en-us/sales/overview/

The project is cloned from [__playwright-skeleton
repo__](https://github.com/KainosSoftwareLtd/fanda-playwright-skeleton.git) on GitHub. Please follow the instructions 
below on how to setup and run the tests


### Set up

* Add .env for environment variables and credentials as below

```
 URL = [Insert environment URL here]
 APP_ID = [Insert environment App_ID here]
 ID = [Insert environment ID here]
 USER_NAME = [Insert account username here]
 PASSWORD = [Insert account password here]

```
***

> Run

* npm install

### Run tests

> Run in chrome

* npm run test:ui:chrome

### Run tests with reports

> Run with reports: *please note:* this defaults to chromium browser

* npm run test:with:report