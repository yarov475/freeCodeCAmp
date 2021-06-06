function destroyer(arr) {
let result = []
    let arg = [...arguments]    //все аргументы ф - ии

    let arrArg = arg[0]; //[.....] данный массив
    let seek = arg.slice(1);//2 3 это надо и з него удалить

for(let i = 0; i<arrArg.length;i++){
 if(!seek.includes(arrArg[i])){
     result.push(arrArg[i]);
    }
}

    return result;
}

destroyer([1, 2, 3, 1, 2, 3,13], 2, 3);

