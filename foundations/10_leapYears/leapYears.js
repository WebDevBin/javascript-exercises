const leapYears = function(year) {

    const isCentury = year % 100 == 0;

    if (
        (isCentury && year % 400 === 0) ||
        (!isCentury && year % 4 === 0)
     ) { 
        return true;
    } else if (
        (isCentury && !year % 400 === 0) ||
        (!isCentury && !year % 4 === 0)
     ) {
        return false;
    }

};

// Do not edit below this line
module.exports = leapYears;
