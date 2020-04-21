const driverSleep = require(`../Common/timeOut.spec`);
const planBlades = require(`../Common/planBlades.spec`);
const getName = require(`../Common/createName.spec`);
const notificationMessage = require(`../Common/notificationMessage.spec`);

module.exports = async function planModifiers(driver, By, until, Key, fs) {

    //Click on Plan Blades
    await planBlades(driver, By, until);
    //Click on Default Modifiers
    let elementVisible = await driver.findElement(By.xpath(`//*[text()='Default Modifiers']`));
    await driver.wait(until.elementIsVisible(elementVisible)).click();
    //wait 
    await driverSleep(1500);
    //Insert Age Modifier
    (await driver).findElement(By.name(`plan_modifier_list_age_modifier`)).sendKeys(`${getName.name}`);
    (await driver).actions().sendKeys(Key.ENTER).perform();
    //wait 
    await driverSleep(1000);
    //Insert Billing Modifier
    (await driver).findElement(By.name(`plan_modifier_list_billing_modifier`)).sendKeys(`${getName.name}`);
    (await driver).actions().sendKeys(Key.ENTER).perform();
    //wait 500 ms
    await driverSleep(1000);
    //Insert Copay Modifier
    (await driver).actions().sendKeys(Key.ENTER).perform();
    (await driver).findElement(By.name(`plan_modifier_list_copay_modifier`)).sendKeys(`${getName.name}`);
    (await driver).actions().sendKeys(Key.ENTER).perform();
    //wait 500 ms
    await driverSleep(1000);
    //Insert Cost Modifier
    (await driver).findElement(By.name(`plan_modifier_list_cost_modifier`)).sendKeys(`${getName.name}`);
    (await driver).actions().sendKeys(Key.ENTER).perform();
    //wait 500 ms
    await driverSleep(1000);
    //Insert Disp. Fee
    (await driver).findElement(By.name(`plan_modifier_list_disp_fee_modifier`)).sendKeys(`${getName.name}`);
    (await driver).actions().sendKeys(Key.ENTER).perform();
    //wait 500 ms
    await driverSleep(1000);
    //Insert Disp. Limit
    (await driver).findElement(By.name(`plan_modifier_list_disp_limit_modifier`)).sendKeys(`${getName.name}`);
    (await driver).actions().sendKeys(Key.ENTER).perform();
    //wait 500ms
    await driverSleep(1000);
    //Insert a Refill Modifier
    (await driver).findElement(By.name(`plan_modifier_list_refill_modifier`)).sendKeys(`${getName.name}`);
    //wait 500ms
    await driverSleep(1000);
    (await driver).actions().sendKeys(Key.ENTER).perform();
    //wait 500ms
    await driverSleep(1000);
    //Click on add item
    (await driver).findElement(By.xpath(`//*[@id="PLAN_MODIFIERS_container"]/div/div/section/footer/div/button[2]`)).click();
    //wait 500ms
    await driverSleep(1000);
    //Click on save
    (await driver).findElement(By.id(`SAVE_BUTTON_PLAN_MODIFIERS`)).click();
    //wait for notification message
    await notificationMessage(driver, By, until, fs);

    return true;

}