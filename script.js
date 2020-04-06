let data = [
    {principal: 2500, time: 1.8},
    {principal: 1000, time: 5},
    {principal: 3000, time: 1},
    {principal: 2000, time: 3}];

function calculateRate(item) {
    let rate = 0 ;
    if(item.principal >= 2500 && (item.time > 1 && item.time < 3) ) {
        rate = 3;
    } else if (item.principal >= 2500 && item.time >= 3 ) {
        rate = 4;
    } else if (item.principal < 2500 || item.time <= 1) {
        rate = 2;
    } else {
        rate = 1;
    }
    return rate;
}

function interestCalculator(data) {
    let interestData = [];
   for (let i = 0; i < data.length; i++) {
    let eachData = data[i];
    let assignedRate = calculateRate(eachData)
    let interest = (eachData.principal * assignedRate * eachData.time)/100;
    let completeObj = {
        principal : eachData.principal,
        rate: assignedRate,
        time: eachData.time,
        interest: interest
    }
    interestData.push(completeObj)
   }
    console.log (interestData);
    return interestData;
}
interestCalculator(data);