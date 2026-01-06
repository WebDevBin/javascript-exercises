const sumAll = function(int1, int2) {

    if (!Number.isInteger(int1) || !Number.isInteger(int2)) return "Only whole numbers are accepted.";

    if (int1 < 0 || int2 < 0) return "Only positive integers are accepted";

    const arr = [];

    if (int1 < int2) {
        for (let i = int1; i <= int2; i++) {
            arr.push(i);
        }
    } else if (int1 > int2) {
        for (let i = int1; i >= int2; i--) {
            arr.push(i);
        }
    } else if (int1 === int2) {
        arr.push(int1);
    }

    return arr.reduce( (accum, currentItem) => accum + currentItem, 0);

};

// Do not edit below this line
module.exports = sumAll;
