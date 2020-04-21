const driverSleep = require(`../Common/timeOut.spec`);
const planBlades = require(`../Common/planBlades.spec`);
const getName = require(`../Common/createName.spec`);
const notificationMessage = require(`../Common/notificationMessage.spec`);

module.exports = async function planBenefitList(driver, By, Key, until, fs) {

    //Click on Plan Blades 
    await planBlades(driver, By, until);
    //click on Benefit List
    let elementVisible = await driver.findElement(By.xpath(`//li[@class='ant-dropdown-menu-item'][text()='Benefit List']`));
    await driver.wait(until.elementIsVisible(elementVisible)).click();
    //wait
    await driverSleep(1000);
    //Insert BL name
    (await driver).findElement(By.name(`plan_benefit_list_list_benefit_list_id`)).sendKeys(`${getName.name}`);
    //wait
    await driverSleep(1000);
    //Hit Enter
    (await driver).actions().sendKeys(Key.ENTER).perform();
    //wait
    await driverSleep();
    //Insert a priority
    (await driver).findElement(By.name(`plan_benefit_list_list_priority`)).sendKeys(`1`);
    //wait 500ms
    await driverSleep(1000);
    //Insert a Pharmacy Panel
    (await driver).findElement(By.name(`plan_benefit_list_list_pharmacy_panel_id`)).sendKeys(`ALL (OTC ONLY)`);
    //wait 500ms
    await driverSleep(1000);
    //hit on enter
    (await driver).actions().sendKeys(Key.ENTER).perform();
    //wait 500
    await driverSleep();
    //add item
    (await driver).findElement(By.xpath(`//*[@id="PLAN_BENEFIT_container"]/div/div/section/footer/div/button[2]`)).click();
    //wait 500
    await driverSleep(1000);
    //click on save
    (await driver).findElement(By.xpath(`//*[@id="SAVE_BUTTON_PLAN_BENEFIT"]`)).click();
    //wait for notification message
    await notificationMessage(driver, By, until, fs);

    return true;

}