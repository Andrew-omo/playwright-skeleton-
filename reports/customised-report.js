let reporter = require('cucumber-html-reporter')
const envPlatform = process.platform

let options = {
    theme: 'bootstrap',
    jsonFile: 'reports/report.json',
    output: 'reports/customised_cucumber_report.html',
    screenshotsDirectory: 'reports/',
    storeScreenshots: true,
    reportSuiteAsScenarios: true,
    scenarioTimestamp: true,
    launchReport: true,
    metadata: {
        "Browser": "Chrome",
        "Platform": envPlatform,
        "Parallel": "Scenarios",
        "Executed": "Remote"
    }
};

reporter.generate(options);