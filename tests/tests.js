import Login from '../pageobjects/login';
import Helper from '../pageobjects/helper';
import {assert} from 'chai';
import {argv} from 'yargs';
import getDriver from '../driverutil/driverutil';

{
    describe, before, after, it
}

describe('Login my account', function () {
    let driver;
    let login;
    let helper;
    this.timeout(50000);

    before(async () => {
        driver = await getDriver(argv.browser);
        login = new Login(driver);
        helper = new Helper(driver);
    });

    it('Login test', async function () {
        await login.navigate();
        await helper.moveMouse();
        await login.enterToAccount();
    
    });

    after(() => driver.quit());
});

