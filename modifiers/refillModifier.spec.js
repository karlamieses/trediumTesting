const getName = require(`../Common/createName.spec`);
const clickModifier = require(`../Common/clickModifiers.spec`);
const driverSleep = require(`../Common/timeOut.spec`);
const notificationMessage = require(`../Common/notificationMessage.spec`);

module.exports = async function refillModifier(driver, By, until, Key, fs) {

    //click on Modifiers from the left menu
    await clickModifier(driver, until, By);
    //Click on Refill modifier
    let elementVisible = await driver.findElement(By.xpath(`//a[@title='Alt+F8']`));
    await driver.wait(until.elementIsVisible(elementVisible)).click();
    //wait 500ms
    await driverSleep();
    //Insert a name
    (await driver).wait(until.elementLocated(By.xpath(`//input[@placeholder='Search by Name']`)), 10000).sendKeys(`${getName.name}`);
    //wait 500ms
    await driverSleep();
    //Insert a MONY Type - O
    let refillMony = (await driver).wait(until.elementLocated(By.xpath(`//*[@id="form_item_refill_list_mony_type"]/div[2]/div/span/input`)), 10000);
    await refillMony.sendKeys(`O`, Key.RETURN);
    //wait 500ms
    await driverSleep();
    //Insert Number of Refills
    let numberRefill = (await driver).findElement(By.name(`refill_list_num_refills`));
    await numberRefill.sendKeys(`9999`);
    //wait 500ms
    await driverSleep();
    //Insert Tolerance Percentage
    let toleranceP = (await driver).findElement(By.name(`refill_list_tolerance_percent`));
    await toleranceP.sendKeys(`0`);
    //wait 500 ms
    await driverSleep();
    //add item
    (await driver).findElement(By.className(`ant-btn pharmsys_button btn btn-primary btn-sm ant-btn-primary ant-btn-sm`)).click();
    //wait 500ms
    await driverSleep();
    //insert Mony type - Y
    await refillMony.sendKeys(`Y`, Key.RETURN);
    //wait 500ms
    await driverSleep();
    //Insert Number of Refills
    await numberRefill.sendKeys(`9999`);
    //wait 500ms
    await driverSleep();
    //Insert Tolerance Percentage
    await toleranceP.sendKeys(`0`);
    //wait 500 ms
    await driverSleep();
    //add item
    (await driver).findElement(By.className(`ant-btn pharmsys_button btn btn-primary btn-sm ant-btn-primary ant-btn-sm`)).click();
    //wait 500ms
    await driverSleep();
    //insert Mony type - M
    await refillMony.sendKeys(`M`, Key.RETURN);
    //wait 500ms
    await driverSleep();
    //Insert Number of Refills
    await numberRefill.sendKeys(`9999`);
    //wait 500ms
    await driverSleep();
    //Insert Tolerance Percentage
    await toleranceP.sendKeys(`0`);
    //wait 500 ms
    await driverSleep();
    //add item
    (await driver).findElement(By.className(`ant-btn pharmsys_button btn btn-primary btn-sm ant-btn-primary ant-btn-sm`)).click();
    //wait 500 ms
    await driverSleep();
    //Create record
    (await driver).findElement(By.className(`ant-btn pharmsys_button pharmsys-button-success ant-btn-button ant-btn-sm`)).click();
    //wait for notification message, take screenshot, close the blade
    await notificationMessage(driver, By, until, fs);

    return true;

}