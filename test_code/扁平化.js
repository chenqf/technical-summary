const flat = (array, depth = 1) => {
    while (array.some(item => Array.isArray(item)) && depth--) {
        array = [].concat(...array);
    }
    return array;
}


const array = [1, 2, 3, [4, [5, 6, [7, 8, [9]]]]];


console.log(flat(array, Infinity));