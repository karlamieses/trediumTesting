const driverSleep = require(`../Common/timeOut.spec`);

module.exports = async function getPlanNumber(driver, By, Key) {
    let planNumber = (await driver).findElement(By.xpath(`//input[@placeholder="Search by Plan Number"]`));
    await planNumber.sendKeys(`New`, Key.RETURN);
    await driverSleep();
    //Store value into a variable to use it later creating the group
    let groupPlan = await planNumber.getAttribute("value");
    return groupPlan;
} 