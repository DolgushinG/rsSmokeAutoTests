import "chromedriver";
import "geckodriver";
import "iedriver";
import "edgedriver";
import "operadriver";
import {Builder} from "selenium-webdriver";
const chrome = require('selenium-webdriver/chrome');
export default function getDriver(browser) {
    const screen = {
        width: 1920,
        height: 1020
      };
    var browsername = browser == undefined ? 'chrome' : browser;
    switch (browsername.toUpperCase()) {
        case 'FIREFOX':
            return new Builder().forBrowser('firefox').build();
        case 'CHROME':
            return new Builder().forBrowser('chrome').setChromeOptions(new chrome.Options().headless().windowSize(screen)).build();
        case 'IE':
            return new Builder().forBrowser('internet explorer').build();
        case 'EDGE':
            return new Builder().forBrowser('MicrosoftEdge').build();
        case 'OPERA':
            return new Builder().forBrowser('opera').build();
        default:
            return new Builder().forBrowser('chrome').setChromeOptions(new chrome.Options().windowSize(screen)).build();
    }
};