module.exports = async function driverSleep(time = 200) {
    async function sleep(ms){
        return new Promise(resolve => setTimeout(resolve, ms));
    }
    async function waitingTime(){
        await sleep(time);
    }
    await waitingTime();
}