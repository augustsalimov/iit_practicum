// Найти произведение всех нечетных чисел в диапазоне от 30 до 60.
// [30, 60) от 30 включительно до 60 (исключая 60)
const rangeMult = (first, last) => {
    let mult = 1;
    while (first !== last) {
        if (first % 2 === 1) mult *= first; first++;
    };
    return mult;
}

console.log(rangeMult(4, 10))
// output: 4.71959112410323e+24
