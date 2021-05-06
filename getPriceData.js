const secondsInMinute = 60;
const minutesInHour = 60;
const hoursInDay = 24;
const daysInYear = 365;
const secondsInYear = secondsInMinute * minutesInHour * hoursInDay * daysInYear;
const sandboxToken = 'sandbox_c228rpaad3id53vujt6g';
const prodToken = 'c228rpaad3id53vujt60';

/**
 * 
 * @param {Array[String]} symbols : ["gme","tsla"]
 * 
 * @returns {Array[Symbols]} : []
 */

function getPriceData(symbols){
    const baseURL = 'https://finnhub.io/api/v1/stock/candle?';
    const endTime = Math.round(Date.now()/1000);
    const startTime = endTime - secondsInYear;
    const token = sandboxToken;
    const resolution = 'D';

    const data = [];
    symbols.forEach(symbol => {
        console.log(symbol);
        console.log(`${baseURL}symbol=${symbol}&resolution=${resolution}&from=${startTime}&to=${endTime}&token=${token}`);
        const fullUrl = `${baseURL}symbol=${symbol}&resolution=${resolution}&from=${startTime}&to=${endTime}&token=${token}`;
        res = await fetch(fullUrl);
        data.push(res);
    });
    return data;
}