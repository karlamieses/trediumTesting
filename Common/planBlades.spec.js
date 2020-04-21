const driverSleep = require(`../Common/timeOut.spec`);

module.exports = async function planBlades(driver, By, until) {

    await driverSleep(700);
    //Click on Plan Blades
    let planBlades = await driver.findElement(By.className(`ant-btn pharmsys_button ant-dropdown-trigger pharmsys_dropdown ant-btn-primary ant-btn-sm`));
    await driver.wait(until.elementIsVisible(planBlades)).click();
}
