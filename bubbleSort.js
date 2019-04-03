//jshint esversion: 6

// Function to bubble sort an array, and return sorted array. (larger numbers bubble to top through each pass)



function bubbleSort(arr) {
  // setting i to length of array and counting down allows each iteration only run as much as needed
  for (let i = arr.length; i >= 0; i--) {
    // noSwaps optimizes, prevents uneccessary iterations by checking if last iteration did anything

    let noSwaps = true;

    for (let j = 0; j < i - 1; j++) {
      console.log(arr[j], arr[j + 1]);
      if (arr[j] > arr[j + 1]) {
        swap(arr, j, j + 1);
        noSwaps = false;
      }
    }

    if (noSwaps) {
      break;
    }
  }
  return arr;

}

// traditional swap function
function swap(arr, index1, index2) {
  let temp = arr[index1];
  arr[index1] = arr[index2];
  arr[index2] = temp;
  return;
}
