const repeatString = function(str, num) {
    
    if ( num < 0 ) {
        return 'ERROR';
    }

    let strings = '';
    for (let i = 0; i < num; i++) {
        strings += str;
    }

    return strings;
};

// Do not edit below this line
module.exports = repeatString;
