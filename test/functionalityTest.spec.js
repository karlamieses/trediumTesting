require('chromedriver');
const { Builder, By, until, Key } = require(`selenium-webdriver`);
const fs = require(`fs`);
let chai = require(`chai`);
const expect = chai.expect;

const login = require(`../Common/logIn.spec`);
const ageModifier = require(`../modifiers/ageModifier.spec`);
const billModifier = require(`../modifiers/billModifier.spec`);
const copayModifier = require(`../modifiers/copayModifier.spec`);
const costModifier = require(`../modifiers/costModifier.spec`);
const dispLimitModifier = require(`../modifiers/dispLimitModifier.spec`);
const dispFeeModifier = require(`../modifiers/dispFeeModifier.spec`);
const refillModifier = require(`../modifiers/refillModifier.spec`);
const driverSleep = require(`../Common/timeOut.spec`);
const benefitList = require(`../PlanDesign/benefitList.spec`);
const carrier = require(`../PlanDesign/carrier.spec`);
const plan = require(`../PlanDesign/plan.spec`);
const allFields = require(`../allGroups/allFields.spec`);
/*
async function expectToBeTrue(func, expect, driver, By, until, Key, fs) {
    let result = await func(driver, By, until, Key, fs)

    expect(result).to.be.true;
}*/



describe(`General functions`, async function () {

    this.timeout(300000);

    driver = new Builder()
        .forBrowser(`chrome`)
        .build();

    console.log('klok wawawa', driver);


    before(async function () {

        await driver.get("https://tst-pharm-adjuat.tredium.com/");
        await driver.manage().window().maximize();
    });

    after(async function () {
        await driverSleep(5000);
        (await driver).quit();
    });

    it(`logIn`, async function () {
        let getLogin = await login(driver, By);

        expect(getLogin).to.be.true;
    });
    it(`creation of age modifier`, async function () {
        let getAgeModifier = await ageModifier(driver, By, until, Key, fs);

        expect(getAgeModifier).to.be.true;
    });
    it(`creation of bill modifier`, async function () {
        let getBillModifier = await billModifier(driver, By, until, Key, fs);

        expect(getBillModifier).to.be.true;
    });
    it(`creation of a copay modifier`, async function () {
        let getCopayModifier = await copayModifier(driver, By, until, Key, fs);

        expect(getCopayModifier).to.be.true;
    });
    it(`creation of Cost Modifier`, async function () {
        let getCostModifier = await costModifier(driver, By, until, Key, fs);

        expect(getCostModifier).to.be.true;
    });
    it(`creation of Dispensing Fee Modifier`, async function () {
        let getDispFeeModifier = await dispFeeModifier(driver, By, until, Key, fs);

        expect(getDispFeeModifier).to.be.true;
    });

    it(`creation of Dispensing Limit Modifier`, async function () {
        let getDispLimitModifier = await dispLimitModifier(driver, By, until, Key, fs);

        expect(getDispLimitModifier).to.be.true;
    });
    it(`creation of Refill Modifier`, async function () {
        let getRefillModifier = await refillModifier(driver, By, until, Key, fs);

        expect(getRefillModifier).to.be.true;
    });
    it(`creation of benefit list`, async function () {
        let getBenefitList = await benefitList(driver, By, until, Key, fs);
        expect(getBenefitList).to.be.true;
    });
    it(`creation of carrier`, async function () {
        let getCarrier = await carrier(driver, By, until, fs);
        expect(getCarrier).to.be.true;
    });
    it(`creation of Plan`, async function () {
        let getPlan = await plan(driver, By, until, Key, fs);
        expect(getPlan).to.be.true;
    });
    /* it(`creation of all groups`, async function () {
        let getAllFields = await allFields(driver, By, until, Key, fs);
        expect(getAllFields).to.be.true;
    }); */

});
