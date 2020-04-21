
module.exports = async function notificationMessage(driver, By, until, fs) {

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

    //wait for notification message to be removed from blade and then click on "X"
    await driver.wait(until.stalenessOf(webElement), 50000).then(async function () {
        //Get the "X" button xPath
        let closePath = By.xpath(`//button[@class = "ant-btn pharmsys_button ant-btn-link ant-btn-sm ant-btn-icon-only"]`);
        var closeWebElement = driver.findElements(closePath);

        if (screenName != `Plan`) {
            await driver.findElements(closePath).then(function (closeWebElement) {
                closeWebElement[2].click();
            });
        } else if (screenName = `Plan`) {
            await driver.findElements(closePath).then(function (closeWebElement) {
                closeWebElement[5].click();
            });
        }
    });
}