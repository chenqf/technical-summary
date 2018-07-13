
function shuffle(arr) {
    let len = arr.length;
    while (len) {
        const i = Math.floor(Math.random() * len--);
        let temp = arr[i];
        arr[i] = arr[len];
        arr[len] = temp;
    }
    return arr;
}
