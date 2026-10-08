let nilai1 = [3, 5, 8, 10, 88, 100, ]
let nilai2 = [8, 9, 99, 55, 222, 1]
const combine = [...nilai1, ...nilai2];
let maks = combine[0]
let min = combine[0]
let rata = 0;

// mencari nilai maksimal
for (let i = 1; i < combine.length; i++) {
    if (combine[i] > maks) {
        maks = combine[i];
    }
}

// mencari nilai minimal
for (let y = 1; y < combine.length; y++) {
    if (combine[y] < min) {
        min = combine[y];
    }
}

// mencari nilai avarage
for (let z = 0; z < combine.length; z++) {
    rata += combine[z]
}
console.log(maks);
console.log(min);
console.log(parseInt(rata/combine.length));