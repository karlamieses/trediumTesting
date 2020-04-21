const driverSleep = require(`../Common/timeOut.spec`);
const getName = require(`../Common/createName.spec`);
const groupName = require(`../Common/createName.spec`);
const clickPlanDesign = require(`../Common/clickPlanDesign.spec`);
const notificationMessage = require(`../Common/notificationMessage.spec`);

module.exports = async function groupBenefitYearNull(driver, By, until, Key, fs) {
    //wait 
    await driverSleep();
    //Click on Plan Modifiers
    await clickPlanDesign(driver, until, By);
    //wait 
    await driverSleep();
    //Click on Group
    (await driver).findElement(By.xpath(`//a[@title='Alt+G']`)).click();
    //wait 
    await driverSleep(500);
    //Insert carrier
    (await driver).findElement(By.xpath(`//*[@id="form_item_groups_carrier_id"]/div[2]/div/span/input`)).sendKeys(`${getName.name}`);
    //Wait 
    await driverSleep();
    //actions
    (await driver).actions().sendKeys(Key.chord(Key.ARROW_DOWN, Key.RETURN)).perform();
    //Insert group
    (await driver).findElement(By.xpath(`//input[@placeholder='Search by Group Number']`)).sendKeys(`${groupName.allFields}`);
    //wait
    await driverSleep();
    //Insert group type
    (await driver).findElement(By.xpath(`//*[@id="form_item_groups_group_type"]/div[2]/div/span/input`)).sendKeys(`00`, Key.RETURN);
    //wait
    await driverSleep();
    //Insert Group Name
    (await driver).findElement(By.name(`groups_group_name`)).sendKeys(`BenefitYearNull`);
    //wait
    await driverSleep();
    //Insert Benefit Year
    (await driver).findElement(By.name(`groups_benefit_year_start`)).sendKeys(`BY`, Key.RETURN);
    //wait
    await driverSleep();
    //Insert Maximum Prescriptions
    (await driver).findElement(By.name(`groups_max_rx`)).sendKeys(`999`);
    //Insert Prescriptions type
    (await driver).findElement(By.xpath(`//*[@id="form_item_groups_max_rx"]/div[2]/div[2]/div/div/span/input`)).sendKeys(`BY`, Key.RETURN);
    //wait
    await driverSleep();
    //Insert Sales Tax
    (await driver).findElement(By.xpath(`//*[@id="form_item_groups_tax_logic"]/div[2]/div/span/input`)).sendKeys(`0`, Key.RETURN);
    //wait
    await driverSleep();
    //Insert Prescriber Check
    (await driver).findElement(By.xpath(`//*[@id="form_item_groups_prescriber_logic"]/div[2]/div/span/input`)).sendKeys(`0`, Key.RETURN);
    //wait
    await driverSleep();
    //Searching for Plan
    let planNumber = (await driver).findElement(By.xpath(`//input[@placeholder="Search by Plan Number"]`));
    //wait 500ms
    await driverSleep();
    //Store value into a variable to use it later creating the group
    let groupPlan = await planNumber.getAttribute("value");
    (await driver).findElement(By.name(`groups_plan_list_plan_id`)).sendKeys(`${groupPlan}`);
    //Wait
    await driverSleep();
    //hit on enter to load plan
    await driver.actions().sendKeys(Key.ENTER).perform();
    //Wait
    await driverSleep();
    //Insert group start date
    driver.findElement(By.name(`groups_plan_list_start_date`)).sendKeys(`01/01/1900`);
    await driverSleep();
    //add item
    await (await driver).findElement(By.className(`ant-btn pharmsys_button btn btn-primary btn-sm ant-btn-primary ant-btn-sm`)).click();
    //Wait
    await driverSleep();
    //click on create
    (await driver).findElement(By.className(`ant-btn pharmsys_button pharmsys-button-success ant-btn-button ant-btn-sm`)).click();
    //wait for notification message, take screenshot, close the blade
    await notificationMessage(driver, By, until, fs);

    return true;
}

