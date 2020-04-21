const driverSleep = require(`../Common/timeOut.spec`);
const getName = require(`../Common/createName.spec`);
const clickPlanDesign = require(`../Common/clickPlanDesign.spec`);
const notificationMessage = require(`../Common/notificationMessage.spec`);

module.exports = async function benefitList(driver, By, until, Key, fs) {

    //Click on Plan Modifiers
    await clickPlanDesign(driver, until, By);
    //Click on Benefit List
    let elementVisible = await driver.findElement(By.xpath(`//a[@title='Alt+F']`));
    await driver.wait(until.elementIsVisible(elementVisible)).click();
    //Insert a Benefit List Name
    await driver.findElement(By.xpath(`//*[@id="form_item_benefit_list_benefit_list_name"]/div[2]/div/span/input`)).sendKeys(`${getName.name}`);
    //Insert a priority
    await driver.findElement(By.name("benefit_list_item_priority")).sendKeys("1", Key.RETURN);
    //Select an Item Type
    await driver.findElement(By.xpath(`//*[@id="form_item_benefit_list_item_benefit_item_type"]/div[2]/div/span/input`)).sendKeys("A", Key.RETURN);
    //wait 500 ms
    await driverSleep();
    //Select a Covered Type
    await driver.findElement(By.xpath(`//*[@id="form_item_benefit_list_item_covered"]/div[2]/div/span/input`)).sendKeys("I", Key.RETURN);
    //wait 500 ms
    await driverSleep();
    //Click on +Add Item button
    (await driver).findElement(By.xpath(`//*[@id="BENEFIT_LIST_container"]/div/div/section/footer/div/button[2]`)).click();
    //wait 500 ms
    await driverSleep(500);
    //Click on +Create button
    (await driver).findElement(By.className(`ant-btn pharmsys_button pharmsys-button-success ant-btn-button ant-btn-sm`)).click();
    //wait for notification message, take screenshot, close the blade
    await notificationMessage(driver, By, until, fs);

    return true;

} 
