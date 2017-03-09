function sum(array) {
    return array.reduce((acc, val) => {
        acc = acc + val;
        return acc;
    })
};

function productAll(array) {
    return array.reduce((acc, val) => {
        acc *= val.reduce((prev, curr) => {
            return prev * curr;
        });
        return acc;
    }, 1)
};

function objectify(array) {
    return array.reduce((acc, row) => {
        acc[row[0]] = row[1];
        return acc;
    }, {});
}

function luckyNumbers(array) {
    let initial = 'Your lucky numbers are: '
    return array.reduce((acc, num, index, nums) => {
        if (index == nums.length - 1) {
            return acc += (`and ${num}`);
        } else {
            return acc += (`${num}, `);
        }
    }, initial)
};

module.exports = {
    sum: sum,
    productAll: productAll,
    objectify: objectify,
    luckyNumbers: luckyNumbers
};
