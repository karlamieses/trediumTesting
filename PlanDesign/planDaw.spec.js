const driverSleep = require(`../Common/timeOut.spec`);
const planBlades = require(`../Common/planBlades.spec`);
const notificationMessage = require(`../Common/notificationMessage.spec`);

module.exports = async function createplanDaw(driver, By, until, Key, fs) {

    //Click on Plan Blades
    await planBlades(driver, By, until);
    //click on DAW
    let elementVisible = await driver.findElement(By.xpath(`//*[text()='DAW']`));
    await driver.wait(until.elementIsVisible(elementVisible)).click();
    //wait 1000 ms
    await driver.wait(until.elementLocated(By.className(`ant-btn pharmsys_button btn btn-primary btn-sm ant-btn-primary ant-btn-sm`)), 5000);

    async function planDaw(driver, By, until, Key) {
        const dispWrittenValues = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
        const respPartyValues = ['0', '1', '2', '3', '4', '5', '6', '7', '8', 'Z'];

        for (let i = 0; i < 10; i++) {
            //wait 500 ms
            await driverSleep(800);
            //Insert Dispense as written
            let dispWritten = (await driver).findElement(By.xpath(`//*[@id="form_item_plan_daw_differential_daw_code"]/div[2]/div/span/input`));
            await dispWritten.sendKeys(dispWrittenValues[i], Key.RETURN);
            //wait 500 ms
            await driverSleep(400);
            //Insert a responisble party
            let respParty = (await driver).findElement(By.xpath(`//*[@id="form_item_plan_daw_differential_differential_payment_type"]/div[2]/div/span/input`));
            await respParty.sendKeys(respPartyValues[i], Key.RETURN);
            //wait 500 ms
            await driverSleep(400);
            //Insert claim type
            let claimType = (await driver).findElement(By.xpath(`//*[@id="form_item_plan_daw_differential_claim_type"]/div[2]/div/span/input`));
            await claimType.sendKeys(`ALL`, Key.RETURN);
            //wait 500ms
            await driverSleep(400);
            //add item
            await driver.wait(until.elementLocated(By.xpath(`//*[@id="PLAN_DAW_container"]/div/div/section/footer/div/button[2]`)), 6000).click();
        }
    } await planDaw(driver, By, until, Key);

    //click on save
    await driver.findElement(By.className(`ant-btn pharmsys_button pharmsys-button-success ant-btn-button ant-btn-sm`)).click();
    //wait for notification message
    await notificationMessage(driver, By, until, fs);


    return true;
}





