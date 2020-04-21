const driverSleep = require(`../Common/timeOut.spec`);
const getName = require(`../Common/createName.spec`);
const clickPlanDesign = require(`../Common/clickPlanDesign.spec`);
const notificationMessage = require(`../Common/notificationMessage.spec`);

module.exports = async function carrier(driver, By, until, fs) {

    //Click on Plan Design
    await clickPlanDesign(driver, until, By);
    //Click on carrier 
    let elementVisible = await driver.findElement(By.xpath(`//a[@title='Alt+R']`));
    await driver.wait(until.elementIsVisible(elementVisible)).click();
    //Wait 500 ms
    await driverSleep();
    //Enter a Carrier Code
    (await driver).findElement(By.xpath(`//*[@id="form_item_carrier_carrier_code"]/div[2]/div/span/input`)).sendKeys(`${getName.name}`);
    //wait 500
    await driverSleep();
    //Enter a Name
    await driver.findElement(By.name("carrier_carrier_name")).sendKeys('AUTOMATEDCARRIER3');
    //wait 500
    await driverSleep();
    //Click on +Create button
    (await driver).findElement(By.className("ant-btn pharmsys_button pharmsys-button-success ant-btn-button ant-btn-sm")).click();
    //wait for notification message, take screenshot, close the blade
    await notificationMessage(driver, By, until, fs);

    return true;
}