module.exports = async function clickPlanDesign (driver, until, By) {
    let clickPlanDesign = await driver.wait(until.elementLocated(By.xpath(`/html/body/div[1]/section/aside/div/div/ul/li[6]/div`)), 10000);
    await clickPlanDesign.click();
}