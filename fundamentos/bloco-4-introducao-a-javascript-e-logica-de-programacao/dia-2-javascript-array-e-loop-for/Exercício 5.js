let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let maior = 0;

for (let i = 0; i < numbers.length; i++) {
    if (maior < numbers[i]) {
        maior = numbers[i]
    }
}
console.log(maior);