

let list = Array.from({length:1000}).map(()=>parseInt(Math.random() * 100 * Math.pow(10,parseInt(Math.random().toString().slice(-1)))));


function insertSort(list = []) {
    for(let i = 1 , len = list.length; i < len; i++){
        let j = i - 1;
        let temp = list[ i ];
        while (j >= 0 && list[ j ] > temp){
            list[j + 1] = list[ j ];
            j = j - 1;
        }
        list[j + 1] = temp;
    }
    return list;
}

insertSort(list);
