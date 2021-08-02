import {By, until} from "selenium-webdriver";

export default function (driver) {
    const pageobjects = {
        insideAccountText: By.xpath("//h4[contains(text(),'Личный кабинет')]"),
        navBarElementAuth: By.css("#navbar > ul > li:nth-child(5)")
    };

    return {
        waitUntil: function() {
            let by = pageobjects.insideAccountText;
            return driver.wait(until.elementLocated(by, 10));
        },
        getText: function() {
            return driver.findElement(pageobjects.insideAccountText).getText();
        },
        moveMouse: function() {
            const actions = driver.actions({bridge: true}); 
            var elem = driver.findElement(pageobjects.navBarElementAuth);
            return actions.move({duration:5000,origin:elem,x:0,y:0}).perform();
        },
    };
}
