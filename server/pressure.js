const moment = require('moment');

const pressureData = [
    { "date": "10-05-2012", "pressure1": 68.55, "pressure2": 74.55 },
    { "date": "09-05-2012", "pressure1": 74.55, "pressure2": 69.55 },
    { "date": "08-05-2012", "pressure1": 69.55, "pressure2": 62.55 },
    { "date": "07-05-2012", "pressure1": 62.55, "pressure2": 56.55 },
    { "date": "06-05-2012", "pressure1": 56.55, "pressure2": 59.55 },
    { "date": "05-05-2012", "pressure1": 59.86, "pressure2": 65.86 },
    { "date": "04-05-2012", "pressure1": 62.62, "pressure2": 65.62 },
    { "date": "03-05-2012", "pressure1": 64.48, "pressure2": 60.48 },
    { "date": "02-05-2012", "pressure1": 60.98, "pressure2": 55.98 },
    { "date": "01-05-2012", "pressure1": 58.13, "pressure2": 53.13 },
    { "date": "30-04-2012", "pressure1": 68.55, "pressure2": 74.55 },
    { "date": "29-04-2012", "pressure1": 74.55, "pressure2": 69.55 },
    { "date": "28-04-2012", "pressure1": 69.55, "pressure2": 62.55 },
    { "date": "27-04-2012", "pressure1": 62.55, "pressure2": 56.55 },
    { "date": "26-04-2012", "pressure1": 56.55, "pressure2": 59.55 },
    { "date": "25-04-2012", "pressure1": 59.86, "pressure2": 65.86 },
    { "date": "24-04-2012", "pressure1": 62.62, "pressure2": 65.62 },
    { "date": "23-04-2012", "pressure1": 64.48, "pressure2": 60.48 },
    { "date": "22-04-2012", "pressure1": 60.98, "pressure2": 55.98 },
    { "date": "21-04-2012", "pressure1": 58.13, "pressure2": 53.13 }
];

let counter = 0;

function updatePressure() {
    const diff = Math.floor((Math.random() * 1000) / 100);
    const lastDay = moment(pressureData[0].date, 'DD-MM-YYYY').add(1, 'days');
    let pressure1;
    let pressure2;

    if (counter % 2 === 0) {
        pressure1 = pressureData[0].pressure1 + diff;
        pressure2 = pressureData[0].pressure2 + diff;
    } else {
        pressure1 = Math.abs(pressureData[0].pressure1 - diff);
        pressure2 = Math.abs(pressureData[0].pressure2 - diff);
    }

    pressureData.unshift({
        date: lastDay.format('DD-MM-YYYY'),
        pressure1,
        pressure2
    });
    counter++;
}


module.exports = {
    pressureData,
    updatePressure,
};