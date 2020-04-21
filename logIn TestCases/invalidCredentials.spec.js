const loginVariables = require(`../Common/variables.spec`);
const invCredErrorMessage = require(`../Common/invCredErrorMessage.spec`);

module.exports = async function login(driver, By, until) {
        //Insert username
        await loginVariables.getUser(driver, By).sendKeys(`kmieses18`);
        //Insert password 
        await loginVariables.getPassword(driver, By).sendKeys(`Test@13`);
        //Click on log in button
        await loginVariables.getLoginButton(driver, By).click();
        //validate if the error message is correct
        await invCredErrorMessage(driver, By, until);


        return true;
}