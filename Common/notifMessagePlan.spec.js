
module.exports = async function notifMessagePlan(driver, By, until, fs) {

    //Get screen name to name the screenshot taken by selenium and to decide if the blade should be closed or not. 
    let screen = driver.findElement(By.xpath(`//h1[@class = "ant-typography title"]//span`));
    let screenName = await screen.getText("");

    //Get Notification Message webelement    
    let webElement = driver.wait(until.elementLocated(By.className(`notification-message`)), 50000);
    //Wait for notification message to be visible to take a screenshot
    await driver.wait(until.elementIsVisible(webElement)).then(async function () {
        await driver.takeScreenshot().then(async function (data) {
            let base64Data = data.replace(/^data:image\/png;base64,/, "")
            fs.writeFile(`${screenName}.png`, base64Data, 'base64', function (err) {
                if (err) console.log(err);
            });
        });
    });

}