require(`chromedriver`);
const {Builder, By, until } = require(`selenium-webdriver`);
let chai = require(`chai`);
const expect = chai.expect;

const invalidCredentials = require(`../logIn TestCases/invalidCredentials.spec`);
const invalidPassword = require(`../logIn TestCases/invalidPassword.spec`);
const invalidUsername = require(`../logIn TestCases/invalidUsername.spec`);
const driverSleep = require(`../Common/timeOut.spec`);


describe(`These are tests cases for login functionality`, async function () {
    this.timeout(300000);

    driver = new Builder()
        .forBrowser(`chrome`)
        .build();

    before(async function () {
        await driver.get(`https://tst-pharm-adjuat.tredium.com/`);
         await driver.manage().window().maximize();
    });

    afterEach(async function () {
        await driverSleep();
        await driver.navigate().refresh();
    });

    after(async function (){
        await driverSleep();
        await driver.quit();
    });

    it(`logIn with Invalid Username`, async function () {

        let getInvUsername = await invalidUsername(driver, By, until);
        expect(getInvUsername).to.be.true;
    });
    it(`logIn with Invalid Password`, async function () {
        let getInvPassword = await invalidPassword(driver, By, until) 
            expect(getInvPassword).to.be.true;       
    });
    it.only(`logIn with Invalid Credentials`, async function () {
        let getInvalidCredentials = await invalidCredentials(driver, By, until);
        expect(getInvalidCredentials).to.be.true;
    }); 
});
