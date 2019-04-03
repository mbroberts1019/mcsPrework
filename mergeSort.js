// jshint esversion: 6

function merge(arr1, arr2) { /// function merges sorted arrays
  let results = [];
  let i = 0;
  let j = 0;

  while (i < arr1.length && j < arr2.length) {
    if (arr1[i] < arr2[j]) {
      results.push(arr1[i]);
      i++;
      console.log(results);
    } else {
      results.push(arr2[j]);
      j++;
      console.log(results);
    }
  }

  while (i < arr1.length) {
    results.push(arr1[i]);
    i++;
  }
  while (j < arr2.length) {
    results.push(arr2[j]);
    j++;
  }
  return results;
}


function mergeSort(arr) {
  if (arr.length <= 1) {
    return arr;
  }
  let mid = Math.floor(arr.length / 2);
  let left = mergeSort(arr.slice(0, mid)); //recursively break down to single item arrays
  let right = mergeSort(arr.slice(mid));

  return merge(left, right);

}
