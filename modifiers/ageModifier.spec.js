const getName = require(`../Common/createName.spec`);
const clickModifier = require(`../Common/clickModifiers.spec`);
const driverSleep = require(`../Common/timeOut.spec`);
const notificationMessage = require(`../Common/notificationMessage.spec`);

module.exports = async function ageModifier(driver, By, until, Key, fs) {

    //Click on Modifiers
    await clickModifier(driver, until, By);
    //Click on Age modifier
    let elementVisible = await driver.findElement(By.xpath(`//a[@title='Alt+F1']`));
    await driver.wait(until.elementIsVisible(elementVisible)).click();
    //insertName
    let insertName = await driver.wait(until.elementLocated(By.xpath(`//input[@placeholder='Search by Name']`)), 3000);
    await insertName.sendKeys(`${getName.name}`);
    //wait 500 ms
    await driverSleep();
    //Insert MONY Type
    let ageMonyType = await driver.findElement(By.xpath(`//*[@id="form_item_age_list_mony_type"]/div[2]/div/span/input`));
    await ageMonyType.sendKeys(`O`, Key.RETURN);
    //Insert a Female Minium Age
    let femMinAge = await driver.findElement(By.name(`age_list_female_min_age`));
    await femMinAge.sendKeys(`0`);
    //Insert Male minmun age
    let maleMinAge = await driver.findElement(By.name(`age_list_male_min_age`));
    await maleMinAge.sendKeys(`0`);
    //Insert Unspecified minimun age
    let unsMinAge = await driver.findElement(By.name(`age_list_unspecified_min_age`));
    await unsMinAge.sendKeys(`0`);
    //Insert Female max age
    let femMaxAge = await driver.findElement(By.name(`age_list_female_max_age`));
    await femMaxAge.sendKeys(`999`);
    //Insert Male max age
    let maleMaxAge = await driver.findElement(By.name(`age_list_male_max_age`));
    await maleMaxAge.sendKeys(`999`);
    //Insert Unspecified Max age
    let unsMaxAge = await driver.findElement(By.name(`age_list_unspecified_max_age`));
    await unsMaxAge.sendKeys(`999`);
    //Insert item - O
    await driverSleep();
    await driver.findElement(By.className(`ant-btn pharmsys_button btn btn-primary btn-sm ant-btn-primary ant-btn-sm`)).click();
    //Insert MONY Type - Y
    await ageMonyType.sendKeys(`Y`, Key.RETURN);
    //Insert a Female Minium Age
    await femMinAge.sendKeys(`0`);
    //Insert Male minmun age
    await maleMinAge.sendKeys(`0`);
    //Insert Unspecified minimun age
    await unsMinAge.sendKeys(`0`);
    //Insert Female max age
    await femMaxAge.sendKeys(`999`);
    //Insert Male max age
    await maleMaxAge.sendKeys(`999`);
    //Insert Unspecified Max age
    await unsMaxAge.sendKeys(`999`);
    //Insert item
    await driverSleep();
    await driver.findElement(By.className(`ant-btn pharmsys_button btn btn-primary btn-sm ant-btn-primary ant-btn-sm`)).click();
    //Insert MONY Type - MN
    await ageMonyType.sendKeys(`M`, Key.RETURN);
    //Insert a Female Minium Age
    await femMinAge.sendKeys(`0`);
    //Insert Male minmun age
    await maleMinAge.sendKeys(`0`);
    //Insert Unspecified minimun age
    await unsMinAge.sendKeys(`0`);
    //Insert Female max age
    await femMaxAge.sendKeys(`999`);
    //Insert Male max age
    await maleMaxAge.sendKeys(`999`);
    //Insert Unspecified Max age
    await unsMaxAge.sendKeys(`999`);
    //Insert item
    await driverSleep();
    await driver.findElement(By.className(`ant-btn pharmsys_button btn btn-primary btn-sm ant-btn-primary ant-btn-sm`)).click();
    //Click on create bottom
    await driver.findElement(By.className(`ant-btn pharmsys_button pharmsys-button-success ant-btn-button ant-btn-sm`)).click();
    //wait for notification message, take screenshot, close the blade
    await notificationMessage(driver, By, until, fs);

    return true;

}