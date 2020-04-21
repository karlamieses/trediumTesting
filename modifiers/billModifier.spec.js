const getName = require(`../Common/createName.spec`);
const clickModifier = require(`../Common/clickModifiers.spec`);
const driverSleep = require(`../Common/timeOut.spec`);
const notificationMessage = require(`../Common/notificationMessage.spec`);

module.exports = async function billModifier(driver, By, until, Key, fs) {
    //Click on Modifier
    await clickModifier(driver, until, By);
    //wait
    let elementVisible = await driver.findElement(By.xpath(`//a[@title='Alt+F7']`));
    await driver.wait(until.elementIsVisible(elementVisible)).click();
    //Inserting name 
    await driver.wait(until.elementLocated(By.xpath(`//*[@id="form_item_billing_modifier_name"]/div[2]/div/span/input`)), 10000).sendKeys(`${getName.name}`);
    //wait 2 second   
    await driverSleep();
    //Insert a MONY type - O
    let billMonyType = await driver.wait(until.elementLocated(By.xpath(`//*[@id="form_item_billing_list_mony_type"]/div[2]/div/span/input`)), 10000);
    await billMonyType.sendKeys(`O`, Key.RETURN);
    //Insert calculation types
    let billCalcType = await driver.findElement(By.xpath(`//*[@id="form_item_billing_list_calculation_type"]/div[2]/div/span/input`));
    await billCalcType.sendKeys(`01`, Key.RETURN);
    //wait 5ms
    await driverSleep();
    //Insert item
    await driver.findElement(By.className(`ant-btn pharmsys_button btn btn-primary btn-sm ant-btn-primary ant-btn-sm`)).click();
    //Insert a MONY type - Y
    await billMonyType.sendKeys(`Y`, Key.RETURN);
    //Insert Calculation type
    await billCalcType.sendKeys(`01`, Key.RETURN);
    //Wait 5ms
    await driverSleep();
    //Insert item
    await driver.findElement(By.className(`ant-btn pharmsys_button btn btn-primary btn-sm ant-btn-primary ant-btn-sm`)).click();
    //Insert MONY Type - MN
    await billMonyType.sendKeys(`M`, Key.RETURN);
    //Insert calculation type
    await billCalcType.sendKeys(`01`, Key.RETURN);
    //wait 5ms
    await driverSleep();
    //Insert item
    await driver.findElement(By.className(`ant-btn pharmsys_button btn btn-primary btn-sm ant-btn-primary ant-btn-sm`)).click();
    //Click on create bottom
    await driver.findElement(By.className(`ant-btn pharmsys_button pharmsys-button-success ant-btn-button ant-btn-sm`)).click();
    //wait for notification message
    await notificationMessage(driver, By, until, fs);

    return true;
}