const loginVariables = require(`../Common/variables.spec`);

module.exports = async function login (driver, By){
        //Insert username
        await loginVariables.getUser(driver, By).sendKeys(`kmieses`);
        //Insert password 
        await loginVariables.getPassword(driver, By).sendKeys(`Test@12`);
        //Click on log in button
        await loginVariables.getLoginButton(driver, By).click();

        return true;
}
