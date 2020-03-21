const shuffle = array => {
    let len = array.length;
    while (len > 1) {
        let index = Math.floor(Math.random() * len);
        [array[index], array[len - 1]] = [array[len - 1], array[index]];
        len--;
    }
}



const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

shuffle(array);

console.log('array:', array);