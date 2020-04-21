const getName = require(`../Common/createName.spec`);
const clickModifier = require(`../Common/clickModifiers.spec`);
const driverSleep = require(`../Common/timeOut.spec`);
const notificationMessage = require(`../Common/notificationMessage.spec`);

module.exports = async function dispFeeModifier(driver, By, until, Key, fs) {
    //Click on Modifier
    await clickModifier(driver, until, By);
    //Click on Dispensing Fee modifier
    let elementVisible = await driver.findElement(By.xpath(`//a[@title='Alt+F5']`));
    await driver.wait(until.elementIsVisible(elementVisible)).click();
    //Insert a name
    (await driver).wait(until.elementLocated(By.xpath(`//input[@placeholder='Search by Name']`)), 3000).sendKeys(`${getName.name}`);
    //wait 5ms
    await driverSleep();
    //Insert a MONY Type - O
    let feeMonyType = (await driver).findElement(By.xpath(`//*[@id="form_item_disp_fee_list_mony_type"]/div[2]/div/span/input`));
    await feeMonyType.sendKeys(`O`, Key.RETURN);
    //wait 500ms
    await driverSleep();
    //Insert Fee Basis
    let feeBasis = (await driver).findElement(By.xpath(`//*[@id="form_item_disp_fee_list_fee_basis"]/div[2]/div/span/input`));
    await feeBasis.sendKeys(`D`, Key.RETURN);
    //Inser Tier Max
    let feeTierMax = (await driver).findElement(By.name(`disp_fee_list_tier_max`));
    await feeTierMax.sendKeys(`999`);
    //Insert Fee
    let fee = (await driver).findElement(By.name(`disp_fee_list_fee`));
    fee.sendKeys(`0.00`);
    //wait 5ms
    await driverSleep(1000);
    //addItem
    (await driver).findElement(By.className(`ant-btn pharmsys_button btn btn-primary btn-sm ant-btn-primary ant-btn-sm`)).click();
    //wait 500ms
    await driverSleep();
    //Inserting MONY Type Y
    await feeMonyType.sendKeys(`Y`, Key.RETURN);
    //Fee Basis for Y line
    await feeBasis.sendKeys(`D`, Key.RETURN);
    //Tier Max for Y line
    await feeTierMax.sendKeys(`999`);
    fee.sendKeys(`0.00`);
    //Wait 
    await driverSleep(1000);
    //addItem
    (await driver).findElement(By.className(`ant-btn pharmsys_button btn btn-primary btn-sm ant-btn-primary ant-btn-sm`)).click();
    //wait 5ms
    await driverSleep();
    //Inserting MONY Type MN
    await feeMonyType.sendKeys(`M`, Key.RETURN);
    //Fee Basis for Y line
    await feeBasis.sendKeys(`D`, Key.RETURN);
    //Tier Max for Y line
    await feeTierMax.sendKeys(`999`);
    fee.sendKeys(`0.00`);
    //Wait 
    await driverSleep(1000);
    //addItem
    (await driver).findElement(By.className(`ant-btn pharmsys_button btn btn-primary btn-sm ant-btn-primary ant-btn-sm`)).click();
    //create item
    await driver.findElement(By.className(`ant-btn pharmsys_button pharmsys-button-success ant-btn-button ant-btn-sm`)).click();
    //wait for notification message, take screenshot, close the blade
    await notificationMessage(driver, By, until, fs);

    return true;
}