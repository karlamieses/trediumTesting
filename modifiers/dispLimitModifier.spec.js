const getName = require(`../Common/createName.spec`);
const clickModifier = require(`../Common/clickModifiers.spec`);
const driverSleep = require(`../Common/timeOut.spec`);
const notificationMessage = require(`../Common/notificationMessage.spec`);

module.exports = async function dispLimitModifier(driver, By, until, Key, fs) {
    //Click on modifiers from the main menu
    await clickModifier(driver, until, By);
    //Click on Dispensing Limit modifier
    let elementVisible = await driver.findElement(By.xpath(`//a[@title='Alt+6']`));
    await driver.wait(until.elementIsVisible(elementVisible)).click();
    //Insert a name
    (await driver).wait(until.elementLocated(By.xpath(`//input[@placeholder='Search by Name']`)), 3000).sendKeys(`${getName.name}`);
    //wait a second
    await driverSleep();
    //Insert Mony Type - O
    let limitMonyType = (await driver).findElement(By.xpath(`//*[@id="form_item_disp_limit_list_mony_type"]/div[2]/div/span/input`));
    await limitMonyType.sendKeys(`O`, Key.RETURN);
    //wait 500ms
    await driverSleep();
    //Insert Max Days Supply    
    let maxDaysSupply = (await driver).findElement(By.xpath(`//input[@name='disp_limit_list_max_dayssupply']`));
    await maxDaysSupply.sendKeys(`9999`);
    //wait 500ms
    await driverSleep();
    //Insert Max Quantity
    let maxQuantity = (await driver).findElement(By.name(`disp_limit_list_max_quantity`));
    await maxQuantity.sendKeys(`9999`);
    //wait 500ms
    await driverSleep();
    //Insert Enforce Limits Type
    let limitType = (await driver).findElement(By.xpath(`//*[@id="form_item_disp_limit_list_enforce_limits_type"]/div[2]/div/span/input`));
    await limitType.sendKeys(`N`, Key.RETURN);
    //wait a second
    await driverSleep(400);
    //addItem
    (await driver).findElement(By.className(`ant-btn pharmsys_button btn btn-primary btn-sm ant-btn-primary ant-btn-sm`)).click();
    //wait a second
    await driverSleep();
    //Inserting MONY Type Y
    await limitMonyType.sendKeys(`Y`, Key.RETURN);
    //wait a second
    await driverSleep();
    //Insert Max Days Supply
    await maxDaysSupply.sendKeys(`9999`);
    //wait a second
    await driverSleep();
    //Insert Max Quantity Line Y
    await maxQuantity.sendKeys(`9999`);
    //wait a second
    await driverSleep();
    //Insert Enforce Limits Type
    await limitType.sendKeys(`N`, Key.RETURN);
    //wait 1s
    await driverSleep(400);
    //addItem
    (await driver).findElement(By.className(`ant-btn pharmsys_button btn btn-primary btn-sm ant-btn-primary ant-btn-sm`)).click();
    //wait a second
    await driverSleep();
    //Inserting MONY Type M
    await limitMonyType.sendKeys(`M`, Key.RETURN);
    //wait a second
    await driverSleep();
    //Insert Max Days Supply
    await maxDaysSupply.sendKeys(`9999`);
    //wait 500ms
    await driverSleep();
    //Insert Max Quantity Line Y
    await maxQuantity.sendKeys(`9999`);
    //wait 500ms
    await driverSleep();
    //Insert Enforce Limits Type
    await limitType.sendKeys(`N`, Key.RETURN);
    //wait 1s
    await driverSleep(400);
    //addItem
    (await driver).findElement(By.className(`ant-btn pharmsys_button btn btn-primary btn-sm ant-btn-primary ant-btn-sm`)).click();
    //Create Record
    await driver.findElement(By.className(`ant-btn pharmsys_button pharmsys-button-success ant-btn-button ant-btn-sm`)).click();
    //wait for notification message, take screenshot, close the blade
    await notificationMessage(driver, By, until, fs);

    return true;
}