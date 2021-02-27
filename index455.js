let arr = [1, 3, 5, 7, 8, 9, 10]

//find the first element major than K 

function epalee(arr){
    for(let a =0; a < arr.length; a++){
        for(let b = a+1; b < arr.length; b++){
            if(arr[b] < arr[a]) {
                let aux = arr[a];
                arr[a] = arr[b]
                arr[b] = aux;
            }
        }
    }
}
console.log(epalee(arr))

