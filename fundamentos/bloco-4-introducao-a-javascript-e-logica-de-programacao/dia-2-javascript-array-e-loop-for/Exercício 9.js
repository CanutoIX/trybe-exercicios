let numbers = [];

for (let index = 1; index <= 25; index += 1) {
    numbers.push(index);
}

console.log(numbers);
for (let index = 0; index < numbers.length; index += 1) {
    console.log(numbers[index] / 2);
};