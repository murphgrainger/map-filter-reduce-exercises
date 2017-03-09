array = ['hello', 'tomorrow', 'summer'];

function multiplyBy10(array) {
    let arrMultiply = array.map(function(num) {
        return num * 10;
    });
    return arrMultiply;
};

function shiftRight(array) {
    let arrayRight = [];
    arrayRight = array.map(function(num, index, array) {
        if (index === 0) {
            return array[array.length - 1];
        } else {
            return array[index - 1];
        }
    });
    return arrayRight;
}

function onlyVowels(array) {
    let newArray = [];
    newArray = array.map(function(num, index, array) {
        if () {
            return array[index];
        }
    });
}

console.log(onlyVowels(array));

function doubleMatrix(array) {
    // your code here
};

module.exports = {
    multiplyBy10: multiplyBy10,
    shiftRight: shiftRight,
    onlyVowels: onlyVowels,
    doubleMatrix: doubleMatrix
};
