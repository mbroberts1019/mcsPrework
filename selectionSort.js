// jshint esversion:6

// Selection sorting function, takes in array and sorts it from low to high. Each pass the smallest value moved to the front

function selectionSort(arr){
    for (let i = 0; i < arr.length; i++){
        let min = arr[i];  //set min value to value at index of i
        for (let j = i+1; j < arr.length; j++){
            let mindex = i;
            // loop over array to look for smaller numbers, if found save index of new min
            if (arr[i] > arr[j]){
                min = arr[j];
                mindex = j;
            }
            // if smaller number; swap indices of current i and new min
            if (mindex > i){
                swap(arr, i, mindex);
            }

        }
    }

}


// es6 version of swapp function... neither snippet or jshint like syntax but it works
// const swap = (arr, idx1, idx2) =>
//   ([arr[idx1], arr[idx2]]) = ([arr[idx2], arr[idx1]]);

function swap(arr, index1, index2){
    let temp = arr[index1];
    arr[index1] = arr[index2];
    arr[index2] = temp;
    return;
}
