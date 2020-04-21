
module.exports = async function invCredErrorMessage (driver, By, until ) {

  let invalidNotificationMessage =  await driver.wait(until.elementLocated(By.xpath(`//span[@class = 'ant-alert-message']`)), 5000);
  let getInvalidNotificationMessage = invalidNotificationMessage.getText("");

  if (getInvalidNotificationMessage = "Wrong username or password, please try again."){
      return true;
  }
    
}