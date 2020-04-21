let getUser =  (driver, By) => driver.findElement(By.name(`userName`));
let getPassword = (driver, By) =>  driver.findElement(By.name(`password`));
let getLoginButton = (driver, By) => driver.findElement(By.className(`ant-btn pharmsys_button pharmsys-button-login ant-btn-sm`));
let getRxNumber = Math.floor(Math.random() * 500000000000);


module.exports.getUser = getUser;
module.exports.getPassword = getPassword;
module.exports.getLoginButton = getLoginButton;
module.exports.getRxNumber = getRxNumber;

