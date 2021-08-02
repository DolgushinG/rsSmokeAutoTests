import {By, until} from "selenium-webdriver";

export default function (driver) {
    const pageobjects = {
        navBarElementAuth: By.css("#navbar > ul > li:nth-child(5)")
    };

    return {
        waitUntil: function() {
            return driver.wait(until.elementLocated(pageobjects.btnEnter), 5);
        },
        assertTextPresent: function() {
            return driver.findElement(pageobjects.btnEnter).getText();
        },
        moveMouse: function() {
            const actions = driver.actions({bridge: true}); 
            var elem = driver.findElement(pageobjects.navBarElementAuth);
            return actions.move({duration:5000,origin:elem,x:0,y:0}).perform();
        },
    };
}
