const driverSleep = require(`../Common/timeOut.spec`);
const getName = require(`../Common/createName.spec`);
const clickPlanDesign = require(`../Common/clickPlanDesign.spec`);
const notificationMessage = require(`../Common/notificationMessage.spec`);
const getPlanNumber = require(`../Common/getPlanNumber.spec`);
const planBenefitList = require("../planDesign/planBenefitList.spec");
const planModifiers = require("../planDesign/planModifiers.spec");
const createplanDaw = require("../planDesign/planDaw.spec");
const notifMessagePlan = require("../Common/notifMessagePlan.spec");

module.exports = async function plan(driver, By, until, Key, fs) {
  //Click on Plan Modifiers
  await clickPlanDesign(driver, until, By);
  //Click on Plan
  let elementVisible = await driver.findElement(By.xpath(`//a[@title='Alt+J']`));
  await driver.wait(until.elementIsVisible(elementVisible)).click();
  //wait 500ms
  await driverSleep(1000);
  await getPlanNumber(driver, By, Key);
  //wait 500ms
  await driverSleep(500);
  //Insert a Carrier Code
  (await driver).findElement(By.xpath(`//input[@placeholder="--Select--"]`)).sendKeys(`${getName.name}`);
  //wait 500ms
  await driverSleep(1000);
  //Plan Name
  await driver.findElement(By.xpath(`//*[@id="form_item_plan_plan_name"]/span/input`)).sendKeys(`${getName.name}`);
  //wait
  await driverSleep(1000);
  //click on create
  (await driver).findElement(By.className(`ant-btn pharmsys_button pharmsys-button-success ant-btn-button ant-btn-sm`)).click();
  await driverSleep(1000);
  //wait for notification message
  await notifMessagePlan(driver, By, until, fs);
  //create Plan Daw
  await createplanDaw(driver, By, until, Key, fs);
  //Create Plan Modifiers
  await planModifiers(driver, By, until, Key, fs);
  //Create Plan Benefit List
  await planBenefitList(driver, By, Key, until, fs);

  return true;
}