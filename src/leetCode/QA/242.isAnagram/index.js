

let isAnagram = function(s, t) {
    let l1 = [...s].sort();
    let l2 = [...t].sort();
    return l1.join() === l2.join();
};
