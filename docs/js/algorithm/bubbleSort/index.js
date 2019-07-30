

let list = Array.from({length:1000}).map(()=>parseInt(Math.random() * 100 * Math.pow(10,parseInt(Math.random().toString().slice(-1)))));


function bubbleSort(list = []) {
    for(let i = 0,len = list.length; i < len - 1; i++){
        for(let j = 0; j<len - 1- i;j++){
            if(list[j] > list[j+1]){
                let temp = list[j];
                list[j] = list[j+1];
                list[j+1] = temp;
            }
        }
    }
    return list;
}
