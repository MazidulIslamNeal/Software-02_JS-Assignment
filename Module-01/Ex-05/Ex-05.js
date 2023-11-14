'use strict';

const year = parseInt(prompt(`Please enter the year to check Leap Year:`))


if (year % 4 == 0 || year % 100 == 0 && year % 400) {
    document.querySelector(`.leapYear`).innerHTML = (`${year} is a leap year!!`);
}
else {
    document.querySelector(`.leapYear`).innerHTML = (`${year} is not a leap year.`);
}
