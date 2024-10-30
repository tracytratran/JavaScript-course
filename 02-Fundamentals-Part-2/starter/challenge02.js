'use strict';

function calcTip(bill) {
    if (bill >= 50 && bill <= 300) {
        return bill * 15 / 100;
    } else {
        return bill * 20 / 100;
    }
}

calcTip(100);
// console.log(calcTip(100));

const bills = [125, 555, 44];

const tips = [calcTip(125), calcTip(555), calcTip(44)];
// console.log(tips);
const totals = [bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2]];
// console.log(totals);