import {By, until, Key} from "selenium-webdriver";

export default function (driver) {
    const pageobjects = {
        btnEnter: By.css('nav#navbar li:nth-child(5) > ul > li:nth-child(1) > a'),
    };

    return {
        url: "https://routesetters.ru",
        waitUntilVisible: function() {
            return driver.wait(until.elementLocated(pageobjects.btnEnter));
        },
        navigate: function() {
            driver.navigate().to(this.url);
            return this.waitUntilVisible();
        },
        enterToAccount: function () {
            return driver.findElement(pageobjects.btnEnter).click();
        }
    };
}