const getName = require(`../Common/createName.spec`);
const clickModifier = require(`../Common/clickModifiers.spec`);
const driverSleep = require(`../Common/timeOut.spec`);
const notificationMessage = require(`../Common/notificationMessage.spec`);

module.exports = async function costModifier(driver, By, until, Key, fs) {

    //click on Modifiers from the left menu
    await clickModifier(driver, until, By);
    //Click on Cost Modifier
    let elementVisible = await driver.findElement(By.xpath(`//a[@title='Alt+4']`));
    await driver.wait(until.elementIsVisible(elementVisible)).click();
    //wait 5ms
    await driverSleep();
    //Insert a name
    await driver.findElement(By.xpath(`//input[@placeholder='Search by Name']`)).sendKeys(`${getName.name}`, Key.RETURN);
    //Selecting MONY CODE
    let costMonyCode = await driver.findElement(By.xpath(`//*[@id="form_item_cost_list_mony_type"]/div[2]/div/span/input`));
    await costMonyCode.click();
    await costMonyCode.sendKeys("O", Key.RETURN);
    //Selecting Method
    let method = await driver.findElement(By.xpath(`//*[@id="form_item_cost_list_cost_method_type"]/div[2]/div/span/input`));
    await method.sendKeys("1", Key.RETURN);
    //Insert a Percentage
    let percentage = await driver.findElement(By.name(`cost_list_percentage`));
    await percentage.sendKeys("100", Key.RETURN);
    //Selecting Cost Basis
    let costBasis = await driver.findElement(By.xpath(`//*[@id="form_item_cost_list_cost_basis"]/div[2]/div/span/input`));
    await costBasis.sendKeys("U/C", Key.RETURN);
    //Clicking on add item -O
    let addItem = await driver.wait(until.elementLocated(By.xpath(`//*[@id="COST_MODIFIERS_container"]/div/div/section/footer/div/button[2]`)), 3000);
    await addItem.click();
    //Other line with Y
    await costMonyCode.sendKeys("Y", Key.RETURN);
    //Method Y
    await method.sendKeys("1", Key.RETURN);
    //percentage for Y line
    await percentage.sendKeys("100", Key.RETURN);
    //cost basis for Y line
    await costBasis.sendKeys("U/C", Key.RETURN);
    //wait 500 ms
    await driverSleep();
    //Clicking on add item Y
    await driver.findElement(By.className(`ant-btn pharmsys_button btn btn-primary btn-sm ant-btn-primary ant-btn-sm`)).click();
    //Other line with M
    await costMonyCode.sendKeys("M", Key.RETURN);
    //Method M
    await method.sendKeys("1", Key.RETURN);
    //percentage for M line
    await percentage.sendKeys("100", Key.RETURN);
    //cost basis for M line
    await costBasis.sendKeys("U/C", Key.RETURN);
    //wait 500 ms
    await driverSleep();
    //add item
    await driver.findElement(By.className(`ant-btn pharmsys_button btn btn-primary btn-sm ant-btn-primary ant-btn-sm`)).click();
    //Click on create
    await driver.findElement(By.className(`ant-btn pharmsys_button pharmsys-button-success ant-btn-button ant-btn-sm`)).click();
   //wait for notification message, take screenshot, close the blade
    await notificationMessage(driver, By, until, fs);

    return true;

}