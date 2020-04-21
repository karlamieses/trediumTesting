const getName = require(`../Common/createName.spec`);
const clickModifier = require(`../Common/clickModifiers.spec`);
const driverSleep = require(`../Common/timeOut.spec`);
const notificationMessage = require(`../Common/notificationMessage.spec`);

module.exports = async function copayModifier(driver, By, until, Key, fs) {

    //Click on Modifiers from the Left Menu
    await clickModifier(driver, until, By);
    //wait 5ms
    let elementVisible = await driver.findElement(By.xpath(`//a[@title='Alt+F3']`));
    await driver.wait(until.elementIsVisible(elementVisible)).click();
    //wait 5ms
    await driverSleep();
    //Insert a name
    await driver.findElement(By.xpath(`//*[@placeholder='Search by Name']`)).sendKeys(`${getName.name}`, Key.RETURN);
    //Insert a MONY TYPE O
    let copayMonyType = await driver.wait(until.elementLocated(By.xpath(`//*[@id="form_item_copay_list_mony_type"]/div[2]/div/span/input`)), 3000);
    await copayMonyType.click();
    await copayMonyType.sendKeys(`O`, Key.RETURN);
    //Selecting a Copay Calculation Type
    let CopayCalcType = await driver.findElement(By.xpath(`//*[@id="form_item_copay_list_calculation_type"]/div[2]/div/span/input`));
    await CopayCalcType.sendKeys(`01`, Key.RETURN);
    //Inserting a Tier Max
    let copayTierMax = await driver.findElement(By.name(`copay_list_tier_max`));
    await copayTierMax.sendKeys(`999`, Key.RETURN);
    //wait a second before adding O line
    await driverSleep();
    //Clicking on +Add item
    await driver.findElement(By.className(`ant-btn pharmsys_button btn btn-primary btn-sm ant-btn-primary ant-btn-sm`)).click();
    //wait 5ms
    await driverSleep();
    //Insert a MONY TYPE Y
    await copayMonyType.sendKeys(`Y`, Key.RETURN);
    //Selecting a Copay Calculation Type
    await CopayCalcType.sendKeys(`01`, Key.RETURN);
    //Inserting a Tier Max
    await copayTierMax.sendKeys(`999`, Key.RETURN);
    //wait a second before adding Y line
    await driverSleep();
    //Clicking on +Add item
    await driver.findElement(By.className(`ant-btn pharmsys_button btn btn-primary btn-sm ant-btn-primary ant-btn-sm`)).click();
    //Insert a MONY TYPE M
    await copayMonyType.sendKeys(`M`, Key.RETURN);
    //Selecting a Copay Calculation Type
    await CopayCalcType.sendKeys(`01`, Key.RETURN);
    //Inserting a Tier Max
    await copayTierMax.sendKeys(`999`, Key.RETURN);
    //wait a second before adding m line
    await driverSleep();
    //Clicking on +Add item
    await driver.findElement(By.className(`ant-btn pharmsys_button btn btn-primary btn-sm ant-btn-primary ant-btn-sm`)).click();
    //create record
    await driver.findElement(By.className(`ant-btn pharmsys_button pharmsys-button-success ant-btn-button ant-btn-sm`)).click();
    //wait for notification message, take screenshot, close the blade
    await notificationMessage(driver, By, until, fs);

    return true;
}