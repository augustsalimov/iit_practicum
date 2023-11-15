// Напечатать все числа с двузначной суммой цифр в диапазоне от 40 до 70.
// [40, 70) от 40 включительно до 70 (исключая 70)

function summOfDigits(num) {
    var sum = 0;
    var stringifyNum = num.toString();
    for (var i = 0; i < stringifyNum.length; i++) sum += +stringifyNum[i];
    return sum;
}

const arrayOfNums = (first, last) => {
    let nums = [];
    while (first !== last) {
        if (summOfDigits(first).toString().length == 2) nums.push(first); first++;
    };
    return nums;
}

console.log(arrayOfNums(40, 70))

// Output: [
//   46, 47, 48, 49, 55, 56,
//   57, 58, 59, 64, 65, 66,
//   67, 68, 69
// ]
