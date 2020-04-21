module.exports = async function (driver, until, By){
    let clickModifiers = await driver.wait(until.elementLocated(By.xpath(`//*[@id="root"]/section/aside/div/div/ul/li[7]/div`)), 200000);
    await clickModifiers.click(); 
}

