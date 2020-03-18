const compose = (...fns) => {
    return x => {
        return fns.reduceRight((init, cur) => init(cur), x)
    }
}

const shuffle = array => {
    let len = array.length;
    while (len > 1) {
        let index = Math.floor(Math.random() * len);
        [array[index], array[len - 1]] = [array[len - 1], array[index]];
        len--;
    }
}